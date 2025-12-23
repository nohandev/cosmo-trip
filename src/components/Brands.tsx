import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface BrandCardProps  {
  title: string
  content: string
}

const container = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
}

const item = {
  hidden: {
    opacity: 0, 
    y: -80, 
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1, 
  },
}

const BrandCard = ({
  title,
  content,
} : BrandCardProps) => {
  return (
    <motion.div 
      className='flex items-center justify-center flex-col gap-2'
      variants={item}
      transition={{ease: 'easeInOut', stiffness: 120, type:'spring', duration: 0.4}}>
      <span className='font-alexandria font-medium text-5xl text-pink'>{title}</span>
      <p className='text-gray text-lg'>{content}</p>
    </motion.div>
  )
}

const Brands = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.3 })

  return (
    <motion.section 
      ref={ref}
      className='h-[25dvh] bg-l-black py-3 flex items-center justify-center gap-24'
      variants={container}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      >
      
      <BrandCard title='+200' content='viagens realizadas'/>
      <BrandCard title='+500' content='turistas espaciais'/>
      <BrandCard title='+0' content='acidentes registrados'/>
      <BrandCard title='100%' content='satisfação garantida'/>
      
    </motion.section>
  )
}

export default Brands
