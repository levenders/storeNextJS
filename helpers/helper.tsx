import cn from 'classnames'
import styles from '../layout/Menu/Menu.module.css'
import { TopLevelCategory } from '@/interfaceses/page.interface'
import { FirstLevelMenuItem } from '@/interfaceses/menu.interface'

export const firstLevelMenu: FirstLevelMenuItem[] = [
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
