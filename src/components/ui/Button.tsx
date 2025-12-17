import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonStylesProps {
  variant: ButtonVariant
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant: ButtonVariant
  children: React.ReactNode
  className?: string
}

export function buttonStyles({ variant }: ButtonStylesProps) {
  return clsx(
    'flex items-center gap-2 px-6 py-3 font-medium transition-all cursor-pointer',
    'hover:scale-105',
    {
      'bg-pink text-white':
        variant === 'primary',
      'border border-white/20 text-white':
        variant === 'secondary',
    }
  )
}

const Button:React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  return (
    <button 
    className={`${buttonStyles({ variant })} ${className ?? ''}`}
    {...props}>
      {children}
    </button>
  )
}

export default Button
