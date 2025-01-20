"use client";

import Link from "next/link";
import { useAuth } from "@/app/contexts/AuthContext"; // Ensure this context is correctly set up
import { Quote } from "lucide-react";

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="  bg-[#dcebfe]  sticky z-10 text-black p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold flex items-center gap-x-3 text-[#1e40af]"
        >
          <Quote />
          KothaLekha AI
        </Link>
        <ul className="flex space-x-4 items-center">
          <li>
            <Link
              href="/"
              className="hover:text-gray-300 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-300 transition duration-200"
            >
              About
            </Link>
          </li>
          {user ? (
            <>
              <li className="text-gray-900">
                {user.displayName || user.email || "User"}
              </li>
              <li>
                <button
                  onClick={signOut}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-200"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition duration-200"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
