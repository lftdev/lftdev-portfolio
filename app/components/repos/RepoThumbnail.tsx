'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
export default function RepoThumb (props: { thumbnail: string }): JSX.Element {
  const { thumbnail } = props
  const [noImgError, setNoImgError] = useState(false)
  useEffect(() => {
    setNoImgError(false)
  }, [thumbnail])
  return <Image onError={() => setNoImgError(true)} src={noImgError ? '/images/repo-default-view.svg' : thumbnail} width={150} height={150} alt='Project live site thumbnail' />
}
