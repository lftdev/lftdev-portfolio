import ProjectPreview from './components/ProjectPreview'

export default function GalleryPage (): JSX.Element {
  return (
    <>
      <h1>My projects</h1>
      <section role='grid'>
        <ProjectPreview />
      </section>
    </>
  )
}
