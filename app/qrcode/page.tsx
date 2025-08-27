"use client";

import Link from "next/link";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import { useState, useRef } from "react";
import { useQRCode } from "next-qrcode";

export default function QRCodeApp() {
  const { Canvas } = useQRCode();
  const [url, setUrl] = useState("");
  const [qrValue, setQrValue] = useState("");
  const qrRef = useRef(null);

  // Generate QR code
  const handleGenerate = (e) => {
    e.preventDefault();
    setQrValue(url.trim());
  };

  // Download QR code as PNG
  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) {
      console.error("Canvas not found");
      return;
    }

    try {
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `qr-code-${new Date().getTime()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error downloading QR code:", err);
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

      {/* Main content */}
      <main className="flex-grow p-6 max-w-3xl mx-auto w-full">
        {/* Input section */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <form
            onSubmit={handleGenerate}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="url"
              placeholder="Enter URL"
              className="flex-grow border text-gray-600 text-gray-400 border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Generate
            </button>
          </form>
        </section>

        {/* QR Code preview & download */}
        {qrValue && (
          <section className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              QR Code Preview
            </h2>
            <div ref={qrRef}>
              <Canvas
                text={qrValue}
                options={{
                  width: 240,
                  margin: 2,
                  scale: 12,
                  color: {
                    dark: "#000000", // blue-800
                    light: "#f3f4f6", // gray-100
                  },
                  errorCorrectionLevel: "H",
                }}
              />
            </div>
            <button
              onClick={handleDownload}
              className="mt-6 bg-blue-800 text-white px-5 py-2 rounded hover:bg-blue-700 transition flex items-center gap-2"
            >
              <span>Download PNG</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </section>
        )}
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
