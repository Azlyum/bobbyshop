import type { Metadata, Viewport } from "next";
import "../src/index.css";

const siteUrl = "https://www.mccloudscollision.com";
const siteName = "McCloud's Collision and Customs";
const siteDescription =
  "McCloud's Collision and Customs in Cookeville, Tennessee provides collision repair, custom paint, bodywork, refinishing, and estimate support for drivers across Putnam County and surrounding areas.";
const ogImage = `${siteUrl}/Images/mcclouds-brand_after-logo.jpg`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteName,
      description: siteDescription,
      url: `${siteUrl}/`,
    },
    {
      "@type": "AutoBodyShop",
      name: siteName,
      image: ogImage,
      logo: ogImage,
      url: `${siteUrl}/`,
      telephone: "+1-931-319-3933",
      email: "Mccloudscollision@yahoo.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1309 W Broad St",
        addressLocality: "Cookeville",
        addressRegion: "TN",
        postalCode: "38501",
        addressCountry: "US",
      },
      areaServed: [
        "Cookeville, Tennessee",
        "Putnam County, Tennessee",
        "Surrounding Middle Tennessee communities",
      ],
      priceRange: "$$",
      sameAs: [
        "https://www.facebook.com/profile.php?id=61555435137428&__tn__=%2Cd",
      ],
      hasMap:
        "https://www.google.com/maps/dir/?api=1&destination=1309+W+Broad+St,+Cookeville,+TN+38501",
      description:
        "Collision repair, custom paint, bodywork, refinishing, restoration work, and custom vehicle builds for Putnam County and surrounding areas.",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title:
    "McCloud's Collision and Customs | Collision Repair and Custom Paint in Cookeville, TN",
  description: siteDescription,
  authors: [{ name: siteName }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "en_US",
    url: siteUrl,
    title:
      "McCloud's Collision and Customs | Collision Repair and Custom Paint in Cookeville, TN",
    description:
      "Collision repair, custom paint, bodywork, refinishing, and shop-built custom work in Cookeville, Tennessee for Putnam County and surrounding areas.",
    images: [
      {
        url: ogImage,
        alt: "McCloud's Collision and Customs shop logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "McCloud's Collision and Customs | Cookeville, TN",
    description:
      "Collision repair, custom paint, bodywork, and refinishing in Cookeville, Tennessee for Putnam County and surrounding areas.",
    images: [ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const noscriptText =
    "McCloud's Collision and Customs in Cookeville, Tennessee offers collision repair, custom paint, bodywork, and refinishing for Putnam County and surrounding areas. Call (931) 319-3933 or email Mccloudscollision@yahoo.com.";

  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <noscript dangerouslySetInnerHTML={{ __html: noscriptText }} />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
