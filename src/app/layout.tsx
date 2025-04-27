import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Roberto Franco · Software-Engineering Mentor & Growth Partner",
  description: "1-on-1 mentoring that turns junior developers into confident, job-ready engineers. Book a free strategy session with Roberto Franco today.",
  robots: "index, follow",
  alternates: {
    canonical: "https://franzet.com/",
  },
  openGraph: {
    type: "website",
    url: "https://franzet.com/",
    title: "Roberto Franco · Software-Engineering Mentor & Growth Partner",
    description: "Hands-on guidance, custom roadmaps, and accountability to help you ship production-ready code faster.",
    siteName: "Roberto Franco Mentoring",
    images: [
      {
        url: "https://franzet.com/og_cover.jpg",
        alt: "Roberto Franco - Software Engineer Mentor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roberto Franco · Software-Engineering Mentor & Growth Partner",
    description: "Level-up your dev career with 1-on-1 mentoring. Book a free strategy session.",
    site: "@RobeertoFZ",
    creator: "@RobeertoFZ",
    images: ["https://franzet.com/og_twitter_cover.jpg"],
  },
  other: {
    "X-UA-Compatible": "IE=edge",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="alternate icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Roberto Franco",
              "jobTitle": "Software-Engineering Mentor",
              "description": "Senior software engineer and tech-lead offering personalized mentoring for early-career developers.",
              "url": "https://franzet.com/",
              "image": "https://franzet.com/og_cover.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/robertofz/",
                "https://github.com/RobertoFZ"
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
