import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type {
  Contact,
  Education,
  Experience,
  PersonalInfo,
  Project,
  Software,
  TechnicalSkill,
} from '~/generated/graphql'
import { sdk } from '~/libs/client'
import { AboutSection } from '~/components/About/About'
import ExperienceSection from '~/components/Experience/Experience'
import { ErrorState } from '~/components/ErrorState'
import { Introduction } from '~/components/Introduction/Introduction'
import { SkillSoftwareSection } from '~/components/SkillSoftware/SkillSoftware'
import { EducationSection } from '~/components/Education/Education'
import { ProjectSection } from '~/components/Project/ProjectSection'
import { ContactSection } from '~/components/Contact/ContactSection'

export const meta: MetaFunction = () => {
  return {
    title: "Supatsara's Portfolio",
  }
}

export const loader = async () => {
  const { personalInfos } = await sdk.GetPersonalInfo()
  const { experiences } = await sdk.GetExperienceInfo()
  const { educations } = await sdk.GetEducationInfo()
  const { technicalSkills } = await sdk.GetTechnicalSkill()
  const { softwares } = await sdk.GetSoftwareDetail()
  const { projects } = await sdk.GetProjectList()
  const { videos } = await sdk.GetVideoMeme()
  return json({
    personalInfos,
    experiences,
    educations,
    technicalSkills,
    softwares,
    projects,
    videos,
  })
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return <ErrorState error={error} />
}

export default function Index() {
  const {
    personalInfos,
    experiences,
    educations,
    technicalSkills,
    softwares,
    projects,
    videos,
  } = useLoaderData<typeof loader>()
  const info = personalInfos[0] as PersonalInfo

  if (info) {
    return (
      <div className="w-full m-auto">
        <Introduction
          name={info.name}
          surname={info.surname}
          position={info.currentPosition || ''}
          image={info.image?.url}
        />
        <AboutSection details={info} />
        <ExperienceSection experience={experiences as Experience[]} />
        <EducationSection education={educations as Education[]} />
        <SkillSoftwareSection
          software={softwares as Software[]}
          technicalSkills={technicalSkills as TechnicalSkill[]}
        />
        <ProjectSection projects={projects as Project[]} />
        <ContactSection
          contact={info.contact as Contact}
          video={videos[0].video?.url as string}
        />
      </div>
    )
  }

  return <ErrorState error={new Error('Data Not found')} />
}
