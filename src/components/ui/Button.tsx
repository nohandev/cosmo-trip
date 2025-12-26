import { motion, type HTMLMotionProps } from 'motion/react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary'

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
    'relative flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-xl cursor-pointer',
    'transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink/60',
    {
      'bg-pink text-white': variant === 'primary',
      'border border-white/20 text-white': variant === 'secondary',
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
