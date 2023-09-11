import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';
// Supports weights 200-800
import '@fontsource-variable/karla';
// Supports weights 200-900
import '@fontsource-variable/source-code-pro';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
