import Heading from '@/components/html-customs/Heading'
import ReposList from '@/components/repos/ReposList'
import { getRepositories } from '../services/repo-fetching'
import { PROFESSIONAL_PROJECTS, PYTHON_PROJECTS } from '../constants/repos-filters'
import { BRIEFCASE_ICON, DUMBBELL_ICON, PYTHON_ICON } from '../components/SVGIcon'
import { SPECIAL_PROF_WORKS, SPECIAL_WEB_PROJECTS } from '../constants/special-repos-props'

export default function ReposPage (): JSX.Element {
  const repositories = getRepositories()
  return (
    <div className=''>
      <div className='flex flex-col gap-5'>
        <Heading level={1}>
          Take a look at my <span className='text-purple-600'>repositories</span>
        </Heading>
        <p role='paragraph'>
          Here, you'll find my training as <span className='font-bold'>web developer</span> and other works I consider my <span className='font-bold'>hobby projects</span>
        </p>
      </div>
      <Heading level={2} className='text-pink-500'>
        Web Development Projects
      </Heading>
      <main>
        <ReposList
          icon={BRIEFCASE_ICON(32, 32)}
          title='Professional works'
          reposFetch={repositories}
          filter={list => list.filter(repo => PROFESSIONAL_PROJECTS.includes(repo.name))}
          specialReposModifier={SPECIAL_PROF_WORKS}
        />
      </main>
      <section>
        <ReposList
          icon={DUMBBELL_ICON(32, 32)}
          title='Training projects' reposFetch={repositories}
          filter={list => list.filter(repo => !PROFESSIONAL_PROJECTS.includes(repo.name) &&
          !PYTHON_PROJECTS.includes(repo.name))}
          specialReposModifier={SPECIAL_WEB_PROJECTS}
        />
      </section>
      <Heading level={2} className='text-pink-500'>
        Hobby projects
      </Heading>
      <section>
        <ReposList
          icon={PYTHON_ICON(32, 32)}
          title='Python projects' reposFetch={repositories}
          filter={list => list.filter(repo =>
            PYTHON_PROJECTS.includes(repo.name))}
        />
      </section>
    </div>
  )
}
