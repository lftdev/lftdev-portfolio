import Link from 'next/link'
import Repository from '@/classes/Repository'
import RepoThumbnail from './RepoThumbnail'
import { CODE_ICON, WINDOW_ICON } from '../svg-icons'
export default function RepoPreview (props: { repository: Repository }): JSX.Element {
  const { repository } = props
  return (
    <article className='group w-full h-44 rounded-lg border border-gray-700 overflow-hidden hover:scale-105 transition-all duration-150'>
      <RepoThumbnail alt={repository.name + ' thumbnail'} thumbnail={repository.thumbnail} />
      <footer className='relative bottom-1/2'>
        <div className='flex justify-between px-2'>
          <Link title='Deploy' href={repository.deploy} target='_blank' className='flex justify-center items-center gap-2 p-5 rounded-full font-bold bg-purple-500 group-hover:after:animate-clircle-in-center group-hover:after:content-["Deploy"]'>
            {WINDOW_ICON}
          </Link>
          <Link title='View code' href={repository.htmlUrl} target='_blank' className='flex justify-center items-center gap-2 p-5 rounded-full bg-gray-800  font-bold group-hover:before:animate-clircle-in-center group-hover:before:content-["Source"]'>
            {CODE_ICON}
          </Link>
        </div>
      </footer>
    </article>
  )
}
