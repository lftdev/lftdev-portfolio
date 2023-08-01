'use client'
import Image from 'next/image'
import { useState } from 'react'
export default function RepoThumb (props: { thumbnail: string }): JSX.Element {
  const { thumbnail } = props
  const [fallback, setFallback] = useState(false)
  return (
    <Image
      className='object-cover'
      onError={() => setFallback(true)}
      src={fallback ? '/images/repo-fallback-image.svg' : thumbnail}
      width={500} height={150}
      alt='Project live site thumbnail'
      priority
    />
  )
}
