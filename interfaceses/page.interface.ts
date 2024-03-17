export enum TopLevelCategory {
  Coureses,
  Services,
  Books,
  Products,
}

export interface TopPageAdvantage {
  _id: string
  title: string
  description: string
}

export interface HhData {
  _id: string
  count: number
  juniorSalary: number
  middleSalary: number
  seniorSalary: number
  updatedAt: Date
}

export interface TopPageModel {
  _id: string
  tags: string[]
  secondCategory: string
  alias: string
  title: string
  category: string
  seoText: string
  tagsTitle: string
  metaTitle: string
  metaDescription: string
  firstCategory: number
  advantages: TopPageAdvantage[]
  createdAt: string
  updatedAt: string
  __v: number
  hh: HhData
  qas: any[]
  addresses: any[]
  categoryOn: string
  blog: Blog
  sravnikus: Sravnikus
  learningclub: Learningclub
}

export interface Blog {
  h1: string
  metaTitle: string
  metaDescription: string
  views: number
  _id: string
}

export interface Sravnikus {
  metaTitle: string
  metaDescription: string
  qas: any[]
  _id: string
}

export interface Learningclub {
  metaTitle: string
  metaDescription: string
  qas: any[]
  _id: string
}
