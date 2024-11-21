// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";

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

          {/* Viewport settings for mobile responsiveness */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
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
