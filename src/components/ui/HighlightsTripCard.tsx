import type { HighlightsType } from "@/types/types"

const HighlightsTripCard = ({
  title,
  description,
  icon: Icon
}: HighlightsType) => {
  return (
    <div className='bg-black flex flex-col justify-center items-center gap-6 rounded-3xl px-12 py-24'>
      <div>
        <Icon className='text-pink' size={50}/>
      </div>
      <div>
        <h1 className='font-alexandria font-bold text-xl text-white text-center'>{title}</h1>
      </div>
      <div>
        <p className='text-gray font-alexandria text-center line-clamp-3'>{description}</p>
      </div>
    </div>
  )
}

export default HighlightsTripCard
