import axios from 'axios'
import { Banknote } from 'lucide-react'

import { LayoutContent } from '../../layout/layout'
import { selectTotalPrice, useCartStore } from '../../stores/cart-store'
import CartItem from '../cart/cart-item'

const Checkout = () => {
  const products = useCartStore((s) => s.products)
  const totalPrice = useCartStore(selectTotalPrice)

  const handleFinishOrder = async () => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/create-checkout-session`,
        { products }
      )
      window.location = data.url
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <LayoutContent className="-mt-16 flex h-screen w-full flex-col items-center justify-center space-y-4">
      <h1 className="font-pump text-center text-3xl font-semibold">Checkout</h1>
      <div className="scrollbar-thin-light flex h-[400px] w-full flex-col gap-4 overflow-y-scroll px-4 py-4 sm:w-[500px]">
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className="flex w-full flex-col justify-start gap-2 sm:w-[500px]">
        <p className="font-bold">{`R$ ${totalPrice},00`}</p>
        <button
          onClick={handleFinishOrder}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-purple-900 py-1 hover:bg-purple-900/80"
        >
          <Banknote />
          Fechar pedido
        </button>
      </div>
    </LayoutContent>
  )
}

export default Checkout
