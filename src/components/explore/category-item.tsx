import { ShoppingCart } from 'lucide-react'

interface ICategoryItemProps {
  imageUrl: string
  name: string
  price: number
}

const CategoryItem = ({ imageUrl, name, price }: ICategoryItemProps) => {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="relative h-[240px] w-[300px] overflow-hidden rounded-xl border border-zinc-400/40">
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 h-full w-full mask-b-from-15% object-cover"
        />
        <p className="absolute right-0 bottom-0 left-0 z-10 px-4 py-3 font-medium text-white drop-shadow-lg">
          {name}
        </p>
      </div>
      <span className="text-md font-semibold text-zinc-400">{`R$ ${price},00`}</span>
      <button className="flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-2 py-1 text-zinc-950 hover:bg-white/90">
        Adicionar ao carrinho
        <ShoppingCart width={15} />
      </button>
    </div>
  )
}

export default CategoryItem
