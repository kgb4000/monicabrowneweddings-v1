import ContactForm from '@/components/ContactForm'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://monicabrowneweddings.com' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://monicabrowneweddings.com/contact' },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': 'https://monicabrowneweddings.com/contact#contactpage',
      name: 'Contact Monica Browne Weddings',
      url: 'https://monicabrowneweddings.com/contact',
      description: 'Contact Monica Browne Weddings to begin planning your wedding in Washington DC, Maryland, or Northern Virginia.',
      mainEntity: { '@id': 'https://monicabrowneweddings.com' },
    },
  ],
}

export const metadata = {
  title: 'Contact | Monica Browne Weddings',
  description:
    "If you're a busy couple planning your wedding and you think you may need help, please contact us.",
  alternates: {
    canonical: 'https://monicabrowneweddings.com/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/contact',
    site_name: 'Monica Browne Weddings',
    images: [
      {
        url: 'https://monicabrowneweddings.com/public/images/wedding-planner-vs-coordinator.webp',
        width: 1000,
        height: 1500,
        alt: 'Micro wedding at winery in Maryland.',
      },
    ],
  },
}

export default function Contact() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ContactForm />
    </>
  )
}
