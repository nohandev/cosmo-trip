import Button from '@/components/ui/Button'
import { Rocket, Dot } from 'lucide-react'

const Hero = () => {
  return (
    <section className='h-screen bg-black'>
      <div className='w-full max-w-8xl mx-auto p-4'>
        <header className='flex items-center justify-between font-alexandria'>
          <div>
            <img 
              src='/logo.png'
              alt='cosmo trip logo'/>
          </div>

          <nav>
            <ul className='flex'>
              <li className='text-gray cursor-pointer px-6 hover:text-pink hover:font-bold'>
                Início
              </li>
              <li className='text-gray cursor-pointer px-6 hover:text-pink hover:font-bold'>
                Destino
              </li>
              <li className='text-gray cursor-pointer px-6 hover:text-pink hover:font-bold'>
                Pacotes
              </li>
              <li className='text-gray cursor-pointer px-6 hover:text-pink hover:font-bold'>
                Contato
              </li>
            </ul>
          </nav>
          <div>
            <Button variant='primary' className='rounded-lg'>
              Reserve sua viagem
            </Button>
          </div>
        </header>

        <article className='flex items-center justify-between mt-24'>
          <div className='flex flex-col items-start gap-6 flex-1'>
            <div>
              <span className='border border-white text-pink flex  rounded-md font-bold font-alexandria center pr-3 py-1'>
                <Dot />
                Inicio
              </span>
            </div>
            <div>
              <h1 className='font-bold text-white text-5xl/14 '>
                Sua próxima viagem pode ser para fora deste mundo!
              </h1>
            </div>
            <div>
              <p className='font-inter text-lg text-gray'>
                Explore Marte, Saturno, Júpiter e além com conforto e segurança.
              </p>
            </div>
            <div className='flex gap-6'>
              <Button variant='primary' className='rounded-md'>
                Explorar Destinos
              </Button>
              <Button variant='secondary' className='rounded-md'>
                 <Rocket size={16}/> Ver Pacote
              </Button>
              </div>
          </div>

          <div className=''>
            <img src='/hero-illustration.png' alt='planet illustration' />
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero
