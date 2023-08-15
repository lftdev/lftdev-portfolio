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

  const finishReposFetch = async (): Promise<Repository[]> => await reposFetch.then(reposList =>
    filter != null ? filter(reposList) : reposList)

  const applyModifiers = (repos: Repository[]): Repository[] =>
    specialReposModifier != null
      ? repos.map(repo =>
        specialReposModifier[repo.name] != null ? Object.assign(repo, specialReposModifier[repo.name]) : repo)
      : repos

  const repositories = applyModifiers(await finishReposFetch())

  return (
    <>
      <div className='flex items-center gap-2 text-left mb-10'>
        <span className='fill-white'>{icon}</span>
        <Heading level={6}>
          {title}
        </Heading>
      </div>
      <div className='grid place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {repositories.map((repo, index) => <RepoPreview key={index} repository={repo} />)}
      </div>
    </>
  )
}
