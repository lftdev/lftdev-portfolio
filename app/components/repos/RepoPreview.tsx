import Link from 'next/link'
import Repository from '@/classes/Repository'
import RepoThumbnail from './RepoThumbnail'

export default function RepoPreview (props: { repository: Repository }): JSX.Element {
  const { repository } = props
  return (
    <article className='w-96 max-w-full text-left break-words bg-slate-950 p-5 rounded-lg'>
      <RepoThumbnail thumbnail={repository.thumbnail} />
      <Link href={repository.htmlUrl} target='_blank'><h3 className='text-2xl'>{repository.name}</h3></Link>
      <p>{repository.description}</p>
      <div className='flex gap-5'>
        <Link href={repository.ghPages} target='_blank' className='py-5 w-1/2 rounded-md bg-purple-600 font-bold text-center'>Go to live site!</Link>
        <Link href={repository.htmlUrl} target='_blank' className='py-5 w-1/2 rounded-md bg-pink-500 font-bold text-center'>View code</Link>
      </div>
    </article>
  )
}
