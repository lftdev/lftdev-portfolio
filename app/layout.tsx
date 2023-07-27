import './global.css'
import { GITHUB_ICON, INSTAGRAM_ICON, LINKEDIN_ICON } from './components/svg-icons'
import Link from 'next/link'
export const metadata = {
  title: 'Portfolio | Lucas Franco Torres',
  description: 'Frontend Web Developer | SSR (Server Side Rendering) TDD (Test Driven Development)'
}

// TODO: add shadow effect to links on hover: [box-shadow:inset_0_0_100px_100px_rgba(255,255,255,0.1)]
export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body>
        <header className='flex justify-between items-center p-5'>
          <span>
            <h3 className='text-2xl font-bold'>lucastorres</h3>
          </span>
          <nav>
            <ul className='flex gap-4'>
              <li>
                <Link className='hover:text-pink-500' href='https://github.com/lftdev' target='_blank'>{GITHUB_ICON}</Link>
              </li>
              <li>
                <Link className='hover:text-pink-500' href='https://linkedin.com/in/frontdev-lucastorres' target='_blank'>{LINKEDIN_ICON}</Link>
              </li>
              <li>
                <Link className='hover:text-pink-500' href='https://www.instagram.com/lucastorres.29' target='_blank'>{INSTAGRAM_ICON}</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className='p-5'>
          {children}
        </div>
      </body>
    </html>
  )
}
