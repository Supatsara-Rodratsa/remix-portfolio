import { motion } from 'framer-motion'
import OctagonProfile from '../OctagonProfile'
import { COLORS } from '~/constants/constant'
import ParallaxText from '../ParallaxText'

type IntroductionProps = {
  name: string
  surname: string
  image: string
  position: string
}

const Introduction = ({
  name,
  surname,
  image,
  position,
}: IntroductionProps) => {
  return (
    <section className="w-full m-auto h-[calc(100vh_-_40px)] relative">
      <div className="relative w-full h-[calc(100%_-_40px)] m-auto flex justify-center items-center">
        <OctagonProfile profile={image} />
        <motion.div
          initial={{ opacity: 0, x: -200, y: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, stiffness: 1000 }}
          className="absolute left-[0] mb-10 text-[120px] font-lalezar text-green tablet:text-[5rem] mobile:text-4xl mobile:mt-[100px] laptop:text-[6rem]  uppercase transition-all"
        >
          {name}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200, y: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, stiffness: 1000 }}
          className="absolute right-[0] text-[120px] font-lalezar text-transparent mt-[140px] tablet:text-[5rem] mobile:text-4xl mobile:mt-0 laptop:text-[6rem] uppercase transition-all"
          style={{ WebkitTextStroke: `2px ${COLORS.green}` }}
        >
          {surname}
        </motion.div>
      </div>
      <div className="absolute bottom-[40px] left-0 w-screen py-3 bg-lemon text-purple -m-[40px]">
        <ParallaxText baseVelocity={-2}>{position}</ParallaxText>
      </div>
    </section>
  )
}

export default Introduction
