import RepoPreview from './RepoPreview'
import Repository from '@/app/classes/Repository'
interface Props {
  list: Promise<Repository[]>
  filter: (list: Repository[]) => Repository[]
}
export default async function ReposList (props: Props): Promise<JSX.Element> {
  const { list, filter } = props
  const [repositories] = await Promise.all([list])
  const filtered = filter(repositories)
  return (
    <ul className='grid place-items-center gap-5'>
      {filtered.map((repo, index) => {
        return (
          <li key={index}>
            <RepoPreview repository={repo} />
          </li>
        )
      })}
    </ul>
  )
}
