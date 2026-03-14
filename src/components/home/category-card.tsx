import { useNavigate } from 'react-router'

import type { Category } from '../../types/category-types'

interface CategoryCardProps {
  category: Category
  className?: string
}

const CategoryCard = ({ category, className = '' }: CategoryCardProps) => {
  const navigate = useNavigate()

  const handleCategory = () => {
    navigate(`/category/${category.id}`)
  }
  return (
    <div
      className={`relative flex h-[300px] w-[300px] flex-col items-center justify-end overflow-hidden rounded-2xl border border-solid border-white/20 max-md:h-[280px] max-md:w-full max-md:min-w-full ${className}`.trim()}
    >
      <img
        src={category.imageUrl}
        alt={category.displayName}
        className="left-o bottom-o absolute top-0 left-0 mask-b-from-5% mask-b-to-90%"
      />
      <div className="z-10 mb-8 flex flex-col items-center gap-4">
        <h3 className="text-xl font-bold">{category.displayName}</h3>
        <button
          onClick={handleCategory}
          className="block cursor-pointer rounded-full bg-purple-800 px-3 py-1 text-sm"
        >
          Ver coleção
        </button>
      </div>
    </div>
  )
}

export default CategoryCard
