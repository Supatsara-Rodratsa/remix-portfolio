import { motion } from 'framer-motion'
import { Header } from '../Header'
import { Profile } from '../Profile'

type AboutInfoProps = {
  image: string
  details: string
}

export const AboutInfo = ({ image, details }: AboutInfoProps) => {
  const info =
    details.split('Frontend Developer and Experience Consultant') || []
  return (
    <section
      id="about-details"
      className="w-screen -mx-[40px] m-auto min-h-[100vh] relative "
    >
      <div className="relative w-full min-h-[100vh] m-auto flex justify-center items-center gap-8 mobile:flex-wrap tablet:flex-wrap">
        <div
          style={{ backgroundImage: "url('assets/icons/bg-table.svg')" }}
          className="w-[50%] flex flex-col h-screen gap-[60px] tablet:w-full mobile:w-full bg-lemon bg-[length:30px] pt-[100px] p-[40px] justify-center items-center"
        >
          <Profile image={image} />
        </div>
        <div className="w-[50%] flex flex-col h-full gap-[60px] m-auto tablet:w-full mobile:w-full pt-[100px] p-[40px] text-2xl tablet:text-xl mobile:text-lg min-w-[400px]">
          <Header label="ABOUT" color="bg-r_orange" />
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ stiffness: 200, delay: 1 }}
            className="pb-[40px]"
          >
            {info[0]}
            <span className="text-green">
              Frontend Developer and Experience Consultant
            </span>
            {info[1]}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
