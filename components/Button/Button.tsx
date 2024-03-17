import styles from './Button.module.css'
import { ButtonProps } from './Button.props'
import cn from 'classnames'

export const Button = ({
  appearance,
  children,
  className,
  arrow = 'none',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primery]: appearance == 'primery',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow != 'none' && (
        <img
          src="/arrow.svg"
          alt="arrow"
          className={cn(styles.arrow, {
            [styles.down]: arrow == 'down',
          })}
        ></img>
      )}
    </button>
  )
}
