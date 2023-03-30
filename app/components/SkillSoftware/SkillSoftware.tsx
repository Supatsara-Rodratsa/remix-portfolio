import type { Software, TechnicalSkill } from '~/generated/graphql'
import { TechnicalSkills } from './TechnicalSkill'
import { SoftwareSection } from './Software'
import { IntroHeading } from '../IntroHeading'

type SkillSoftwareProps = {
  technicalSkills: TechnicalSkill[]
  software: Software[]
}

const SkillSoftwareSection = ({
  technicalSkills,
  software,
}: SkillSoftwareProps) => {
  return (
    <section id="skill">
      <IntroHeading
        bg="bg-lemon"
        color="bg-purple"
        textColor="text-white"
        label="Skill & Software"
        firstMeme="assets/images/meme.gif"
        secondMeme="assets/images/meme3.gif"
      />
      <section className="w-screen -mx-[40px] m-auto h-full min-h-[100vh] relative pb-[20px] overflow-hidden bg-blue">
        <TechnicalSkills technicalSkills={technicalSkills} />
        <SoftwareSection software={software} />
      </section>
    </section>
  )
}

export { SkillSoftwareSection }
