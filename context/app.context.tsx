import { MenuItem } from '@/interfaceses/menu.interface'
import { TopLevelCategory } from '@/interfaceses/page.interface'
import { PropsWithChildren, createContext, useState } from 'react'

export interface IAppContext {
  menu: MenuItem[]
  firstCategory: TopLevelCategory
  setMenu?: (newMenu: MenuItem[]) => void
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Coureses,
})

export const AppContextProvider = ({
  menu,
  firstCategory,
  children,
}: PropsWithChildren<IAppContext>) => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu)
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu)
  }

  return (
    <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  )
}
