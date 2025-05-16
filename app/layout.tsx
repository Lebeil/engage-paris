import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  display: "swap",
});

// La police Didot est importée via CSS depuis fonts.cdnfonts.com dans globals.css

export const metadata: Metadata = {
  title: "Engage Paris 2025 | Premier événement francophone Customer Success",
  description: "Rejoignez le premier événement francophone dédié aux métiers du Customer Success. Assistez en streaming à la conférence du 24 juin 2025 à Paris.",
  keywords: "Customer Success, CSM, conférence CSM, événement Customer Success, streaming, Engage Paris, événement professionnel Paris, Customer Success Manager, relation client, succès client",
  authors: [{ name: "Engage Paris" }],
  creator: "Engage Paris",
  publisher: "Engage Paris",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.engage.paris"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Engage Paris 2025 | Premier événement francophone Customer Success",
    description: "Rejoignez le premier événement francophone dédié aux métiers du Customer Success en streaming. Conférence du 24 juin 2025 à Paris.",
    url: "https://www.engage.paris",
    siteName: "Engage Paris",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Engage Paris 2025",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engage Paris 2025 | Premier événement francophone Customer Success",
    description: "Rejoignez le premier événement francophone dédié aux métiers du Customer Success en streaming. Conférence du 24 juin 2025 à Paris.",
    images: ["/images/og-image.jpg"],
    creator: "@engageparis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${mulish.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
