import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iHealthSync - Your Complete Health Tracking App",
  description:
    "Track biometrics, calories, workouts, and get personalized meal plans. Coming soon to iOS and Android.",
  keywords: ["Health", "Fitness", "IOS", "Android"],
  authors: [{ name: "Mohammadreza Arabameri" }],
  creator: "Mohammadreza Arabameri",
  publisher: "Mohammadreza Arabameri",
  robots: "index, follow",
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ihealth-web-landing.vercel.app",
    title: "iHealthSync - Your Complete Health Tracking App",
    description:
      "Track biometrics, calories, workouts, and get personalized meal plans. Coming soon to iOS and Android.",
    siteName: "iHealthSync",
    images: [
      {
        url: "/images/icon.png", // or /og-image.png
        width: 1200,
        height: 630,
        alt: "iHealthSync",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "iHealthSync - Your Complete Health Tracking App",
    description:
      "Track biometrics, calories, workouts, and get personalized meal plans. Coming soon to iOS and Android.",
    images: ["/images/icon.png"],
    creator: "",
  },

  // Icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
