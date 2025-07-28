import Link from 'next/link'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function Button({ 
  href, 
  onClick, 
  children, 
  variant = 'primary',
  className = ''
}: ButtonProps) {
  const baseClasses = "flex flex-row items-center justify-center px-[25px] py-[15px] rounded-[10px] text-[24px] leading-normal font-normal hover:opacity-90"
  
  const variantClasses = {
    primary: "bg-[#ca0f18] text-[#ffffff]",
    secondary: "bg-gray-500 text-white"
  }
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  )
}