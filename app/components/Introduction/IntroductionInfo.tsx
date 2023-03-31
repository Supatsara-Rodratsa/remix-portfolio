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
    <section
      style={{ backgroundImage: "url('assets/icons/bg-table.svg')" }}
      className="bg-[length:30px] w-screen -mx-[40px] m-auto h-full min-h-[calc(100vh_-_20px)] relative bg-blue border-[20px] border-black"
    >
      <div className="relative w-[calc(100%_-_80px)] min-h-[calc(100vh_-_20px)] m-auto flex justify-center items-center mx-[40px] pt-[80px] pb-[40px] gap-8 mobile:flex-wrap mobile:pt-[100px] tablet:flex-wrap">
        <div className="w-[45%] flex flex-col h-fit gap-[60px] m-auto tablet:w-full mobile:w-full">
          <Header label="WHO AM I ??" color="bg-r_orange" />
          <motion.p
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            className="text-2xl tablet:text-xl mobile:text-lg"
          >
            {intro[0]}
            <span className="text-r_orange bg-white px-[1px]">
              application consultant
            </span>
            {intro2[0]}
            <span className="text-r_orange bg-lemon px-[1px]">
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
