import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'
import cn from 'classnames'
import { Advantages, HhData, Htag, P, Tag, Sort, Product } from '@/components'
import { TopLevelCategory } from '@/interfaceses/page.interface'
import { SortEnum } from '@/components/Sort/Sort.props'
import { useEffect, useReducer } from 'react'
import { sortReducer } from './sort.reducer'

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispathSort] = useReducer(
    sortReducer,
    {
      products,
      sort: SortEnum.Rating,
    }
  )

  const setSort = (sort: SortEnum): void => dispathSort({ type: sort })

  useEffect(() => {
    dispathSort({ type: 'reset', initialState: products })
  }, [products])

  return (
    <div className={cn(styles.wrapper)}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="grey" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product layout key={p._id} product={p} />)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        {products && (
          <Tag color="red" size="m">
            hh.ru
          </Tag>
        )}
      </div>
      {firstCategory == TopLevelCategory.Coureses && page.hh && (
        <HhData {...page.hh}></HhData>
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Htag tag="h2">Приемущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Htag tag="h2">Получаемые навыки</Htag>
      {page.tags.map((t, i) => (
        <Tag color="primery" key={i}>
          {t}
        </Tag>
      ))}
    </div>
  )
}
