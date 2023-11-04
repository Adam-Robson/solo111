import PDF from '@/components/PDF'
import React from 'react'

export default function ResumePage() {
  return (
    <div className="min-h-screen max-w-3xl w-11/12 mx-auto flex flex-col justify-center items-center p-24">
      <h1>resume</h1>
      <div className="container">
        <PDF />
      </div>
    </div>
  )
}
