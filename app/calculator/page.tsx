"use client";

// import Link from 'next/link';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  const handleNumber = (number: string) => {
    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (operator: string) => {
    setEquation(display + " " + operator + " ");
    setDisplay("0");
  };

  const handleEqual = () => {
    const result = eval(equation + display);
    setDisplay(result.toString());
    setEquation("");
  };

  const handleClear = () => {
    setDisplay("0");
    setEquation("");
  };

  const handleDelete = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

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

      {/* Calculator Section */}
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-2xl shadow-2xl w-80">
          <div className="mb-4">
            <div className="text-[orangered] text-right h-6 text-sm">
              {equation}
            </div>
            <div className="text-4xl font-bold text-[orangered] text-right h-12">
              {display}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {/* Clear and Delete */}
            <button
              onClick={handleClear}
              className="col-span-2 bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg font-bold"
            >
              AC
            </button>
            <button
              onClick={handleDelete}
              className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg font-bold"
            >
              DEL
            </button>
            <button
              onClick={() => handleOperator("/")}
              className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg font-bold"
            >
              ÷
            </button>

            {/* Numbers and Operators */}
            {[7, 8, 9].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className=" font-boldbg-gray-100 text-[#1616b070] hover:bg-gray-200 p-4 rounded-lg"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleOperator("*")}
              className="bg-gray-300 font-bold hover:bg-gray-400 p-4 rounded-lg font-bold"
            >
              ×
            </button>

            {[4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="bg-gray-100 text-[#1616b070] hover:bg-gray-200 p-4 rounded-lg"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleOperator("-")}
              className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg font-bold"
            >
              -
            </button>

            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num.toString())}
                className="bg-gray-100 text-[#1616b070] font-bold hover:bg-gray-200 p-4 rounded-lg"
              >
                {num}
              </button>
            ))}
            <button
              onClick={() => handleOperator("+")}
              className="bg-gray-300 hover:bg-gray-400 p-4 rounded-lg font-bold"
            >
              +
            </button>

            {/* Zero and Decimal */}
            <button
              onClick={() => handleNumber("0")}
              className="col-span-2 text-[#1616b070] bg-gray-100 font-bold hover:bg-gray-200 p-4 rounded-lg"
            >
              0
            </button>
            <button
              onClick={() => handleNumber(".")}
              className="bg-gray-100 font-bold text-[#1616b070] hover:bg-gray-200 p-4 rounded-lg"
            >
              .
            </button>
            <button
              onClick={handleEqual}
              className="bg-blue-500 font-bold hover:bg-blue-600 text-white p-4 rounded-lg"
            >
              =
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
