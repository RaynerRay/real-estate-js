'use client';
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Menu, X, MoveDown, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileNavOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section>
      <nav ref={navRef}>
        <div className="py-2 px-2 bg-yellow-400">
          <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto">
            <div className="w-full px-4  lg:mb-0">
              <div className=" flex">
                <a className="group mr-6 inline-flex items-center text-xs" href="#">
                  <span className="mr-2 text-gray-900">
                    <Mail size={16} color="currentColor" />
                  </span>
                  <span className="text-gray-800 group-hover:gray-900">contact@shuffleux.com</span>
                </a>
                <a className="group inline-flex items-center text-xs" href="#">
                  <span className="mr-2 text-gray-900">
                    <Phone size={16} color="currentColor" />
                  </span>
                  <span className="text-gray-800 group-hover:text-yellow-200">Free call 24/7: (123) 456-7890</span>
                </a>
              </div>
            </div>
            <div className="w-1/3 px-4">
              <div className="lg:text-right">
               
                {/* <div className="inline-block py-1 px-3 leading-5 text-xs text-gray-800 bg-yellow-400 hover:bg-yellow-00 font-medium rounded-md" href="#">
                 
                 <div className="flex">
                 usd 
                 <ChevronDown /> 
                    </div> 
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="py-3 px-6 bg-gray-50 lg:py-3 lg:px-32 ">
          <div className="flex flex-wrap items-center justify-between">
            <a className="text-gray-900 text-2xl font-bold leading-none" href="/">
              {/* <img className="h-8" src="/logo.png" alt="" width="auto" /> */}
               PropertyZim
            </a>
            <button
              className="block lg:hidden"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              {mobileNavOpen ? <X className="h-8 w-8 text-gray-800" /> : <Menu className="h-8 w-8 text-gray-400" />}
            </button>
            <div className={`lg:flex flex-grow items-center ${mobileNavOpen ? 'block' : 'hidden'}`}>
              <ul className="lg:flex flex-grow justify-center">
                <li>
                  <a className="block px-6 py-2 text-gray-700 font-medium hover:text-yellow-400" href="#">Home</a>
                </li>
                <li>
                  <a className="block px-6 py-2 text-gray-700 font-medium hover:text-yellow-400" href="#">Explore</a>
                </li>
                <li>
                  <a className="block px-6 py-2 text-gray-700 font-medium hover:text-yellow-400" href="#">Company</a>
                </li>
                <li>
                  <a className="block px-6 py-2 text-gray-700 font-medium hover:text-yellow-400" href="/listings">Listings</a>
                </li>
                <li>
                  <a className="block px-6 py-2 text-gray-700 font-medium hover:text-yellow-400" href="#">Blog</a>
                </li>
                <li>
                  <a className="block px-6 py-2 text-gray-700 font-medium hover:text-yellow-400" href="#">Contact</a>
                </li>
              </ul>
              <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a className="block px-6 py-2 text-gray-700 font-medium hover:text-yellow-400" href="#">Sign in</a>
                <a className="inline-block py-3 px-3 leading-5 text-xs text-gray-900 bg-yellow-400 hover:bg-yellow-600 font-medium rounded-md" href="#">
                  List Your Property
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
