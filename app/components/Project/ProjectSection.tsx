import type { Project } from '~/generated/graphql'
import { ProjectDetail } from './ProjectDetail'
import { ProjectIntro } from './ProjectIntro'
import { NAV_TOPIC } from '~/constants/constant'

type ProjectSectionProps = {
  projects: Project[]
}

export const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <section id={NAV_TOPIC.PROJECT.link}>
      <ProjectIntro />
      <ProjectDetail projects={projects} />
    </section>
  )
}
