import Project from '@/app/classes/Project'
import { Button, ButtonGroup } from '@mui/material'
import Link from 'next/link'
import { CODE_ICON, WINDOW_ICON } from '../SVGIcon'
import ProjectThumbnail from './ProjectThumbnail'

export default function ProjectPreview (props: { project: Project }): JSX.Element {
  const { project } = props
  return (
    <article className='group w-full h-44 rounded-lg border border-gray-700 overflow-hidden hover:scale-105 transition-all duration-150'>
      <ProjectThumbnail alt={project.name + ' thumbnail'} thumbnail={project.thumbnail} />
      <footer className='relative bottom-16'>
        <ButtonGroup>
          <Button href={project.deployUrl} target='_blank' variant='contained' startIcon={WINDOW_ICON(32, 32, 'Deploy website')} rel='noopener' component={Link}>
            Deploy
          </Button>
          <Button href={project.url} target='_blank' variant='contained' endIcon={CODE_ICON(32, 32, 'View source code')} color='secondary' rel='noopener' component={Link}>
            Source
          </Button>
        </ButtonGroup>
      </footer>
    </article>
  )
}
