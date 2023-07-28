import './global.css'
import { GITHUB_ICON, INSTAGRAM_ICON, LINKEDIN_ICON } from './components/svg-icons'
import Link from 'next/link'
export const metadata = {
  title: 'Portfolio | Lucas Franco Torres',
  description: 'Frontend Web Developer | SSR (Server Side Rendering) TDD (Test Driven Development)'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  const hoverHighlight = 'hover:text-purple-600'
  return (
    <html lang='en'>
      <body>
        <header className='fixed top-0 flex justify-between items-center w-full p-5 bg-[rgba(0,0,0,.8)]'>
          <span>
            <Link href='/'>
              <h3 className='text-2xl font-bold'>lucastorres</h3>
            </Link>
          </span>
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
      </body>
    </html>
  )
}
