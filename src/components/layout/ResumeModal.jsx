// src/components/layout/ResumeModal.jsx

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { X, Download, FileText } from "lucide-react";
import { RESUME_URL } from "../../assets/config";

export default function ResumeModal({ isOpen, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Handle Escape key + safe scroll lock + focus management
  useEffect(() => {
    if (!isOpen) return;

    // Cache original overflow to safely restore it later
    const originalStyle = window.getComputedStyle(document.body).overflow;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Lock background scroll
    document.body.style.overflow = "hidden";

    // Move focus to close button for screen readers
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restore the exact original overflow state
      document.body.style.overflow = originalStyle;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-modal-title"
        className="bg-white rounded-2xl w-full max-w-5xl h-[85vh] sm:h-[90vh] flex flex-col shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-5 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-violet-100 text-violet-600 rounded-lg hidden sm:block">
              <FileText size={20} aria-hidden="true" />
            </div>
            <h2
              id="resume-modal-title"
              className="text-lg sm:text-xl font-bold text-gray-900"
            >
              Resume Preview
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={RESUME_URL}
              download
              className="
                group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 
                text-sm font-semibold text-white bg-violet-600 rounded-xl 
                hover:bg-violet-700 hover:shadow-md transition-all
                focus:outline-none focus:ring-4 focus:ring-violet-500/30
              "
            >
              <Download size={18} aria-hidden="true" className="group-hover:-translate-y-0.5 transition-transform" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">Download</span>
            </a>

            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close resume preview"
              className="
                p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-200 
                rounded-full transition-colors
                focus:outline-none focus:ring-4 focus:ring-violet-500/30
              "
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* PDF Viewer with Mobile Fallback */}
        <div className="flex-grow bg-gray-100/50 relative">
          <object
            data={`${RESUME_URL}#view=FitH`}
            type="application/pdf"
            className="w-full h-full absolute inset-0"
            aria-label="Resume PDF Document"
          >
            {/* Fallback UI: Shows only if browser fails to render the PDF inline */}
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="w-16 h-16 bg-violet-100 text-violet-600 rounded-full flex items-center justify-center mb-4">
                <FileText size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                PDF Viewer Unavailable
              </h3>
              <p className="text-gray-600 max-w-sm mb-6">
                Your browser doesn't support inline PDFs, or you are on a mobile device. Please download the file to view it.
              </p>
              <a
                href={RESUME_URL}
                download
                className="
                  inline-flex items-center gap-2 px-6 py-3 
                  text-base font-bold text-white bg-violet-600 rounded-full 
                  hover:bg-violet-700 shadow-lg transition-all
                "
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </object>
        </div>
        
      </div>
    </div>
  );
}

ResumeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
