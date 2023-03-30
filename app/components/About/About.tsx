import type { PersonalInfo } from '~/generated/graphql'
import { AboutIntro } from './AboutIntro'
import { AboutInfo } from './AboutInfo'
import { IntroductionInfo } from '../Introduction/IntroductionInfo'
import { NAV_TOPIC } from '~/constants/constant'

type AboutProps = {
  details: PersonalInfo
}

export const AboutSection = ({ details }: AboutProps) => {
  return (
    <section id={NAV_TOPIC.ABOUT.link}>
      <AboutIntro name={details.name} surname={details.surname} />
      <IntroductionInfo
        info={details.introduction || ''}
        profileImage={details.profileImage1.url}
      />
      <AboutInfo
        image={details.profileImage2.url}
        details={details.about || ''}
      />
    </section>
  )
}
