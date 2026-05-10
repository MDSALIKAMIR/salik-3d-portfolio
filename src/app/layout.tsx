import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Md Salik Amir | Full Stack Developer",
  description:
    "Full Stack Developer | Frontend Developer | MERN Stack Developer. Building futuristic digital experiences with modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Md Salik Amir",
  ],
  authors: [{ name: "Md Salik Amir" }],
  creator: "Md Salik Amir",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Md Salik Amir | Full Stack Developer",
    description:
      "Building futuristic digital experiences with modern web technologies.",
    siteName: "Md Salik Amir Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Salik Amir | Full Stack Developer",
    description:
      "Building futuristic digital experiences with modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceGrotesk.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
