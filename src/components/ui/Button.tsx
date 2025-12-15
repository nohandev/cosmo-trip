

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: 'outline'
  children: React.ReactNode
  icon?: React.ReactNode
  className?: string
}

const Button:React.FC<ButtonProps> = ({
  children,
  variant,
  className,
  icon,
  ...props
}) => {
  return (
    <button 
    className={
      `px-8 py-2 bg-pink text-white border border-pink font-alexandria cursor-pointer rounded-lg flex gap-2 items-center transition-transform hover:scale-105
      ${variant === 'outline' ? 'bg-transparent border-white' : ''}
      ${className}`}
    {...props}>
      {icon && <>{icon}</>}
      {children}
    </button>
  )
}

export default Button
