import { TopLevelCategory, TopPageModel } from '@/interfaceses/page.interface'
import { ProductModel } from '@/interfaceses/product.interface'

export interface TopPageComponentProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory
  page: TopPageModel
  products: ProductModel[]
}
