import Link from 'next/link'
import Repository from '@/classes/Repository'
import RepoThumbnail from './RepoThumbnail'
import { CODE_ICON, WINDOW_ICON } from '../svg-icons'
// TODO: add tabs on each article showing used languages
// TODO: make round deploy and code buttons
export default function RepoPreview (props: { repository: Repository }): JSX.Element {
  const { repository } = props
  return (
    <article className='w-80 text-left break-words bg-slate-950 rounded-lg overflow-hidden'>
      <RepoThumbnail thumbnail={repository.thumbnail} />
      <footer>
        <Link href={repository.htmlUrl} target='_blank'>
          <h3 className='text-2xl'>
            {repository.name}
          </h3>
        </Link>
        <p>{repository.description}</p>
        <div className='flex justify-between'>
          <Link href={repository.ghPages} target='_blank' className='min-w-[100px] p-5 rounded-md bg-purple-500 font-bold text-center'>
            DEPLOY
            {WINDOW_ICON}
          </Link>
          <Link href={repository.htmlUrl} target='_blank' className='min-w-[100px] p-5 rounded-md bg-gray-800 font-bold text-center'>
            CODE
            {CODE_ICON}
          </Link>
        </div>
      </footer>
    </article>
  )
}
