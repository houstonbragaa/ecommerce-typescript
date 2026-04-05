import { signOut } from 'firebase/auth'
import { Search, ShoppingCart, User } from 'lucide-react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'

import logoImg from '../../assets/logo.png'
import { auth } from '../../config/firebase'
import { UserContext } from '../../contexts/user-context'
import { LayoutHeader } from '../../layout/layout'
import { selectTotalItems, useCartStore } from '../../stores/cart-store'

const Header = () => {
  const { isAuthenticated, currentUser } = useContext(UserContext)
  const { toggleCart } = useCartStore()
  const totalItemsCart = useCartStore(selectTotalItems)
  const navigate = useNavigate()

  const signoutUser = () => {
    signOut(auth)
  }

  const toExplore = () => {
    navigate('/explore')
  }
  //true or false
  const userPhoto = !!currentUser?.photoURL

  return (
    <header className="sticky top-0 right-0 left-0 z-50 flex justify-center px-2 py-5">
      <LayoutHeader className="flex h-16 w-full max-w-3xl items-center justify-between rounded-full border border-white/20 shadow-xl shadow-purple-700/5 backdrop-blur-md sm:w-3xl">
        <a href="/">
          <img src={logoImg} alt="logo" className="ml-2 h-10 w-10" />
        </a>

        <div className="flex items-center gap-2">
          <button
            onClick={toExplore}
            className="cursor-pointer rounded-full p-3 transition-colors hover:bg-zinc-900"
          >
            <Search />
          </button>
          <div className="flex items-center justify-center gap-6 rounded-full bg-zinc-900 px-4 py-2">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2">
                  <button className="cursor-pointer" onClick={signoutUser}>
                    Sair
                  </button>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-600">
                    {userPhoto ? (
                      <img
                        src={currentUser?.photoURL ?? undefined}
                        alt="img"
                        referrerPolicy="no-referrer"
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <User size={20} />
                    )}
                  </div>
                </div>

                <button
                  aria-label="open cart"
                  onClick={toggleCart}
                  className="relative cursor-pointer"
                >
                  <span className="absolute -top-3 -right-1 z-10 h-4 w-4 rounded-full bg-white text-xs font-bold text-green-600">
                    {totalItemsCart}
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
    </header>
  )
}

export default Header
