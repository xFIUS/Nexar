import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NEXAR — Signal Intelligence Terminal',
  description: 'Real-time signal intelligence terminal. Military flights, whale moves, OSINT & prediction markets — mapped to geopolitical risk.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
