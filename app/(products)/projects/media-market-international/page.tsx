"use client";
import Image from "next/image";

export default function MediaMarketInternational() {
  return (
    <div className="px-6 py-16 text-center">
      <a href="https://www.mediamarketint.com/" target="_blank" rel="noopener noreferrer">
        <Image src="/images/client-13.png" alt="Media Market International Logo" width={160} height={160} className="mx-auto mb-6" />
      </a>
      <h1 className="text-3xl font-bold mb-4">Media Market International</h1>
      <p className="mb-6">Media Market International is a leading distributor of technology, mobile phones, consumer electronics, wearables, home appliances, and multimedia devices. With 20+ years of experience, they partner with global distributors of top-tier brands and deliver to over 50 countries. <a href='https://www.mediamarketint.com/' className='text-indigo-500 underline' target='_blank' rel='noopener noreferrer'>Learn more</a>.</p>
      <a href="https://www.mediamarketint.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline">Visit Website</a>
    </div>
  );
} 