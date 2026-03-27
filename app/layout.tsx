import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Forge — Ship Products, Not Meetings',
  description: '50 AI agents that argue, iterate, and ship — your product team without the politics.',
  openGraph: {
    title: 'Forge — Ship Products, Not Meetings',
    description: '50 AI agents that argue, iterate, and ship — your product team without the politics.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-bg-base text-white`}>
        {children}
      </body>
    </html>
  )
}
