import Sidebar from '@/components/Sidebar'
import './globals.css'
import { Figtree } from 'next/font/google' 

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Muse',
  description: 'Listen to your favorite songs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  )
}
