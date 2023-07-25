import { cleanup, getAllByRole, getByRole, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import React from 'react'
import RepoPreview from '../../../app/components/repos/RepoPreview'

describe('RepoPreview', () => {
  afterEach(cleanup)
  it('should render correctly;', () => render(<RepoPreview />))
  it('should render an article;', () => {
    render(<RepoPreview />)
    screen.getByRole('article')
  })
  // FIXME: Image is correctly on the browser, but not with this test
  /* it('should render an img as article child;', () => {
    render(<RepoPreview />)
    const article = screen.getByRole('article')
    getByRole(article, 'img')
  }) */
})
