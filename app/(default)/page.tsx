import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import Chatbot from "@/components/Chatbot";
import ClientLogos from "@/components/ClientLogos";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="VBLAZE GLOBAL - Innovate. Code. Deliver."
        description="VBLAZE GLOBAL: Your partner in technology innovation. We code, innovate, and deliver outstanding solutions."
      />

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
