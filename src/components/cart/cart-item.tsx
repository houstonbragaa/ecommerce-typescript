import { MinusCircleIcon, PlusCircleIcon, Trash2 } from 'lucide-react'
import type { CartProduct } from '../../types/cart-types'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'

interface ICartItem {
  product: CartProduct
}

const CartItem = ({ product }: ICartItem) => {
  const {
    removeProductToCart,
    increaseQuantityInCart,
    decreaseQuantityInCart,
  } = useContext(CartContext)

  return (
    <div className="flex h-24 items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-24 w-24 rounded-xl object-cover"
        />
        <div className="flex flex-col gap-2">
          <p className="font-bold">{product.name}</p>
          <div className="flex items-center gap-1">
            <button
              className="cursor-pointer"
              onClick={() => decreaseQuantityInCart(product.id)}
            >
              <MinusCircleIcon size={18} />
            </button>
            {product.quantity}
            <button
              className="cursor-pointer"
              onClick={() => increaseQuantityInCart(product.id)}
            >
              <PlusCircleIcon size={18} />
            </button>
          </div>
          <p className="text-sm font-bold text-gray-400">{`R$ ${product.price * product.quantity},00`}</p>
        </div>
      </div>
      <button
        className="cursor-pointer"
        onClick={() => removeProductToCart(product.id)}
      >
        <Trash2 />
      </button>
    </div>
  )
}

export default CartItem
