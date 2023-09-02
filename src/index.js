import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

// Supports 100-900
import '@fontsource-variable/work-sans';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
