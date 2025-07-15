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
    screenshots: ["/images/client-13.png"],
    name: "Media Market International",
    shortDescription:
      "A global leader in wholesale electronics and appliances distribution, based in Dubai.",
    fullDescription:
      "Media Market International is a trusted distributor of technology, mobile phones, consumer electronics, wearables, home appliances, and multimedia devices. With 20+ years of experience, they partner with top-tier brands and deliver to over 50 countries with 24/7 logistics.",
    features: [
      "Distribution of 300+ brands and 100,000+ models",
      "Global logistics spanning 80+ countries",
      "Competitive pricing and genuine products",
      "Multilingual expert sales team",
      "Outstanding customer service",
    ],
    timelineData: [
      { phase: "Brand Sourcing", duration: 3, description: "Partnered with global brands and established supply chains." },
      { phase: "Logistics Setup", duration: 2, description: "Built advanced logistics and 24/7 operations in Dubai." },
      { phase: "Market Expansion", duration: 3, description: "Expanded reach to 50+ countries across MENA, Europe, and Asia." },
      { phase: "Customer Success", duration: 2, description: "Achieved high customer satisfaction and repeat business." },
    ],
  };

  return (
    <div className="px-6 py-16">
      <Section title="Overview" content={project.shortDescription}>
        <p className="text-white/80">{project.fullDescription}</p>
      </Section>
      <Section title="Features" content="What Makes Media Market International Special">
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
            alt="Media Market International Logo"
            width={240}
            height={240}
            className="rounded-lg mx-auto"
          />
        </div>
      </Section>
      <Section title="Project Timeline" content="How We Built Media Market International">
        <ul className="list-disc pl-6 space-y-2">
          {project.timelineData.map((item, idx) => (
            <li key={idx} className="text-white/80">
              <strong>{item.phase}:</strong> {item.duration} months – {item.description}
            </li>
          ))}
        </ul>
      </Section>
      <div className="text-center mt-8">
        <a href="https://www.mediamarketint.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-500 underline text-lg font-semibold">Visit Website</a>
      </div>
    </div>
  );
} 