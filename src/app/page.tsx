"use client";

import { useState, FormEvent } from "react";
import { Search, Loader2 } from "lucide-react";
import Header from "@/components/Header"; // If using a custom header component
import LoadingSVG from "@/components/LoadingSVG"; // If using a custom loading component
import QuoteCard from "@/components/QuoteCard"; // If using a custom QuoteCard component

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

interface Quote {
  id: number;
  quote: string;
  author: string;
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://qoute-maker-backend.vercel.app/generate",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: prompt, language }),
        }
      );

      const data = await response.json();
      if (data.quotes && data.quotes.length > 0) {
        // Add 'id' for each quote
        const updatedQuotes: Quote[] = data.quotes.map(
          (quote: { quote: string; author: string }, index: number) => ({
            id: index + 1, // or use another logic to generate id
            quote: quote.quote,
            author: quote.author,
          })
        );
        setQuotes(updatedQuotes);
      } else {
        setError("No quotes generated. Please try a different prompt.");
      }
    } catch (error) {
      console.error("Error generating quotes:", error);
      setError("Failed to generate quotes. Please try again.");
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
            {quotes.length > 0 ? (
              quotes.map((quote) => <QuoteCard key={quote.id} quote={quote} />)
            ) : (
              <p className="text-center text-red-500">
                {error || "No quotes to display."}
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
