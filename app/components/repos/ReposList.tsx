import Repository from '@classes/Repository'
import RepoPreview from './RepoPreview'
const ENDPOINT = 'https://api.github.com/users/lftdev/repos'
const getRepos = async (): Promise<Repository[]> => await (await fetch(ENDPOINT)).json()

export default async function ReposList (): Promise<JSX.Element> {
  const reposData = getRepos()
  const [repos] = await Promise.all([reposData])
  return (
    <ul>
      {repos.map((repo, index) => {
        return (
          <li key={index}>
            <RepoPreview title={repo.name} description={repo.description} />
          </li>
        )
      })}
    </ul>
  )
}
