import clsx from 'clsx'
import { motion } from 'framer-motion'

type HeaderProps = {
  label: string
  color: string
  once?: boolean
  textColor?: string
  isRotate?: boolean
  variant?: 'big' | 'small'
  isScale?: boolean
  enabledClick?: boolean
  isAnimate?: boolean
}

export const Header = ({
  label,
  color,
  once = false,
  textColor = 'text-white',
  isRotate = true,
  variant = 'small',
  isScale = false,
  isAnimate = true,
}: HeaderProps) => {
  const transition = {
    stiffness: 200,
  }
  return (
    <motion.div
      initial={isAnimate ? { y: -50 } : { opacity: 1 }}
      whileInView={
        isAnimate ? { opacity: 1, y: 0, rotate: isRotate ? -10 : 0 } : {}
      }
      viewport={{ once }}
      transition={transition}
      className={clsx(
        'w-fit text-center h-fit px-10 py-3 text-bolder font-lalezar pt-[18px] transition-all duration-700 ease-in-out shadow-custom tablet:text-2xl mobile:text-xl uppercase ml-[5px]',
        variant === 'small' ? 'text-2xl' : 'text-4xl',
        isScale && 'hover:scale-110',
        color,
        textColor
      )}
    >
      {label}
    </motion.div>
  )
}
