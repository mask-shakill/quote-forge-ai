"use client";

import Link from "next/link";
import { useAuth } from "@/app/contexts/AuthContext";
import { Quote, Menu, X, User, ChevronDown, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ImGoogle } from "react-icons/im";

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);
  const [showFallback, setShowFallback] = useState(false); // Added state
  const userMenuRef = useRef<HTMLDivElement>(null);
  const logoutConfirmRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleLogout = () => {
    setIsLogoutConfirmOpen(true);
  };

  const confirmLogout = () => {
    signOut();
    setIsLogoutConfirmOpen(false);
    setIsUserMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
      if (
        logoutConfirmRef.current &&
        !logoutConfirmRef.current.contains(event.target as Node)
      ) {
        setIsLogoutConfirmOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#f4edf0]/30 backdrop-blur-md sticky top-0 z-10 text-black">
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
            <span className="sm:inline">ContentShark AI</span>
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
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 hover:bg-gray-100 rounded-full p-1 transition duration-200"
                >
                  {user.photoURL ? (
                    <div className="relative w-8 h-8">
                      <Image
                        src={user.photoURL || "/placeholder.svg"}
                        alt="Profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                        onError={(e) => {
                          // Fallback to Google icon on error
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          setShowFallback(true);
                        }}
                      />
                      {showFallback && <ImGoogle className="w-8 h-8 p-1" />}
                    </div>
                  ) : (
                    <User className="w-8 h-8 p-1 bg-gray-200 rounded-full" />
                  )}
                  <span className="text-sm font-medium truncate max-w-[150px]">
                    {user.email}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-semibold">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
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
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center space-x-2 mb-2">
                  {user.photoURL ? (
                    <div className="relative w-8 h-8">
                      <Image
                        src={user.photoURL || "/placeholder.svg"}
                        alt="Profile"
                        width={32}
                        height={32}
                        className="rounded-full"
                        onError={(e) => {
                          // Fallback to Google icon on error
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          setShowFallback(true);
                        }}
                      />
                      {showFallback && <ImGoogle className="w-8 h-8 p-1" />}
                    </div>
                  ) : (
                    <User className="w-8 h-8 p-1 bg-gray-200 rounded-full" />
                  )}
                  <span className="text-sm font-medium truncate max-w-[200px]">
                    {user.email}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-2/3 text-center bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded transition duration-200 flex items-center justify-center"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
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

      {/* Logout Confirmation Dialog */}
      {isLogoutConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            ref={logoutConfirmRef}
            className="bg-white rounded-lg p-6 max-w-sm w-[90%] sm:w-full mx-4"
          >
            <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsLogoutConfirmOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
