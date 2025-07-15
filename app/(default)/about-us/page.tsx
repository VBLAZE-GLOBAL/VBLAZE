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

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            About Us
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            Learn more about VBlaze Global, our mission, vision, and the passionate team driving innovation. <a href='https://en.wikipedia.org/wiki/Information_technology_consulting' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>What is IT consulting?</a>
          </p>
        </section>
        <Divider />
        <Section title="Our Mission & Vision" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <h3 className="text-2xl font-semibold mb-2 text-[#524BE7]">Mission</h3>
          <p className="mb-4 text-gray-100">
            To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and positive change.
          </p>
          <h3 className="text-2xl font-semibold mb-2 text-[#524BE7]">Vision</h3>
          <p className="mb-4 text-gray-100">
            To be a global leader in digital transformation, recognized for our expertise, integrity, and impact on the future of business.
          </p>
        </Section>
        <Divider />
        <Section title="Our Values" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Innovation & Excellence</li>
            <li>Client-Centric Approach</li>
            <li>Integrity & Transparency</li>
            <li>Collaboration & Teamwork</li>
            <li>Continuous Learning</li>
            <li>Sustainability & Social Responsibility</li>
          </ul>
        </Section>
        <Divider />
        <Section title="Our Story" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <p className="mb-4 text-gray-100">
            Founded in 2017, VBlaze Global has grown from a small team of tech enthusiasts into a trusted partner for businesses across the globe. Our journey is marked by a commitment to quality, client success, and a passion for solving complex challenges. <a href='https://clutch.co/profile/vblaze-global' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>See our Clutch profile</a>.
          </p>
        </Section>
        <Divider />
        <Section title="Meet the Team" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Minhaj, Founder & CEO</li>
            <li>Sarah Lee, Head of AI Solutions</li>
            <li>Ahmed Khan, VR Lead</li>
            <li>Priya Patel, Marketing Director</li>
            <li>Global team of developers, designers, and strategists</li>
          </ul>
        </Section>
        <Divider />
        <Section title="What Sets Us Apart" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>
              <strong>Cutting-Edge Solutions:</strong> We leverage the latest in <a href="/AI-Integrations" className="underline text-indigo-300 hover:text-indigo-100">AI</a>, <a href="/services" className="underline text-indigo-300 hover:text-indigo-100">Web Development</a>, and <a href="/services" className="underline text-indigo-300 hover:text-indigo-100">Digital Transformation</a> to deliver measurable results.
            </li>
            <li>
              <strong>Proven Track Record:</strong> Our <a href="/Case-Studies" className="underline text-indigo-300 hover:text-indigo-100">case studies</a> showcase successful partnerships and client growth stories.
            </li>
            <li>
              <strong>End-to-End Expertise:</strong> From ideation to launch and beyond, we support our clients at every stage. Explore our <a href="/Resources" className="underline text-indigo-300 hover:text-indigo-100">resources</a> for more insights.
            </li>
            <li>
              <strong>Transparent Collaboration:</strong> We believe in open communication and long-term relationships. Join our <a href="/careers" className="underline text-indigo-300 hover:text-indigo-100">team</a> or <a href="/services" className="underline text-indigo-300 hover:text-indigo-100">partner with us</a>.
            </li>
          </ul>
        </Section>
        <Divider />
        <Section title="Global Impact & Partnerships" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <p className="mb-4 text-gray-100">
            VBlaze Global serves clients in over 15 countries, collaborating with industry leaders and innovative startups. Our commitment to <a href="/coming-soon" className="underline text-indigo-300 hover:text-indigo-100">sustainability</a> and <a href="/coming-soon" className="underline text-indigo-300 hover:text-indigo-100">diversity & inclusion</a> drives our global partnerships. We are proud to be recognized by platforms like <a href="https://clutch.co/profile/vblaze-global" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Clutch</a> and <a href="https://www.goodfirms.co/company/vblaze-global" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">GoodFirms</a>.
          </p>
        </Section>
        <Divider />
        <Section title="Our Journey: Milestones" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li><strong>2017:</strong> VBlaze Global founded, focusing on web and mobile solutions.</li>
            <li><strong>2019:</strong> Expanded into <a href="/AI-Integrations" className="underline text-indigo-300 hover:text-indigo-100">AI & Machine Learning</a> services.</li>
            <li><strong>2021:</strong> Launched our <a href="/services" className="underline text-indigo-300 hover:text-indigo-100">VR and AR</a> division.</li>
            <li><strong>2022:</strong> Recognized as a top B2B company by Clutch.</li>
            <li><strong>2023:</strong> Surpassed 100+ successful projects, including <a href="/Case-Studies" className="underline text-indigo-300 hover:text-indigo-100">award-winning case studies</a>.</li>
            <li><strong>2024:</strong> Launched new <a href="/Pricing-&-Plans" className="underline text-indigo-300 hover:text-indigo-100">pricing & plans</a> for startups and enterprises.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="What Our Clients Say" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <div className="space-y-6">
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-indigo-200/90">
              “VBlaze Global transformed our business with their innovative AI solutions. Their team is responsive, creative, and results-driven.”<br />
              <span className="block mt-2 font-bold text-indigo-300">— John D., CEO, Tech Innovators</span>
            </blockquote>
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-indigo-200/90">
              “From web development to ongoing support, VBlaze has been a true partner in our digital journey.”<br />
              <span className="block mt-2 font-bold text-indigo-300">— Priya S., Marketing Director, Global Retailer</span>
            </blockquote>
          </div>
        </Section>
        <Divider />
        <Section title="Ready to Work With Us?" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <p className="mb-6 text-lg text-gray-200">
            Contact us to start your digital transformation journey with VBlaze Global.
          </p>
          <div className="text-center">
            <a href="/schedule" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">Get in Touch</a>
          </div>
        </Section>
      </div>
    </div>
  );
} 