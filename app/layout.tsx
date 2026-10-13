import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileUtilityBar from "@/components/MobileUtilityBar";
import { BUSINESS_INFO } from "@/lib/business-info";

const serifFont = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#2F5748",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "Kelly's Ice Cream | Mount Bethel, PA | Homemade Hard Ice Cream & Food",
    template: "%s | Kelly's Ice Cream Mount Bethel",
  },
  description:
    "Homemade here. Worth the stop. Kelly's Ice Cream serves 50+ flavors of hard ice cream made on-site, plus hot food, burgers, sundaes, and custom ice cream cakes on Route 611 in Mount Bethel, PA.",
  keywords: [
    "Kelly's Ice Cream",
    "Mount Bethel ice cream",
    "Delaware Water Gap ice cream",
    "Route 611 food",
    "homemade ice cream PA",
    "Slate Belt ice cream",
    "Portland PA ice cream",
    "ice cream cakes Mount Bethel",
  ],
  authors: [{ name: "Kelly's Ice Cream" }],
  creator: "Kelly's Ice Cream",
  metadataBase: new URL("https://kellysicecream.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kellysicecream.com",
    siteName: "Kelly's Ice Cream",
    title: "Kelly's Ice Cream | Mount Bethel, PA",
    description:
      "50+ hard ice cream flavors made on-site, fresh grill favorites, and cakes on scenic Route 611 in Mount Bethel, PA.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kelly's Ice Cream parlor in Mount Bethel, PA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelly's Ice Cream | Mount Bethel, PA",
    description: "Homemade hard ice cream, grill favorites, and sundaes on Route 611.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness / Ice Cream Shop JSON-LD structured schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "IceCreamShop",
    name: BUSINESS_INFO.name,
    image: "https://kellysicecream.com/og-image.jpg",
    telephone: BUSINESS_INFO.phone,
    url: "https://kellysicecream.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "40.9087",
      longitude: "-75.1278",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "12:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "11:30",
        closes: "21:30",
      },
    ],
    servesCuisine: ["Ice Cream", "American", "Burgers", "Desserts"],
    priceRange: "$$",
    hasMenu: "https://kellysicecream.com/menu",
  };

  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF7F0] text-farmhouse-slate antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileUtilityBar />
      </body>
    </html>
  );
}
