import { motion } from 'framer-motion'
import type { TechnicalSkill } from '~/generated/graphql'
import { Header } from '../Header'

type TechnicalSkillProps = {
  technicalSkills: TechnicalSkill[]
}

const TechnicalSkills = ({ technicalSkills }: TechnicalSkillProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ stiffness: 200 }}
      className="relative w-[calc(100%_-_80px)] h-full m-auto flex mx-[40px] pt-[100px] gap-12 mobile:flex-wrap mobile:pt-[100px] flex-col"
    >
      <div className="flex gap-4 items-center">
        <Header label="Skill" color="bg-r_orange" once />
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
      <ul
        style={{ flex: '0 0 150px' }}
        className="flex flex-row gap-10 mobile:gap-4 justify-center py-[20px] flex-wrap"
      >
        {technicalSkills.map((skill) => (
          <li key={skill.id} className="flex flex-col gap-2 items-center">
            <div className="relative w-[100px] h-[100px] mobile:h-[50px] overflow-hidden">
              <img
                className="object-contain aspect-[3/2] mobile:aspect-[2/1] w-fit"
                src={skill.image?.url}
                alt={skill.programmingLanguage}
              />
            </div>
            <div>{skill.programmingLanguage}</div>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export { TechnicalSkills }
