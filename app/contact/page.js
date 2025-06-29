import ContactForm from '@/components/ContactForm'

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
  return <ContactForm />
}
