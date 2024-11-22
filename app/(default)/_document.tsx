// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VBLAZE GLOBAL",
  description: "INNOVATE. CODE. DELIVER",
  themeColor: "#000000", // Dark blue color
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover",
  manifest: "/manifest.json",
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Default theme color for light mode */}
          <meta name="theme-color" content="#ffffff" />

          {/* Dark mode theme color */}
          <meta
            name="theme-color"
            content="#121212"
            media="(prefers-color-scheme: dark)"
          />

          {/* Set the status bar on iOS to dark */}
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
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
