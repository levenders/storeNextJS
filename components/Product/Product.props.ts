import { ProductModel } from '@/interfaceses/product.interface'
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel
}
