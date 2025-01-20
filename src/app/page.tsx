"use client";

import { useState } from "react";
import { Search, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import LoadingSVG from "@/components/LoadingSVG";
import QuoteCard from "@/components/QuoteCard";

const languages = [
  "Bangla",
  "English",
  "Hindi",
  "Arabic",
  "Urdu",
  "Tamil",
  "Telugu",
  "Marathi",
  "Gujarati",
  "Kannada",
];

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: prompt, language }),
      });
      const data = await response.json();
      setQuotes(data.quotes);
    } catch (error) {
      console.error("Error generating quotes:", error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter a topic for quotes..."
              className="flex-grow p-2 rounded-md border-2 border-purple-300 focus:border-purple-500 focus:outline-none"
              required
            />
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="p-2 rounded-md border-2 border-purple-300 focus:border-purple-500 focus:outline-none"
            >
              {languages.map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <Loader2 className="animate-spin mr-2" size={20} />
              ) : (
                <Search className="mr-2" size={20} />
              )}
              Generate Quotes
            </button>
          </div>
        </form>
        {loading ? (
          <div className="flex justify-center">
            <LoadingSVG />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
