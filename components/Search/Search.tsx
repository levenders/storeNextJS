import { SearchProps } from './Search.props'
import styles from './Search.module.css'
import cn from 'classnames'
import { Button, Input } from '..'
import { KeyboardEventHandler, useState } from 'react'
import { useRouter } from 'next/router'

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('')

  const router = useRouter()

  const toSearch = () => {
    search &&
      router.push({
        pathname: '/search',
        query: {
          q: search,
        },
      })
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      toSearch()
    }
  }

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button appearance="primery" className={styles.button} onClick={toSearch}>
        <span className={styles.icon}></span>
      </Button>
    </div>
  )
}
