import { Octokit } from '@octokit/core'
import Repository from '@/classes/Repository'
import RepoPreview from './RepoPreview'
import { AUTH } from '@/app/auth/octokit-auth'

const getRepos = async (): Promise<Repository[]> =>
  (await new Octokit(AUTH).request('GET /users/lftdev/repos')).data

export default async function ReposList (): Promise<JSX.Element> {
  const [repos] = await Promise.all([getRepos()])
  return (
    <ul className='grid place-items-center gap-5'>
      {repos.map((repo, index) => {
        return (
          <li key={index}>
            <RepoPreview repository={repo} />
          </li>
        )
      })}
    </ul>
  )
}
