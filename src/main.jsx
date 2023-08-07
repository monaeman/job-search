import React from 'react';
import { createRoot } from 'react-dom/client';
import JobSearchApp from './components/JobSearchApp';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobSearchApp />
  </React.StrictMode>
);
