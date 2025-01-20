"use client";

import { useState } from "react";
import { Copy, Check, Bookmark } from "lucide-react";

interface QuoteCardProps {
  quote: {
    id: number;
    quote: string;
    author: string;
  };
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${quote.quote} - ${quote.author}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    // Here you would typically save the bookmark state to local storage or a backend
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
      <div>
        <p className="text-lg mb-2">{quote.quote}</p>
        <p className="text-sm text-gray-600">{quote.author}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleCopy}
          className="text-purple-600 hover:text-purple-800 mr-2"
          title="Copy quote"
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </button>
        <button
          onClick={handleBookmark}
          className={`${
            bookmarked ? "text-yellow-500" : "text-gray-400"
          } hover:text-yellow-600`}
          title="Bookmark quote"
        >
          <Bookmark size={20} />
        </button>
      </div>
    </div>
  );
}
