import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* For Chrome, Opera, and other Android browsers */}
          <meta name="theme-color" content="#000000" />

          {/* For iOS Safari */}
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          {/* Optional: Customize full-screen mode appearance */}
          <meta name="apple-mobile-web-app-capable" content="yes" />

          {/* Set a specific icon */}
          <link rel="apple-touch-icon" href="/path/to/icon.png" />

          {/* For Android Chrome */}
          <meta name="mobile-web-app-capable" content="yes" />
        </Head>
        <body
          style={{ background: "linear-gradient(to bottom, #000000, #00008b)" }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
