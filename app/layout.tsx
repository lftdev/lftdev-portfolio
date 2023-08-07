import './global.css'
import { GITHUB_ICON, INSTAGRAM_ICON, LINKEDIN_ICON } from './components/svg-icons'
import Link from 'next/link'
import Heading from './components/html-customs/Heading'
export const metadata = {
  title: 'Portfolio | Lucas Franco Torres',
  description: 'Frontend Web Developer | SSR (Server Side Rendering) TDD (Test Driven Development)'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  const hoverHighlight = 'hover:text-purple-600'
  const warning = 'This portfolio is currently under development. Some features may be limited.'
  return (
    <html lang='en'>
      <body>
        <header className='fixed top-0 flex justify-around items-center w-full p-5 bg-[rgba(0,0,0,.8)]'>
          <span>
            <Link href='/'>
              <Heading level={4} className='font-bold'>
                lucastorres
              </Heading>
            </Link>
          </span>
          <p className='absolute px-10 bg-purple-600 font-bold top-5 -left-12 -rotate-45'>DEV PHASE</p>
          <nav>
            <ul className='flex gap-4'>
              <li className=''>
                <Link className={hoverHighlight} href='https://github.com/lftdev' target='_blank'>
                  {GITHUB_ICON}
                </Link>
              </li>
              <li>
                <Link className={hoverHighlight} href='https://linkedin.com/in/frontdev-lucastorres' target='_blank'>
                  {LINKEDIN_ICON}
                </Link>
              </li>
              <li>
                <Link className={hoverHighlight} href='https://www.instagram.com/lucastorres.29' target='_blank'>
                  {INSTAGRAM_ICON}
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <p className='text-center font-bold'>
            {warning}
          </p>
        </footer>
      </body>
    </html>
  )
}
