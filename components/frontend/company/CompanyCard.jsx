import { Phone } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

// Utility function to truncate text to a specified word count
const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};

const CompanyCard = ({image, description, title, slug, phone}) => {
  return (

    <div className="w-full sm:w-1/2 lg:w-1/4 p-3">
      <div className="p-6 pb-7 h-full bg-white border rounded-xl">
        <div className="relative flex justify-center items-center mb-5 h-32 bg-neutral-100 overflow-hidden rounded-md">
          <div className="absolute flex items-center justify-center bg-white w-20 h-20 rounded-full">
            <Image height={800} width={800} src={image} alt={title} />
          </div>
        </div>
        <h3 className="font-heading mb-3 text-lg font-semibold border-b border-gray-200 text-center">{title}</h3>
        {/* <div className="flex gap-2 border-b border-gray-200 ">
            <Phone className="p-1 text-gray-900"/>
            <p className="mb-2 text-blue-900 ">{phone}</p>
        </div> */}
        
        
        {/* <p className="mb-4 text-gray-600 ">{truncateText(description, 10)}</p> */}

        <Link
          className="inline-flex flex-wrap items-center justify-center px-5 py-2 text-sm text-center text-gray-800 hover:bg-slate-200 bg-slate-200/20 hover:bg-opacity-95 rounded-lg focus:ring-4 focus:ring-neutral-400"
          href={`/companies/${slug}`}
        >
          <span className="mr-3 font-medium">View Full Profile</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33333 3.3335L14 8.00016M14 8.00016L9.33333 12.6668M14 8.00016L2 8.00016"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
 
  )
}

export default CompanyCard