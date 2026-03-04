import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'
import { Banknote } from 'lucide-react'
import CartItem from './cart-item'

const Cart = () => {
  const { isVisible, toggleCart, products, totalPrice } =
    useContext(CartContext)

  return (
    <div
      className={` ${isVisible ? 'fixed' : 'hidden'} right-0 bottom-0 z-10 mr-2 mb-2 flex h-[85%] w-sm flex-col items-start justify-between rounded-md bg-zinc-800 p-6 shadow-lg transition-all`}
    >
      <div className="flex w-full flex-col gap-6 overflow-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-full justify-between">
          <h1 className="font-pump text-xl">Meu carrinho</h1>
          <button
            onClick={toggleCart}
            className="font-pump cursor-pointer text-xl"
          >
            X
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {products.map((product) => (
            <CartItem product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="mt-2 flex w-full flex-col gap-2">
        <span className="font-bold">{`Total: R$ ${totalPrice},00`}</span>
        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-purple-900 py-1 hover:bg-purple-900/80">
          <Banknote />
          Fechar pedido
        </button>
      </div>
    </div>
  )
}

export default Cart
