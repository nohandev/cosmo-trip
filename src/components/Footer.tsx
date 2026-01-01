import { ArrowRight } from 'lucide-react'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  email: z
    .string()
    .min(1, {error: 'Preencha o campo vazio!'})
    .email({error: 'Certifique-se de que o e-mail é válido!'})
})

type FormDataType = z.infer<typeof schema>

const Footer = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormDataType>({
		resolver: zodResolver(schema),
	});

  const onSubmit = (data: FormDataType) => {
    window.alert(`Cadastro enviado para ${data.email}`)
  }
  
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

          <div className='mt-6'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='w-full flex flex-col gap-1'>
                <label 
                  className='text-gray font-alexandria text-sm'
                  htmlFor='email'>
                  Your email address
                </label>

                <div className='w-full relative'>
                  <input 
                    type='text'
                    id='email'
                    {...register('email')}
                    className='bg-transparent w-full outline-none p-1 border-b border-white/50 text-white'
                    />

                    <button 
                     className='absolute bg-pink text-white p-1 rounded-full right-1 top-1/2 -translate-y-1/2 cursor-pointer transition hover:scale-110'
                     type='submit'
                     >
                      <ArrowRight size={16}/>
                    </button>
                </div>

                <div className='text-center font-alexandria py-1 text-sm'>
                  {errors && <span className='text-danger'>{errors.email?.message}</span>}
                </div>

              </div>
            </form>
          </div>
        </div>
      </article>
    </footer>
  )
}

export default Footer
