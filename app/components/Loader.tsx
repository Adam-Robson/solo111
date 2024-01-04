import React from 'react'
import Image from 'next/image'

export default function Loader() {
  return (
    <div className="container my-12 mx-auto py-24">
      <Image
        src={`/gif/abstract.gif`}
        width={`450`}
        height={`450`}
        alt={`a gif to display while page loads`}
        className='rounded-md shadow-md'
      />
    </div>
  )
}
