import Button from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-black py-24' id='contato'>
      <article className='w-full max-w-8xl flex justify-between mx-auto'>
        <div>
          <img
            src='/logo.png'
            alt='Cosmo Trip Logo'/>
        </div>
        <div>
          <div>
            <h2 className='font-inter text-white text-xl'>Quick links</h2>
          </div>
          <div className='mt-6'>
            <p className='text-gray font-alexandria text-sm cursor-pointer hover:text-pink'>Home</p>
            <p className='text-gray font-alexandria text-sm cursor-pointer hover:text-pink'>Feature</p>
            <p className='text-gray font-alexandria text-sm cursor-pointer hover:text-pink'>Community</p>
            <p className='text-gray font-alexandria text-sm cursor-pointer hover:text-pink'>Support</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className='font-inter text-white text-xl'>Help</h2>
          </div>
          <div className='mt-6'>
            <p className='text-gray font-alexandria text-sm cursor-pointer hover:text-pink'>Help centre</p>
            <p className='text-gray font-alexandria text-sm cursor-pointer hover:text-pink'>FAQ</p>
            <p className='text-gray font-alexandria text-sm cursor-pointer hover:text-pink'>Forum</p>
          </div>
        </div>
        <div>
          <div>
            <h2 className='font-inter text-white text-xl'>Social Media</h2>
          </div>
          <div className='mt-6'>
            <p className='text-gray font-alexandria text-sm cursor-pointer hover:text-pink'>Instagram</p>
            <p className='text-gray font-alexandria text-sm cursor-pointer hover:text-pink'>Facebook</p>
            <p className='text-gray font-alexandria text-sm cursor-pointer hover:text-pink'>Linkedin</p>
          </div>
        </div>

        <div>
          <div>
            <h2 className='font-inter text-white text-xl'>Join our mailing list for updates</h2>
          </div>

          <form className='mt-6'>
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-gray font-alexandria text-sm'>
                Your email address
              </label>
              <div className='relative'>
                <input
                 type='email'
                 name='email'
                 id='email'
                 className='border-b border-white/50 w-full py-2 text-white focus:outline-none'/>

                <Button 
                  variant='circle'
                  className='absolute top-1/2 -translate-y-1/2 right-0'
                  type='submit'
                  onClick={(e: React.FormEvent<HTMLButtonElement>)=> e.preventDefault()}>
                 <ArrowRight size={14}/>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </article>
    </footer>
  )
}

export default Footer
