import { Star, Calendar } from 'lucide-react'
import Button from '@/components/ui/Button'
import { formatter } from '@/utils/utilities' 

interface DestinationsCardProps {
  name: string
  description: string
  rating: number
  reviews: number
  durationDays: number
  price: number
  img: {
    src: string,
    alt: string
  }
}

const DestinationsCard = ({
name, 
description,
rating,
reviews,
durationDays,
price,
img
}: DestinationsCardProps
) => {
  return (
    <div className='font-alexandria bg-l-black flex flex-col rounded-2xl'>
      <div className='w-full'>
        <img 
          src={img.src}
          alt={img.alt}
          className='w-full object-cover'/>
      </div>

      <div className='p-3'>
        <div className='py-3'>
          <h1 className='text-center text-2xl text-white font-bold font-inter'>{name}</h1>
        </div>

        <div className='py-2'>
          <p className='text-gray line-clamp-3'>
            {description}
          </p>
        </div>

        <div className='py-2 flex gap-3 items-baseline'>
          <div className='flex gap-1'>
            {Array
              .from({length: 5})
              .map((_, i) => (
                <Star 
                key={i} 
                className='text-pink' 
                size={14} 
                fill='currentColor'/>
              
              ))}
          </div>
          <span className='text-sm text-gray'>{`(${rating}/5 – ${reviews} avaliações)`}</span>
        </div>

        <div className='py-3 flex items-baseline justify-between'>
          <div className='flex gap-2'>
            <Calendar size={18} className='text-pink'/>
            <p className='text-sm text-gray'>{durationDays} Dias</p>
          </div>

          <div>
            <p className='text-white text-xl font-bold'>{formatter.format(price)}</p>
          </div>
        </div>

        <div className='pt-2'>
          <Button variant='primary' className='w-full justify-center rounded-lg'>Reserve Agora</Button>
        </div>
      </div>
    </div>
  )
}

export default DestinationsCard