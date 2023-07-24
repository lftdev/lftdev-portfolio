import {cleanup, fireEvent, render, screen} from '@testing-library/react'
import {afterEach, describe, expect, it} from 'vitest'
import React from 'react'
import HomePage from '../app/page'

describe('Home page', () => {
  afterEach(cleanup)
  it('should render correctly;', () => {
    render(<HomePage/>)
  })
  it('should display a greet;', () => {
    render(<HomePage/>)
    screen.getByText('Nice to meet you!')
  })
  it('should display a presentation as heading of level 1;', () => {
    render(<HomePage/>)
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1.innerText).toBe('My name is Lucas and I\'m Frontend Developer.')
  })
  it('should display a paragraph;', () => {
    render(<HomePage/>)
    const p = screen.getByRole('paragraph')
    console.log(p.innerText)
    expect(p.innerText).toBe('But, I know, you are here to see the proof of it so...')
  })
  it('should display a call to action link;', () => {
    render(<HomePage/>)
    const link = screen.getByRole('link')
    expect(link.innerText).toBe('Let\'s see my works!')
  })
  it('should lead to repos page when click on call to action link;', () => {
    render(<HomePage/>)
    expect(screen.getByText('Let\'s see my works!').getAttribute('href')).toBe('/repos')
  })
})
