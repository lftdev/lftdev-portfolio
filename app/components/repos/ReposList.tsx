import { getRepositories } from '@/app/services/repo-fetching'
import RepoPreview from './RepoPreview'

export default async function ReposList (): Promise<JSX.Element> {
  const repositories = await getRepositories()
  return (
    <ul className='grid place-items-center gap-5'>
      {repositories.map((repo, index) => {
        return (
          <li key={index}>
            <RepoPreview repository={repo} />
          </li>
        )
      })}
    </ul>
  )
}
