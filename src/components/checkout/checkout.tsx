import { useContext } from 'react'
import { LayoutContent } from '../../layout/layout'
import { CartContext } from '../../contexts/cart-context'
import CartItem from '../cart/cart-item'
import { Banknote } from 'lucide-react'

const Checkout = () => {
  const { products, totalPrice } = useContext(CartContext)

  return (
    <LayoutContent className="mt-18 flex flex-col items-center justify-center space-y-4">
      <h1 className="font-pump text-center text-3xl font-semibold">Checkout</h1>
      <div className="scrollbar-thin-light flex h-[600px] w-[500px] flex-col gap-4 overflow-y-scroll px-4 py-4">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex w-[500px] flex-col justify-start gap-2">
        <p className="font-bold">{`R$ ${totalPrice},00`}</p>
        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-purple-900 py-1 hover:bg-purple-900/80">
          <Banknote />
          Fechar pedido
        </button>
      </div>
    </LayoutContent>
  )
}

export default Checkout
