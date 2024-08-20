'use client';
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Menu, X, ChevronDown, LogOut, User } from 'lucide-react';
import Link from 'next/link';

const Navbar = ({ isLoggedIn = false, userName = "User" }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navRef = useRef();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMobileNavOpen(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const NavLink = ({ href, children }) => (
    <Link href={href}>
      <span className="block px-4 py-2 text-gray-700 font-medium hover:text-green-400" onClick={toggleMobileNav}>
        {children}
      </span>
    </Link>
  );

  return (
    <nav ref={navRef} className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <div className="text-gray-900 text-2xl font-bold leading-none">
                Property<span className='text-green-500'>Zim</span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/explore">Explore</NavLink>
              <NavLink href="/company">Company</NavLink>
              <NavLink href="/listings">Listings</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <button onClick={toggleDropdown} className="flex items-center text-gray-700 hover:text-green-400">
                  {userName} <ChevronDown className="ml-1" size={16} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link href="/dashboard">
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <User className="inline mr-2" size={16} /> Dashboard
                      </span>
                    </Link>
                    <Link href="/logout">
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <LogOut className="inline mr-2" size={16} /> Logout
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/signin">
                  <span className="text-gray-700 font-medium hover:text-green-400 mr-4">Sign in</span>
                </Link>
                <Link href="/list-property">
                  <span className="inline-block py-2 px-4 leading-5 text-xs text-gray-50 bg-green-600 hover:bg-green-700 font-medium rounded-md">
                    List Your Property
                  </span>
                </Link>
              </>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {mobileNavOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileNavOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/explore">Explore</NavLink>
            <NavLink href="/company">Company</NavLink>
            <NavLink href="/listings">Listings</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            {isLoggedIn ? (
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <User className="h-10 w-10 rounded-full" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-gray-700">{userName}</div>
                  <Link href="/dashboard">
                    <span className="mt-1 text-sm font-medium text-gray-500 hover:text-green-400 block">Dashboard</span>
                  </Link>
                  <Link href="/logout">
                    <span className="mt-1 text-sm font-medium text-gray-500 hover:text-green-400 block">Logout</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-3 px-2 space-y-1">
                <Link href="/signin">
                  <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700">Sign in</span>
                </Link>
                <Link href="/list-property">
                  <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-700">List Your Property</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;