import type { MetaFunction } from '@remix-run/node'
import ErrorState from '~/components/ErrorState'

export const meta: MetaFunction = () => {
  return {
    title: 'About',
  }
}

export const ErrorBoundary = ({ error }: { error: Error }) => {
  return <ErrorState error={error} />
}

export default function Index() {
  //   const personalInfo = useLoaderData<typeof loader>()
  //   const info = personalInfo[0] as PersonalInfo

  return <div className="w-full m-auto"></div>

  //   return <ErrorState error={new Error('Data Not found')} />
}
