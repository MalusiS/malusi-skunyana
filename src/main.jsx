// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App.jsx';
import { ErrorFallback } from './components/ErrorFallback.jsx'; // imported separately
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()} // reset logic for user-friendly recovery
      onError={(_error, _info) => {
        // Send errors to tracking service in production
        console.error('Caught an error:', _error, _info);
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
