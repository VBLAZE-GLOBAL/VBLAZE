"use client";
import Image from "next/image";

export default function LeadersFort() {
  return (
    <div className="px-6 py-16 text-center">
      <a href="https://leadersfort.com/" target="_blank" rel="noopener noreferrer">
        <Image src="/images/client-12.png" alt="Leaders Fort Logo" width={160} height={160} className="mx-auto mb-6" />
      </a>
      <h1 className="text-3xl font-bold mb-4">Leaders Fort</h1>
      <p className="mb-6">Leaders Fort is a trusted name in the UAE, providing innovative solutions and services. Visit their website to learn more about their offerings and expertise.</p>
      <a href="https://leadersfort.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline">Visit Website</a>
    </div>
  );
} 