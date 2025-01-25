"use client";

import type React from "react";
import { motion } from "framer-motion";
import { Quote, MessageSquareQuote, BrainCircuit } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const products: Product[] = [
  {
    id: 1,
    name: "AI Quote Master",
    description:
      "Generate powerful quotes for any occasion with our advanced AI technology.",
    icon: <Quote className="w-8 h-8" />,
  },
  {
    id: 2,
    name: "Caption Genius",
    description:
      "Create engaging captions for your social media posts in seconds.",
    icon: <MessageSquareQuote className="w-8 h-8" />,
  },
  {
    id: 3,
    name: "Content Innovator",
    description:
      "Revolutionize your content strategy with AI-powered ideas and suggestions.",
    icon: <BrainCircuit className="w-8 h-8" />,
  },
];

const ProductCard: React.FC<{ product: Product; isLeft: boolean }> = ({
  product,
  isLeft,
}) => {
  return (
    <motion.div
      className={`bg-[#f4edf0]  bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-6 sm:p-8 flex flex-col items-center text-center ${
        isLeft
          ? "md:flex-row md:text-left"
          : "md:flex-row-reverse md:text-right"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`bg-white rounded-full p-4 mb-6 ${
          isLeft ? "md:mr-8" : "md:ml-8"
        } md:mb-0 flex-shrink-0`}
      >
        {product.icon}
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <span className="bg-yellow-200 text-yellow-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
          Coming Soon
        </span>
      </div>
    </motion.div>
  );
};

const SVGBackground: React.FC = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 1000"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <radialGradient
        id="bg-gradient"
        cx="50%"
        cy="50%"
        r="50%"
        fx="50%"
        fy="50%"
      ></radialGradient>
      <filter id="noise" x="0%" y="0%" width="100%" height="100%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feBlend mode="overlay" in="SourceGraphic" />
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="#F4E8EE" />
    <g filter="url(#noise)" opacity="0.1">
      <rect width="100%" height="100%" />
    </g>
    <g fill="none" stroke="rgba(0, 0, 0, 0.1)" strokeWidth="2">
      <circle cx="500" cy="500" r="300" />
      <circle cx="500" cy="500" r="400" />
      <circle cx="500" cy="500" r="200" />
      <line x1="0" y1="0" x2="1000" y2="1000" />
      <line x1="1000" y1="0" x2="0" y2="1000" />
    </g>
    <g fill="rgba(0, 0, 0, 0.05)">
      <circle cx="200" cy="200" r="50" />
      <circle cx="800" cy="800" r="50" />
      <circle cx="800" cy="200" r="50" />
      <circle cx="200" cy="800" r="50" />
    </g>
  </svg>
);

export default function UpcomingProducts() {
  return (
    <section className="py-16 sm:py-24 px-4 overflow-hidden z-0 relative min-h-screen flex items-center bg-[#fd5ca2]">
      <SVGBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 text-blue-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Upcoming AI Content Generation Products
        </motion.h2>
        <div className="space-y-8 sm:space-y-16">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
