'use client'
import React from 'react'
import Link from 'next/link'
import type { FloatingCardProps } from '@/lib/types'
import { PiXCircleDuotone } from 'react-icons/pi'

export default function FloatingCard({
  selectedProject,
  onClose
}: FloatingCardProps) {
  return (
    <div className="floating-card">
      <div className="close-icon" onClick={onClose}>
        <PiXCircleDuotone />
      </div>

      <div className='text-xl md:text-2xl lg:text-3xl tracking-tighter subpixel-antialiased'>
        {selectedProject?.title}
      </div>

      <div className="text-sm md:text-lg lg:text-xl tracking-tighter subpixel-antialiased">
        {selectedProject?.description}
      </div>

      <div className='group-hover:visible invisible'>
        <p className="text-sm tracking-tighter subpixel-antialiased">{selectedProject?.description || ""}
        </p>
          <div className="flex justify-around items-baseline mt-6">
            <Link
              href={selectedProject?.githubLink || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </Link>

            <Link
              href={selectedProject?.liveLink || ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Link>
          </div>
        </div>
    </div>
  );
}
