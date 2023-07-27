import './global.css'
export const metadata = {
  title: 'Portfolio | Lucas Franco Torres',
  description: 'Frontend Web Developer | SSR (Server Side Rendering) TDD (Test Driven Development)'
}

export default function RootLayout ({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body>
        <header className='p-3'>
          <h3 className='text-2xl font-bold'>lucastorres</h3>
        </header>
        <div className='p-5'>
          {children}
        </div>
      </body>
    </html>
  )
}
