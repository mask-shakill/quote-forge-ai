"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Quote } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function Login() {
  const { user, signIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/quotes");
    }
  }, [user, router]);

  const handleSignIn = async () => {
    try {
      await signIn();
      router.push("/quotes");
    } catch (error) {
      console.error("Failed to sign in:", error);
    }
  };

  return (
    <div className="min-h-screen  flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-6 sm:p-10 rounded-xl shadow-2xl">
        <div className="text-center">
          <Quote />
          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-primary">
            <span className="text-secondary">Welcome to</span> ContentShark AI
          </h1>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Generate impactful quotes and captions in seconds
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm">
            <button
              onClick={handleSignIn}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FaGoogle />
              </span>
              Sign in with Google
            </button>
          </div>
        </div>

        <div className="mt-8 space-y-4 text-sm sm:text-base">
          <div className="text-center">
            <h2 className="font-semibold text-gray-900">
              Why Choose ContentShark AI?
            </h2>
          </div>
          <ul className="list-disc pl-5 text-gray-600 space-y-2">
            <li>Generate engaging quotes and captions instantly</li>
            <li>Boost your social media presence effortlessly</li>
            <li>Access a vast library of AI-powered content ideas</li>
            <li>Customize outputs to match your brand voice</li>
          </ul>
        </div>

        <div className="mt-8 text-xs sm:text-sm text-center text-gray-500">
          <p>
            By signing in, you agree to our
            <Link
              href="/about"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Terms of Service
            </Link>
            and
            <Link
              href="/about"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm sm:text-base text-gray-600">
        <p>
          Need help?
          <Link
            href="/about"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Contact our support team
          </Link>
        </p>
      </div>
    </div>
  );
}
