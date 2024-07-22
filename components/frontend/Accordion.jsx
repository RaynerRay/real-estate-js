'use client';

import { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Accordion = ({ title, items, isOpen, onToggle }) => {
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="py-6 border-b border-coolGray-200">
      <div
        className="flex justify-between items-center flex-wrap gap-4 cursor-pointer"
        onClick={onToggle}
      >
        <p className="text-rhino-700 font-semibold">{title}</p>
        <span
          className={`inline-block transform transition-transform ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          <ChevronDown size={24} />
        </span>
      </div>
      <div
        ref={containerRef}
        style={isOpen ? { height: height } : { height: 0 }}
        className="overflow-hidden duration-500"
      >
        <ul className="text-coolGray-700 flex flex-col gap-2 mt-4">
          {items.map((item, index) => (
            <li key={index} className="hover:text-coolGray-800 transition duration-200">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
