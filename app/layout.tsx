import './global.css'
import { GITHUB_ICON, LINKEDIN_ICON } from './components/SVGIcon'
import Link from 'next/link'
import Heading from './components/html-customs/Heading'
import ThemeRegistry from './components/ThemeRegistry'
export const metadata = {
  title: 'Lucas Franco Torres',
  description: 'Frontend Web Developer | Next.js, React, tailwindcss and TDD (Test Driven Development)'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  const socialNavItems = [
    { link: 'https://github.com/lftdev', icon: GITHUB_ICON(16, 16, 'GitHub account') },
    { link: 'https://linkedin.com/in/frontdev-lucastorres', icon: LINKEDIN_ICON(16, 16, 'LinkedIn account') }
  ]
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry options={{ key: 'mui' }} themeMode='dark'>
          <header className='fixed top-0 flex justify-around items-center w-full p-5 z-50 bg-inherit'>
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
                {socialNavItems.map((socialNavItem, index) => (
                  <li key={index}>
                    <Link className='hover:text-purple-600' href={socialNavItem.link} target='_blank' rel='noopener'>
                      {socialNavItem.icon}
                    </Link>
                  </li>))}
              </ul>
            </nav>
          </header>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
