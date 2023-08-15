import Link from 'next/link'
import Heading from './components/html-customs/Heading'
export default function HomePage (): JSX.Element {
  // Redundant role used for paragraph element was included as it was not being detected by tests.
  const radiance = 'before:rounded-full before:animate-pulse before:[box-shadow:0px_0px_200px_100px_rgba(240,129,181,1)] before:-z-50'
  return (
    <div className='flex flex-col justify-center max-w-6xl h-full px-5 pt-[72px]'>
      <main className='p-5'>
        <div className='grid gap-2'>
          <Heading level={2} className='text-pink-500'>
            Nice to meet you!
          </Heading>
          <Heading level={1}>
            My name is <span className='font-bold text-purple-600 animate-heartbeat'>Lucas</span> and I'm Frontend Developer.
          </Heading>
        </div>
        <div className={`grid place-items-center h-56 ${radiance}`}>
          <p className='text-lg' role='paragraph'>
            But, I know, you are here to see the proof of it so...
          </p>
          <Link className='p-2 rounded-md bg-purple-600 font-bold' href='./repos'>
            Let's see my works!
          </Link>
        </div>
      </main>
    </div>
  )
}
