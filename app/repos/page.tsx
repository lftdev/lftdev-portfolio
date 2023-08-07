import ReposList from '@/components/repos/ReposList'
import { getRepositories } from '../services/repo-fetching'
import { PROFESSIONAL_PROJECTS } from '../constants/repos-filters'

export default function ReposPage (): JSX.Element {
  const repositories = getRepositories()
  return (
    <div className='pt-[72px] px-5'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-4xl font-bold'>Take a look at my <span className='text-purple-600'>repositories</span></h1>
        <p role='paragraph'>Here, you'll find my training as <span className='font-bold'>web developer</span> and other works I consider my <span className='font-bold'>hobby projects</span>.</p>
      </div>
      <h2 className='text-3xl text-purple-600 font-bold'>Web Projects</h2>
      <main className='flex flex-col gap-2 items-center'>
        <h3 className='text-2xl text-pink-500 font-bold'>Professional works</h3>
        <ReposList list={repositories} filter={list => list.filter(repo => PROFESSIONAL_PROJECTS.includes(repo.name))} />
      </main>
      <section className='flex flex-col gap-2 items-center'>
        <h3 className='text-2xl text-pink-500 font-bold'>Training projects</h3>
        <ReposList list={repositories} filter={list => list.filter(repo => !PROFESSIONAL_PROJECTS.includes(repo.name))} />
      </section>
    </div>
  )
}
