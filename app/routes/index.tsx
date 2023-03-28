import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { motion } from 'framer-motion'

import OctagonProfile from '~/components/OctagonProfile'
import ParallaxText from '~/components/ParallaxText'
import { COLORS } from '~/constants/constant'
import { sdk } from '~/libs/client'

export const meta: MetaFunction = () => {
  return {
    title: "Supatsara's Portfolio",
  }
}

export const loader = async () => {
  const { personalInfos } = await sdk.GetPersonalInfo()
  return json(personalInfos)
}

export default function Index() {
  const personalInfo = useLoaderData<typeof loader>()
  const info = personalInfo[0]

  return (
    <div className="w-full m-auto">
      <section className="w-full m-auto h-[calc(100vh_-_40px)] relative">
        <div className="relative w-full h-[calc(100%_-_40px)] m-auto flex justify-center items-center">
          <OctagonProfile profile={info.image.url} />
          <motion.div
            initial={{ opacity: 0, x: -200, y: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, stiffness: 1000 }}
            className="absolute right-[40%] text-[120px] font-lalezar text-green tablet:text-[5rem] tablet:right-[42%] mobile:text-4xl mobile:mt-[100px] mobile:right-[42%] laptop:text-[6rem] laptop:right-[45%] uppercase transition-all"
          >
            {info.name}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 200, y: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, stiffness: 1000 }}
            className="absolute left-[50%] text-[120px] font-lalezar text-transparent mt-[140px] tablet:text-[5rem] tablet:left-[45%] mobile:text-4xl mobile:left-[45%] mobile:mt-0 laptop:text-[6rem] laptop:left-[45%] uppercase transition-all"
            style={{ WebkitTextStroke: `2px ${COLORS.green}` }}
          >
            {info.surname}
          </motion.div>
        </div>
        <div className="absolute bottom-[40px] left-0 w-screen py-3 bg-lemon text-purple -m-[40px]">
          <ParallaxText baseVelocity={-2}>{info.currentPosition}</ParallaxText>
        </div>
      </section>
      <section className="w-screen -mx-[40px] m-auto h-screen relative bg-blue">
        <div className="relative w-full h-[calc(100%_-_40px)] m-auto flex justify-center items-center">
          <OctagonProfile profile={info.image.url} />
        </div>
      </section>
    </div>
  )
}
