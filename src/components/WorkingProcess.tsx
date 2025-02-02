import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

export default function WorkingProcess() {
  return (
    <section className="py-5 mt-20 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 md:mb-10 lg:mb-16 text-primary">
          Master Content with AI Magic!
        </h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Browser Window */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-200 px-4 py-3 border-b flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              {/* Browser Content */}
              <div className="p-4">
                <Image
                  className="w-full h-full object-cover"
                  src={"/hero-img.png"}
                  alt="image"
                  height={500}
                  width={500}
                ></Image>
              </div>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-orange-500 flex items-center justify-center font-semibold">
                1
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">
                  Choose the sort of content copy you wish to create.
                </h3>
                <p className="text-gray-600">
                  Get your thoughts to paper faster with our step-by-step AI
                  copywriter.
                </p>
                <Link
                  href="/quotes"
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
                >
                  Try Free
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-orange-500 flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  Enter the specifics of your product or business.
                </h3>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white text-orange-500 flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  See how AI is used to generate creative content clones.
                </h3>
              </div>
            </div>

            {/* How It Works Button */}
            <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Try Free
              <Play className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
