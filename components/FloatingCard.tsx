import React from 'react';
import '@/lib/stylesheets/FloatingCard.css';
import type { FloatingCardProps } from '@/lib/types';
import { PiXCircleDuotone } from 'react-icons/pi';

export default function FloatingCard({
  project,
  onClose
}: FloatingCardProps) {
  return (
    <div className="floating-card">
      <div className="close-icon" onClick={onClose}>
        <PiXCircleDuotone />
      </div>
      <div>{project.title}</div>
      <div className="description">
        {project.description}
      </div>
      <div>{project.githubLink}</div>
      <div>{project.liveLink}</div>
    </div>
  );
}
