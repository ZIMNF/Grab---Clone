"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNabvar = () => {
    setIsClick(!isClick);
  };

  return (
    <nav className="flex z-30 py-3 px-3 fixed w-full top-0 left-0 backdrop-blur-sm justify-between">
      <Link href="/" className="text-3xl font-bold">
        Grab
      </Link>
      <ul className="hidden h-full gap-12 sm:flex font-normal text-gray-50 cursor-pointer pb-1.5 text-3xl ">
        <Link href="/about" className="h-full gap-12 lg:flex font-normal text-gray-50 flex cursor-pointer pb-1.5 transition-all hover:font-bold">
          About
        </Link>
        <Link href="/services" className="h-full gap-12 lg:flex font-normal text-gray-50 flex cursor-pointer pb-1.5 transition-all hover:font-bold">
          Services
        </Link>
        <Link href="/teams" className="h-full gap-12 lg:flex font-normal text-gray-50 flex cursor-pointer pb-1.5 transition-all hover:font-bold">
          Teams
        </Link>
      </ul>
      <div className="sm:hidden items-center">
        <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNabvar}>
          {isClick ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <div>
          {isClick && (
            <div className="sm:hidden items-center">
              <div className="pt-2 pb-3 spce-y-1 sm:px-3">
                <Link href="/about" className=" text-white block hover:bg-white hover:text-black rounded-lg p-2 ">
                  About
                </Link>
                <Link href="/services" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                  Services
                </Link>
                <Link href="/teams" className="text-white block hover:bg-white hover:text-black rounded-lg p-2">
                  Teams
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
