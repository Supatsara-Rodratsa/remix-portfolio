import { motion } from 'framer-motion'
import { Header } from '../Header'
import { ProfileCaption } from '../ProfileCaption'

type IntroductionInfoProps = {
  info: string
  profileImage: string
}

export const IntroductionInfo = ({
  info,
  profileImage,
}: IntroductionInfoProps) => {
  const intro = info.split('application consultant') || []
  const intro2 =
    intro[1].split("a master's degree in Frontend Development program") || []
  return (
    <section className="w-screen -mx-[40px] m-auto h-full min-h-[100vh] relative bg-blue">
      <div className="relative w-[calc(100%_-_80px)] min-h-[100vh] m-auto flex justify-center items-center mx-[40px] pt-[80px] pb-[40px] gap-8 mobile:flex-wrap mobile:pt-[100px] tablet:flex-wrap">
        <div className="w-[45%] flex flex-col h-fit gap-[60px] m-auto tablet:w-full mobile:w-full">
          <Header label="WHO AM I ??" color="bg-r_orange" />
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ stiffness: 200, delay: 1 }}
            className="text-2xl tablet:text-xl mobile:text-lg"
          >
            {intro[0]}
            <span className="text-r_orange">application consultant</span>
            {intro2[0]}
            <span className="text-r_orange">
              a master's degree in Frontend Development program
            </span>
            {intro2[1]}
          </motion.p>
        </div>
        <ProfileCaption
          image={profileImage}
          caption="About"
          link="#about-details"
        />
      </div>
    </section>
  )
}
