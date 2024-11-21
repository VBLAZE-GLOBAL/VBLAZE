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
