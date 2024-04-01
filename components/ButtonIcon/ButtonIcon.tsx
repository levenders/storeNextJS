import styles from './ButtonIcon.module.css'
import { ButtonIconProps } from './ButtonIcon.props'
import cn from 'classnames'

export const ButtonIcon = ({
  appearance,
  icon,
  className,
  ...props
}: ButtonIconProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primery]: appearance == 'primery',
        [styles.white]: appearance == 'white',
      })}
      {...props}
    >
      <span
        className={cn(styles.icon, {
          [styles.up]: icon === 'up',
          [styles.menu]: icon === 'menu',
          [styles.close]: icon === 'close',
        })}
      ></span>
    </button>
  )
}
