import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Cursor from '@/components/Cursor'
import ParticlesCanvas from '@/components/ParticlesCanvas'
import ScrollRevealProvider from '@/components/ScrollRevealProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Hariharan Ganesan — Frontend Developer',
  description:
    'Software Engineer crafting scalable SaaS and AI-powered applications using React.js, TypeScript, Next.js, and modern web technologies.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Cursor />
        <ParticlesCanvas />
        <ScrollRevealProvider />
        {children}
      </body>
    </html>
  )
}
