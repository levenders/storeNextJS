import { GetStaticProps } from 'next'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Htag, P, Rating, Tag } from '@/components'
import { withLayout } from '@/layout/Layout'
import { MenuItem, PageItem } from '@/interfaceses/menu.interface'

function Home({ menu }: HomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0)

  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Htag tag="h1">Текст</Htag>
      <Button
        appearance="primery"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка
      </Button>
      <Tag color="primery">{counter}</Tag>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="s">текст размером 14 px</P>
      <P>текст размером 16 px</P>
      <P size="l">текст размером 18 px</P>
      <Tag size="m" color="grey">
        10
      </Tag>
      <Tag color="ghost">Дизайн</Tag>
      <Tag color="green">-10 000 ₽</Tag>
      <Tag size="m" color="red" href="https://kazan.hh.ru/">
        hh.ru
      </Tag>
      <Tag color="primery">Работа в Photoshop</Tag>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    { firstCategory }
  )
  return {
    props: { menu, firstCategory },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
