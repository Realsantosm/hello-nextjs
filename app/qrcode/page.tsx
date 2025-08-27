'use client';

import { useState, useRef } from 'react';
import { useQRCode } from 'next-qrcode';

export default function QRCodeApp() {
  const { Canvas } = useQRCode();
  const [url, setUrl] = useState('');
  const [qrValue, setQrValue] = useState('');
  const canvasRef = useRef(null);

  // Generate QR code
  const handleGenerate = (e) => {
    e.preventDefault();
    setQrValue(url.trim());
  };

  // Download QR code as PNG
  const handleDownload = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qr-code-logo.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">QR Code Generator</h1>
      </header>

      <div className="flex flex-1">
        {/* Optional Sidebar */}
        <aside className="hidden md:block w-64 bg-white shadow-md p-6">
          <nav className="space-y-4">
            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-100 text-blue-700 font-medium">
              Home
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-100 text-gray-700">
              About
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-100 text-gray-700">
              Contact
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-grow p-6 max-w-3xl mx-auto w-full">
          {/* Input section */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4">
              <input
                type="url"
                placeholder="Enter URL"
                className="flex-grow border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <h2 className="text-xl font-semibold mb-4 text-gray-800">QR Code Preview</h2>
              <Canvas
                ref={canvasRef}
                text={qrValue}
                options={{
                  width: 240,
                  margin: 2,
                  scale: 12,
                  color: {
                    dark: '#1e40af', // blue-800
                    light: '#f3f4f6', // gray-100
                  },
                  errorCorrectionLevel: 'H',
                }}
              />
              <button
                onClick={handleDownload}
                className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                Download PNG
              </button>
            </section>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        &copy; 2025 QR Code Generator. All rights reserved.
      </footer>
    </div>
  );
}

'use client';

import { useState, useRef } from 'react';
import { useQRCode } from 'next-qrcode';

export default function QRCodeApp() {
  const { Canvas } = useQRCode();
  const [url, setUrl] = useState('');
  const [qrValue, setQrValue] = useState('');
  const canvasRef = useRef(null);

  // Generate QR code
  const handleGenerate = (e) => {
    e.preventDefault();
    setQrValue(url.trim());
  };

  // Download QR code as PNG
  const handleDownload = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qr-code-logo.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">QR Code Generator</h1>
      </header>

      <div className="flex flex-1">
        {/* Optional Sidebar */}
        <aside className="hidden md:block w-64 bg-white shadow-md p-6">
          <nav className="space-y-4">
            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-100 text-blue-700 font-medium">
              Home
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-100 text-gray-700">
              About
            </a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-blue-100 text-gray-700">
              Contact
            </a>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-grow p-6 max-w-3xl mx-auto w-full">
          {/* Input section */}
          <section className="bg-white shadow-md rounded-lg p-6 mb-8">
            <form onSubmit={handleGenerate} className="flex flex-col md:flex-row gap-4">
              <input
                type="url"
                placeholder="Enter URL"
                className="flex-grow border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <h2 className="text-xl font-semibold mb-4 text-gray-800">QR Code Preview</h2>
              <Canvas
                ref={canvasRef}
                text={qrValue}
                options={{
                  width: 240,
                  margin: 2,
                  scale: 12,
                  color: {
                    dark: '#1e40af', // blue-800
                    light: '#f3f4f6', // gray-100
                  },
                  errorCorrectionLevel: 'H',
                }}
              />
              <button
                onClick={handleDownload}
                className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                Download PNG
              </button>
            </section>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        &copy; 2025 QR Code Generator. All rights reserved.
      </footer>
    </div>
  );
}
