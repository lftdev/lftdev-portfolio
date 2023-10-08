import Heading from '@/components/html-customs/Heading'
import ProjectsList from '@/app/components/projects/ProjectsList'
import { fetchProjects } from '../services/projects-fetching'
import { BRIEFCASE_ICON, DUMBBELL_ICON } from '../components/SVGIcon'

export default function ProjectsPage (): JSX.Element {
  const projects = fetchProjects('*')

  return (
    <div className='grid grid-cols-1 gap-10'>
      <div className='flex flex-col gap-5'>
        <Heading level={1}>
          Take a look at my <span className='text-purple-600'>projects</span>
        </Heading>
        <p role='paragraph'>
          Here, you'll find my training as <span className='font-bold'>web developer</span> and other works I consider my <span className='font-bold'>hobby projects</span>
        </p>
      </div>
      <Heading level={2} className='text-pink-500'>
        Web Development Projects
      </Heading>
      <main>
        <ProjectsList
          icon={BRIEFCASE_ICON(32, 32)}
          title='Professional works'
          projectsFetch={projects}
        />
      </main>
      <section>
        <ProjectsList
          icon={DUMBBELL_ICON(32, 32)}
          title='Training projects'
          projectsFetch={projects}
        />
      </section>
    </div>
  )
}
