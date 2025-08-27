"use client";

import { useState } from "react";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

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

      {/* Counter Application  */}

      <div className="flex-grow flex items-center justify-center bg-gray-100 h-full">
        <div className="text-center">
          <h2 className="text-8xl font-bold">
            <span>
              Counter: {count > 10 ? "🔥" : count < -10 ? "💔" : ""} {count}
            </span>
          </h2>
          <br />
          <div className="flex gap-2 justify-center">
            <button
              onClick={increment}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Increment
            </button>
            <button
              onClick={decrement}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
              Decrement
            </button>
            <button
              onClick={reset}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

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
