import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SmoothScroll from '@/components/layout/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevGenius | La Mejor Agencia de Desarrollo de Latinoamérica',
  description: 'Transformamos ideas en soluciones digitales innovadoras. Especialistas en desarrollo web, móvil y servicios de ingeniería de software.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}