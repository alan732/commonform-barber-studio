import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://commonform-barber-concept.example"),
  title: {
    default: "COMMONFORM Barber Studio — Good Cuts. No Shortcuts.",
    template: "%s | COMMONFORM Barber Studio",
  },
  description:
    "COMMONFORM Barber Studio is a fictional Australian modern heritage barbershop concept designed and developed by Alan Dsouza.",
  openGraph: {
    title: "COMMONFORM Barber Studio — Good Cuts. No Shortcuts.",
    description:
      "Cut / Craft / Community. A fictional Australian barber studio portfolio concept by Alan Dsouza.",
    type: "website",
    locale: "en_AU",
    siteName: "COMMONFORM Barber Studio (Concept)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
