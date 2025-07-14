"use client";
import Image from "next/image";

export default function VisionXNexus() {
  return (
    <div className="px-6 py-16 text-center">
      <a href="https://www.visionxnexus.com/" target="_blank" rel="noopener noreferrer">
        <Image src="/images/client-11.png" alt="Vision X Nexus Logo" width={160} height={160} className="mx-auto mb-6" />
      </a>
      <h1 className="text-3xl font-bold mb-4">Vision X Nexus</h1>
      <p className="mb-6">Premium Real Estate in Sharjah & UAE. Experience serene living and explore a wide range of luxury real estate ready-to-move and off-plan projects. Expert, clear, and genuine service.</p>
      <a href="https://www.visionxnexus.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline">Visit Website</a>
    </div>
  );
} 