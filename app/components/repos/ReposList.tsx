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
      <div className='text-left mb-10'>
        <Heading level={6}>
          {title}
        </Heading>
      </div>
      <div className='grid place-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {filtered.map((repo, index) => <RepoPreview key={index} repository={repo} />)}
      </div>
    </>
  )
}
