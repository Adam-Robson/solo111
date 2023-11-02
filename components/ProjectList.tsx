import React, { useState } from 'react'
import FloatingCard from './FloatingCard'
import '@/lib/stylesheets/ProjectList.css'

export default function ProjectList() {
  const [showDescription, setShowDescription] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  const handleProjectHover = (description: string) => {
    setShowDescription(true);
    setSelectedProject(description);
  };

  const handleCloseCard = () => {
    setShowDescription(false);
    setSelectedProject('');
  };

  return (
    <div>
      {showDescription && (
        <FloatingCard description={selectedProject} onClose={handleCloseCard} />
      )}
      <div className="project-list">
        {/* Render your list of projects here */}
        <div onMouseEnter={() => handleProjectHover("Pantry Pal")}>
          Pantry Pal
        </div>
        <div onMouseEnter={() => handleProjectHover("Tally Ho")}>
          Tally Ho
        </div>
        <div onMouseEnter={() => handleProjectHover("Collabo")}>
         Collabo
        </div>
        <div onMouseEnter={() => handleProjectHover("Buddystock")}>
         Buddystock
        </div>
      </div>
    </div>
  );
}
