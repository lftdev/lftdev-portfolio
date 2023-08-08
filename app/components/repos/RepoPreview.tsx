import Link from 'next/link'
import Repository from '@/classes/Repository'
import RepoThumbnail from './RepoThumbnail'
import { CODE_ICON, WINDOW_ICON } from '../svg-icons'
export default function RepoPreview (props: { repository: Repository }): JSX.Element {
  const { repository } = props
  return (
    <article className='group w-full h-44 rounded-lg border border-gray-700 overflow-hidden hover:scale-105 transition-all duration-150'>
      <RepoThumbnail thumbnail={repository.thumbnail} />
      <footer className='relative bottom-1/2 lg:bottom-72 lg:group-hover:bottom-1/2 transition-all duration-150'>
        <div className='flex justify-between px-2'>
          <Link title='Deploy' href={repository.ghPages} target='_blank' className='p-5 rounded-full bg-purple-500'>
            {WINDOW_ICON}
          </Link>
          <Link title='View code' href={repository.htmlUrl} target='_blank' className='p-5 rounded-full bg-gray-800'>
            {CODE_ICON}
          </Link>
        </div>
      </footer>
    </article>
  )
}
