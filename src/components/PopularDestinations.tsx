import Badge from '@/components/ui/Badge'
import DestinationsCard from '@/components/ui/DestinationsCard'
import { formatterToBrl } from '@/utils/utilities' 

const data = [
  {
    id: 'mars',
    name: 'Marte',
    description:
      'Viva 10 dias explorando a superfície marciana com vistas deslumbrantes e experiências únicas.',
    rating: 4.9,
    reviews: 320,
    durationDays: 10,
    price: 85000,
    img: {
      src: '/destinations/marte.png',
      alt: ''
    },
    highlights: [
      'Exploração da superfície',
      'Paisagens marcianas',
      'Experiência imersiva'
    ]
  },
  {
    id: 'moon',
    name: 'Lua',
    description:
      'Um fim de semana inesquecível na superfície lunar com passeios guiados e observação da Terra.',
    rating: 5.0,
    reviews: 3135,
    durationDays: 3,
    price: 45000,
    img: {
      src: '/destinations/lua.png',
      alt: ''
    },
    highlights: [
      'Baixa gravidade',
      'Vista da Terra',
      'Passeios guiados'
    ]
  },
  {
    id: 'saturn',
    name: 'Saturno',
    description:
      'Experimente a vida de um astronauta e participe de pesquisas científicas reais no espaço.',
    rating: 5.0,
    reviews: 120,
    durationDays: 10,
    price: 75000,
    img: {
      src: '/destinations/saturno.png',
      alt: ''
    },
    highlights: [
      'Anéis de Saturno',
      'Pesquisa científica',
      'Experiência de astronauta'
    ]
  }
]

const formatCurrencyBRL: (value: number) => string = (value) => String(formatterToBrl.format(value))

const PopularDestinations = () => {
  return (
    <section className='bg-black min-h-screen' id='destino'>
      <div className='w-full max-w-8xl mx-auto p-4'>
        <div className='py-4 w-full max-w-xl mx-auto flex flex-col items-center justify-center gap-6'>
          <Badge>Destinos</Badge>
          <h1 className='text-white font-alexandria text-5xl'>Destinos Populares</h1>
          <p className='text-gray font-inter text-lg'>Viajar para o espaço nunca foi tão fácil. Descubra nossos destinos mais procurados e escolha a experiência que vai marcar a sua vida.</p>
        </div>

        <section className='mt-12 grid grid-cols-3 gap-4'>
          {data.map(({id, name, description, img, durationDays, rating, price, reviews}) => (
            <DestinationsCard
              key={id}
              name={name}
              description={description}
              img={img}
              durationDays={String(durationDays).padStart(2, '0')}
              price={formatCurrencyBRL(price)}
              rating={rating.toFixed(1)}
              reviews={reviews}/>
          ))}
        </section>
      </div>
    </section>
  )
}

export default PopularDestinations
