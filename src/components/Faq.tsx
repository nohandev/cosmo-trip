import Badge from '@/components/ui/Badge'
import Accordion from '@/components/ui/Accordion'

const Faq = () => {
  return (
    <section className='min-h-screen bg-l-black scroll-mt-18' id='faq'>
      <div className='w-full max-w-8xl mx-auto px-4 py-8'>
        <div className='flex flex-col justify-center items-center gap-8w-full max-w-xl mx-auto'>
          <Badge>FAQ</Badge>
          <h1 className='font-alexandria text-5xl text-white'>Perguntas Frequentes</h1>
          <p className='font-inter text-lg text-gray text-center'>Tem dúvidas sobre como funciona uma viagem espacial? Reunimos aqui as perguntas mais comuns para que você possa se preparar e embarcar com total confiança.</p>
        </div>

        <div className='mt-16'>
          <Accordion/>
        </div>
      </div>
    </section>
  )
}

export default Faq
