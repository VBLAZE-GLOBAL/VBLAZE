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

export default function TermsPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <PageIllustration multiple />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 md:py-20 text-center">
          <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mx-auto max-w-2xl mb-8 text-xl text-indigo-200/65">
            These Terms & Conditions govern your use of the VBlaze Global website and services. By accessing or using our site, you agree to these terms. Please read them carefully.
          </p>
        </section>
        <Divider />
        <Section title="1. Company Information" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <p className="mb-4 text-gray-100">
            VBlaze Global is a technology solutions provider specializing in AI, web development, digital transformation, and IT consulting. For more about us, visit the <a href="/about-us" className="underline text-indigo-300 hover:text-indigo-100">About Us</a> page.
          </p>
        </Section>
        <Divider />
        <Section title="2. Acceptance of Terms" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>By using our website or services, you agree to comply with these Terms & Conditions and all applicable laws.</li>
            <li>If you do not agree, please do not use our website or services.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="3. Services & Use" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Our services include, but are not limited to, software development, consulting, and digital solutions.</li>
            <li>Users must provide accurate information and use our services for lawful purposes only.</li>
            <li>Unauthorized use, including hacking, scraping, or reverse engineering, is strictly prohibited.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="4. User Accounts" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Some services may require account registration. You are responsible for maintaining the confidentiality of your account credentials.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
            <li>We reserve the right to suspend or terminate accounts for violations of these terms.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="5. Intellectual Property" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>All content, trademarks, and intellectual property on this site are owned by VBlaze Global or its licensors.</li>
            <li>You may not copy, reproduce, or distribute any content without our written permission.</li>
            <li>Client logos and trademarks remain the property of their respective owners.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="6. Confidentiality" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>We respect the confidentiality of client data and project information.</li>
            <li>All confidential information shared with us will be protected and not disclosed to third parties, except as required by law.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="7. Payment & Fees" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#23235B]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>Payment terms are outlined in individual project agreements or invoices.</li>
            <li>Late payments may incur additional fees or service suspension.</li>
            <li>All fees are non-refundable unless otherwise stated in writing.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="8. Limitation of Liability" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>VBlaze Global is not liable for any indirect, incidental, or consequential damages arising from your use of our site or services.</li>
            <li>Our liability is limited to the amount paid for the specific service in question.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="9. Changes to Terms" gradient="bg-gradient-to-br from-[#524BE7]/10 to-[#6C63FF]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>We may update these Terms & Conditions at any time. Changes will be posted on this page.</li>
            <li>Continued use of our site or services constitutes acceptance of the updated terms.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="10. Governing Law" gradient="bg-gradient-to-br from-[#6C63FF]/10 to-[#524BE7]/10">
          <ul className="list-disc pl-6 space-y-2 text-gray-200 text-left">
            <li>These Terms & Conditions are governed by the laws of the United Arab Emirates (UAE), without regard to conflict of law principles.</li>
            <li>Any disputes will be resolved in the courts of the UAE.</li>
          </ul>
        </Section>
        <Divider />
        <Section title="11. Contact Us" gradient="bg-gradient-to-br from-[#23235B]/80 to-[#524BE7]/10">
          <p className="mb-4 text-gray-100">
            For questions or concerns about these Terms & Conditions, please <a href="/schedule" className="underline text-indigo-300 hover:text-indigo-100">contact us</a>.
          </p>
        </Section>
      </div>
    </div>
  );
} 