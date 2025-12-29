import Badge from '@/components/ui/Badge'
import DestinationsCard from '@/components/ui/DestinationsCard'
import type { DestinationsType } from '@/types/types'
import { destinations } from '@/services/services'

const PopularDestinations = () => {
  return (
    <section className='bg-black min-h-screen scroll-mt-16' id='destino'>
      <div className='w-full max-w-8xl mx-auto p-4'>
        <div className='py-4 w-full max-w-xl mx-auto flex flex-col items-center justify-center gap-6'>
          <Badge>Destinos</Badge>
          <h1 className='text-white font-alexandria text-5xl'>Destinos Populares</h1>
          <p className='text-gray font-inter text-lg'>Viajar para o espaço nunca foi tão fácil. Descubra nossos destinos mais procurados e escolha a experiência que vai marcar a sua vida.</p>
        </div>

        <section className='mt-12 grid grid-cols-3 gap-4'>
          {destinations.map((item: DestinationsType) => (
            <DestinationsCard
              key={item.id}
              name={item.name}
              description={item.description}
              img={item.img}
              durationDays={item.durationDays}
              price={item.price}
              rating={item.rating}
              reviews={item.reviews}/>
          ))}
        </section>
      </div>
    </section>
  )
}

export default PopularDestinations
