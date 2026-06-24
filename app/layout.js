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
  metadataBase: new URL('https://monicabrowneweddings.com'),
  title:
    'Professional Wedding Planning Services For Busy Couples | Monica Browne Weddings',
  description:
    "Are you a busy couple looking for a wedding planner? We'll take care of everything, from finding the perfect venue to finding the best caterers. Call us today!",
  alternates: {
    canonical: 'https://monicabrowneweddings.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://monicabrowneweddings.com',
    siteName: 'Monica Browne Weddings',
    title:
      'Professional Wedding Planning Services For Busy Couples | Monica Browne Weddings',
    description:
      "Are you a busy couple looking for a wedding planner? We'll take care of everything, from finding the perfect venue to finding the best caterers. Call us today!",
    images: [
      {
        url: 'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/walking-down-aisle_o4wklu.webp',
        width: 1200,
        height: 630,
        alt: 'Monica Browne Weddings — Wedding Planning Services in DC, Maryland, and Virginia',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Professional Wedding Planning Services For Busy Couples | Monica Browne Weddings',
    description:
      "Are you a busy couple looking for a wedding planner? We'll take care of everything, from finding the perfect venue to finding the best caterers. Call us today!",
    images: [
      'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/walking-down-aisle_o4wklu.webp',
    ],
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
