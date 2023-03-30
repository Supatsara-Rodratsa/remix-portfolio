import { useState } from 'react'
import { MenuButton } from './MenuButton'
import { COLORS, NAV_TOPIC, WINDOW_SIZE } from '~/constants/constant'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useWindowSize } from '~/hooks/widowSize'
import { Link, useNavigate } from '@remix-run/react'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)
  const [mouseEnter, setMouseEnter] = useState(false)
  const windowSize = useWindowSize()
  const navigate = useNavigate()

  const container = {
    open: {
      transition: { staggerChildren: 0.15, delayChildren: 0.5 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const variant = {
    closed: { opacity: 0, x: 300 },
    open: { opacity: 1, x: 0 },
  }

  const Topic = [
    NAV_TOPIC.HOME,
    NAV_TOPIC.ABOUT,
    NAV_TOPIC.EXPERIENCE,
    NAV_TOPIC.EDUCATION,
    NAV_TOPIC.SKILL,
    NAV_TOPIC.PROJECT,
    NAV_TOPIC.CONTACT,
  ]

  return (
    <div className="flex w-full justify-between items-center fixed z-[99]">
      <div
        className={clsx(
          'relative w-[200px] h-[40px] transition-all duration-700 z-30',
          mouseEnter ? 'scale-90' : 'scale-100'
        )}
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}
        onClick={() => navigate('/')}
      >
        <div
          className={clsx(
            'text-3xl text-black font-bold absolute z-1 transition-all duration-500 cursor-pointer top-[4px] left-[5px] mobile:text-2xl'
          )}
        >
          !!ROSEJHH
        </div>
        <h1 className="text-3xl text-white hover:text-lemon font-bold transition-all duration-500 absolute z-10 top-0 left-0 mobile:text-2xl">
          !!ROSEJHH
        </h1>
      </div>
      <MenuButton
        isOpen={isOpen}
        onClick={() => setOpen(!isOpen)}
        strokeWidth={windowSize.width < WINDOW_SIZE.mobile ? '3' : '5'}
        color={isOpen ? COLORS.darkBlue : COLORS.lemon}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        width={windowSize.width < WINDOW_SIZE.mobile ? '24' : '40'}
        height={windowSize.width < WINDOW_SIZE.mobile ? '15' : '24'}
        className={'cursor-pointer z-10 absolute right-[80px]'}
      />
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 400 }}
        transition={{
          y: { stiffness: 1000 },
        }}
        className={clsx(
          isOpen && 'show',
          'absolute right-[40px] top-0 pt-[100px] pr-[45px] pb-[150px] pl-[80px] mobile:pt-[80px] mobile:pr-[25px] mobile:pb-[100px] mobile:pl-[70px]',
          'before:bg-darkBlue z-[5] before:-rotate-[15deg] before:h-[calc(100%)] before:w-[125%] before:absolute before:-top-[45px] before:-right-[90px] before:mobile:w-[120%] ',
          'after:bg-lemon z-[2] after:-rotate-[15deg] after:h-[calc(100%)] after:w-[125%] after:absolute after:-top-[60px] after:-right-[70px]  after:mobile:w-[120%] '
        )}
      >
        <motion.ul
          variants={container}
          initial="hidden"
          animate={isOpen ? 'open' : 'closed'}
          className="relative z-10 text-end flex flex-col gap-3"
        >
          {Topic.map((item, i) => (
            <motion.li
              key={`${item}_${i}`}
              id={`${item}_${i}`}
              variants={variant}
              className="flex flex-col items-end font-lalezar text-darkBlue text-3xl font-bold uppercase cursor-pointer mobile:text-2xl hover:text-black"
            >
              <Link to={`#${item.link}`} onClick={() => setOpen(false)}>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  )
}

export { NavBar }
