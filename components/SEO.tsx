import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "VBLAZE GLOBAL - Innovate. Code. Deliver.",
  description = "VBLAZE GLOBAL: Your partner in technology innovation. We code, innovate, and deliver outstanding solutions.",
  keywords = "VBLAZE GLOBAL, technology innovation, AI development, Virtual Reality, Web Development, WordPress, React.js, Laravel, IT solutions, software development",
  url = "https://www.vblaze.org/",
  image = "https://www.vblaze.org/images/hero-image-01.jpg",
}) => (
  <Head>
    {/* Required Meta Tags */}
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Title and Meta Description */}
    <title>{title}</title>
    <meta name="description" content={description} />

    {/* Keywords */}
    <meta name="keywords" content={keywords} />

    {/* Open Graph Meta Tags */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:image:alt" content="VBLAZE Global Logo or Hero Image" />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />

    {/* Twitter Meta Tags */}
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />

    {/* Canonical Link */}
    <link rel="canonical" href={url} />

    {/* Favicon */}
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />

    {/* Theme Color */}
    <meta name="theme-color" content="#000000" />
  </Head>
);

export default SEO;
