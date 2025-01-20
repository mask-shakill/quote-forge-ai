import Link from "next/link";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-6 text-blue-800">
          KothaLekha AI - Inspire with Every Word
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto">
          Effortlessly create memorable captions and quotes, giving voice to
          your emotions.
        </p>

        <Link
          href="/login"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
        >
          Get Started
        </Link>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="text-left max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-blue-800">
              Join thousands of satisfied users
            </h2>
            <p className="text-gray-600 mb-6">
              Unleash creativity with personalized captions and quotes in
              Bengali and beyond. Let your thoughts shine!
            </p>
            <Link
              href="/quotes"
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Read Success Stories →
            </Link>
          </div>
          <div className="w-full max-w-md">
            <TestimonialIllustration />
          </div>
        </div>

        <div className="mt-24 bg-blue-50 py-12 px-4 rounded-xl">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">
            Ready to get started?
          </h2>
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 inline-block"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
};

const AnalyticsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full text-blue-500"
  >
    <path d="M21 21H3M21 21V3M3 21V10M7 21V8M11 21V14M15 21V3M19 21V10" />
  </svg>
);

const SecurityIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full text-blue-500"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const SupportIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full text-blue-500"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const TestimonialIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full">
    <circle cx="100" cy="100" r="80" fill="#EBF5FF" />
    <circle cx="100" cy="100" r="60" fill="#90CDF4" />
    <circle cx="100" cy="100" r="40" fill="#3182CE" />
    <path d="M100 60v80M60 100h80" stroke="white" strokeWidth="4" />
    <circle cx="100" cy="100" r="10" fill="white" />
    <circle cx="140" cy="60" r="20" fill="#EBF5FF" />
    <circle cx="60" cy="140" r="15" fill="#EBF5FF" />
    <circle cx="160" cy="120" r="10" fill="#EBF5FF" />
  </svg>
);

export default Landing;
