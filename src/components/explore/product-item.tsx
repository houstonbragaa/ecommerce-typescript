import { ShoppingCart } from 'lucide-react'
import type { Product } from '../../types/product-types'

interface IProductItemProps {
  product: Product
}

const ProductItem = ({ product }: IProductItemProps) => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="relative h-[200px] w-[250px] overflow-hidden rounded-xl border border-zinc-400/40">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 h-full w-full mask-b-from-15% object-cover"
        />
        <p className="absolute right-0 bottom-0 left-0 z-10 px-4 py-3 font-medium text-white drop-shadow-lg">
          {product.name}
        </p>
      </div>
      <span className="text-md font-semibold text-zinc-400">{`R$ ${product.price},00`}</span>
      <button className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-white/20 bg-transparent px-2 py-1 text-white/80 hover:bg-white/20">
        Adicionar ao carrinho
        <ShoppingCart width={15} />
      </button>
    </div>
  )
}

export default ProductItem
