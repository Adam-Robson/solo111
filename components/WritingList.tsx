import React from 'react'
import { writings } from '@/lib/data'
import type { WritingType } from '@/lib/types'

export default function WritingList() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <ul className="mt-4">{writings.map((writing: WritingType) => (
        <li key={writing.id}>
          <div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto h-32 sm:h-40 p-6 sm:p-10 md:p12">
            <h4 className="text-center text-lg/5 md:text-xl/6">{writing.title}</h4>
            <p className="my-2 text-sm/4 md:text-lg/5">{writing.body}</p>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}
