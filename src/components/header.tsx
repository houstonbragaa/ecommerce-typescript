import { Search, ShoppingCart } from 'lucide-react'
import LayoutContent from '../layout/layout-content'

const Header = () => {
  return (
    <div className="p-5">
      <LayoutContent className="flex h-16 w-full items-center justify-between rounded-full bg-purple-950 sm:w-3xl">
        <img src="./src/assets/logo.png" alt="logo" />
        <div className="flex items-center gap-4">
          <Search />
          <a href="/">Inicio</a>
          <a href="/login" className="rounded-full bg-zinc-900 px-4 py-3">
            Login
          </a>
          <ShoppingCart />
        </div>
      </LayoutContent>
    </div>
  )
}

export default Header
