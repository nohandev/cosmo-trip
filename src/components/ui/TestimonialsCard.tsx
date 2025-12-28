import { RatingStars } from '@/components/ui/RatingStars'
import type { TestimonialsType } from '@/types/types'

type TestimonialsCardProps = Omit<
  TestimonialsType,
  'id'
>

const TestimonialsCard = ({
  rating,
  name,
  avatar,
  testimonial
}: TestimonialsCardProps) => {
  return (
    <div className='bg-l-black flex flex-col p-8 rounded-3xl gap-2'>
      <div className='flex items-center gap-6'>
        <div className='size-16'>
          <img src={avatar}
            className='w-full object-cover'/>
        </div>
        <div className='flex flex-col'>
          <h2 className='font-bold font-inter text-xl text-white'>{name}</h2>
          <RatingStars value={rating}/>
        </div>
      </div>
      <div>
        <p className='font-alexandria text-sm text-gray line-clamp-5'>
          {testimonial}
        </p>
      </div>
    </div>
  )
}

export default TestimonialsCard
