import { ShoppingCart } from 'lucide-react'
import type { Product } from '../../types/product-types'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart-context'

interface IProductItemProps {
  product: Product
}

const ProductItem = ({ product }: IProductItemProps) => {
  const { addProductToCart } = useContext(CartContext)

  const handleAddProductToCartClick = () => {
    addProductToCart(product)
  }

  return (
    <div className="flex flex-col items-start gap-5">
      <div className="relative h-[200px] w-[250px] overflow-hidden rounded-xs">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 h-full w-full mask-b-from-15% object-cover"
        />
      </div>
      <p className="font-medium text-white drop-shadow-lg">{product.name}</p>
      <span className="text-md font-semibold text-zinc-400">{`R$ ${product.price},00`}</span>
      <button
        onClick={handleAddProductToCartClick}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-white/20 bg-transparent px-2 py-1 text-white/80 hover:bg-white/20"
      >
        Adicionar ao carrinho
        <ShoppingCart width={15} />
      </button>
    </div>
  )
}

export default ProductItem
