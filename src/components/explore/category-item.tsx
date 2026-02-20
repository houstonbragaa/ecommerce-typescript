interface ICategoryItemProps {
  imageUrl: string
  name: string
}

const CategoryItem = ({ imageUrl, name }: ICategoryItemProps) => {
  return (
    <div className="relative h-[340px] w-[300px] overflow-hidden rounded-xl border border-zinc-400/40">
      <img
        src={imageUrl}
        alt={name}
        className="absolute inset-0 h-full w-full mask-b-from-15% object-cover"
      />
      <p className="absolute right-0 bottom-0 left-0 z-10 px-4 py-3 font-medium text-white drop-shadow-lg">
        {name}
      </p>
    </div>
  )
}

export default CategoryItem
