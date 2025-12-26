import Badge from '@/components/ui/Badge'
import HighlightsTripCard from '@/components/ui/HighlightsTripCard'
import { highlights } from '@/services/services'
import type { HighlightsType } from '@/types/types'

const HighlightsTrip = () => {
  return (
    <section className='min-h-screen bg-l-black'>
      <div className='w-full max-w-8xl mx-auto p-4'>
        <div className='flex flex-col justify-center items-center gap-8 py-8 w-full max-w-xl mx-auto'>
          <Badge>Destaques</Badge>
          <h1 className='font-alexandria text-5xl text-white'>Destaques Da Viagem</h1>
          <p className='font-inter text-lg text-gray text-center'>Confira alguns dos benefícios que fazem da nossa viagem algo realmente especial:</p>
        </div>

        <section className='grid grid-cols-3 gap-12'>
          {highlights.map((highlights: HighlightsType) => (
           <HighlightsTripCard 
             key={highlights.id} 
             title={highlights.title} 
             description={highlights.description} 
             icon={highlights.icon}/>
          ))}
        </section>
      </div>
    </section>
  )
}

export default HighlightsTrip
