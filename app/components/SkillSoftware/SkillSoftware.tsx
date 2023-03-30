import type { Software, TechnicalSkill } from '~/generated/graphql'
import { TechnicalSkills } from './TechnicalSkill'
import { SoftwareSection } from './Software'
import { IntroHeading } from '../IntroHeading'
import { NAV_TOPIC } from '~/constants/constant'

type SkillSoftwareProps = {
  technicalSkills: TechnicalSkill[]
  software: Software[]
}

const SkillSoftwareSection = ({
  technicalSkills,
  software,
}: SkillSoftwareProps) => {
  return (
    <section id={NAV_TOPIC.SKILL.link}>
      <IntroHeading
        bg="bg-lemon"
        color="bg-purple"
        textColor="text-white"
        label="Skill & Software"
        firstMeme="assets/images/meme.gif"
        secondMeme="assets/images/meme3.gif"
      />
      <section className="w-screen -mx-[40px] m-auto h-full min-h-[100vh] relative pb-[50px] overflow-hidden bg-blue">
        <TechnicalSkills technicalSkills={technicalSkills} />
        <SoftwareSection software={software} />
      </section>
    </section>
  )
}

export { SkillSoftwareSection }
