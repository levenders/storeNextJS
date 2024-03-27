import { DividerProps } from './Divider.props'
import styles from './Divider.module.css'
import cn from 'classnames'
import classNames from 'classnames'

export const Divider = ({ children, ...props }: DividerProps): JSX.Element => {
  return <hr className={cn(classNames, styles.hr)} {...props} />
}
