import Button from '@/components/ui/Button'
import { Rocket, Dot } from 'lucide-react'
import { motion } from 'motion/react'

const Hero = () => {

  const scrollToSection = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}

  return (
    <section className='h-screen bg-black overflow-hidden'>
      <div className='w-full max-w-8xl mx-auto p-4'>
        <motion.header 
        className='flex items-center justify-between font-alexandria'
        initial={{opacity: 0, y: -30}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.7,
          ease: 'easeIn'
        }}>
          <div>
            <motion.img 
              src='/logo.png'
              alt='cosmo trip logo'
              className='w-full object-cover cursor-pointer'
              whileHover={{
                scale: 1.1,
                rotate: 3 
              }}/>
          </div>

          <nav>
            <ul className='flex gap-6'>
              <li className='text-gray cursor-pointer px-6 hover:text-pink hover:underline' onClick={() => scrollToSection('destino')}>
                Destino
              </li>
              <li className='text-gray cursor-pointer px-6 hover:text-pink hover:underline'>
                Pacotes
              </li>
              <li className='text-gray cursor-pointer px-6 hover:text-pink hover:underline'>
                Contato
              </li>
            </ul>
          </nav>
          <div>
            <Button variant='primary' className='rounded-lg'>
              Reserve sua viagem
            </Button>
          </div>
        </motion.header>

        <article className='flex items-center justify-between mt-24'>
          <motion.div 
            className='flex flex-col items-start gap-6 flex-1'
            initial={{opacity: 0, x: -300}}
            animate={{opacity: 1, x: 0}}
            transition={{
              duration: 0.6,
              delay: 0.5
            }}>
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
          </motion.div>

          <div className=''>
            <motion.img 
              src='/hero-illustration.png' 
              alt='planet illustration'
              className='w-full object-cover'
              initial={{opacity: 0, x: 300}}
              animate={{opacity: 1, x: 0}}
              transition={{
                duration: 0.6,
                delay: 0.5
              }}/>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Hero
