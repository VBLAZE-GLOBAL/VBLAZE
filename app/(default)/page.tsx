export const metadata = {
  title: "VBLAZE GLOBAL",
  description: "INNOVATE. CODE. DELIVER",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import Chatbot from "@/components/Chatbot";
import ClientLogos from "@/components/ClientLogos";

export default function Home() {
  return (
    <>
      {/* Open Graph Tags for Facebook */}
      <meta property="og:title" content="VBLAZE GLOBAL" />
      <meta property="og:description" content="Innovate, Code, Delivery" />
      <meta property="og:image" content="/images/hero-image-01.jpg" />
      <meta property="og:url" content="https://www.vblaze.org/" />
      <meta property="og:type" content="VBLAZE GLOBAL" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="VBLAZE GLOBAL" />
      <meta name="twitter:description" content="Innovate, Code, Delivery" />
      <meta name="twitter:image" content="/images/hero-image-01.jpg" />

      {/* Basic Meta Tags */}
      <meta name="description" content="Innovate, Code, Delivery" />
      <link rel="icon" href="/favicon.ico" />
      <PageIllustration />
      <Hero />
      <ClientLogos />
      <Workflows />
      <Features />
      <Cta />
      <Chatbot />
    </>
  );
}
