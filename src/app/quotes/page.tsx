"use client";

import { useState, type FormEvent } from "react";
import { Search, Loader2 } from "lucide-react";
import LoadingSVG from "@/components/LoadingSVG";
import QuoteCard from "@/components/QuoteCard";
import ProtectedRoute from "@/components/ProtectedRoute";

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
  quote: string;
  author: string;
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [language, setLanguage] = useState("English");
  const [loading, setLoading] = useState(false);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [error, setError] = useState<string | null>(null);

  const sanitizeQuote = (quote: string) => {
    // Remove numbering patterns like "1.", "1)", "[1]", etc.
    return quote.replace(/^\s*[\d\.)\]]+\s*/, "").trim();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const endpoint = process.env.NEXT_PUBLIC_GENERATIVE_API_ENDPOINT;

      // Make sure the endpoint is valid
      if (!endpoint) {
        console.error("API endpoint is missing in environment variables.");
        setError("Failed to load API endpoint.");
        setLoading(false);
        return;
      }

      console.log("API Endpoint:", endpoint); // Log the API endpoint for debugging

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: prompt, language }),
      });

      const data = await response.json();

      if (data.quotes && data.quotes.length > 0) {
        const updatedQuotes: Quote[] = data.quotes.map(
          (quote: { quote: string; author: string }) => ({
            quote: sanitizeQuote(quote.quote),
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
    <ProtectedRoute>
      <div className="min-h-screen">
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-[#2a53bc] mb-8">
            Quote Generator
          </h1>
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Enter a topic for quotes..."
                className="flex-grow p-3 rounded-md border-2 border-[#2a53bc] focus:border-[#2a53bc] focus:outline-none"
                required
              />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="p-3 rounded-md border-2 border-[#2a53bc] focus:border-[#2a53bc] focus:outline-none"
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-[#4f7be9] text-white px-6 py-3 rounded-md hover:bg-[#1a4ac2] transition-colors duration-200 flex items-center justify-center"
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
                quotes.map((quote, index) => (
                  <QuoteCard key={index} quote={quote} />
                ))
              ) : (
                <p className="text-center text-red-500">{error}</p>
              )}
            </div>
          )}
        </main>
      </div>
    </ProtectedRoute>
  );
}
