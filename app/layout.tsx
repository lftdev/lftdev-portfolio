import './global.css'
import { GITHUB_ICON, LINKEDIN_ICON } from './components/SVGIcon'
import Link from 'next/link'
import Heading from './components/html-customs/Heading'
export const metadata = {
  title: 'Portfolio | Lucas Franco Torres',
  description: 'Frontend Web Developer | SSR (Server Side Rendering) TDD (Test Driven Development)'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  const hoverHighlight = 'hover:text-purple-600'
  return (
    <html lang='en'>
      <body>
        <header className='fixed top-0 flex justify-around items-center w-full p-5 bg-[rgba(0,0,0,.8)] z-50'>
          <span>
            <Link href='/'>
              <Heading level={4} className='font-bold'>
                lucastorres
              </Heading>
            </Link>
          </span>
          <span className='absolute flex justify-center items-center px-10 bg-purple-600 font-bold top-3 -left-10 -rotate-45'>
            DEMO
          </span>
          <nav>
            <ul className='flex gap-4'>
              <li className=''>
                <Link className={hoverHighlight} href='https://github.com/lftdev' target='_blank'>
                  {GITHUB_ICON(16, 16, 'GitHub account')}
                </Link>
              </li>
              <li>
                <Link className={hoverHighlight} href='https://linkedin.com/in/frontdev-lucastorres' target='_blank'>
                  {LINKEDIN_ICON(16, 16, 'LinkedIn account')}
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
