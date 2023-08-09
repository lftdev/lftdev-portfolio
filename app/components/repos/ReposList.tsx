import Heading from '../html-customs/Heading'
import RepoPreview from './RepoPreview'
import Repository from '@/app/classes/Repository'
interface Props {
  icon: React.ReactNode
  fetchedRepos: Promise<Repository[]>
  specialReposModifier?: { [key: string]: { [key: string]: string } }
  title: string
  filter?: (list: Repository[]) => Repository[]
}
export default async function ReposList (props: Props): Promise<JSX.Element> {
  const { icon, fetchedRepos, specialReposModifier, title, filter } = props
  let repositories
  if (filter != null) repositories = filter(...(await Promise.all([fetchedRepos])))
  else [repositories] = await Promise.all([fetchedRepos])

  function modifySpecialRepos (list: Repository[], specialReposModifier: { [key: string]: { [key: string]: string } }): Repository[] {
    const keys = Object.keys(specialReposModifier)
    const modifiedRepos = list
      .filter(repo => keys.includes(repo.name))
      .map(repo => {
        Object.keys(specialReposModifier[repo.name]).forEach(key => {
          repo[key] = specialReposModifier[repo.name][key]
        })
        return repo
      })
    return list.map(repo => {
      modifiedRepos.forEach(mod => {
        if (repo.name === mod.name) repo = mod
      })
      return repo
    })
  }

  if (specialReposModifier != null) repositories = modifySpecialRepos(repositories, specialReposModifier)
  return (
    <>
      <div className='flex items-center gap-2 text-left mb-10'>
        <span className='fill-white'>{icon}</span>
        <Heading level={6}>
          {title}
        </Heading>
      </div>
      <div className='grid place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {repositories.map((repo, index) => <RepoPreview key={index} repository={repo} />)}
      </div>
    </>
  )
}
