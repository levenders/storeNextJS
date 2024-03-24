import { SortEnum, SortProps } from './Sort.props'
import styles from './Sort.module.css'
import cn from 'classnames'

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: SortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn(styles.wrapper, {
          [styles.active]: sort === SortEnum.Rating,
        })}
      >
        <span className={styles.sortIcon}></span>
        По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn(styles.wrapper, {
          [styles.active]: sort === SortEnum.Price,
        })}
      >
        <span className={styles.sortIcon}></span>
        По цене
      </span>
    </div>
  )
}
