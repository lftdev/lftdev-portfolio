'use client'
import Image from 'next/image'
import { useState } from 'react'
import { GITHUB_ICON } from '../svg-icons'
export default function RepoThumb (props: { thumbnail: string }): JSX.Element {
  const { thumbnail } = props
  const [fallback, setFallback] = useState(false)
  return (
    <>
      {!fallback && (
        <Image
          className='object-cover w-full h-[180px]'
          onError={() => setFallback(true)}
          src={fallback ? '/images/repo-fallback-image.svg' : thumbnail}
          width={350} height={180}
          alt='Project live site thumbnail'
          priority
        />)}
      {fallback && (
        <div className='flex justify-center items-center'>
          {GITHUB_ICON(350, 180)}
        </div>
      )}
    </>
  )
}
