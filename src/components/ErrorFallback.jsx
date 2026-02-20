// src/components/ErrorFallback.jsx

import React from 'react';

export function ErrorFallback({ resetErrorBoundary }) {
  return (
    <div
      role="alert"
      className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center"
    >
      <h1 className="mb-4 text-2xl font-bold text-gray-900">
        Oops! Something went wrong.
      </h1>
      <p className="mb-8 text-gray-600">
        We're having trouble loading the page. Please try refreshing.
      </p>
      <button
        onClick={resetErrorBoundary}
        className="rounded-md bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700"
      >
        Reload Page
      </button>
    </div>
  );
}
