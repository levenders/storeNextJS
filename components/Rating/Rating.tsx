import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import cn from 'classnames'
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useState,
  KeyboardEvent,
} from 'react'

export const Rating = forwardRef(
  (
    { isEditable = false, rating, setRating, error, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
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
            onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
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

    const handleSpace = (i: number, e: KeyboardEvent<HTMLDivElement>) => {
      if (e.code !== 'Space' || !setRating) {
        return
      }
      setRating(i)
    }

    return (
      <div
        {...props}
        ref={ref}
        className={cn(styles.ratingWrapper, { [styles.error]: error })}
      >
        {ratingArray.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    )
  }
)
