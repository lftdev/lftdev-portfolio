import Repository from '@/classes/Repository'
import RepoThumbnail from './RepoThumbnail'
import { CODE_ICON, WINDOW_ICON } from '../SVGIcon'
import { Button, ButtonGroup } from '@mui/material'
export default function RepoPreview (props: { repository: Repository }): JSX.Element {
  const { repository } = props
  return (
    <article className='group w-full h-44 rounded-lg border border-gray-700 overflow-hidden hover:scale-105 transition-all duration-150'>
      <RepoThumbnail alt={repository.name + ' thumbnail'} thumbnail={repository.thumbnail} />
      <footer className='relative bottom-16'>
        <ButtonGroup>
          <Button href={repository.deploy} target='_blank' variant='contained' startIcon={WINDOW_ICON(32, 32, 'Deploy website')} rel='noopener'>
            Deploy
          </Button>
          <Button href={repository.htmlUrl} target='_blank' variant='contained' endIcon={CODE_ICON(32, 32, 'View source code')} color='secondary' rel='noopener'>
            Source
          </Button>
        </ButtonGroup>
      </footer>
    </article>
  )
}
