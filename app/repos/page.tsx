import ReposList from '@/components/repos/ReposList'

export default function ReposPage (): JSX.Element {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <h1 className='text-4xl font-bold'>Take a look at my <span className='text-purple-600'>repositories</span></h1>
        <p role='paragraph'>Here, you'll find my training as <span className='font-bold'>web developer</span> and other works I consider my <span className='font-bold'>hobby projects</span>.</p>
      </div>
      <main className='flex flex-col gap-2 items-center'>
        <h2 className='text-3xl text-purple-600 font-bold'>Web Projects</h2>
        <ReposList />
      </main>
    </>
  )
}
