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

const plans = [
  {
    name: "Starter",
    price: "$49/mo",
    description: "Perfect for startups and small businesses getting started with digital transformation.",
    features: [
      "Basic AI chatbot integration",
      "Standard website analytics",
      "Email support",
      "Up to 3 team members",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$149/mo",
    description: "Advanced features for growing teams and businesses ready to scale.",
    features: [
      "All Starter features",
      "Custom AI workflows",
      "Priority email & chat support",
      "Up to 10 team members",
      "API access",
    ],
    cta: "Upgrade Now",
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Tailored solutions for large organizations and enterprises.",
    features: [
      "All Professional features",
      "Dedicated account manager",
      "Custom integrations",
      "24/7 support",
      "Unlimited team members",
    ],
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Absolutely! You can upgrade or downgrade your plan at any time. Contact our support team for assistance.",
  },
  {
    q: "Do you offer custom solutions?",
    a: "Yes, our Enterprise plan is fully customizable. Reach out to discuss your requirements.",
  },
  {
    q: "Is there a free trial?",
    a: "We offer a 14-day free trial for the Starter and Professional plans. No credit card required.",
  },
  {
    q: "How secure is my data?",
    a: "We use industry-leading security practices and comply with GDPR. Learn more about <a href='https://en.wikipedia.org/wiki/General_Data_Protection_Regulation' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>GDPR</a>.",
  },
];

export default function PricingPlansPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Pricing & Plans
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            Choose the plan that fits your business needs. All plans include secure cloud hosting, regular updates, and access to our expert support team. <a href='https://en.wikipedia.org/wiki/Software_as_a_service' target='_blank' rel='noopener noreferrer' className='underline text-indigo-300 hover:text-indigo-100'>Learn about SaaS</a>.
          </p>
        </section>
        <Divider />
        <Section title="Our Plans" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="rounded-2xl bg-[#23235B]/80 shadow-xl p-8 flex flex-col items-center border border-[#524BE7]/20">
                <h3 className="text-2xl font-bold text-[#524BE7] mb-2">{plan.name}</h3>
                <div className="text-3xl font-extrabold text-white mb-2">{plan.price}</div>
                <p className="mb-4 text-indigo-200/80">{plan.description}</p>
                <ul className="mb-6 text-left list-disc pl-4 text-indigo-200/80">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="/schedule" className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white font-bold shadow-lg hover:scale-105 transition-transform">{plan.cta}</a>
              </div>
            ))}
          </div>
        </Section>
        <Divider />
        <Section title="Frequently Asked Questions" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl bg-[#23235B]/80 p-6 shadow border border-[#524BE7]/10">
                <h4 className="text-lg font-semibold text-[#524BE7] mb-2">{faq.q}</h4>
                <p className="text-indigo-200/80" dangerouslySetInnerHTML={{ __html: faq.a }} />
              </div>
            ))}
          </div>
        </Section>
        <Divider />
        <Section title="Need a Custom Solution?" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <p className="mb-6 text-lg text-gray-200">
            We offer custom plans and enterprise solutions tailored to your needs. Contact us for a personalized quote and consultation.
          </p>
          <div className="text-center">
            <a href="/schedule" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-[#524BE7] to-[#6C63FF] text-white font-bold text-lg shadow-lg hover:scale-105 transition-transform">Contact Sales</a>
          </div>
        </Section>
      </div>
    </div>
  );
} 