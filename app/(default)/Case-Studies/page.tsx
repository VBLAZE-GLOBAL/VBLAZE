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

const caseStudies = [
  {
    title: "AI-Powered Customer Support for E-Commerce",
    client: "ShopEase",
    summary: "Implemented a custom AI chatbot that reduced response times by 60% and increased customer satisfaction scores by 30%.",
    link: "https://openai.com/research",
    result: "60% faster support, 30% higher satisfaction",
  },
  {
    title: "VR Training for Healthcare Professionals",
    client: "MediLearn",
    summary: "Developed immersive VR modules for medical training, resulting in 40% faster skill acquisition and improved retention.",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7967854/",
    result: "40% faster learning, better retention",
  },
  {
    title: "SEO & Content Strategy for SaaS Startup",
    client: "CloudSync",
    summary: "Devised a content marketing and SEO plan that doubled organic traffic and tripled inbound leads in 6 months.",
    link: "https://moz.com/case-studies",
    result: "2x traffic, 3x leads",
  },
];

const testimonials = [
  {
    name: "Sarah Lee, CEO of ShopEase",
    quote: "VBlaze Global’s AI solution transformed our customer support. The results were immediate and impressive!",
  },
  {
    name: "Dr. Ahmed Khan, MediLearn",
    quote: "The VR training modules are a game-changer for our medical staff. Highly recommended!",
  },
  {
    name: "Priya Patel, CloudSync",
    quote: "Our inbound leads skyrocketed after VBlaze revamped our SEO and content strategy.",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Case Studies
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            Discover how VBlaze Global delivers real results for clients across industries. Explore our featured case studies, client testimonials, and proven outcomes. <a href='https://clutch.co/it-services/artificial-intelligence' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>See more AI case studies</a>.
          </p>
        </section>
        <Divider />
        <Section title="Featured Case Studies" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="rounded-2xl bg-[#23235B]/80 shadow-xl p-8 flex flex-col border border-[#524BE7]/20">
                <h3 className="text-xl font-bold text-[#524BE7] mb-2">{cs.title}</h3>
                <div className="text-indigo-200/80 mb-1">Client: <span className="font-semibold text-white">{cs.client}</span></div>
                <p className="mb-2 text-indigo-200/80">{cs.summary}</p>
                <a href={cs.link} target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100 mb-2">Read more</a>
                <div className="mt-auto text-sm text-indigo-300">Result: {cs.result}</div>
              </div>
            ))}
          </div>
        </Section>
        <Divider />
        <Section title="Client Testimonials" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-xl bg-[#23235B]/80 p-6 shadow border border-[#524BE7]/10 flex flex-col justify-between">
                <p className="text-indigo-200/80 italic mb-4">“{t.quote}”</p>
                <div className="text-[#524BE7] font-semibold">{t.name}</div>
              </div>
            ))}
          </div>
        </Section>
        <Divider />
        <Section title="Ready to Start Your Success Story?" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <p className="mb-6 text-lg text-gray-200">
            Contact us to discuss your project and see how VBlaze Global can deliver measurable results for your business.
          </p>
          <div className="text-center">
            <a href="/schedule" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">Start Your Project</a>
          </div>
        </Section>
      </div>
    </div>
  );
} 