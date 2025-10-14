import logo from '@/assets/logo.svg'
import type { PropsWithChildren } from 'react'
import type React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="container z-20 mx-auto w-full px-4 py-6 sm:px-10">
      <div className="flex w-full flex-col items-center justify-between space-y-3 lg:flex-row lg:space-y-0">
        <NavLink className="flex items-center text-2xl font-bold text-indigo-500 no-underline hover:no-underline lg:text-4xl" to="/">
          <img src={logo} className="mr-3 h-16 w-16" alt="Typing Logo" />
          <h1>Typing</h1>
        </NavLink>
        <nav className="my-card on element flex w-auto flex-wrap content-center items-center justify-end gap-3 rounded-xl bg-white p-4 transition-colors duration-300 dark:bg-gray-800">
          {children}
        </nav>
      </div>
    </header>
  )
}

export default Header
