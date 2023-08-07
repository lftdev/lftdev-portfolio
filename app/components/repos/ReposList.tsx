import Heading from '../html-customs/Heading'
import RepoPreview from './RepoPreview'
import Repository from '@/app/classes/Repository'
interface Props {
  list: Promise<Repository[]>
  title: string
  filter: (list: Repository[]) => Repository[]
}
export default async function ReposList (props: Props): Promise<JSX.Element> {
  const { list, title, filter } = props
  const [repositories] = await Promise.all([list])
  const filtered = filter(repositories)
  return (
    <>
      <div className='text-left'>
        <Heading level={4} className='text-pink-500 font-bold'>
          {title}
        </Heading>
      </div>
      <ul className='grid place-items-center gap-5'>
        {filtered.map((repo, index) => {
          return (
            <li key={index}>
              <RepoPreview repository={repo} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
