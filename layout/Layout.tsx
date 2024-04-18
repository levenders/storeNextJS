import { FunctionComponent, useRef, useState } from 'react'
import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import { KeyboardEvent } from 'react'
import { AppContextProvider, IAppContext } from '@/context/app.context'
import { Up } from '@/components'
import cn from 'classnames'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [skipLinkDisplayed, setSkipLinkDisplayed] = useState<boolean>(false)

  const bodyRef = useRef<HTMLDivElement>(null)

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault()
      bodyRef.current?.focus()
    }
    setSkipLinkDisplayed(false)
  }

  return (
    <div className={styles.wrapper}>
      <a
        onFocus={() => setSkipLinkDisplayed(true)}
        tabIndex={2}
        className={cn(styles.skip, {
          [styles.displayed]: skipLinkDisplayed,
        })}
        onKeyDown={skipContentAction}
      >
        Сразу к содежанию
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body} ref={bodyRef} tabIndex={0}>
        {children}
      </div>
      <Footer className={styles.footer} />
      <Up></Up>
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    )
  }
}
