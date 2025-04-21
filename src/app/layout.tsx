import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SmoothScroll from '@/components/layout/SmoothScroll'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Alets | Agencia Líder en Desarrollo de Software en Latinoamérica',
  description: 'Alets: Creamos software de vanguardia que impulsa el éxito. La agencia de desarrollo líder en Latinoamérica, transformando ideas en realidad digital.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}