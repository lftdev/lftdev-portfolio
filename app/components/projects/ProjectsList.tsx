import Heading from '../html-customs/Heading'
import ProjectPreview from './ProjectPreview'
import Project from '@/app/classes/Project'

interface Props {
  icon: React.ReactNode
  projectsFetch: Promise<Project[] | undefined>
  title: string
}

export default async function ProjectsList (props: Props): Promise<JSX.Element> {
  const { icon, projectsFetch, title } = props

  const projects = await projectsFetch

  return (
    <>
      <div className='flex items-center gap-2 text-left mb-10'>
        <span className='fill-white'>{icon}</span>
        <Heading level={6}>
          {title}
        </Heading>
      </div>
      <div className='grid place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {projects!.map((project, index) =>
          <ProjectPreview key={index} project={project} />)}
      </div>
    </>
  )
}
