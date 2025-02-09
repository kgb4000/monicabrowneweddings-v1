import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Day-of Wedding Planner in Alexandria Virgina | Monica Browne Weddings',
  description:
    'Looking for wedding planners in Alexandria Virginia? We are local wedding planning experts that can help plan your day perfect. Schedule a call with us today!',
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/day-of-wedding-planner-alexandria-va',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-planner-alexandria-va',
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

const serviceStructuredData = {
  '@context': 'https://schema.org/',
  '@type': 'Service',
  serviceType: 'Day of Wedding Coordination',
  description:
    'Our Day-of Coordination service ensures your wedding day runs smoothly and flawlessly. We handle all the logistics, vendor management, and on-site coordination so you can relax and enjoy your special day.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Monica Browne Weddings',
    url: 'https://monicabrowneweddings.com/',
    telephone: '+1-240-665-3350',
    email: 'monica@monicabrowneweddings.com',
  },
  image:
    'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/walking-down-aisle_o4wklu.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4710 Silverbrook Way',
    addressLocality: 'Bowie',
    addressRegion: 'MD',
    postalCode: '20720',
    addressCountry: 'US',
  },
  url: 'https://monicabrowneweddings.com/day-of-wedding-planner-alexandria-va',
  telephone: '+1-240-665-3350',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.013313',
    longitude: '-76.776924',
  },
  geoRadius: '1000',
  areaServed: [
    // Use an array for multiple locations or GeoShapes
    {
      '@type': 'City',
      name: 'Alexandria',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Arlington',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Fairfax',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Springfield',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Great Falls',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'McLean',
      addressRegion: 'VA',
    },
  ],

  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  hasOfferCatalog: {
    // If you have packages, this is helpful
    '@type': 'OfferCatalog',
    name: 'Wedding Packages',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Offer',
          name: 'Day-Of Coordination Package',
          description:
            'Our most popular package for couples who have planned their wedding but need help with final details and on-the-day execution.',
          priceRange: '$$',
          priceCurrency: 'USD',
        },
      },
      // Add more packages here as needed
    ],
  },
  review: [
    // Add reviews if you have them.  Even one or two helps!
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Kimberley Hooper-Twumasi',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Emily Menge',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Whitney Ames',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Diane',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Donna McIntyre',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Katrina Edmonds',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Lisa',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Teresa Thomas',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
    },
    // Add more reviews as needed
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5,
    bestRating: 5,
    ratingCount: 8,
  },
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How Much Does a Wedding Cost in Alexandria, VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the DC metro area, at least, a wedding can cost anywherebetween, but it all depends on what you want to spend. You can have a small wedding and spend $5,000 to $10,000 or $50,000 to $300,000. It depends on what you want to spend. Most of the cost depends on your guest count, and venue.',
      },
    },
    {
      '@type': 'Question',
      name: 'How Much Does Wedding Planner Cost in Northern VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "An experienced planner can cost $3,500 - $10,000 in our metro area. This price depends on the planner's experience and the size of the event. It also depends on whether it is day-of coordination or a full-service package. A day-of coordinator can cost $2,500 - $7,000, while full planning can cost $4,000 - $10,000 plus. Call us to get a custom quote for your event.",
      },
    },
    {
      '@type': 'Question',
      name: 'What types of wedding planning services do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a range of wedding planning services to suit yourneeds. Our full-service planning package covers every detail from engagement to honeymoon, including budget management, vendor selection, venue scouting, design, and day-of coordination. For couples who have already started planning, our partial planning service provides customized assistance with specific areas where you need help. And finally, our day-of coordination package ensures seamless execution on your wedding day, allowing you to relax and enjoy the celebration while we handle all the logistics.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a marriage license in Alexandria, VA, and how do I get one?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, you need a marriage license from the Commonwealth of Virginia. Both parties must appear in person at the Clerk of the Circuit Court in the county where the marriage will be performed (in this case, Alexandria). You'll need to provide identification and pay a fee. There is no waiting period in  Virginia, so you can typically get your license and marry on the same day. However, the license is only valid for 60 days.",
      },
    },
    {
      '@type': 'Question',
      name: 'What are some popular wedding venues in Alexandria, VA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alexandria offers a diverse range of venues, from historic mansions like the Carlyle House and the George Mason Mount Vernon estate, to elegant waterfront locations like the Torpedo Factory Art Center, and charming outdoor spaces like the River Farm. count. Researching online and visiting potential venues is highly recommended.',
      },
    },
  ],
}

export default async function WeddingPlannerAlexandriaVa() {
  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(serviceStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      <Hero
        herotext="Day-of Wedding Planner for Busy Couples in Alexandria Virginia"
        heroSubText="We create stunning weddings for busy couples in Alexandria, VA, blending timeless traditions with modern elegance for a day you’ll cherish forever"
        buttonText="Book A Call With Monica!"
        textColor="text-white"
        imageUrl="/images/KINA1058.jpg"
      />
      <main>
        <div className="container max-w-7xl mx-auto px-6">
          <section>
            <div className="py-10 md:py-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-5xl my-8 text-center">
                  Top Rated Day-of Wedding Planning Services in Alexandria, and
                  Northen Virginia
                </h2>
                <p className="md:text-xl mb-4">
                  Planning your dream wedding should be an exciting and joyful
                  experience, not a source of stress. But let's face it,
                  juggling work, life, and wedding preparations can quickly
                  become overwhelming. Many couples find themselves short on
                  time and energy, struggling to bring their vision to life.
                  Don't let the pressure of planning steal the joy of your
                  special day.
                </p>
                <p className="md:text-xl mb-4">
                  We're a premier event management and wedding planning company
                  dedicated to creating unforgettable weddings in Alexandria,
                  VA, and the surrounding Northern Virginia area. Our expert
                  team takes the reins, managing every detail so you can relax
                  and savor the journey to "I do."
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-4 my-8 max-w-5xl mx-auto">
                <img
                  src="/images/wedding-table-centerpiece-design.webp"
                  alt="Wedding table centerpiece design for small wedding."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <img
                  src="/images/wedding-cake.webp"
                  alt="Wedding cake picture"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <img
                  src="/images/wedding-table-with-cork-centerpiece.webp"
                  alt="Wedding table decorations by Monica Browne Weddings"
                  loading="lazy"
                  width="472"
                  height="708"
                />
              </div>
              <div className="max-w-3xl mx-auto">
                <p className="md:text-xl mb-4">
                  Whether you envision a grand celebration or an intimate
                  gathering, we offer tailored services to meet your specific
                  needs and budget.
                </p>
                <p className="md:text-xl mb-4">
                  Our full-service wedding planning package handles everything
                  from start to finish, allowing you complete freedom to focus
                  on what matters most.
                </p>
                <p className="md:text-xl mb-4">
                  For couples who prefer a more hands-on approach, our
                  partial-service wedding planning option provides customized
                  support where you need it most.
                </p>
                <p className="md:text-xl mb-4">
                  And if you've already done the groundwork but need a
                  professional to ensure seamless execution on your big day, our
                  day-of coordination service is the perfect solution.
                </p>
              </div>
              <p className="text-xl italic mt-10 text-center max-w-md mx-auto">
                Book a 15-minute with Monica and see how she can help you plan
                your wedding today!
              </p>
              <div className="center">
                <a href={calendly} target="_blank">
                  <Button
                    buttonText="Book a Call With Monica"
                    bgColor="bg-purple-500"
                    borderWidth="border-0"
                    textColor="text-white"
                    textSize="md:text-xl"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
        <section className="bg-slate-800">
          <div className="max-w-3xl mx-auto py-10 md:py-20 text-white px-6">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              Alexandria, VA Wedding Planning: Stress-Free "I Do's" Start Here
            </h2>
            <p className="md:text-xl mb-4">
              Planning your dream wedding in beautiful Alexandria, VA? From the
              moment you say "Yes!" to the final dance, we're here to transform
              your vision into a flawless reality. Let us handle the details so
              you can cherish every precious moment.
            </p>
            <p className="md:text-xl mb-4">Imagine a wedding where:</p>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Your unique love story shines through
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                We collaborate closely with you to understand your personal
                style, preferences, and dreams, crafting a bespoke wedding plan
                that truly reflects who you are as a couple. Your vision is our
                priority.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">• Stress melts away</h3>
              <p className="md:text-xl mb-4 ml-4">
                Wedding planning can be overwhelming, but it doesn't have to be.
                We expertly manage every detail, from budget management and
                vendor coordination to timeline creation and logistics, freeing
                you to savor your engagement.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Every detail is picture-perfect:
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Struggling with design choices? Our expertise in wedding
                aesthetics will guide you. We'll help you curate a stunning
                atmosphere, from ceremony to reception, ensuring a cohesive and
                breathtaking experience that wows your guests.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Your wedding day unfolds flawlessly
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Relax and enjoy every second of your special day knowing we're
                handling everything behind the scenes. We'll manage vendor
                arrivals, oversee the timeline, and troubleshoot any last-minute
                adjustments, allowing you to be fully present with your loved
                ones.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • The celebration continues seamlessly
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Our support extends beyond the "I do's." We'll manage
                post-wedding logistics, including rental returns, final vendor
                payments, and any other loose ends, ensuring a smooth and
                stress-free conclusion to your celebration.
              </p>
            </div>
            <p className="text-xl italic text-center max-w-md mx-auto">
              Ready to start planning your dream Alexandria wedding? Book Your
              Free Call Now
            </p>
            <div className="center">
              <a href={calendly} target="_blank">
                <Button
                  buttonText="Book a Call With Monica"
                  borderColor="border-white"
                  borderWidth="border-2"
                  textColor="text-white"
                  borderStyle="border-solid"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="bg-slate-50">
          <div className="container mx-auto px-4 max-w-7xl py-20">
            <h2 className="text-5xl text-center mb-10 leading-normal">
              Testimonials
            </h2>
            <div className="lg:grid grid-cols-3 gap-6">
              <div>
                <p className="text-md py-6 px-6 leading-8">
                  Mrs. Browne came as a recommendation from my wedding cake
                  designer and I couldn't be happier. Ms. Browne was prompt,
                  responsive, and incredibly knowledgeable about flowers and
                  design. She kept me updated and sent texts of her selections
                  from the flower market the week of my wedding. She delivered
                  my flowers the day before my event with thorough care
                  instructions and carefully packaged. I would, and have
                  recommended Ms. Browne for additional events and will be using
                  her for my wedding reception in 2022.
                </p>
                <div className="flex flex-row justify-items-center pl-6">
                  <img
                    src="images/kimberley-hooper-twumasi.png"
                    className="basis-1 rounded-full border-orange-800 border-4"
                  />
                  <p className="mt-2 pl-6">Kimberley Hooper-Twumasi</p>
                </div>
              </div>
              <div>
                <p className="text-md py-6 px-6 leading-8">
                  Monica and her team made our wedding amazing! She was our
                  month of planner and helped us tremendously. I’m positive that
                  our wedding day wouldn’t have gone as seamlessly as it did if
                  Monica wasn’t there to manage everything. She went above and
                  beyond to make our wedding perfect and we don’t have a single
                  thing we would change about the day. Go ahead and book Monica
                  right now if you’re contemplating a wedding planner!!
                </p>
                <div className="flex flex-row justify-items-center pl-6">
                  <img
                    src="images/emily-menge.png"
                    className="basis-1 rounded-full border-orange-800 border-4"
                  />
                  <p className="mt-2 pl-6">Emily Menge</p>
                </div>
              </div>
              <div>
                <p className="text-md py-6 px-6 leading-8">
                  The best thing I could have done for our daughter's wedding
                  was hire Monica Browne of Monica Brown Weddings to be our
                  Coordinator. A true professional; she is detailed oriented and
                  extremely easy to work with. There are not enough stars to
                  give Monica for a true rating (10 ++++…). She knows exactly
                  what the bride would need and how to go about it. The day of
                  the event, Monica and her team awesome professional. We would
                  highly recommend Monica Browne Weddings!
                </p>
                <div className="flex flex-row justify-items-center pl-6">
                  <img
                    src="images/whitney-ames.png"
                    className="basis-1 rounded-full border-orange-800 border-4"
                  />
                  <p className="mt-2 pl-6">Whitney Ames</p>
                </div>
              </div>
            </div>
            <div className="py-10 md:mt-0">
              <Link href="/testimonials">
                <Button
                  buttonText="Read More Testimonials!"
                  bgColor="bg-purple-500"
                  borderWidth="border-0"
                  textColor="text-white"
                  textSize="md:text-xl"
                />
              </Link>
            </div>
          </div>
        </section>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto  py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              Imagine: Your perfect wedding, effortlessly planned. We take care
              of everything, from "Yes" to "I do."
            </h2>
            <div className="grid grid-cols-2 gap-2 mb-10">
              <Image
                src="/images/KINA0562.jpg"
                alt="Newly wed couple at Irongate Restaurant in Washington, DC"
                loading="lazy"
                width="472"
                height="708"
              />
              <Image
                src="/images/KINA0531.jpg"
                alt="Newly wed couple at Irongate Restaurant in Washington, DC"
                loading="lazy"
                width="472"
                height="708"
              />
              <Image
                src="/images/KINA0330.jpg"
                alt="Newly wed couple at Irongate Restaurant in Washington, DC"
                loading="lazy"
                width="472"
                height="708"
              />

              <Image
                src="/images/KINA0406.jpg"
                alt="Newly wed couple at Irongate Restaurant in Washington, DC"
                loading="lazy"
                width="472"
                height="708"
              />
            </div>
            <p className="text-xl italic text-center max-w-md mx-auto">
              Short on time? We'll plan your dream wedding while you focus on
              what matters most.{' '}
            </p>
            <div className="center">
              <a href={calendly} target="_blank">
                <Button
                  buttonText="Book a Call With Monica"
                  bgColor="bg-purple-500"
                  borderWidth="border-0"
                  textColor="text-white"
                  textSize="md:text-xl"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <section className="bg-slate-50">
            <div className="max-w-2xl mx-auto py-10 md:py-20 px-6">
              <h2 className="text-3xl md:text-5xl text-center">
                Day-of Coordination You Can Trust Starts Here.
              </h2>
              <p className="md:text-xl my-4">
                Imagine: A perfectly orchestrated wedding day in Alexandria, VA,
                where you don't have to lift a finger.
              </p>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">1. Connect with Monica</h4>
                <p className="md:text-xl my-4">
                  Book a call with Monica to chat about your wedding plans.
                </p>
              </div>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">2. Share Your Vision</h4>
                <p className="md:text-xl my-4">
                  We'll create a customized timeline, coordinate with vendors,
                  and ensure a seamless celebration.
                </p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl">
                  3. Enjoy Your Special Day
                </h4>
                <p className="md:text-xl my-4">
                  Focus on celebrating – we've got everything covered.
                </p>
                <div className="center">
                  <a href={calendly} target="_blank">
                    <Button
                      buttonText="Book a Call With Monica"
                      bgColor="bg-purple-500"
                      borderWidth="border-0"
                      textColor="text-white"
                      textSize="md:text-xl"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="container max-w-5xl mx-auto px-6">
          {/* <section>
            <div className="max-w-2xl mx-auto py-10 md:py-20">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Why Hire Monica as Wedding Planner in Alexandria
              </h2>
              <p className="md:text-xl mb-4">
                When you choose Monica Browne Weddings, you’re hiring a
                professional with over 15 years of experience in the wedding
                industry.
              </p>
              <p className="md:text-xl mb-4">
                Here’s what we bring to your special day:
              </p>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Stress-Free Execution
                </h3>
                <p className="md:text-xl mb-4">
                  We ensure your event runs smoothly, starting and ending on
                  time, so you can focus on enjoying your wedding.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Attention to Detail
                </h3>
                <p className="md:text-xl mb-4">
                  From double-checking everything from{' '}
                  <Link href="/wedding-flowers">flowers</Link> and{' '}
                  <Link href="/wedding-decoration-services">decorations</Link>{' '}
                  to managing vendor setups, we make sure every detail matches
                  your vision.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">Problem Solving</h3>
                <p className="md:text-xl mb-4">
                  Unexpected issues? We handle them quickly so you never have to
                  worry about anything on your wedding day.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Flawless Coordination
                </h3>
                <p className="md:text-xl mb-4">
                  We manage your timeline, communicate with vendors, and oversee
                  the day’s logistics to keep everything on track.
                </p>
              </div>
              <div className="center">
                <a href={calendly} target="_blank">
                  <Button
                    buttonText="Book a Call With Monica"
                    bgColor="bg-purple-500"
                    borderWidth="border-0"
                    textColor="text-white"
                    textSize="md:text-xl"
                  />
                </a>
              </div>
            </div>
          </section> */}
          <div className="grid lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <img
              src="/images/wedding-table-centerpiece-design.webp"
              alt="Wedding table centerpiece design for small wedding."
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="/images/wedding-cake.webp"
              alt="Wedding cake picture"
              loading="lazy"
              width="472"
              height="708"
            />
            <img
              src="/images/wedding-table-with-cork-centerpiece.webp"
              alt="Wedding table decorations by Monica Browne Weddings"
              loading="lazy"
              width="472"
              height="708"
            />
          </div>
          <section>
            <div className="max-w-3xl mx-auto py-10 md:py-20">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Why Couples Trust Monica Browne Weddings as Their Wedding
                Planner
              </h2>
              <p className="md:text-xl mb-4">
                Couples choose us because we know how to handle the details that
                matter most, especially as your wedding day approaches.
              </p>
              <p className="md:text-xl mb-4">
                When your big day is just eight weeks away, we step in to manage
                everything with meticulous care:
              </p>
              <ul className="ml-8 my-10 list-disc">
                <li className="md:text-xl mb-4">
                  Vendor Management: Review and organize vendor contracts,
                  confirm payments, and finalize schedules.
                </li>
                <li className="md:text-xl mb-4">
                  Wedding Attire Coordination: Oversee final fittings for you
                  and your bridal party, ensuring everyone has their attire
                  ready.
                </li>
                <li className="md:text-xl mb-4">
                  Venue Walkthroughs: Conduct detailed walk-throughs of your
                  ceremony and reception venues to ensure perfection.
                </li>
                <li className="md:text-xl mb-4">
                  Detailed Wedding Timeline: Create a comprehensive schedule for
                  the entire day, keeping everyone informed and on track.
                </li>
                <li className="md:text-xl mb-4">
                  Rehearsal Oversight: Supervise and coordinate a two-hour
                  rehearsal during your wedding week to ensure everything runs
                  smoothly.
                </li>
                <li className="md:text-xl mb-4">
                  Point of Contact: Serve as the main communication hub for your
                  bridal party starting on rehearsal day.
                </li>
                <li className="md:text-xl mb-4">
                  Day-of Logistics: Manage every detail on your wedding day,
                  from vendor arrivals to timeline execution, so you can relax
                  and enjoy.
                </li>
              </ul>
              <p className="md:text-xl mb-4">
                A day of wedding coordinator will manage your wedding day when
                the day arrives.
              </p>
              <p className="md:text-xl mb-4">
                They do not help you plan your wedding like a full service
                wedding planner.
              </p>
              <p className="md:text-xl mb-4">
                A wedding planner will help you plan your wedding from start to
                finish.
              </p>
              <p className="md:text-xl mb-4">
                They may start working with you a year or six months before your
                big day and help you with the initial wedding planning stages.
              </p>
              <div className="center">
                <a href={calendly} target="_blank">
                  <Button
                    buttonText="Book a Call With Monica"
                    bgColor="bg-purple-500"
                    borderWidth="border-0"
                    textColor="text-white"
                    textSize="md:text-xl"
                  />
                </a>
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-3xl mx-auto py-10">
              <h2 className="text-3xl md:text-5xl text-center mb-10">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. How Much Does a Wedding Cost in Alexandria, VA?
              </h3>
              <p className="md:text-xl mb-4">
                In the DC metro area, at least, a wedding can cost anywhere
                between{' '}
                <Link href="/blog/how-much-does-a-100-person-wedding-cost">
                  $32,000 and $70,000
                </Link>
                , but it all depends on what you want to spend. You can have a
                small wedding and spend $5,000 to $10,000 or $50,000 to
                $300,000. It depends on what you want to spend. Most of the cost
                depends on your guest count,{' '}
                <Link href="/blog/how-to-choose-the-right-catering-menu-for-your-dc-wedding">
                  catering
                </Link>
                , and venue.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. How Much Does Wedding Planner Cost in Northern VA?
              </h3>
              <p className="md:text-xl mb-4">
                An experienced planner can cost <b>$3,500 - $10,000</b> in our
                metro area. This price depends on the planner's experience and
                the size of the event. It also depends on whether it is day-of
                coordination or a full-service package. A day-of coordinator can
                cost <b>$2,500 - $7,000</b>, while full planning can cost{' '}
                <b>$4,000 - $10,000 plus</b>. Call us to get a custom quote for
                your event.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. What types of wedding planning services do you offer?
              </h3>
              <p className="md:text-xl mb-4">
                We offer a range of wedding planning services to suit your
                needs. Our full-service planning package covers every detail
                from engagement to honeymoon, including budget management,
                vendor selection, venue scouting, design, and day-of
                coordination. For couples who have already started planning, our
                partial planning service provides customized assistance with
                specific areas where you need help. And finally, our day-of
                coordination package ensures seamless execution on your wedding
                day, allowing you to relax and enjoy the celebration while we
                handle all the logistics.
              </p>
              <p className="md:text-xl mb-4">
                Read{' '}
                <Link href="/blog/wedding-planner-vs-coordinator">
                  the difference between a wedding planner and day-of wedding
                  coordinator
                </Link>{' '}
                here.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. Do I need a marriage license in Alexandria, VA, and how do I
                get one?
              </h3>
              <p className="md:text-xl mb-4">
                Yes, you need a marriage license from the Commonwealth of
                Virginia. Both parties must appear in person at the Clerk of the
                Circuit Court in the county where the marriage will be performed
                (in this case, Alexandria). You'll need to provide
                identification and pay a fee. There is no waiting period in
                Virginia, so you can typically get your license and marry on the
                same day. However, the license is only valid for 60 days.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #5 What are some popular wedding venues in Alexandria, VA?
              </h3>
              <p className="md:text-xl mb-4">
                Alexandria offers a diverse range of venues, from historic
                mansions like the Carlyle House and the George Mason Mount
                Vernon estate, to elegant waterfront locations like the Torpedo
                Factory Art Center, and charming outdoor spaces like the River
                Farm. The best choice depends on your style, budget, and guest
                count. Researching online and visiting potential venues is
                highly recommended.
              </p>
            </div>
            <p className="text-xl italic text-center max-w-md mx-auto">
              Book a 15-minute call with Monica and see how a day-of wedding
              coordinator can help you!
            </p>
            <div className="center">
              <a href={calendly} target="_blank">
                <Button
                  buttonText="Book a Call With Monica"
                  bgColor="bg-purple-500"
                  borderWidth="border-0"
                  textColor="text-white"
                  textSize="md:text-xl"
                />
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
