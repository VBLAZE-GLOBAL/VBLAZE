"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Section({ title, content, children }: { title: string; content?: string; children?: React.ReactNode }) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
        <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
          {title}
        </span>
      </div>
      <h2 className="bg-gradient-to-r from-gray-200 via-indigo-300 to-gray-50 bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
        {content}
      </h2>
      {children}
    </motion.div>
  );
}

export default function ProjectPage() {
  const [currentImage] = useState(0);
  const project = {
    screenshots: ["/images/client-10.png"],
    name: "Positive Properties",
    shortDescription:
      "Top Real Estate in Dubai & UAE. Exceptional quality and prompt service for clients in their search for the right property.",
    fullDescription:
      "Positive Properties is a customer-centric real estate agency in Dubai, offering ethical and transparent solutions since 2017. We help clients find the right property with exceptional service and deep market expertise.",
    features: [
      "Extensive property listings across Dubai & UAE",
      "Personalized client service",
      "Transparent and ethical transactions",
      "Expert market advice",
      "Comprehensive after-sales support",
    ],
    timelineData: [
      { phase: "Market Research", duration: 2, description: "Analyzed Dubai's real estate trends and client needs." },
      { phase: "Platform Development", duration: 3, description: "Built a user-friendly property search and listing platform." },
      { phase: "Launch", duration: 1, description: "Launched with a focus on customer service and transparency." },
      { phase: "Growth & Expansion", duration: 2, description: "Expanded listings and enhanced client support." },
    ],
  };

  return (
    <div className="px-6 py-16">
      <Section title="Overview" content={project.shortDescription}>
        <p className="text-white/80">{project.fullDescription}</p>
      </Section>
      <Section title="Features" content="What Makes Positive Properties Special">
        <ul className="list-disc pl-6 space-y-2">
          {project.features.map((feature, index) => (
            <li key={index} className="text-white/80">{feature}</li>
          ))}
        </ul>
      </Section>
      <Section title="Screenshots" content="Our Brand">
        <div className="relative my-8 w-full max-w-xs mx-auto">
          <Image
            src={project.screenshots[currentImage]}
            alt="Positive Properties Logo"
            width={240}
            height={240}
            className="rounded-lg mx-auto"
          />
        </div>
      </Section>
      <Section title="Project Timeline" content="How We Built Positive Properties">
        <ul className="list-disc pl-6 space-y-2">
          {project.timelineData.map((item, idx) => (
            <li key={idx} className="text-white/80">
              <strong>{item.phase}:</strong> {item.duration} months – {item.description}
            </li>
          ))}
        </ul>
      </Section>
      <div className="text-center mt-8">
        <a href="https://www.positivepropertiesuae.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline text-lg font-semibold">Visit Website</a>
      </div>
    </div>
  );
} 