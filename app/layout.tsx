import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Sora } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Photonic Software',
  description: 'Photonic software landing page',
  generator: 'photonic-software-Development-Team',
}


const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Podés ajustar según tu diseño
  variable: '--font-sora',       // Usaremos esto en Tailwind
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
  scroll-behavior: smooth;
}
        `}</style>
      </head>
      <body className={`${sora.variable} font-sora`}>{children}</body>
    </html>
  )
}
