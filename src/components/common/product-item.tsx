import { ShoppingCart } from 'lucide-react'

import { useCartStore } from '../../stores/cart-store'
import type { Product } from '../../types/product-types'

interface IProductItemProps {
  product: Product
}

const ProductItem = ({ product }: IProductItemProps) => {
  const addProductToCart = useCartStore((s) => s.addProductToCart)

  return (
    <div className="flex w-[150px] flex-col items-start gap-5 sm:w-[250px]">
      <div className="relative h-[200px] w-full overflow-hidden rounded-xs">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 h-full w-full mask-b-from-5% object-cover"
        />
      </div>
      <p className="sm:text-md max-w-[100px] truncate text-sm font-medium text-white drop-shadow-lg sm:max-w-[250px]">
        {product.name}
      </p>
      <span className="text-md font-semibold text-zinc-400">{`R$ ${product.price.toFixed(2)}`}</span>
      <button
        onClick={() => addProductToCart(product)}
        className="sm:text-md flex cursor-pointer items-center justify-center gap-1 rounded-md border border-white/20 bg-transparent px-2 py-1 text-xs text-white/80 hover:bg-white/20 sm:gap-2"
      >
        Adicionar ao carrinho
        <ShoppingCart width={15} />
      </button>
    </div>
  )
}

export default ProductItem
