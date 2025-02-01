import localFont from 'next/font/local'
import './globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

import { Playfair_Display, Open_Sans } from 'next/font/google'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-playfair_display',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  //👇 Add variable to our object
  variable: '--font-opensans',
})

export const metadata = {
  title:
    'Professional Wedding Planning Services For Busy Couples | Monica Browne Weddings',
  description:
    "Are you a busy couple looking for a wedding planner? We'll take care of everything, from finding the perfect venue to finding the best caterers. Call us today!",
  alternates: {
    canonical: 'https://monicabrowneweddings.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${openSans.variable} font-sans`}
    >
      <body cz-shortcut-listen="true">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
