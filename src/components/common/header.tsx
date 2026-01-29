import { Search, ShoppingCart } from 'lucide-react'
import { LayoutHeader } from '../../layout/layout'
import { useState } from 'react'

const Header = () => {
  const [active] = useState(false)
  const [chartQuantity] = useState(0)

  return (
    <div className="px-2 py-5">
      <LayoutHeader className="flex h-16 w-full items-center justify-between rounded-full border border-white/30 bg-purple-950 sm:w-3xl">
        <img
          src="./src/assets/logo.png"
          alt="logo"
          className="ml-2 h-10 w-10"
        />
        <div className="flex items-center gap-2">
          <div className="cursor-pointer rounded-full p-3 transition-colors hover:bg-zinc-900">
            <Search />
          </div>
          <div className="flex items-center justify-center gap-6 rounded-full bg-zinc-900 px-4 py-2">
            {active ? (
              <>
                <div className="flex items-center gap-2">
                  <button className="cursor-pointer">Sair</button>
                  <div className="h-8 w-8 rounded-full bg-zinc-600"></div>
                </div>

                <button className="relative cursor-pointer">
                  <span className="absolute -top-3 -right-1 z-10 h-4 w-4 rounded-full bg-white text-xs font-bold text-green-600">
                    {chartQuantity}
                  </span>
                  <ShoppingCart />
                </button>
              </>
            ) : (
              <a href="/login">Login</a>
            )}
          </div>
        </div>
      </LayoutHeader>
    </div>
  )
}

export default Header
