import React from 'react'
import Image from 'next/image'

export default function Loader() {
  return (
    <div className="container">
      <Image
        src={`/gif/loader.gif`}
        width={`350`}
        height={`350`}
        alt={`a gif to display while page loads`}
      />
    </div>
  )
}
