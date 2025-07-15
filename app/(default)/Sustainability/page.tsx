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
        <span className="inline-flex bg-gradient-to-r from-green-400 to-indigo-200 bg-clip-text text-transparent text-2xl md:text-3xl font-bold font-nacelle">
          {title}
        </span>
      </div>
      {children}
    </motion.section>
  );
}

function Divider() {
  return <div className="my-12 h-1 w-2/3 mx-auto bg-gradient-to-r from-green-400/30 via-[#6C63FF]/20 to-[#524BE7]/30 rounded-full" />;
}

export default function SustainabilityPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.green.300))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Sustainability
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            VBlaze Global is committed to building a sustainable future through green technology, responsible business practices, and impactful partnerships. <a href="/about-us" className="underline text-indigo-300 hover:text-indigo-100">About Us</a> | <a href="/Diversity-Inclusion" className="underline text-indigo-300 hover:text-indigo-100">Diversity & Inclusion</a>
          </p>
        </section>
        <Divider />
        <Section title="Our Commitment" gradient="bg-gradient-to-br from-green-400/10 to-[#6C63FF]/10">
          <p className="mb-4 text-gray-100">
            We strive to minimize our environmental impact and promote sustainability in every aspect of our business. Our policies focus on energy efficiency, waste reduction, and supporting a circular economy.
          </p>
        </Section>
        <Divider />
        <Section title="Green Initiatives" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-green-400/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Cloud infrastructure powered by renewable energy</li>
            <li>Remote-first work culture to reduce carbon footprint</li>
            <li>Paperless operations and digital documentation</li>
            <li>Eco-friendly office supplies and recycling programs</li>
            <li>Support for green tech startups and innovation</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Sustainable Partnerships" gradient="bg-gradient-to-br from-green-400/10 to-[#524BE7]/10">
          <p className="mb-4 text-gray-100">
            We collaborate with organizations and clients who share our vision for a greener planet. Our partnerships drive positive change in the tech industry and beyond. Learn more about our values on the <a href="/about-us" className="underline text-indigo-300 hover:text-indigo-100">About Us</a> and <a href="/Diversity-Inclusion" className="underline text-indigo-300 hover:text-indigo-100">Diversity & Inclusion</a> pages.
          </p>
        </Section>
        <Divider />
        <Section title="Impact & Progress" gradient="bg-gradient-to-br from-[#23235B]/80 to-green-400/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Reduced company-wide energy usage by 30% since 2022</li>
            <li>Offset 100% of business travel emissions</li>
            <li>Launched 10+ green tech projects with measurable impact</li>
            <li>Annual sustainability report published for transparency</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Get Involved" gradient="bg-gradient-to-br from-green-400/10 to-[#524BE7]/10">
          <p className="mb-6 text-lg text-gray-200">
            Join us in making a difference. <a href="/careers" className="underline text-indigo-300 hover:text-indigo-100">Explore careers</a> or <a href="/services" className="underline text-indigo-300 hover:text-indigo-100">partner with us</a>.
          </p>
          <div className="text-center">
            <a href="/schedule" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-green-400 to-[#6C63FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">Contact Us</a>
          </div>
        </Section>
        <Divider />
        <Section title="External Resources" gradient="bg-gradient-to-br from-green-400/10 to-[#23235B]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li><a href="https://www.un.org/sustainabledevelopment/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">UN Sustainable Development Goals</a></li>
            <li><a href="https://www.epa.gov/sustainability" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">EPA Sustainability</a></li>
          </ul>
        </Section>
      </div>
    </div>
  );
} 