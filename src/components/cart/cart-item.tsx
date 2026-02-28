import { MinusCircleIcon, PlusCircleIcon, Trash2 } from 'lucide-react'
import type { CartProduct } from '../../types/cart-types'

interface ICartItem {
  product: CartProduct
}

const CartItem = ({ product }: ICartItem) => {
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
            <MinusCircleIcon size={18} />
            {product.quantity}
            <PlusCircleIcon size={18} />
          </div>
          <p className="text-sm font-bold text-gray-400">{`R$ ${product.price},00`}</p>
        </div>
      </div>
      <div>
        <Trash2 />
      </div>
    </div>
  )
}

export default CartItem
