"use client";

import Link from "next/link";
import { useAuth } from "@/app/contexts/AuthContext";
import { Quote, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#dcebfe] sticky top-0 z-10 text-black">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">
          {/* Mobile Menu Button - Left */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-[#c4d9fa] transition duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Logo - Centered on mobile, left on desktop */}
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold flex items-center gap-x-2 text-[#1e40af] absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none"
          >
            <Quote className="w-6 h-6" />
            <span className=" sm:inline">Q&C AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="hover:text-gray-600 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-600 transition duration-200"
            >
              About
            </Link>
            {user ? (
              <>
                <span className="text-gray-900 truncate max-w-[150px]">
                  {user.displayName || user.email || "User"}
                </span>
                <button
                  onClick={signOut}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition duration-200"
              >
                Login
              </Link>
            )}
          </div>

          {/* Empty div to maintain spacing on mobile */}
          <div className="w-10 md:hidden"></div>
        </div>

        {/* Mobile Navigation - Centered */}
        {isMenuOpen && (
          <div className="md:hidden py-4 flex flex-col items-center space-y-4">
            <Link
              href="/"
              className="text-center w-full hover:text-gray-600 transition duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-center w-full hover:text-gray-600 transition duration-200 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            {user ? (
              <>
                <div className="text-gray-900 truncate text-center w-full py-2">
                  {user.displayName || user.email || "User"}
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-2/3 text-center bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded transition duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="w-2/3 text-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded transition duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
