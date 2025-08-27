"use client";

import { useState } from "react";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Dice from "../../components/Dice";

export default function DiceGame() {
  const [diceValues, setDiceValues] = useState([1, 1, 1]);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    setTimeout(() => {
      const newValues = diceValues.map(() => Math.floor(Math.random() * 6) + 1);
      setDiceValues(newValues);
      setIsRolling(false);
    }, 1000);
  };

  const resetDice = () => {
    setDiceValues([1, 1, 1]);
  };

  const diceColors = [
    "bg-red-500 text-white",
    "bg-blue-500 text-white",
    "bg-green-500 text-white",
  ];

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

      {/* Dice Game Application  */}

      <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 h-full px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Dice Roller</h1>

        <div className="flex gap-8 mb-8">
          {diceValues.map((value, index) => (
            <Dice
              key={index}
              value={value}
              isRolling={isRolling}
              color={diceColors[index]}
            />
          ))}
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={rollDice}
            disabled={isRolling}
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-xl shadow-lg disabled:opacity-50 transition-all"
          >
            Roll Dice
          </button>
          <button
            onClick={resetDice}
            disabled={isRolling}
            className="px-8 py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-xl font-bold text-xl shadow-lg disabled:opacity-50 transition-all"
          >
            Reset
          </button>
        </div>

        <div className="text-2xl font-bold text-gray-700">
          Total: {diceValues.reduce((a, b) => a + b, 0)}
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
