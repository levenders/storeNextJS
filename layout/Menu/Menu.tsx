import styles from './Menu.module.css'
import cn from 'classnames'
import { useContext } from 'react'
import { AppContext } from '@/context/app.context'
import { FirstLevelMenuItem, PageItem } from '@/interfaceses/menu.interface'
import { firstLevelMenu } from '@/helpers/helper'
import { KeyboardEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

export const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext)

  const router = useRouter()

  const variants = {
    visble: {
      marginBottom: 20,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: { marginBottom: 0 },
  }

  const variantsChildren = {
    visble: {
      opacity: 1,
      height: 29,
    },
    hidden: { opacity: 0, height: 0 },
  }

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) {
            m.isOpened = !m.isOpened
          }
          return m
        })
      )
  }

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code == 'Enter' || key.code == 'Space') {
      key.preventDefault()
      openSecondLevel(secondCategory)
    }
  }

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id == firstCategory,
                })}
              >
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            {m.id == firstCategory && buildSecondLevel(m)}
          </div>
        ))}
      </>
    )
  }

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map((m) => {
          if (
            m.pages.map((p) => p.alias).includes(router.asPath.split('/')[2])
          ) {
            m.isOpened = true
          }
          return (
            <div key={m._id.secondCategory}>
              <div
                tabIndex={0}
                onKeyDown={(key: KeyboardEvent) =>
                  openSecondLevelKey(key, m._id.secondCategory)
                }
                className={styles.secondLevel}
                onClick={() => openSecondLevel(m._id.secondCategory)}
              >
                {m._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variants}
                initial={m.isOpened ? 'visble' : 'hidden'}
                animate={m.isOpened ? 'visble' : 'hidden'}
                className={cn(styles.secondLevelBlock)}
              >
                {buildThirdLevel(m.pages, menuItem.route, m.isOpened ?? false)}
              </motion.div>
            </div>
          )
        })}
      </div>
    )
  }

  const buildThirdLevel = (
    pages: PageItem[],
    route: string,
    isOpened: boolean
  ) => {
    return pages.map((p) => (
      <motion.div key={p._id} variants={variantsChildren}>
        <Link
          tabIndex={isOpened ? 0 : -1}
          href={`/${route}/${p.alias}`}
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath,
          })}
        >
          {p.category}
        </Link>
      </motion.div>
    ))
  }

  return <div className={styles.menu}>{buildFirstLevel()}</div>
}
