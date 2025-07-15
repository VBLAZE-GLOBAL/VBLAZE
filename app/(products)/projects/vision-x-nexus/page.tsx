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
    screenshots: ["/images/client-11.png"],
    name: "Vision X Nexus",
    shortDescription:
      "Premium Real Estate in Sharjah & UAE. Experience serene living and explore a wide range of luxury real estate.",
    fullDescription:
      "Vision X Nexus offers a curated selection of luxury real estate in Sharjah and the UAE. We provide expert, clear, and genuine service to help clients find their dream homes, whether ready-to-move or off-plan projects.",
    features: [
      "Luxury property listings in Sharjah & UAE",
      "Expert guidance for buyers and investors",
      "Transparent and genuine service",
      "Ready-to-move and off-plan options",
      "Personalized property tours",
    ],
    timelineData: [
      { phase: "Market Analysis", duration: 2, description: "Studied luxury real estate trends in Sharjah and UAE." },
      { phase: "Platform Design", duration: 2, description: "Designed a premium, user-friendly property showcase." },
      { phase: "Implementation", duration: 2, description: "Developed the website and integrated property listings." },
      { phase: "Launch & Service", duration: 2, description: "Launched with a focus on client experience and support." },
    ],
  };

  return (
    <div className="px-6 py-16">
      <Section title="Overview" content={project.shortDescription}>
        <p className="text-white/80">{project.fullDescription}</p>
      </Section>
      <Section title="Features" content="What Makes Vision X Nexus Special">
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
            alt="Vision X Nexus Logo"
            width={240}
            height={240}
            className="rounded-lg mx-auto"
          />
        </div>
      </Section>
      <Section title="Project Timeline" content="How We Built Vision X Nexus">
        <ul className="list-disc pl-6 space-y-2">
          {project.timelineData.map((item, idx) => (
            <li key={idx} className="text-white/80">
              <strong>{item.phase}:</strong> {item.duration} months – {item.description}
            </li>
          ))}
        </ul>
      </Section>
      <div className="text-center mt-8">
        <a href="https://www.visionxnexus.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline text-lg font-semibold">Visit Website</a>
      </div>
    </div>
  );
} 