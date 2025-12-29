import Badge from '@/components/ui/Badge'
import TestimonialsCard from '@/components/ui/TestimonialsCard'
import { testimonials } from '@/services/services'
import type { TestimonialsType } from '@/types/types'

const Testimonials = () => {
  return (
    <section className='min-h-screen bg-black scroll-mt-14' id='depoimentos'>
      <div className='w-full max-w-8xl mx-auto p-4'>
        <div className='flex flex-col justify-center items-center gap-8 py-8 w-full max-w-xl mx-auto'>
          <Badge>Depoimentos</Badge>
          <h1 className='font-alexandria text-5xl text-white'>Depoimentos</h1>
          <p className='font-inter text-lg text-gray text-center'>Quem já embarcou com a gente garante: viajar para o espaço é uma experiência que muda a forma de ver o universo</p>
        </div>

        <section className='grid grid-cols-3 gap-5'>
          {testimonials.map((testimonial: TestimonialsType) => (
            <TestimonialsCard 
             key={testimonial.id}
             avatar={testimonial.avatar}
             name={testimonial.name}
             rating={testimonial.rating}
             testimonial={testimonial.testimonial}/>
          ))}
        </section>
      </div>
    </section>
  )
}

export default Testimonials
