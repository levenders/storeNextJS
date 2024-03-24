import { HhDataProps } from './HhData.props'
import styles from './HhData.module.css'
import cn from 'classnames'
import { Card } from '..'
import { priceRu } from '@/helpers/helper'

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего ваканский</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Начальный</div>
          <div className={styles.salaryValue}>{priceRu(juniorSalary)}</div>
          <div className={styles.iconParent}>
            <span className={cn(styles.rate, styles.filled)}></span>
            <span className={cn(styles.rate)}></span>
            <span className={cn(styles.rate)}></span>
          </div>
        </div>
        <div>
          <div className={styles.title}>Средний</div>
          <div className={styles.salaryValue}>{priceRu(middleSalary)}</div>
          <div className={styles.iconParent}>
            <span className={cn(styles.rate, styles.filled)}></span>
            <span className={cn(styles.rate, styles.filled)}></span>
            <span className={cn(styles.rate)}></span>
          </div>
        </div>
        <div>
          <div className={styles.title}>Профессионал</div>
          <div className={styles.salaryValue}>{priceRu(seniorSalary)}</div>
          <div className={styles.iconParent}>
            <span className={cn(styles.rate, styles.filled)}></span>
            <span className={cn(styles.rate, styles.filled)}></span>
            <span className={cn(styles.rate, styles.filled)}></span>
          </div>
        </div>
      </Card>
    </div>
  )
}
