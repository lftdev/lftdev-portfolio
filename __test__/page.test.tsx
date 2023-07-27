import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import React from 'react'
import HomePage from '../app/page'

describe('Home page', () => {
  afterEach(cleanup)
  it('should render correctly;', () => {
    render(<HomePage />)
  })
  it('should render greeting;', () => {
    render(<HomePage />)
    screen.getByText('Nice to meet you!')
  })
  it('should render main description;', () => {
    render(<HomePage />)
    screen.getByText('But, I know, you are here to see the proof of it so...')
  })
  it('should display a call to action message;', () => {
    render(<HomePage />)
    screen.getByText('Let\'s go!')
  })
  it('should display a call to action link;', () => {
    render(<HomePage />)
    const link = screen.getByRole('link')
    expect(link.innerHTML).toBe('Let\'s go!')
  })
  it('should lead to gallery page when link clicked;', () => {
    render(<HomePage />)
    const link = screen.getByRole('link')
    fireEvent.click(link)
  })
})
