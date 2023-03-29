import type { PersonalInfo } from '~/generated/graphql'
import AboutIntro from '../AboutIntro'
import IntroductionInfo from '../IntroductionInfo'
import AboutInfo from '../AboutInfo'

type AboutProps = {
  details: PersonalInfo
}

const AboutSection = ({ details }: AboutProps) => {
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

export default AboutSection
