import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#db2777',
}

export const metadata: Metadata = {
  title: 'Buddhika Fernando | Full Stack Developer',
  description: 'Buddhika Fernando - Full Stack Developer Portfolio. Specialized in Java, Spring Boot, React, and TypeScript.',
  keywords: ['Full Stack Developer', 'Java', 'Spring Boot', 'React', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Buddhika Fernando' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Buddhika Fernando | Full Stack Developer',
    description: 'Full Stack Developer specialized in Java, Spring Boot, React, and TypeScript',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
