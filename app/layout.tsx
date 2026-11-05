import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tauhidul - Full Stack Developer | Python, PHP, React, AI Integration",
    template: "%s | Tauhidul Portfolio"
  },
  description: "Full Stack Developer specializing in Python, PHP, JavaScript, AI integration, and modern web technologies. Building scalable SaaS solutions and web applications.",
  keywords: ["Full Stack Developer", "Python Developer", "PHP Developer", "React Developer", "Next.js", "Laravel", "FastAPI", "AI Integration", "Web Development", "Bangladesh", "Freelancer"],
  authors: [{ name: "Tauhidul" }],
  creator: "Tauhidul",
  publisher: "Tauhidul",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tauhidul.dev",
    title: "Tauhidul - Full Stack Developer Portfolio",
    description: "Full Stack Developer specializing in Python, PHP, JavaScript, AI integration, and modern web technologies.",
    siteName: "Tauhidul Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tauhidul - Full Stack Developer",
    description: "Full Stack Developer specializing in Python, PHP, JavaScript, and AI integration",
    creator: "@yourusername",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
