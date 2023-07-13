import RootLayout from '../app/layout'
import {cleanup, render, screen} from '@testing-library/react'
import {afterEach, describe, it} from 'vitest'
describe('RootLayout', () => {
  afterEach(cleanup)
  it('should render correctly', () => render(<RootLayout children={undefined}/>))
  it('should render header;', () => {
    render(<RootLayout children={undefined}/>)
    screen.getByRole('banner')
  })
  it('should render header title;', () => {
    render(<RootLayout children={undefined}/>)
    screen.getByText('lucastorres')
  })
})
