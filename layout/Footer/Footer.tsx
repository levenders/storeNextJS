import { FooterProps } from './Footer.props'
import styles from './Footer.module.css'
import cn from 'classnames'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <p>OwlTop © 2020 - 2024 Все права защищены</p>
      <a href="http://localhost:3000/" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="http://localhost:3000/" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  )
}
