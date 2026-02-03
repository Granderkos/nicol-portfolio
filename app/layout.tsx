import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: 'Nicol Štampferová | 2D Grafická Designérka',
  description: 'Portfolio 2D grafické designérky specializující se na vizuální identitu, marketingovou grafiku a produkčně připravený design pro digitál i tisk.',
  generator: 'v0.app',
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {/* Background */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/hero-textile-sharp.jpg')",
              opacity: 0.35, // doladíš 0.25–0.45 podle chuti
            }}
          />
          {/* Jemná “mlha”, aby text byl čitelný */}
          <div className="absolute inset-0 bg-background/70" />
        </div>

        {children}
      </body>
    </html>
  )
}
