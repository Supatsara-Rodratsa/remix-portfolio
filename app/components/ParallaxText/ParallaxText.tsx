import { wrap } from '@motionone/utils'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import type { ReactNode } from 'react'
import { useRef } from 'react'

type ParallaxProps = {
  children: ReactNode
  baseVelocity: number
}

const ParallaxText = ({ children, baseVelocity = 100 }: ParallaxProps) => {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })
  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`)
  const directionFactor = useRef<number>(1)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })
  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap items-bottom justify-bottoms">
      <motion.div
        className="whitespace-nowrap flex flex-nowrap text-[19px] items-bottom justify-bottom uppercase mt-[2px]"
        style={{ x }}
      >
        {Array.from(Array(20)).map((_, i) => (
          <span
            key={i}
            className={clsx(
              'block mr-[20px] h-fit',
              i % 2 == 0 ? 'font-lalezar text-2xl' : 'mt-[2px]'
            )}
          >
            {children}
            <span className="ml-[20px]">{i % 2 == 0 ? '👩🏼‍💻' : '😎'}</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default ParallaxText
