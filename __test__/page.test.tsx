import {cleanup, render, screen} from '@testing-library/react'
import {afterEach, describe, it} from 'vitest'
import React from 'react'
import HomePage from '../app/page'

describe('Home page', () => {
  afterEach(cleanup)
  it('should render correctly;', () => {
    render(<HomePage/>)
  })
  it('should render main title;', () => {
    render(<HomePage/>)
    screen.getByText('Nice to meet you! I\'m Lucas Torres, Frontend Developer.')
  })
})
