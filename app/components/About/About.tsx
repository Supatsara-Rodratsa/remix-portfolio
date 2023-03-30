import type { PersonalInfo } from '~/generated/graphql'
import { AboutIntro } from './AboutIntro'
import { AboutInfo } from './AboutInfo'
import { IntroductionInfo } from '../Introduction/IntroductionInfo'

type AboutProps = {
  details: PersonalInfo
}

export const AboutSection = ({ details }: AboutProps) => {
  return (
    <section id="about">
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
