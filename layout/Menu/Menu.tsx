import { useContext } from 'react'
import styles from './Menu.module.css'
import cn from 'classnames'
import { AppContext } from '@/context/app.context'
import { FirstLevelMenuItem, PageItem } from '@/interfaceses/menu.interface'
import { TopLevelCategory } from '@/interfaceses/page.interface'

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: (
      <div className={styles.iconParent}>
        <span className={cn(styles.icon, styles.hat)}></span>
      </div>
    ),
    id: TopLevelCategory.Coureses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: (
      <div className={styles.iconParent}>
        <span className={cn(styles.icon, styles.cloud)}></span>
      </div>
    ),
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: (
      <div className={styles.iconParent}>
        <span className={cn(styles.icon, styles.book)}></span>
      </div>
    ),
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: (
      <div className={styles.iconParent}>
        <span className={cn(styles.icon, styles.box)}></span>
      </div>
    ),
    id: TopLevelCategory.Products,
  },
]

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>{m._id.secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlock]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <a
        href={`/${route}/${p.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
      >
        {p.category}
      </a>
    ))
  }

  return <div className={styles.menu}>{buildFirstLevel()}</div>
}
