import Link from 'next/link'
export default function HomePage (): JSX.Element {
  // Redundant role used for paragraph element was included as it was not being detected by tests.
  return (
    <main className='p-5 h-full'>
      <div className='grid gap-2'>
        <h2 className='text-3xl text-pink-500'>Nice to meet you!</h2>
        <h1 className='text-4xl'>
          My name is <span className='font-bold text-purple-600'>Lucas</span> and I'm Frontend Developer.
        </h1>
      </div>
      <div className='grid place-items-center h-56'>
        <p className='text-lg' role='paragraph'>But, I know, you are here to see the proof of it so...</p>
        <Link className='p-2 rounded-md bg-purple-600 font-bold' href='/repos'>Let's see my works!</Link>
      </div>
    </main>
  )
}
