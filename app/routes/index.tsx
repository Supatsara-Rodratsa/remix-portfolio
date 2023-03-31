import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type {
  Certificate,
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
import { motion, useScroll, useSpring } from 'framer-motion'
import { CertificateSection } from '~/components/Certificate/CertificateSection'

export const meta: MetaFunction = () => {
  return {
    title: "Supatsara's Portfolio",
    description: 'This is my personal website',
  }
}

export const loader = async () => {
  const data = await Promise.all([
    sdk.GetPersonalInfo(),
    sdk.GetExperienceInfo(),
    sdk.GetEducationInfo(),
    sdk.GetTechnicalSkill(),
    sdk.GetSoftwareDetail(),
    sdk.GetProjectList(),
    sdk.GetVideoMeme(),
    sdk.GetCertificate(),
  ])

  return json({
    personalInfos: data[0].personalInfos,
    experiences: data[1].experiences,
    educations: data[2].educations,
    technicalSkills: data[3].technicalSkills,
    softwares: data[4].softwares,
    projects: data[5].projects,
    videos: data[6].videos,
    certificates: data[7].certificates,
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
    certificates,
  } = useLoaderData<typeof loader>()
  const info = personalInfos[0] as PersonalInfo
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div className="w-full m-auto">
      <motion.div
        className="fixed w-full bottom-0 left-0 right-0 h-[10px] bg-lemon z-[99]"
        style={{ scaleX, transformOrigin: '0%' }}
      />
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
      <CertificateSection certificates={certificates as Certificate[]} />
      <ProjectSection projects={projects as Project[]} />
      <ContactSection
        contact={info.contact as Contact}
        video={videos[0].video?.url as string}
      />
    </div>
  )
}
