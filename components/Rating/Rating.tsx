import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import cn from 'classnames'
import { useEffect, useState } from 'react'
import StarIcon from '../../public/star.svg'

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  )

  useEffect(() => {
    constructRating(rating)
  }, [rating])

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <div
          className={cn(styles.parent, {
            [styles.primery]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        >
          <span className={styles.star}></span>
        </div>
      )
    })
    setRatingArray(updatedArray)
  }

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return
    }
    constructRating(i)
  }

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return
    }
    setRating(i)
  }

  const handleSpace = (i: number, e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code !== 'Space' || !setRating) {
      return
    }
    setRating(i)
  }

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  )
}
