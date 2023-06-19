import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React Basics',
  description: 'React Basics bspoke 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (


    <html lang="en">
      <body className={inter.className}>
        <div className='flex flex-row'>
        {children}
        </div>
      </body>
    </html>
  )
}
