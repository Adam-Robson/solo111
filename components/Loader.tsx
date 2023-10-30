import React from 'react'
import Image from 'next/image'

export default function Loader() {
  return (
    <div className="container w-screen mx-auto flex justify-center items-center">
      <Image
        src={`/gif/loading.gif`}
        width={`350`}
        height={`350`}
        alt={`a gif to display while page loads`}
      />
    </div>
  )
}
