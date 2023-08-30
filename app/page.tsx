import { Button } from '@mui/material'
import Heading from './components/html-customs/Heading'
export default function HomePage (): JSX.Element {
  // Redundant role used for paragraph element was included as it was not being detected by tests.
  const radiance = 'before:rounded-full before:animate-pulse before:[box-shadow:0px_0px_200px_100px_rgba(240,129,181,1)]'
  return (
    <div className='flex flex-col justify-center max-w-6xl h-full px-5 pt-[72px]'>
      <main className='p-5'>
        <div className='grid gap-2 relative z-10'>
          <Heading level={2} className='text-pink-500'>
            Nice to meet you!
          </Heading>
          <Heading level={1}>
            My name is <span className='font-bold text-purple-600'>Lucas</span> and I'm Frontend Developer.
          </Heading>
        </div>
        <div className={`grid place-items-center h-56 ${radiance}`}>
          <Button href='./repos' variant='contained'>
            Let's see my works!
          </Button>
        </div>
      </main>
    </div>
  )
}
