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
      <meta
        property="og:title"
        content="VBLAZE GLOBAL - Innovate. Code. Deliver."
      />
      <meta
        property="og:description"
        content="VBLAZE GLOBAL: Your partner in technology innovation. We code, innovate, and deliver outstanding solutions."
      />
      <meta
        property="og:image"
        content="https://www.vblaze.org/images/hero-image-01.jpg"
      />
      <meta
        property="og:image:alt"
        content="VBLAZE Global Logo or Hero Image"
      />
      <meta property="og:url" content="https://www.vblaze.org/" />
      <meta property="og:type" content="website" />
      <meta
        name="twitter:title"
        content="VBLAZE GLOBAL - Innovate. Code. Deliver."
      />
      <meta
        name="twitter:description"
        content="VBLAZE GLOBAL: Your partner in technology innovation. We code, innovate, and deliver outstanding solutions."
      />
      <meta
        name="twitter:image"
        content="https://www.vblaze.org/images/hero-image-01.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />

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
