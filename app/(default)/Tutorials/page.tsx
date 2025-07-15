"use client";

import { motion } from "framer-motion";
import PageIllustration from "@/components/page-illustration";

function Section({ title, children, gradient }: { title: string; children: React.ReactNode; gradient?: string }) {
  return (
    <motion.section
      className={`mb-16 rounded-2xl shadow-lg p-8 ${gradient ? gradient : "bg-[#181A2A]/80"}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
        <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-2xl md:text-3xl font-bold font-nacelle">
          {title}
        </span>
      </div>
      {children}
    </motion.section>
  );
}

function Divider() {
  return <div className="my-12 h-1 w-2/3 mx-auto bg-gradient-to-r from-[#524BE7]/30 via-[#6C63FF]/20 to-[#524BE7]/30 rounded-full" />;
}

export default function TutorialsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Tutorials
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            Explore our tutorials to master VBlaze Global solutions. <a href="/Resources" className="underline text-indigo-300 hover:text-indigo-100">Resources</a> | <a href="/services" className="underline text-indigo-300 hover:text-indigo-100">Services</a>
          </p>
        </section>
        <Divider />
        <Section title="Getting Started" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Introduction to VBlaze Global platform</li>
            <li>Account setup and onboarding</li>
            <li>Basic navigation and features overview</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Video Tutorials" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li><a href="https://www.youtube.com/@VBLAZEGLOBAL" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Watch on YouTube</a></li>
            <li>Step-by-step walkthroughs for key features</li>
            <li>Tips from our experts</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Step-by-Step Guides" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>How to integrate AI solutions</li>
            <li>Customizing your dashboard</li>
            <li>Managing user roles and permissions</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Advanced Tips" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Performance optimization</li>
            <li>Security best practices</li>
            <li>API integrations and automation</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Need More Help?" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <p className="mb-6 text-lg text-gray-200">
            Contact our support team or explore our <a href="/Knowledge-base" className="underline text-indigo-300 hover:text-indigo-100">Knowledge Base</a> for more answers.
          </p>
          <div className="text-center">
            <a href="/schedule" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">Contact Support</a>
          </div>
        </Section>
      </div>
    </div>
  );
} 