import { useState } from 'react'
import { accordionData } from '@/services/services'
import { Plus, Minus } from 'lucide-react'
import type { AccordionType } from '@/types/types'
import { motion, AnimatePresence } from 'motion/react'

type AccordionItemProps = {
  isOpen: boolean,
  onToggle: () => void,
  title: string,
  children: React.ReactNode,
}

const AccordionItem = ({
  isOpen,
  onToggle,
  title,
  children,
}: AccordionItemProps) => (
  <div 
    className='w-full bg-black rounded-xl border-b border-white/25 p-9'
    onClick={onToggle}>
    <div className='text-white flex items-center justify-between'>
      <h2 className='font-alexandria text-xl font-bold'>{title}</h2>
      {isOpen ? <Minus size={30} className='cursor-pointer'/> : <Plus size={30} className='cursor-pointer'/>}
    </div>
    <AnimatePresence initial={false}>
    {isOpen && 
    <motion.div layout
    initial={{height: 0, opacity: 0}}
    animate={{height: 'auto', opacity: 1}}
    exit={{height:0, opacity: 0}}
    transition={{
      height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.2 }
  }}
    className='overflow-hidden'>
      <p className='mt-4 font-inter text-lg text-gray'>{children}</p>
    </motion.div>}
  </AnimatePresence>
  </div>
)

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<number | null >(null)

  return (
    <div>
      {accordionData.map((item: AccordionType, index: number) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={isOpen === index}
          onToggle={() => setIsOpen((prev) => prev === index ? null : index)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}

export default Accordion
