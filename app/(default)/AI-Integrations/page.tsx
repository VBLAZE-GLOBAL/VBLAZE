// This is a Next.js page component for /AI-Integrations
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

function Callout({ children }: { children: React.ReactNode }) {
  return <div className="my-6 p-4 rounded-xl bg-gradient-to-r from-[#524BE7]/20 to-[#6C63FF]/10 border-l-4 border-[#524BE7] text-lg font-semibold text-[#524BE7] shadow-md">{children}</div>;
}

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            AI Integrations
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            Seamlessly connect your business with the world’s leading AI platforms. VBlaze Global specializes in integrating <a href='https://openai.com/' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>OpenAI</a>, <a href='https://cloud.google.com/ai/' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>Google AI</a>, custom LLMs, and more to supercharge your workflows and products.
          </p>
          <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
            <a
              className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
              href="/schedule"
            >
              Book an AI Consultation
            </a>
          </div>
        </section>
        <Divider />
        <Section title="Integration Types" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <h3 className="text-2xl font-semibold mb-2 text-[#524BE7]">OpenAI & GPT Integrations</h3>
          <p className="mb-4 text-gray-100">
            Integrate <a href='https://platform.openai.com/docs/guides/gpt' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>GPT models</a> for chatbots, content generation, summarization, and more. Automate customer support, enhance user experiences, and unlock new business opportunities.
          </p>
          <h4 className="text-xl font-semibold mb-1 text-[#524BE7]">Google AI & Vertex AI</h4>
          <p className="mb-4 text-gray-100">
            Leverage <a href='https://cloud.google.com/vertex-ai' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>Vertex AI</a> for scalable machine learning, vision, and language solutions. Integrate Google’s AI into your apps for advanced analytics and automation.
          </p>
          <h4 className="text-xl font-semibold mb-1 text-[#524BE7]">Custom LLMs & Private AI</h4>
          <p className="mb-4 text-gray-100">
            Deploy your own <a href='https://huggingface.co/models' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>LLMs</a> (Large Language Models) for secure, on-premise, or industry-specific use cases. We help you fine-tune, deploy, and maintain private AI models.
          </p>
        </Section>
        <Divider />
        <Section title="Benefits of AI Integrations" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Automate repetitive tasks and save time</li>
            <li>Enhance customer support with intelligent chatbots</li>
            <li>Personalize user experiences at scale</li>
            <li>Gain actionable insights from your data</li>
            <li>Boost productivity and innovation</li>
            <li>Stay ahead with the latest AI advancements</li>
          </ul>
          <Callout>🔗 <span className="font-bold">API-First Approach</span>: We build robust, secure, and scalable integrations using industry best practices. <a href='https://www.postman.com/api-first/' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>Learn about API-first</a>.</Callout>
        </Section>
        <Divider />
        <Section title="Use Cases & Industries" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <h3 className="text-2xl font-semibold mb-2 text-[#524BE7]">Popular AI Integration Use Cases</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left mb-4">
            <li>Conversational AI for websites, apps, and support</li>
            <li>Automated document processing and summarization</li>
            <li>AI-powered analytics dashboards</li>
            <li>Personalized recommendations and search</li>
            <li>Voice assistants and speech-to-text</li>
            <li>Fraud detection and risk analysis</li>
          </ul>
          <Callout>🌍 <span className="font-bold">Industry Solutions</span>: We serve finance, healthcare, e-commerce, education, and more. <a href='https://www.ibm.com/topics/ai-industries' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>AI in industries</a>.</Callout>
        </Section>
        <Divider />
        <Section title="Why Choose VBlaze for AI Integrations?" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200">
            <li>Expertise in OpenAI, Google AI, and custom LLMs</li>
            <li>End-to-end integration, deployment, and support</li>
            <li>Secure, scalable, and future-proof solutions</li>
            <li>Proven results across multiple industries</li>
            <li>Transparent communication and partnership</li>
          </ul>
          <div className="mt-8 text-center">
            <a href="/schedule" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">Get Started with AI Integrations</a>
          </div>
        </Section>
      </div>
    </div>
  );
} 