import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import ErrorState from '~/components/ErrorState'
import Introduction from '~/components/Introduction'
import type { Education, Experience, PersonalInfo } from '~/generated/graphql'
import { sdk } from '~/libs/client'
import AboutSection from '~/components/About'
import ExperienceSection from '~/components/Experience'
import EducationSection from '~/components/Education'

export const meta: MetaFunction = () => {
  return {
    title: "Supatsara's Portfolio",
  }
}

export const loader = async () => {
  const { personalInfos } = await sdk.GetPersonalInfo()
  const { experiences } = await sdk.GetExperienceInfo()
  const { educations } = await sdk.GetEducationInfo()
  return json({ personalInfos, experiences, educations })
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return <ErrorState error={error} />
}

export default function Index() {
  const { personalInfos, experiences, educations } =
    useLoaderData<typeof loader>()
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
      </div>
    )
  }

  return <ErrorState error={new Error('Data Not found')} />
}
