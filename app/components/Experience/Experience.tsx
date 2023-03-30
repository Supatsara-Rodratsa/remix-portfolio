import type { Experience } from '~/generated/graphql'
import { Header } from '../Header'
import { motion } from 'framer-motion'
import { ExperienceTable } from './ExperienceTable'
import { IntroHeading } from '../IntroHeading'

type ExperienceProps = {
  experience: Experience[]
}

export const ExperienceSection = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience">
      <IntroHeading
        bg="bg-green"
        color="bg-r_orange"
        textColor="text-white"
        label="Experience"
        firstMeme="assets/images/workMeme.gif"
        secondMeme="assets/images/workMeme2.gif"
      />
      <section className="w-screen -mx-[40px] m-auto h-full min-h-[100vh] relative pb-[20px] overflow-hidden bg-blue">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ stiffness: 200 }}
          className="relative w-[calc(100%_-_80px)] h-full m-auto flex mx-[40px] pt-[100px] gap-8 mobile:flex-wrap mobile:pt-[100px] flex-col"
        >
          <div className="flex gap-4 items-center">
            <Header label="Experience" color="bg-r_orange" once />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ stiffness: 500, delay: 1.3 }}
              className="relative w-[110px] h-[110px]"
            >
              <img src="assets/images/my-emoji-2.png" alt="experience" />
            </motion.div>
          </div>
          <ExperienceTable experience={experience} />
        </motion.div>
      </section>
    </section>
  )
}

export default ExperienceSection
