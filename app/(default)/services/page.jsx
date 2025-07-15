"use client";

import { motion } from "framer-motion";
import PageIllustration from "@/components/page-illustration";

function Section({ title, children, gradient }) {
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

function Callout({ children }) {
  return <div className="my-6 p-4 rounded-xl bg-gradient-to-r from-[#524BE7]/20 to-[#6C63FF]/10 border-l-4 border-[#524BE7] text-lg font-semibold text-[#524BE7] shadow-md">{children}</div>;
}

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            VBlaze Global delivers innovative, scalable, and results-driven digital solutions. We help businesses thrive with AI, VR, design, development, and marketing. <a href="https://en.wikipedia.org/wiki/Digital_transformation" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Learn more about digital transformation</a>.
          </p>
          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
            <a
              className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
              href="/schedule"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
        <Divider />
        <Section title="AI Solutions & Machine Learning" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <h3 className="text-2xl font-semibold mb-2 text-[#524BE7]">Custom AI Development</h3>
          <p className="mb-4 text-gray-100">
            Unlock the power of <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">artificial intelligence</a> with VBlaze Global’s custom AI solutions. We design, develop, and deploy machine learning models for predictive analytics, NLP, computer vision, and automation. Our AI experts help you leverage data-driven insights to optimize operations, enhance customer experiences, and drive business growth.
          </p>
          <Callout>🚀 <span className="font-bold">Generative AI Consulting</span>: Harness the latest in large language models and generative AI for content, automation, and creative solutions. <a href="https://openai.com/research" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">See OpenAI research</a>.</Callout>
          <h4 className="text-xl font-semibold mb-1 text-[#524BE7]">AI-Driven Predictive Analytics</h4>
          <p className="mb-4 text-gray-100">
            Make smarter business decisions with advanced predictive analytics. We build models that forecast trends, identify risks, and uncover new opportunities, empowering you to stay ahead of the competition.
          </p>
          <h4 className="text-xl font-semibold mb-1 text-[#524BE7]">Natural Language Processing (NLP)</h4>
          <p className="mb-4 text-gray-100">
            Transform unstructured data into actionable insights. Our NLP solutions enable chatbots, sentiment analysis, document classification, and intelligent search for superior customer engagement. <a href="https://en.wikipedia.org/wiki/Natural_language_processing" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">What is NLP?</a>
          </p>
        </Section>
        <Divider />
        <Section title="Virtual Reality (VR) & Immersive Experiences" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <h3 className="text-2xl font-semibold mb-2 text-[#524BE7]">VR Application Development</h3>
          <p className="mb-4 text-gray-100">
            Step into the future with immersive VR solutions for training, marketing, education, and entertainment. We create interactive, engaging virtual environments that captivate audiences and deliver measurable results. <a href="https://en.wikipedia.org/wiki/Virtual_reality" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Learn about VR</a>.
          </p>
          <Callout>🕶️ <span className="font-bold">Metaverse Integration</span>: Build your brand’s presence in the metaverse with custom virtual spaces and events. <a href="https://en.wikipedia.org/wiki/Metaverse" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">What is the Metaverse?</a></Callout>
          <h4 className="text-xl font-semibold mb-1 text-[#524BE7]">Enterprise VR Training</h4>
          <p className="mb-4 text-gray-100">
            Reduce costs and improve outcomes with custom VR training modules for onboarding, safety, and skills development. Our solutions are scalable, measurable, and tailored to your industry.
          </p>
        </Section>
        <Divider />
        <Section title="UI/UX Design & Digital Product Strategy" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <h3 className="text-2xl font-semibold mb-2 text-[#524BE7]">User Experience (UX) Research</h3>
          <p className="mb-4 text-gray-100">
            We conduct in-depth user research, usability testing, and journey mapping to ensure your digital products are intuitive, accessible, and delightful to use. Our design team crafts seamless experiences that drive engagement and loyalty. <a href="https://www.nngroup.com/articles/ux-research-cheat-sheet/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Learn about UX research</a>.
          </p>
          <Callout>🎨 <span className="font-bold">Design Systems</span>: We create scalable, reusable design systems for consistent branding and rapid product development. <a href="https://material.io/design" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">See Material Design</a>.</Callout>
          <h4 className="text-xl font-semibold mb-1 text-[#524BE7]">UI Design & Prototyping</h4>
          <p className="mb-4 text-gray-100">
            From wireframes to high-fidelity prototypes, we bring your vision to life with modern, responsive interfaces that reflect your brand and maximize conversions.
          </p>
        </Section>
        <Divider />
        <Section title="App Development & Software Engineering" gradient="bg-gradient-to-br from-[#23235B]/10 to-[#524BE7]/10">
          <h3 className="text-2xl font-semibold mb-2 text-[#524BE7]">Custom Web & Mobile Apps</h3>
          <p className="mb-4 text-gray-100">
            Build robust, scalable applications for any platform. Our full-stack developers use the latest technologies to deliver secure, high-performance web and mobile apps tailored to your business goals. <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Learn about React</a>.
          </p>
          <Callout>🔗 <span className="font-bold">Blockchain Integration</span>: Add trust and transparency to your apps with secure blockchain features and smart contracts. <a href="https://ethereum.org/en/developers/docs/smart-contracts/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">What are Smart Contracts?</a></Callout>
          <h4 className="text-xl font-semibold mb-1 text-[#524BE7]">API Integration & Automation</h4>
          <p className="mb-4 text-gray-100">
            Streamline workflows and connect your systems with powerful API integrations and automation solutions. We help you save time, reduce errors, and boost productivity.
          </p>
        </Section>
        <Divider />
        <Section title="Digital Marketing & Growth Strategy" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <h3 className="text-2xl font-semibold mb-2 text-[#524BE7]">SEO & Content Marketing</h3>
          <p className="mb-4 text-gray-100">
            Increase your online visibility and attract qualified leads with our comprehensive SEO and content marketing services. We optimize your website, create keyword-rich content, and build authority to help you rank higher in search results. <a href="https://moz.com/beginners-guide-to-seo" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">SEO Guide</a>.
          </p>
          <Callout>🌱 <span className="font-bold">Sustainable Tech Solutions</span>: Grow your business with eco-friendly, energy-efficient digital strategies and green hosting. <a href="https://www.greenwebfoundation.org/" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Green Web Foundation</a>.</Callout>
          <h4 className="text-xl font-semibold mb-1 text-[#524BE7]">Social Media & Paid Advertising</h4>
          <p className="mb-4 text-gray-100">
            Grow your brand and reach new audiences with targeted social media campaigns and data-driven paid advertising strategies. We manage your campaigns end-to-end for maximum ROI. <a href="https://www.hubspot.com/social-media-marketing" target="_blank" rel="noopener noreferrer" className="underline text-indigo-300 hover:text-indigo-100">Social Media Marketing</a>
          </p>
        </Section>
        <Divider />
        <Section title="Why Choose VBlaze Global?" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>Proven expertise in AI, VR, design, development, and marketing</li>
            <li>Client-focused, results-driven approach</li>
            <li>End-to-end solutions from strategy to execution</li>
            <li>Transparent communication and ongoing support</li>
            <li>Trusted by leading brands worldwide</li>
          </ul>
          <div className="mt-8 text-center">
            <a href="/schedule" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">Contact Us for a Free Consultation</a>
          </div>
        </Section>
      </div>
    </div>
  );
} 