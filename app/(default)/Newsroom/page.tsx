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

export default function NewsroomPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Newsroom
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            Stay up to date with the latest news, press releases, and media coverage from VBlaze Global. <a href="/about-us" className="underline text-indigo-300 hover:text-indigo-100">About Us</a> | <a href="/Case-Studies" className="underline text-indigo-300 hover:text-indigo-100">Case Studies</a>
          </p>
        </section>
        <Divider />
        <Section title="Latest News" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li><strong>May 2024:</strong> VBlaze Global launches new AI-powered analytics platform. <a href="/AI-Integrations" className="underline text-indigo-300 hover:text-indigo-100">Learn more</a></li>
            <li><strong>April 2024:</strong> Recognized as a top B2B company by Clutch. <a href="https://clutch.co/profile/vblaze-global" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Read more</a></li>
            <li><strong>March 2024:</strong> Partnership with Tech4Good for digital inclusion initiatives.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Press Releases" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>VBlaze Global Expands to Middle East and North Africa (MENA) region.</li>
            <li>Announcing our new <a href="/services" className="underline text-indigo-300 hover:text-indigo-100">AI & Cloud Services</a> for enterprises.</li>
            <li>VBlaze Global joins the <a href="https://www.un.org/sustainabledevelopment/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">UN Sustainable Development Goals</a> initiative.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Media Coverage" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Featured in <a href="https://www.forbes.com/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Forbes</a> for digital innovation.</li>
            <li>Interview with our CEO on <a href="https://www.techradar.com/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">TechRadar</a>.</li>
            <li>Case study published in <a href="/Case-Studies" className="underline text-indigo-300 hover:text-indigo-100">industry journals</a>.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Awards & Recognition" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Top B2B Company 2024 – Clutch</li>
            <li>Innovation in AI Award 2023</li>
            <li>Best Workplace for Diversity 2022</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Press & Media Inquiries" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <p className="mb-6 text-lg text-gray-200">
            For interviews, press kits, or more information, please <a href="/schedule" className="underline text-indigo-300 hover:text-indigo-100">contact our team</a>.
          </p>
          <div className="text-center">
            <a href="/schedule" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">Contact Us</a>
          </div>
        </Section>
      </div>
    </div>
  );
} 