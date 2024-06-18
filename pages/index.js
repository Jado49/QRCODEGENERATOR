// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <Head>
        <title>QRCody - QR Code Generator</title>
        <meta name="description" content="Generate QR codes easily with QRCody. Create and download QR codes for URLs, text, and more." />
        {/* Additional meta tags */}
      </Head>

      <h1 className="text-3xl font-bold mb-4">Welcome to QRCody</h1>
      <p className="text-lg">Generate QR codes easily!</p>

      {/* Your homepage content here */}
    </div>
  );
}
