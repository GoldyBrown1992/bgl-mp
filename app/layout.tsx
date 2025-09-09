import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brown Girl Lifts x Goldy Brown - Power Box',
  description: 'Premium high-protein meal boxes for women who lift. 100g+ protein, 1,200 calories of pure fuel.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  )
}
