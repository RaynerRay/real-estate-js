'use client'
import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, Menu, X, ChevronDown, LogOut, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const NavLink = ({ href, children }) => (
    <Link href={href}>
      <span
        className="block px-4 py-2 text-gray-700 font-medium hover:text-green-600 transition duration-300 ease-in-out"
        onClick={toggleMobileNav}
      >
        {children}
      </span>
    </Link>
  );

  return (
    <nav
      ref={navRef}
      className=" w-full z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
          <Link className="inline-block mb-4" href="/">
                <Image className="block " src="/logo.png" alt="Logo" width={170} height={170} />
              </Link>
            {/* <Link href="/">
              <div className="text-gray-900 text-3xl font-bold leading-none">
                Market<span className="text-green-600">Hub</span>
              </div>
            </Link> */}
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/companies">Agencies</NavLink>
              <NavLink href="/search">All Listings</NavLink>
              <NavLink href="/blogs">Blogs & News</NavLink>
              <NavLink href="/favourites">Favourites</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              <Link
                  target="_blank"
                  href="https://wa.me/0772340505?text=Hi,%20I%20want%20to%20rent%20out%20a%20property"
                  className="inline-block text-gray-700 bg-gray-200 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out"
                >
                  List Your Property
                </Link>
            </div>
            
          </div>
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="flex items-center text-gray-700 hover:text-green-500 font-bold transition duration-300 ease-in-out"
                >
                  {userName} <ChevronDown className="ml-1" size={16} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link href="/dashboard">
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition duration-300 ease-in-out">
                        <User className="inline mr-2" size={16} /> Dashboard
                      </span>
                    </Link>
                    <Link href="/logout">
                      <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 transition duration-300 ease-in-out">
                        <LogOut className="inline mr-2" size={16} /> Logout
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login">
                  <span className="inline-block text-gray-800 bg-gray-200 hover:bg-green-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out mr-2">
                    Sign in
                  </span>
                </Link>
                {/* <Link
                  target="_blank"
                  href="https://wa.me/0772340505?text=Hi,%20I%20want%20to%20rent%20out%20a%20property"
                  className="inline-block text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-300 ease-in-out"
                >
                  List Your Property
                </Link> */}
              </>
            )}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMobileNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-white transition duration-300 ease-in-out"
            >
              <span className="sr-only">Open main menu</span>
              {mobileNavOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileNavOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/companies">Agencies</NavLink>
            <NavLink href="/search">All Listings</NavLink>
            <NavLink href="/blogs">Blogs & News</NavLink>
            <NavLink href="/favourites">Favourites</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <Link
              target="_blank"
              href="https://wa.me/0772340505?text=Hi,%20I%20want%20to%20rent%20out%20a%20property"
              className="block w-full text-center text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out mt-4"
            >
              List Your Property
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 bg-white">
            {isLoggedIn ? (
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <User className="h-10 w-10 rounded-full bg-green-100 p-2 text-green-500" />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-gray-800">
                    {userName}
                  </div>
                  <Link href="/dashboard">
                    <span className="mt-1 text-sm font-medium text-gray-500 hover:text-green-500 block transition duration-300 ease-in-out">
                      Dashboard
                    </span>
                  </Link>
                  <Link href="/logout">
                    <span className="mt-1 text-sm font-medium text-gray-500 hover:text-green-500 block transition duration-300 ease-in-out">
                      Logout
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-3 px-2 space-y-1">
                <Link href="/signin">
                  <span className="block w-full text-center text-gray-900 bg-gray-200 hover:bg-green-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300 ease-in-out">
                    Sign in
                  </span>
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