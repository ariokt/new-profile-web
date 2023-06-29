import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ario Waskita | Frontend Developer',
  description: 'Ario Waskita merupakan Frontend Developer Profesional dari Indonesia, Jakarta.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black"} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
