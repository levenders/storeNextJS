import { SidebarProps } from './Sidebar.props'
import styles from './Sidebar.module.css'
import cn from 'classnames'
import { Menu } from '../Menu/Menu'
import { Search } from '@/components'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <div className={styles.iconParent}>
        <span className={cn(styles.icon, styles.hat)}></span>
      </div>
      <Search />
      <Menu />
    </div>
  )
}
