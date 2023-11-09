import React from 'react'
import { writings } from '@/lib/data'
import type { WritingType } from '@/lib/types'

export default function WritingList() {
  return (
    <div className="max-w-2xl mx-auto px-4">
      <ul className="mt-4">{writings.map((writing: WritingType) => (
        <li key={writing.id}>
          <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto min-h-min p-2 sm:p-4 md:p-6">
            <h4 className="text-center text-lg/5 md:text-xl/6">{writing.title}</h4>
            <p className="my-2 text-sm/4 md:text-lg/5">{writing.body}</p>
          </div>
        </li>
      ))}
      </ul>
    </div>
  )
}
