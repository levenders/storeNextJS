import { ReviewModel } from '@/interfaceses/product.interface'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ReviewProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: ReviewModel
}
