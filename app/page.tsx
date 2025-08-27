import Link from "next/link";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const cardsData = [
  {
    title: "Calculator App",
    description:
      "A calculator app is a simple and efficient tool designed to perform basic and advanced mathematical calculations with a clean interface for quick and accurate results",
    url: "/calculator",
  },
  {
    title: "Counter App",
    description:
      "A counter app is a simple and efficient tool that lets users increment, decrement, and reset a numerical value, useful for tracking counts in real time.",
    url: "/counter",
  },
  {
    title: "Dice Roller",
    description:
      "A dice roller game app simulates rolling one or multiple dice with realistic animations and random results, serving as a digital alternative for board games and chance-based activities.",
    url: "/dice",
  },
  {
    title: "Todo App",
    description:
      "A todo app is a simple and efficient tool that helps users organize tasks, set priorities, and track progress with features like adding, editing, completing, and deleting tasks, Pomodoro features also added",
    url: "/todo",
  },
  {
    title: "QR Code Generator",
    description:
      "Next-level SEO monitoring and enhancement suite for your website.",
    url: "/qrcode",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-black dark:text-white tracking-tight">
            <span className="text-[#0070f3]">Hello</span>.js
          </h1>
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <a href="#apps" className="hover:text-gray-900">
              Apps
            </a>
            <a href="#about" className="hover:text-gray-900">
              About
            </a>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </nav>
          <button className="md:hidden">
            <FaTwitter size={28} className="text-gray-700" />
          </button>
        </div>
      </header>

      {/* Hero Section - mimicking nextjs.com hero */}
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#000000] to-[#111111]">
          <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center md:text-left">
            <h2 className="text-white text-6xl font-extrabold tracking-tight max-w-4xl leading-tight">
              Mini App that you can use for free
            </h2>
            <p className="mt-6 text-lg text-gray-300 max-w-3xl">
              Here all the projects are built for the learning purpose which can
              be used by anyone for for free. You can also share it to your
              friends and use all the items available for free.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#forReferences"
                className="inline-block rounded bg-white text-black font-semibold px-8 py-3 hover:bg-gray-100 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Know More
              </a>
              <a
                href="https://github.com/Realsantosm/hello-nextjs"
                className="inline-block rounded border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section id="apps" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
            Explore Our Applications
          </h3>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {cardsData.map(({ title, description, url }) => (
              <Link
                key={title}
                href={url}
                rel="noopener noreferrer"
                className="group border border-gray-200 rounded-xl p-6 flex flex-col hover:shadow-lg transition-shadow bg-white"
              >
                <div className="flex-grow">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#0070f3]">
                    {title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 text-sm text-[#0070f3] font-semibold group-hover:underline">
                  Open Link &rarr;
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">&copy; 2025 Hellojs - All Rights Reserved.</p>
          <div className="flex space-x-6 text-gray-400">
            <a
              href="https://x.com/santoshmurmu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X.com (Twitter)"
              className="hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://facebook.com/santoshmurmu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://linkedin.com/santoshmurmu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/realsantosm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
