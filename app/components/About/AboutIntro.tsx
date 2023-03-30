import { motion, useScroll, useTransform } from 'framer-motion'

type AboutIntroProps = {
  name: string
  surname: string
}

export const AboutIntro = ({ name, surname }: AboutIntroProps) => {
  const { scrollYProgress } = useScroll()

  const x = useTransform(scrollYProgress, [0, 1], [-100, -600])
  const x2 = useTransform(scrollYProgress, [1, 0], [-100, -600])
  const fullName = Array.from(Array(4)).map((_) => name + ' ' + surname + ' ')
  const aboutMe = Array.from(Array(4)).map((_) => '? About ME ? 🤭 ')

  const AboutMe = () => {
    return (
      <motion.div
        style={{ x: x2 }}
        className="text-[120px] tablet:text-[100px] mobile:text-[80px] font-lalezar uppercase whitespace-nowrap text-darkBlue"
      >
        {aboutMe}
      </motion.div>
    )
  }

  const AboutName = () => {
    return (
      <motion.div
        style={{ x }}
        className="text-[120px] tablet:text-[100px] mobile:text-[80px] font-lalezar uppercase whitespace-nowrap"
      >
        {fullName}
      </motion.div>
    )
  }

  const AboutNickname = () => {
    return (
      <motion.div
        style={{ x }}
        className="text-[120px] tablet:text-[100px] mobile:text-[80px] font-lalezar uppercase whitespace-nowrap"
      >
        {Array.from(Array(6)).map((_) => 'ROSEJH <3 ')}
      </motion.div>
    )
  }

  return (
    <section className="w-screen -mx-[40px] m-auto h-full min-h-[100vh] relative bg-r_orange pb-[20px] overflow-hidden">
      <div className="relative w-[calc(100%_-_80px)] h-full m-auto flex mx-[40px] pt-[80px] gap-8 mobile:flex-wrap mobile:pt-[100px] flex-col">
        <AboutName />
        <AboutMe />
        <AboutNickname />
        <AboutMe />
        <AboutName />
      </div>
    </section>
  )
}
