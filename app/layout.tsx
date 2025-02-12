import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BackButton } from "@/components/back-button";
import { PageTransition } from "@/components/ui/page-transition";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "arial"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "vikiflow - Web Design Agency",
    template: "%s | vikiflow",
  },
  description:
    "Professional web design and development services for modern businesses. Transform your digital presence with our expert team.",
  keywords: [
    "vikiflow",
    "web design",
    "web development",
    "digital agency",
    "UI/UX design",
    "responsive design",
    "website development",
    "digital solutions",
    "web agency",
    "professional web design",
    "custom website development",
    "modern web design",
    "business websites",
    "web solutions",
  ],
  metadataBase: new URL("https://www.vikiflow.com"),
  authors: [{ name: "vikiflow team" }],
  creator: "vikiflow",
  publisher: "vikiflow",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "vikiflow - Web Design Agency",
    description:
      "Professional web design and development services for modern businesses. Transform your digital presence with our expert team.",
    url: "https://www.vikiflow.com",
    siteName: "vikiflow",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "vikiflow - Web Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "vikiflow - Web Design Agency",
    description:
      "Professional web design and development services for modern businesses. Transform your digital presence with our expert team.",
    images: ["/og-image.jpg"],
    creator: "@vikiflow",
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
  },
  alternates: {
    canonical: "https://www.vikiflow.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={cn(inter.variable, "font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <BackButton />
            <main className="flex-1">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
