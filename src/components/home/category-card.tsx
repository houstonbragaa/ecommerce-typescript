interface CategoryCardProps {
  displayName: string
  imageUrl: string
}

const CategoryCard = ({ imageUrl, displayName }: CategoryCardProps) => {
  return (
    <div className="relative flex h-[300px] w-[300px] flex-col items-center justify-end overflow-hidden rounded-2xl border border-solid border-white/20">
      <img
        src={imageUrl}
        alt={displayName}
        className="left-o bottom-o absolute top-0 left-0 mask-b-from-5% mask-b-to-90%"
      />
      <div className="z-10 mb-8 flex flex-col items-center gap-4">
        <h3 className="text-xl font-bold">{displayName}</h3>
        <button className="block cursor-pointer rounded-full bg-purple-800 px-3 py-1 text-sm">
          Ver coleção
        </button>
      </div>
    </div>
  )
}

export default CategoryCard
