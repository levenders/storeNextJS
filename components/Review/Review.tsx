import { ReviewProps } from './Review.props'
import styles from './Review.module.css'
import cn from 'classnames'
import { Rating } from '..'

export const Review = ({
  review,
  className,
  ...props
}: ReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review

  return (
    <div className={cn(className, styles.review)} {...props}>
      <span className={styles.icon}></span>
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {new Date(createdAt).toLocaleDateString('ru-RU')}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}
