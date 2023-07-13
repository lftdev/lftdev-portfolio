import Link from 'next/link'
import { TX_HIGHLIGHT, BTN_TYPE1 } from './style-classes'

export default function HomePage (): JSX.Element {
  return (
    <main className='p-5 h-full'>
      <div className='grid gap-2'>
        <h2 className='text-3xl text-pink-500'>Nice to meet you!</h2>
        <h1 className='text-4xl'>
          My name is<span className={`font-bold ${TX_HIGHLIGHT}`}> Lucas </span>and I'm Frontend Developer.
        </h1>
        <p className='text-lg'>
          But, I know, you are here to see the proof of it so...
        </p>
      </div>
      <div className='grid place-items-center h-56'>
        <Link className={BTN_TYPE1} href='/gallery'>Let's go!</Link>
      </div>
    </main>
  )
}
