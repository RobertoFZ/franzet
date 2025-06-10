import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
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
        url: "https://franzet.com/og_cover.png",
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
    images: ["https://franzet.com/og_twitter_cover.png"],
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
              "@type": ["Person", "ProfessionalService"],
              "name": "Roberto Franco",
              "alternateName": ["Roberto Franco Franzet", "RobertoFZ"],
              "jobTitle": "Software Engineering Mentor & Tech Lead",
              "description": "Senior software engineer, tech lead, and mentor specializing in revenue management systems, AI integration, and developer career growth. Helping junior developers become confident, job-ready engineers.",
              "url": "https://franzet.com/",
              "image": {
                "@type": "ImageObject",
                "url": "https://franzet.com/og_cover.png",
                "width": 1200,
                "height": 630
              },
              "logo": "https://franzet.com/og_cover.png",
              "sameAs": [
                "https://www.linkedin.com/in/robertofz/",
                "https://github.com/RobertoFZ",
                "https://medium.com/@roberzet",
                "https://twitter.com/RobeertoFZ"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Roberto Franco Mentoring",
                "url": "https://franzet.com/"
              },
              "knowsAbout": [
                "Software Engineering",
                "Technical Leadership",
                "Revenue Management",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "AI Development",
                "Mentoring",
                "Career Development"
              ],
              "offers": {
                "@type": "Service",
                "name": "Software Engineering Mentoring",
                "description": "1-on-1 mentoring for junior developers and engineers looking to advance their careers"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "roberto@franzet.com",
                "contactType": "professional"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://franzet.com/"
              }
            })
          }}
        />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
