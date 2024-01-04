import React from 'react'

export default function Container(
  { children }: { children: React.ReactNode }
) {
  return (
    <section className='min-h-screen h-screen max-w-screen w-full'>
      {children}
    </section>
  )
}
