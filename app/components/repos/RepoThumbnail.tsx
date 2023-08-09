'use client'
import Image from 'next/image'
import { useState } from 'react'
import { GITHUB_ICON } from '../svg-icons'
interface Props {
  alt: string
  thumbnail: string
}
export default function RepoThumb (props: Props): JSX.Element {
  const { alt, thumbnail } = props
  const [fallback, setFallback] = useState(false)
  return (
    <>
      {!fallback && (
        <Image
          className='object-cover w-full h-[180px]'
          onError={() => setFallback(true)}
          src={thumbnail}
          width={350} height={180}
          alt={alt}
          priority
        />)}
      {fallback && (
        <div className='flex justify-center items-center'>
          {GITHUB_ICON(alt, 350, 180)}
        </div>
      )}
    </>
  )
}
