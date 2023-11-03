import React from 'react'
import Image from 'next/image'

export default function Loader() {
  return (
    <div className="container">
      <Image
        src={`/gif/loader.gif`}
        width={`650`}
        height={`650`}
        alt={`a gif to display while page loads`}
        className='rounded-md shadow-md'
      />
    </div>
  )
}
