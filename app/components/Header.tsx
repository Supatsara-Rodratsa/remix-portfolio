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
}

export const Header = ({
  label,
  color,
  once = false,
  textColor = 'text-white',
  isRotate = true,
  variant = 'small',
  isScale = false,
  enabledClick = false,
}: HeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0, rotate: isRotate ? -10 : 0 }}
      viewport={{ once }}
      transition={{ stiffness: 500, delay: 0.2 }}
      className={clsx(
        'w-fit text-center h-fit px-10 py-3 text-bolder font-lalezar pt-[18px] transition-all duration-700 ease-in-out shadow-custom tablet:text-xl mobile:text-lg uppercase ml-[5px]',
        variant === 'small' ? 'text-2xl' : 'text-4xl',
        isScale && 'hover:scale-110',
        enabledClick && 'cursor-pointer',
        color,
        textColor
      )}
    >
      {label}
    </motion.div>
  )
}
