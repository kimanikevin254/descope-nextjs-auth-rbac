import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Descope - Next.js Auth',
  description: 'Demonstrating how to add auth & RBAC to Next.js 14 using App router',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={`${inter.className} max-w-screen-lg mx-auto py-4`}>{children}</body>
      </html>
  )
}
