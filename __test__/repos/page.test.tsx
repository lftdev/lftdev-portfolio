import {cleanup, fireEvent, getAllByRole, getByRole, render, screen} from '@testing-library/react'
import {afterEach, describe, expect, it} from 'vitest'
import React from 'react'
import ReposPage from '../../app/repos/page'

describe('Home page', () => {
  afterEach(cleanup)
  it('should render correctly;', () => {
    render(<ReposPage />)
  })
  it('should display main title as h1;', () => {
    render(<ReposPage />)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.innerText).toBe('Take a look at my repositories')
  })
  it('should display a description;', () => {
    render(<ReposPage />)
    const p = screen.getByRole('paragraph')
    expect(p.innerText).toBe('Here you\'ll find my training as web developer and other projects.')
  })
  it('should render a main section;', () => {
    render(<ReposPage />)
    screen.getByRole('main')
  })
  it('should render an ul as main child;', () => {
    render(<ReposPage />)
    const main = screen.getByRole('main')
    getByRole(main, 'list')
  })
  it('should render li elements as ul children;', () => {
    render(<ReposPage />)
    const ul = getByRole(screen.getByRole('main'), 'list')
    getAllByRole(ul, 'listitem')
  })
  it('should render an article on each li as child;', () => {
    render(<ReposPage />)
    const ul = getByRole(screen.getByRole('main'), 'list')
    getAllByRole(ul, 'listitem').forEach(li => getByRole(li, 'article'))
  })
})
