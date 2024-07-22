import React from 'react';
import Image from 'next/image';
import { Home, Info, Support, ShoppingBag, User } from 'lucide-react';

const Footer = () => {
  return (
    <section className="pt-12 md:pt-20 pb-8 bg-gray-900 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-wrap -mx-4 pb-20 border-b border-blueGray-800">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <div className="max-w-xs sm:max-w-md">
              <a className="inline-block mb-20" href="#">
                <Image className="block " src="/logo.png" alt="Logo" width={80} height={80} />
              </a>
              <p className="sm:text-xl text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis.
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 lg:w-2/12 px-4 mb-12 sm:mb-0">
            <div>
              <h6 className="font-medium text-gray-400 mb-6">Company</h6>
              <ul className="list-none mb-0">
                <li className="mb-4">
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">About</a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">Support</a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">Products</a>
                </li>
                <li>
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">Career</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/3 lg:w-2/12 px-4 mb-12 sm:mb-0">
            <div>
              <h6 className="font-medium text-gray-400 mb-6">Help</h6>
              <ul className="list-none mb-0">
                <li className="mb-4">
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">Customer Support</a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">Track Delivery</a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-1/3 lg:w-2/12 px-4 mb-12">
            <div>
              <h6 className="font-medium text-gray-400 mb-6">Resources</h6>
              <ul className="list-none mb-0">
                <li className="mb-4">
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">Free Brochures</a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">Development Tutorial</a>
                </li>
                <li className="mb-4">
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">How to - Blog</a>
                </li>
                <li>
                  <a className="inline-block font-medium text-white hover:text-yellow-500" href="#">Youtube Playlist</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-6">
          <div className="sm:flex items-center justify-between">
            <span className="inline-block mb-8 sm:mb-0 mr-2 text-gray-400">© Copyright 2024. All Rights Reserved.</span>
            <img className="block" src="/vendia-assets/logos/brands/cards.png" alt="Payment Methods" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
