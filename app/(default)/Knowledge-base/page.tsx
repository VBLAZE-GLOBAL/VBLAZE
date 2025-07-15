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

export default function KnowledgeBasePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Knowledge Base
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            Find answers, documentation, and troubleshooting tips for VBlaze Global solutions. <a href="/Tutorials" className="underline text-indigo-300 hover:text-indigo-100">Tutorials</a> | <a href="/Resources" className="underline text-indigo-300 hover:text-indigo-100">Resources</a>
          </p>
        </section>
        <Divider />
        <Section title="Search Knowledge Base" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <p className="mb-4 text-gray-100">
            Use the search bar above to quickly find articles, guides, and documentation. (Search functionality coming soon)
          </p>
        </Section>
        <Divider />
        <Section title="Popular Articles" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>How to reset your password</li>
            <li>Integrating with third-party APIs</li>
            <li>Best practices for data security</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Troubleshooting" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Common login issues</li>
            <li>Performance optimization tips</li>
            <li>Contacting support for urgent issues</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Documentation" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>API reference and integration guides</li>
            <li>User manuals and onboarding checklists</li>
            <li>Release notes and updates</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Need More Help?" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <p className="mb-6 text-lg text-gray-200">
            Still have questions? <a href="/schedule" className="underline text-indigo-300 hover:text-indigo-100">Contact our support team</a> or explore our <a href="/services" className="underline text-indigo-300 hover:text-indigo-100">Services</a>.
          </p>
        </Section>
      </div>
    </div>
  );
} 