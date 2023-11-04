import React from 'react'
import Loader from '@/components/Loader'

export default function loading() {
  return (
    <div className='min-h-full max-w-2xl mx-auto flex items-center justify-center'>
      <Loader />
    </div>
  )
}
