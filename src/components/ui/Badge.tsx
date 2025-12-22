const Badge = ({children}: {children: string}) => {
  return (
    <span className='py-2 px-6 border border-gray rounded-full text-pink text-sm font-bold font-alexandria text-center'>
      {children}
    </span>
  )
}

export default Badge
