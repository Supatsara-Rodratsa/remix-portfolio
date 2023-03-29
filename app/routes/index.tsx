import type { MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import ErrorState from '~/components/ErrorState'
import Introduction from '~/components/Introduction'
import type { PersonalInfo } from '~/generated/graphql'
import { sdk } from '~/libs/client'
import About from '~/components/About'

export const meta: MetaFunction = () => {
  return {
    title: "Supatsara's Portfolio",
  }
}

export const loader = async () => {
  const { personalInfos } = await sdk.GetPersonalInfo()
  return json(personalInfos)
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return <ErrorState error={error} />
}

export default function Index() {
  const personalInfo = useLoaderData<typeof loader>()
  const info = personalInfo[0] as PersonalInfo

  if (info) {
    return (
      <div className="w-full m-auto">
        <Introduction
          name={info.name}
          surname={info.surname}
          position={info.currentPosition || ''}
          image={info.image?.url}
        />
        <About details={info} />
      </div>
    )
  }

  return <ErrorState error={new Error('Data Not found')} />
}
