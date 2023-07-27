'use client'
import Repository from '@/app/classes/Repository'
import Image from 'next/image'
import Link from 'next/link'

export default function RepoPreview (props: { repository: Repository }): JSX.Element {
  const { repository } = props
  console.log('THUMB: ', repository.thumbnail)
  return (
    <article className='w-96 max-w-full text-left break-words bg-slate-950 p-5 rounded-lg'>
      <Image src='/images/repo-default-view.svg' width={150} height={150} alt='Picture of the author' loader={() => repository.thumbnail} />
      <Link href={repository.html_url} target='_blank'><h3 className='text-2xl'>{repository.name}</h3></Link>
      <p>{repository.description}</p>
    </article>
  )
}
