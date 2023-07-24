import React from 'react';

export default function ResumeButton({ handleNavigate }) {
  
  return (
    <>
      <article className="m-4">
        <button
          onClick={ () => handleNavigate() }
          className="m-6"
        >
          resume
        </button>
      </article>
    </>
  );
}



