import Heading from '@/components/html-customs/Heading'
import ReposList from '@/components/repos/ReposList'
import { getRepositories } from '../services/repo-fetching'
import { PROFESSIONAL_PROJECTS, PYTHON_PROJECTS } from '../constants/repos-filters'

export default function ReposPage (): JSX.Element {
  const repositories = getRepositories()
  return (
    <div className='flex flex-col gap-6 pt-[92px] px-5'>
      <div className='flex flex-col gap-5'>
        <Heading level={1}>
          Take a look at my <span className='text-purple-600'>repositories</span>
        </Heading>
        <p role='paragraph'>Here, you'll find my training as <span className='font-bold'>web developer</span> and other works I consider my <span className='font-bold'>hobby projects</span>.</p>
      </div>
      <Heading level={2} className='text-purple-600'>
        Web Development Projects
      </Heading>
      <main>
        <ReposList title='Professional works' list={repositories} filter={list => list.filter(repo => PROFESSIONAL_PROJECTS.includes(repo.name))} />
      </main>
      <section>
        <ReposList
          title='Training projects' list={repositories}
          filter={list => list.filter(repo => !PROFESSIONAL_PROJECTS.includes(repo.name) &&
          !PYTHON_PROJECTS.includes(repo.name))}
        />
      </section>
      <Heading level={2} className='text-purple-600'>
        Hobby projects
      </Heading>
      <section>
        <ReposList
          title='Python projects' list={repositories}
          filter={list => list.filter(repo =>
            PYTHON_PROJECTS.includes(repo.name))}
        />
      </section>
    </div>
  )
}
