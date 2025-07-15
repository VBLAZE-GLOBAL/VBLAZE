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

export default function DiversityInclusionPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Diversity & Inclusion
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            At VBlaze Global, we celebrate diversity and foster an inclusive culture where everyone can thrive. Learn about our commitment, initiatives, and how you can be part of our journey. <a href="/about-us" className="underline text-indigo-300 hover:text-indigo-100">About Us</a> | <a href="/careers" className="underline text-indigo-300 hover:text-indigo-100">Careers</a>
          </p>
        </section>
        <Divider />
        <Section title="Our Commitment" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <p className="mb-4 text-gray-100">
            We are dedicated to building a workplace that reflects the diversity of the world we serve. Our policies and practices ensure equal opportunities, respect, and support for all employees, partners, and clients.
          </p>
        </Section>
        <Divider />
        <Section title="Key Initiatives" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Inclusive hiring and mentorship programs</li>
            <li>Employee resource groups and cultural celebrations</li>
            <li>Bias training and continuous learning</li>
            <li>Community outreach and STEM education support</li>
            <li>Accessible technology and workplace accommodations</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Inclusive Culture" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <p className="mb-4 text-gray-100">
            Our team represents a wide range of backgrounds, perspectives, and talents. We encourage open dialogue, collaboration, and innovation. Read more about our values on the <a href="/about-us" className="underline text-indigo-300 hover:text-indigo-100">About Us</a> page.
          </p>
        </Section>
        <Divider />
        <Section title="Partnerships & Recognition" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <p className="mb-4 text-gray-100">
            We partner with organizations that share our vision for a more inclusive tech industry. Our efforts have been recognized by <a href="https://clutch.co/profile/vblaze-global" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Clutch</a> and <a href="https://www.goodfirms.co/company/vblaze-global" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">GoodFirms</a>.
          </p>
        </Section>
        <Divider />
        <Section title="Join Us" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <p className="mb-6 text-lg text-gray-200">
            Want to help us build a more inclusive future? <a href="/careers" className="underline text-indigo-300 hover:text-indigo-100">Explore careers</a> or <a href="/services" className="underline text-indigo-300 hover:text-indigo-100">partner with us</a>.
          </p>
          <div className="text-center">
            <a href="/schedule" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">Contact Us</a>
          </div>
        </Section>
      </div>
    </div>
  );
} 