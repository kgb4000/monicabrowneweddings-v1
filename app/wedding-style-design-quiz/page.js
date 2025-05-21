'use client'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'
import { Widget } from '@typeform/embed-react'
import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

// export const metadata = {
//   title:
//     'Day-of Wedding Planner in Alexandria, VA, for Couples Who Want a Perfect Day',
//   description:
//     'Looking for a wedding planner in Alexandria, VA? We are local wedding planning experts that can help plan your perfect day. Schedule a call with us today!',
//   alternates: {
//     canonical:
//       'https://monicabrowneweddings.com/day-of-wedding-planner-alexandria-va',
//   },
//   openGraph: {
//     type: 'website',
//     locale: 'en_US',
//     url: 'https://monicabrowneweddings.com/wedding-planner-alexandria-va',
//     site_name: 'Monica Browne Weddings',
//     images: [
//       {
//         url: 'https://monicabrowneweddings.com/public/images/wedding-planner-vs-coordinator.webp',
//         width: 1000,
//         height: 1500,
//         alt: 'Micro wedding at winery in Maryland.',
//       },
//     ],
//   },
// }

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [{}],
}

export default async function WeddingDesignQuiz() {
  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      <main>
        <div className="container max-w-9xl mx-auto px-6">
          <Widget id="BKmrwfEN" className="h-lvh" />
        </div>
      </main>
    </div>
  )
}
