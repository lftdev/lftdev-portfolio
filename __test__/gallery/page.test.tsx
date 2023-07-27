import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import GalleryPage from '../../app/gallery/page'

describe('Gallery Page', () => {
  afterEach(cleanup)
  it('should render correctly;', () => {
    return render(<GalleryPage />)
  })
  it('should render main title;', () => {
    render(<GalleryPage />)
    screen.getByText('My projects')
  })
  it('should display a grid;', () => {
    render(<GalleryPage />)
    screen.getByRole('grid')
  })
  it('should display articles inside the grid;', () => {
    render(<GalleryPage />)
    screen.getAllByRole('article')
  })
  it('each article should have an image as first child', () => {
    render(<GalleryPage />)
    const article = screen.getByRole('article')
    expect(article.firstElementChild).toBeInstanceOf(HTMLImageElement)
  })
  it('each article should have a heading as second child;', () => {
    render(<GalleryPage />)
    const article = screen.getByRole('article')
    expect(article.childNodes[1]).toBeInstanceOf(HTMLHeadingElement)
  })
  it('each article should have a paragraph as third child;', () => {
    render(<GalleryPage />)
    const article = screen.getByRole('article')
    expect(article.childNodes[2]).toBeInstanceOf(HTMLParagraphElement)
  })
})
