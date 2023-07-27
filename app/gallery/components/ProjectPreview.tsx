export default function ProjectPreview (props: { title: string, description: string }): JSX.Element {
  const { title, description } = props
  return (
    <article>
      <img src='' alt='' />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
