import React from 'react';
import Image from 'next/image';
import { Home, Info, Support, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className="pt-12 md:pt-20 pb-8 bg-white ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap -mx-4 pb-20 border-b border-blueGray-800">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-xs sm:max-w-md">
              <Link className="inline-block mb-4" href="/">
                <Image className="block " src="/logo.png" alt="Logo" width={200} height={200} />
              </Link>
             
            </div>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-3/12 px-4 mb-12 sm:mb-0">
            <div>
              <h6 className="font-medium text-gray-700 mb-6">Company</h6>
              <ul className="list-none mb-0">
                <li className="mb-4">
                  <Link className="inline-block font-medium text-gray-900 hover:text-yellow-500" href="/about">About</Link>
                </li>
                <li className="mb-4">
                  <Link className="inline-block font-medium text-gray-900 hover:text-yellow-500" href="/search">All Listings</Link>
                </li>
                <li className="mb-4">
                  <Link className="inline-block font-medium text-gray-900 hover:text-yellow-500" href="/blogs">Blogs & News</Link>
                </li>
             
              </ul>
            </div>
          </div>
          <div className="w-1/2 sm:w-1/2 lg:w-3/12 px-4 mb-12 sm:mb-0">
            <div>
              <h6 className="font-medium text-gray-700 mb-6">Help</h6>
              <ul className="list-none mb-0">
                <li className="mb-4">
                  <a className="inline-block font-medium text-gray-900 hover:text-yellow-500" href="/contact">Contact</a>
                </li>
              
                <li className="mb-4">
                  <a className="inline-block font-medium text-gray-900 hover:text-yellow-500" href="/terms-and-conditions">Terms & Conditions</a>
                </li>
                <li>
                  {/* <a className="inline-block font-medium text-gray-900 hover:text-yellow-500" href="privacy-policy">Privacy Policy</a> */}
                </li>
              </ul>
            </div>
          </div>
         
        </div>
        <div className="pt-6">
          <div className="sm:flex items-center justify-between">
            <span className="inline-block mb-8 sm:mb-0 mr-2 text-gray-900">© Copyright 2024. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
