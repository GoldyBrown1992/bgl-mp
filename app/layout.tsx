import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

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
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  )
}
