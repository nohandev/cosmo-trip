import { motion, type HTMLMotionProps } from 'motion/react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'circle'

interface ButtonStylesProps {
  variant: ButtonVariant
}

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
}

export function buttonStyles({ variant }: ButtonStylesProps) {
  return clsx(
    'flex items-center justify-center gap-2 font-medium cursor-pointer',
    'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink/60',
    {
      'bg-pink text-white rounded-xl px-6 py-3': variant === 'primary',
      'border border-white/20 text-white rounded-xl px-6 py-3': variant === 'secondary',
      'rounded-full p-2 text-center bg-pink text-white': variant === 'circle',
    }
  )
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <motion.button
      className={`${buttonStyles({ variant })} ${className ?? ''}`}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 10px 30px rgba(236, 72, 153, 0.35)',
      }}
      whileTap={{
        scale: 0.96,
        y: 1,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
