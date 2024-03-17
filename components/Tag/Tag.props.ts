import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 's' | 'm'
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primery'
  href?: string
  children: ReactNode
}
