import { HeaderProps } from './Header.props'
import styles from './Header.module.css'
import cn from 'classnames'
import { ButtonIcon } from '@/components/ButtonIcon/ButtonIcon'
import { motion } from 'framer-motion'
import { Sidebar } from '../Sidebar/Sidebar'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const router = useRouter()

  useEffect(() => {
    setIsOpen(false)
  }, [router])

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 10,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  }

  return (
    <header {...props} className={cn(className, styles.header)}>
      <span className={styles.icon}></span>
      <ButtonIcon
        appearance="white"
        icon="menu"
        onClick={() => setIsOpen(true)}
      />
      <motion.div
        animate={isOpen ? 'opened' : 'closed'}
        variants={variants}
        initial="closed"
        className={styles.mobileMenu}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.closeIcon}
          appearance="white"
          icon="close"
          onClick={() => setIsOpen(false)}
        />
      </motion.div>
    </header>
  )
}
