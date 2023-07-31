import { Octokit } from '@octokit/core'
import Repository from '@/classes/Repository'
import RepoPreview from './RepoPreview'
import 'dotenv/config'

const octokit = new Octokit({ auth: process.env.AUTH_TOKEN })

const getRepositories = async (): Promise<Repository[]> => {
  const res = (await octokit.request('GET /users/lftdev/repos')).data
  return res.map((rep: { name: string, description: string, html_url: string }) => new Repository(rep.name, rep.description, rep.html_url))
}

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
