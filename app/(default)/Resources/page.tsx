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

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Resources
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            Explore our curated collection of resources, guides, and tools to help you succeed in your digital journey. <a href='https://developer.mozilla.org/' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>MDN Web Docs</a> | <a href='https://www.smashingmagazine.com/' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>Smashing Magazine</a>
          </p>
        </section>
        <Divider />
        <Section title="Documentation & Guides" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li><a href="/doc/VBLAZE_BUSINES_PROFILE.pdf" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">Company Profile PDF</a></li>
            <li><a href="https://nextjs.org/docs" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">Next.js Documentation</a></li>
            <li><a href="https://react.dev/learn" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">React Official Docs</a></li>
            <li><a href="https://tailwindcss.com/docs" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">Tailwind CSS Docs</a></li>
          </ul>
        </Section>
        <Divider />
        <Section title="Blog & Insights" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li><a href="https://medium.com/@vblaze.global" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">VBlaze on Medium</a></li>
            <li><a href="https://dev.to/" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">Dev.to Community</a></li>
            <li><a href="https://css-tricks.com/" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">CSS-Tricks</a></li>
          </ul>
        </Section>
        <Divider />
        <Section title="Tutorials & Learning" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li><a href="https://www.youtube.com/@VBLAZEGLOBAL" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">VBlaze YouTube Tutorials</a></li>
            <li><a href="https://www.freecodecamp.org/" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">freeCodeCamp</a></li>
            <li><a href="https://www.codecademy.com/" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">Codecademy</a></li>
          </ul>
        </Section>
        <Divider />
        <Section title="Downloads & Tools" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li><a href="/doc/VBLAZE_BUSINES_PROFILE.pdf" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">Business Profile PDF</a></li>
            <li><a href="https://code.visualstudio.com/" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">VS Code Editor</a></li>
            <li><a href="https://git-scm.com/downloads" className="underline text-indigo-300 hover:text-indigo-100" target="_blank" rel="noopener noreferrer">Git Downloads</a></li>
          </ul>
          <div className="mt-8 text-center">
            <a href="/schedule" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">Request More Resources</a>
          </div>
        </Section>
      </div>
    </div>
  );
} 