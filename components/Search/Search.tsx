import { SearchProps } from './Search.props'
import styles from './Search.module.css'
import cn from 'classnames'
import { Button, Input } from '@/components'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { KeyboardEvent } from 'react'

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

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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
