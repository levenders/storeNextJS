import { ProductProps } from './Product.props'
import styles from './Product.module.css'
import cn from 'classnames'
import { Button, Card, Divider, Rating, Tag } from '..'
import { declOfNum, priceRu } from '@/helpers/helper'

export const Product = ({
  product,
  className,
  ...props
}: ProductProps): JSX.Element => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>
        {priceRu(product.price)}
        {product.oldPrice && (
          <Tag color="green" className={styles.oldPrice}>
            {priceRu(product.price - product.oldPrice)}
          </Tag>
        )}
      </div>
      <div className={styles.credit}>
        {priceRu(product.credit)}/<span className={styles.mouth}>мес</span>
      </div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c) => (
          <Tag key={c} className={styles.category}>
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>цена</div>
      <div className={styles.creditTitle}>в кредит</div>
      <div className={styles.rateTitle}>
        {product.reviewCount}
        {declOfNum(product.reviewCount, [' отзыв', ' отзыва', ' отзывов'])}
      </div>
      <div className={styles.hr}>
        <Divider />
      </div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>
        {product.characteristics.map((c) => (
          <div key={c.name} className={styles.characteristic}>
            <span className={styles.characteristicsName}>{c.name}</span>
            <span className={styles.characteristicsDots}></span>
            <span className={styles.characteristicsValue}>{c.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.advBlock}>
        {product.advantages && (
          <div className={styles.advantages}>
            <div className={styles.advTitle}>Приемущества</div>
            <div>{product.advantages}</div>
          </div>
        )}
        {product.disadvantages && (
          <div className={styles.disadvantages}>
            <div className={styles.advTitle}>Недостатки</div>
            <div>{product.disadvantages}</div>
          </div>
        )}
      </div>
      <div className={cn(styles.hr, styles.hr2)}>
        <Divider />
      </div>
      <div className={styles.actions}>
        <Button appearance="primery">Узнать подробнее</Button>
        <Button
          appearance="ghost"
          arrow={'right'}
          className={styles.reviewButton}
        >
          Читать отзывы
        </Button>
      </div>
    </Card>
  )
}
