import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Cta from "@/components/cta";
import Chatbot from "@/components/Chatbot";
import ClientLogos from "@/components/ClientLogos";
import GoogleDeveloperBadges from "@/components/GoogleDeveloperBadges";
export default function Home() {
  return (
    <>
      {/* General SEO Metadata */}
      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"
      />
      <meta
        name="description"
        content="VBLAZE GLOBAL: INNOVATE. CODE. DELIVER. Your trusted partner for IT solutions, including AI, VR, Web Development, Laravel, and more."
      />
      <meta
        name="keywords"
        content="VBLAZE GLOBAL, IT company, technology innovation, AI, Virtual Reality, Web Development, Laravel, IT solutions"
      />
      <meta name="theme-color" content="#000000" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      {/* Open Graph Metadata */}
      <meta
        property="og:title"
        content="VBLAZE GLOBAL - INNOVATE. CODE. DELIVER."
      />
      <meta
        property="og:description"
        content="VBLAZE GLOBAL: INNOVATE. CODE. DELIVER. Your trusted partner for IT solutions, including AI, VR, Web Development, Laravel, and more."
      />
      <meta
        property="og:image"
        content="https://www.vblaze.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-image-01.158e20e6.jpg&w=3840&q=75" // Make sure this URL is correct and publicly accessible
      />
      <meta property="og:image:alt" content="VBLAZE GLOBAL - Hero Image" />
      <meta property="og:url" content="https://www.vblaze.org/" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="VBLAZE GLOBAL" />

      {/* Twitter Card Metadata */}
      <meta
        name="twitter:title"
        content="VBLAZE GLOBAL - INNOVATE. CODE. DELIVER."
      />
      <meta
        name="twitter:description"
        content="VBLAZE GLOBAL: INNOVATE. CODE. DELIVER. Your trusted partner for IT solutions, including AI, VR, Web Development, Laravel, and more."
      />
      <meta
        name="twitter:image"
        content="https://i.postimg.cc/zG7qgQcd/Black-and-Dark-Space-Photo-You-Tube-Thumbnail.png" // Ensure this image link is correct
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* Apple-Specific Meta Tags */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link
        rel="apple-touch-icon"
        href="https://www.vblaze.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.51565c98.png&w=64&q=75"
      />
      <meta name="apple-mobile-web-app-title" content="VBLAZE GLOBAL" />

      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Dark Mode Theme Color */}
      <meta
        name="theme-color"
        content="#121212"
        media="(prefers-color-scheme: dark)"
      />

      <PageIllustration />
      <Hero />
      <GoogleDeveloperBadges />
      <ClientLogos />
      <Workflows />
      <Features />
      <Cta />
      <Chatbot />
    </>
  );
}
