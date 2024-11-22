// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
          <meta property="og:image" content="/images/hero-image-01.jpg" />
          <meta property="og:image:alt" content="VBLAZE GLOBAL - Hero Image" />
          <meta property="og:url" content="https://www.vblaze.org/" />
          <meta property="og:type" content="website" />

          {/* Twitter Card Metadata */}
          <meta
            name="twitter:title"
            content="VBLAZE GLOBAL - INNOVATE. CODE. DELIVER."
          />
          <meta
            name="twitter:description"
            content="VBLAZE GLOBAL: INNOVATE. CODE. DELIVER. Your trusted partner for IT solutions, including AI, VR, Web Development, Laravel, and more."
          />
          <meta name="twitter:image" content="/images/hero-image-01.jpg" />
          <meta name="twitter:card" content="summary_large_image" />

          {/* Apple-Specific Meta Tags */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="apple-mobile-web-app-title" content="VBLAZE GLOBAL" />

          {/* Manifest */}
          <link rel="manifest" href="/manifest.json" />

          {/* Dark Mode Theme Color */}
          <meta
            name="theme-color"
            content="#121212"
            media="(prefers-color-scheme: dark)"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
