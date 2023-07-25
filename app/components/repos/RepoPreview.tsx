import Image from 'next/image'

export default function RepoPreview (props: { title: string, description: string }): JSX.Element {
  const { title, description } = props
  return (
    <article>
      <Image src='/images/repo-default-view.svg' width={150} height={150} alt='Picture of the author' />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
