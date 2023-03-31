import { useNavigate } from '@remix-run/react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { WINDOW_SIZE } from '~/constants/constant'
import { useWindowSize } from '~/hooks/widowSize'

type IconFabProps = {
  word: string
  link: string
}

export const IconFab = ({ word, link }: IconFabProps) => {
  const navigate = useNavigate()
  const windowSize = useWindowSize()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ rotate: 360, scale: 1.2 }}
      transition={{ stiffness: 1000 }}
      className={clsx(
        'fixed bottom-[40px] right-[40px] rounded-full cursor-pointer flex justify-center items-center bg-r_orange shadow-xl',
        windowSize.width <= WINDOW_SIZE.mobile
          ? 'w-[80px] h-[80px]'
          : 'w-[100px] h-[100px]'
      )}
      onClick={() => navigate(`#${link}`)}
    >
      <motion.img
        src="assets/images/my-emoji.png"
        alt="Rose's emoji"
        className="pl-[5px]"
      />
      <div className="absolute bottom-[20px] w-[100px] h-[100px]">
        {word &&
          word.split('').map((char, i) => (
            <div
              className={clsx(
                'absolute left-[50%]',
                windowSize.width <= WINDOW_SIZE.mobile && 'top-[20%]'
              )}
              key={i}
              style={{
                transform: `rotate(${i * 12}deg)`,
                transformOrigin: `0px ${
                  windowSize.width <= WINDOW_SIZE.mobile ? 60 : 70
                }px`,
              }}
            >
              {char}
            </div>
          ))}
      </div>
    </motion.div>
  )
}
