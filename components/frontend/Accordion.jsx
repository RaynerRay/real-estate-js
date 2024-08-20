'use client';

import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex items-center justify-between w-full py-4 text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-gray-900">{title}</span>
        <span className="ml-6 flex items-center">
          {isOpen ? (
              <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
           
          ) : (
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;

