"use client";
import Image from "next/image";

export default function PositiveProperties() {
  return (
    <div className="px-6 py-16 text-center">
      <a href="https://www.positivepropertiesuae.com/" target="_blank" rel="noopener noreferrer">
        <Image src="/images/client-10.png" alt="Positive Properties Logo" width={160} height={160} className="mx-auto mb-6" />
      </a>
      <h1 className="text-3xl font-bold mb-4">Positive Properties</h1>
      <p className="mb-6">Top Real Estate in Dubai & UAE. Exceptional quality and prompt service for clients in their search for the right property. Customer-centric, ethical, and transparent real estate solutions since 2017.</p>
      <a href="https://www.positivepropertiesuae.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline">Visit Website</a>
    </div>
  );
} 