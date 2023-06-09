import type { Education } from '~/generated/graphql'
import { Header } from '../Header'
import { motion } from 'framer-motion'
import { EducationTable } from './EducationTable'
import { IntroHeading } from '../IntroHeading'
import { NAV_TOPIC } from '~/constants/constant'

type EducationProps = {
  education: Education[]
}

export const EducationSection = ({ education }: EducationProps) => {
  return (
    <section id={NAV_TOPIC.EDUCATION.link}>
      <IntroHeading
        color="bg-lemon"
        textColor="text-darkBlue"
        label="Education"
        firstMeme={education[0].meme1?.url || ''}
        secondMeme={education[0].meme2?.url || ''}
        isHeadingLeft
      />
      <section className="w-full m-auto h-full min-h-[100vh] relative pb-[20px] overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ stiffness: 200 }}
          className="relative w-full h-full m-auto flex pt-[100px] gap-8 mobile:flex-wrap mobile:pt-[100px] flex-col"
        >
          <div className="flex gap-4 items-center ">
            <Header label="Education" color="bg-r_orange" once />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ stiffness: 500 }}
              className="relative w-[110px] h-[110px]"
            >
              <img src="assets/images/my-emoji-2.png" alt="experience" />
            </motion.div>
          </div>
          <EducationTable education={education} />
        </motion.div>
      </section>
    </section>
  )
}
