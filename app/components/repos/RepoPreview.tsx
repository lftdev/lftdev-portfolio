import Image from 'next/image'

export default function RepoPreview (props: { title: string, description: string }): JSX.Element {
  const { title, description } = props
  return (
    <article className='w-96 max-w-full text-left break-words bg-slate-950 p-5 rounded-lg'>
      <Image src='/images/repo-default-view.svg' width={150} height={150} alt='Picture of the author' />
      <h3 className='text-2xl'>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
