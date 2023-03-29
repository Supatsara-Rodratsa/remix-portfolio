import clsx from 'clsx'
import { motion } from 'framer-motion'

type HeaderProps = {
  label: string
  color: string
  once?: boolean
}

const Header = ({ label, color, once = false }: HeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0, rotate: -10 }}
      viewport={{ once }}
      transition={{ stiffness: 500, delay: 0.5 }}
      className={clsx(
        'w-fit h-fit px-10 py-3 text-bolder font-lalezar text-2xl pt-[18px] transition-all duration-700 ease-in-out shadow-custom tablet:text-xl mobile:text-lg uppercase',
        color
      )}
    >
      {label}
    </motion.div>
  )
}

export default Header
