"use client"
import React, { useState } from 'react';
import type { WritingListProps } from '@/lib/types'

export default function Writings({ writings }: WritingListProps) {
  const [selectedWritingId, setSelectedWritingId] = useState<number | null>(null);
  function handleHoveredWriting(writingId: number): void {
    setSelectedWritingId(writingId);
  }
  function handleLeaveHoveredWriting(): void {
    setSelectedWritingId(null);
  }
  return (
    <div className="max-w-2xl mx-auto p-4 hover:cursor-pointer">
      <ul>
        {
          writings.map((writing) => {
            const isHovered = selectedWritingId === writing.id;

            return (
              <li
                key={writing.id}
                className={isHovered ? 'hovered' : ''}
                onMouseEnter={() => handleHoveredWriting(writing.id)}
                onMouseLeave={handleLeaveHoveredWriting}
              >
                <section className="max-w-md sm:max-w-lg md:max-w-xl mx-auto min-h-min p-2 sm:p-4 md:p-6">
                  <div className="text-center text-lg/5 md:text-xl/6 subpixel-antialiased">
                    {writing.title}
                  </div>
                </section>

                {isHovered && (
                  <div className="max-w-sm mx-auto">
                    <div className="w-full my-2 text-sm/4 md:text-lg/5 subpixel-antialiased">
                      {writing.body}
                    </div>
                  </div>
                )}
              </li>
            )
          }
          )}
      </ul>
    </div>
  );
}
