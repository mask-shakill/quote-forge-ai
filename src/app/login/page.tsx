"use client";

import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

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
    <div className=" mx-auto px-4 py-16 flex flex-col text-[#1e40af] items-center">
      <h1 className="text-4xl font-bold mb-8">
        Login to Access Generation Quotes and Caption
      </h1>
      <button
        onClick={handleSignIn}
        className="flex items-center space-x-2 border-2 border-white  text-gray-700 px-4 py-2 rounded-md shadow-md hover:bg-gray-100 transition duration-200"
      >
        <FcGoogle className="h-6 w-6" />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}
