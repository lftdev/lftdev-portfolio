import { Octokit } from '@octokit/core'
import Repository from '@/classes/Repository'
import 'dotenv/config'

export const getRepositories = async (): Promise<Repository[]> => {
  const res = (await new Octokit({ auth: process.env.AUTH_TOKEN }).request('GET /users/lftdev/repos')).data
  return res.map((rep: { name: string, description: string, html_url: string }) => new Repository(rep.name, rep.description, rep.html_url))
}
