import React from 'react';
import Image from 'next/image';
import { Button } from 'lucide-react';
import Link from 'next/link';

const Agents = ({ companies }) => {
  return (
    <section className="py-4 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="pt-5 px-5 pb-6 bg-white border rounded-xl">
          <h3 className="mb-7 text-lg font-semibold">Our Top Agencies</h3>
          <div className="flex flex-wrap -m-3">
            {companies.map((company) => (
              <div key={company.id} className="w-full p-3">
                <div className="flex flex-wrap items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <div className="flex flex-wrap items-center -m-1.5">
                      <div className="w-auto p-1.5">
                        <Image
                          className="h-12"
                          src={company.imageUrl}
                          alt={company.title}
                          width={48}
                          height={48}
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h3 className="font-heading mb-1 font-semibold text-md">{company.title}</h3>
                        <Link
                      className="inline-flex flex-wrap items-center px-3 py-1.5 text-sm text-gray-700 font-medium bg-gray-100 hover:bg-gray-200 rounded-lg transition duration-300"
                      href={`/companies/${company.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile & Properties
                    </Link>
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
