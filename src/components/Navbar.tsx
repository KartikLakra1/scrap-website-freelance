"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="dark:bg-slate-900 bg-slate-200 dark:text-white text-black md:p-8 p-4 fixed w-[100%]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href={"/"}
          className="dark:text-white text-lg font-bold text-black">
          LOGO
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex space-x-8">
          {/* About & Category */}
          <div className="flex space-x-4">
            <a href="#" className="dark:text-white text-black">
              About
            </a>
            <div
              className="relative"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
              <button className="dark:text-white text-black">Category</button>
              {isCategoryOpen && (
                <div className="absolute left-0 mt-2 w-48 dark:bg-white bg-slate-500 dark:text-white rounded-md shadow-lg">
                  <a
                    href="#"
                    className="block px-4 py-2 dark:text-black text-white">
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 dark:text-black text-white">
                    Option 2
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-center justify-center">
          {/* Profile */}
          <div
            className="relative"
            onClick={() => setIsProfileOpen(!isProfileOpen)}>
            <button className="dark:text-white text-black flex items-start justify-center">
              <CgProfile size={30} />
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 dark:bg-white bg-slate-500 dark:text-white rounded-md shadow-lg z-20">
                <a
                  href="#"
                  className="block px-4 py-2 dark:text-black text-white">
                  Login
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 dark:text-black text-white">
                  Logout
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 dark:text-black text-white">
                  Dashboard
                </a>
              </div>
            )}
          </div>
          <button>
            <CiShoppingCart size={30} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="h-6 w-6 text-black dark:text-white" />
            ) : (
              <FaBars className="h-6 w-6 text-black dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          {/* About & Category */}
          <div className="flex flex-col items-center justify-center space-x-4 gap-4">
            <Link href="#" className="dark:text-white text-black">
              About
            </Link>
            <div
              className="relative"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
              <button className="dark:text-white text-black">Category</button>
              {isCategoryOpen && (
                <div className="absolute left-0 mt-2 w-48 dark:bg-white bg-slate-500 dark:text-white rounded-md shadow-lg">
                  <Link
                    href="/"
                    className="block px-4 py-2 dark:text-black text-white">
                    Option 1
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 dark:text-black text-white">
                    Option 2
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
