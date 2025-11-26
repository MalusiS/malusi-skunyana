// src/components/layout/ResumeModal.jsx

import React from 'react';
import { X, Download } from 'lucide-react';
import { RESUME_URL } from '../../assets/config';

/**
 * Renders the Resume in a modal overlay.
 * @param {object} props
 * @param {boolean} props.isOpen - Controls visibility.
 * @param {function} props.onClose - Function to close the modal.
 */
export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] bg-black bg-opacity-80 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl w-full max-w-5xl h-[90vh] flex flex-col shadow-2xl transform transition-all duration-300 scale-100"
        onClick={e => e.stopPropagation()} // Prevent close on modal click
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">Resume Preview</h3>
          
          <div className="flex items-center gap-3">
            {/* Download Button inside Modal */}
            <a 
              href={RESUME_URL} 
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition"
            >
              <Download size={16} />
              <span className="hidden sm:inline">Download PDF</span>
            </a>
            
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition"
              aria-label="Close Resume Preview"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-grow bg-gray-100 overflow-hidden relative">
          <iframe 
            src={`${RESUME_URL}#toolbar=0`} // Attempt to hide default toolbar
            className="w-full h-full"
            title="Resume PDF"
          >
            {/* Fallback for browsers that don't support iframes/PDFs */}
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <p className="text-gray-600 mb-4">
                Your browser does not support viewing PDFs inline.
              </p>
              <a 
                href={RESUME_URL} 
                download
                className="text-indigo-600 font-semibold hover:underline"
              >
                Download the PDF to view it.
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </div>
  );
}
