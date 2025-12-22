interface BrandCardProps  {
  title: string
  content: string
}

const BrandCard = ({
  title,
  content
} : BrandCardProps) => {
  return (
    <div className='flex items-center justify-center flex-col gap-2'>
      <span className='font-alexandria font-medium text-5xl text-pink'>{title}</span>
      <p className='text-gray text-lg'>{content}</p>
    </div>
  )
}

const Brands = () => {
  return (
    <section className='h-[25dvh] bg-l-black py-3 flex items-center justify-center gap-24'>
      
      <BrandCard title='+200' content='viagens realizadas'/>
      <BrandCard title='+500' content='turistas espaciais'/>
      <BrandCard title='+0' content='acidentes registrados'/>
      <BrandCard title='100%' content='satisfação garantida'/>
      
    </section>
  )
}

export default Brands
