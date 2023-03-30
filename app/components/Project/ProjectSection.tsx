import type { Project } from '~/generated/graphql'
import { ProjectDetail } from './ProjectDetail'
import { ProjectIntro } from './ProjectIntro'

type ProjectSectionProps = {
  projects: Project[]
}

export const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <section id="projects">
      <ProjectIntro />
      <ProjectDetail projects={projects} />
    </section>
  )
}
