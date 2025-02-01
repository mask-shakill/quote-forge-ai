import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            About the Developer
          </h1>
          <p className="text-xl text-gray-600">
            Passionate about creating impactful web and mobile experiences
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Image */}
          <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/shakil.png"
              alt="Developer profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Shahariar Kobir Shakil
              </h2>
              <p className="text-xl text-gray-600 mb-4">
                Full Stack Software Engineer & AI/ML Enthusiast
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 2 years of experience in web development, I specialize
                in building modern, responsive applications using React,
                Next.js, and other cutting-edge technologies. Currently focused
                on integrating AI solutions to enhance web experiences.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "Django",
                  "FastAPI",
                  "AI Integration",
                  "UI/UX Design",
                  "REST APIs",
                  "Database Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  {
                    name: "GitHub",
                    href: "/quotes",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ),
                  },
                  {
                    name: "LinkedIn",
                    href: "/quotes",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Twitter",
                    href: "/quotes",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    ),
                  },
                  {
                    name: "Email",
                    href: "/",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-white text-gray-600 hover:text-blue-600 rounded-full border border-gray-200 hover:border-blue-600 transition-colors"
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "SoftWare Engineer",
                company: "PlanPost AI",
                period: "2024 - Present",
                description:
                  "Leading development of AI-powered web applications",
              },
              {
                title: "Full Stack Developer",
                company: "Mastermind Technologies",
                period: "2023 - 2024",
                description:
                  "Developed responsive web applications using React and Node.js",
              },
              {
                title: "UI/UX",
                company: "Digital Agency",
                period: "2022 - 2023",
                description:
                  "Built and maintained client websites and applications",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
              >
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-1">{job.company}</p>
                <p className="text-sm text-gray-500 mb-4">{job.period}</p>
                <p className="text-gray-600">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
