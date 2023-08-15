import Heading from '../html-customs/Heading'
import RepoPreview from './RepoPreview'
import Repository from '@/app/classes/Repository'
interface Props {
  icon: React.ReactNode
  reposFetch: Promise<Repository[]>
  specialReposModifier?: { [key: string]: { [key: string]: string } }
  title: string
  filter?: (list: Repository[]) => Repository[]
}
export default async function ReposList (props: Props): Promise<JSX.Element> {
  const { icon, reposFetch, specialReposModifier, title, filter } = props

  let repositories = await reposFetch.then((reposList: Repository[]) => filter != null ? filter(reposList) : reposList)

  if (specialReposModifier != null) {
    repositories = repositories.map(repo =>
      specialReposModifier[repo.name] != null ? Object.assign(repo, specialReposModifier[repo.name]) : repo)
  }
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
