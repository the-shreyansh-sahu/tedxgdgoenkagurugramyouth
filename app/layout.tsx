import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TEDx GD Goenka Gurugram Youth',
  description: 'The Official Website of TEDx GD Goenka Gurugram Youth',
  generator: 'Shreyansh Sahu',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
