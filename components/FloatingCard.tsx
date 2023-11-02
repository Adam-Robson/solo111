import React from 'react';
import '@/lib/stylesheets/FloatingCard.css';
import { FloatingCardProps } from '@/lib/types';

export default function FloatingCard({
  description,
  onClose
}: FloatingCardProps) {
  return (
    <div className="floating-card">
      <div className="close-icon" onClick={onClose}>
        X
      </div>
      <div className="description">
        {description}
      </div>
    </div>
  );
}
