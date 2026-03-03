import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import I18nProvider from '@/components/I18nProvider'
import './globals.css'

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ilknur Brows | Premium Brow Artist',
  description:
    'Professional microblading, brow lamination & powder brows by Ilknur. 500+ happy clients. Book your appointment today.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  )
}
