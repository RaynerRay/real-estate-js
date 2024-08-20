
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const BreadcrumbProperty = ({ property, searchParams }) => {


  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3 mb-4">
        <li className="inline-flex items-center">
          <Link href="/">
            <span className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600">
              Home
            </span>
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            
              <Link href="/search"
              className="ml-1 text-sm font-medium text-gray-700 hover:text-green-600 md:ml-2 cursor-pointer"
            >
              Search Results
            </Link>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
              {property.title}
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};

export default BreadcrumbProperty;