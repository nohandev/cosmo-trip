import { Star } from 'lucide-react'

interface RatingStarsProps {
  value: number
  max?: number
}

export function RatingStars({ value, max = 5 }: RatingStarsProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={
            i < value
              ? 'size-4 fill-pink text-pink'
              : 'size-4 text-gray'
          }
        />
      ))}
    </div>
  )
}