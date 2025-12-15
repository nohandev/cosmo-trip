import Button from '@/components/ui/Button'
import { Rocket } from 'lucide-react'

const Hero = () => {
  return (
    <section className='h-screen bg-black'>
      <header className='w-full max-w-8xl mx-auto p-4 flex items-center justify-between font-alexandria'>
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
          <Button icon={<Rocket/>} className=''>
            Reserve sua viagem
          </Button>
        </div>
      </header>
    </section>
  )
}

export default Hero
