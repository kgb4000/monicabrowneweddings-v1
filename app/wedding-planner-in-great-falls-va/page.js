import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Day-of | Month-of Wedding Planner in Great Falls, VA for Unforgettable Weddings',
  description:
    "Looking for a top ranked wedding planner in Great Falls? We'll make your wedding a memorable and enjoyable celebration for everyone! Book a call today!",
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/wedding-planner-in-great-falls-va',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-planner-in-great-falls-va',
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
      name: 'Tysons Corner',
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
}

export default async function weddingPlannerGreatFallsVA() {
  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(serviceStructuredData)}
      </script>
      <Hero
        herotext="Wedding Planner in Great Falls, VA, for Unforgettable Weddings"
        heroSubText="We create unforgettable weddings for busy couples in Great Falls, seamlessly blending elegance, romance, and personal touches for a day you’ll treasure forever"
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
                  A Wedding Planner in Great Falls, VA for Stress-Free and
                  Beautiful Wedding Celebrations
                </h2>
                <p className="md:text-xl mb-4">
                  At Monica Browne Weddings, we specialize in creating seamless,
                  unforgettable weddings for couples in Great Falls and Northern
                  Virginia.
                </p>
                <p className="md:text-xl mb-4">
                  Whether you need full-service planning, a month-of wedding
                  planner, or a day-of wedding planner, our team is here to
                  ensure your big day is flawlessly executed while you enjoy
                  every moment.
                </p>
                <p className="md:text-xl mb-4">
                  We believe wedding planning should be an exciting journey, not
                  a stressful task.
                </p>
                <p className="md:text-xl mb-4">
                  Our goal is to make the process effortless, handling
                  everything from vendor coordination and event design to
                  logistics and on-the-day execution.
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
                  As an experienced wedding planner in Great Falls, we embrace
                  cultural diversity and have had the honor of planning many
                  beautiful celebrations for couples from{' '}
                  <Link href="/indian-wedding-planner-washington-dc">
                    Indian
                  </Link>{' '}
                  ,{' '}
                  <Link href="/jewish-wedding-planner-maryland-dc-virginia">
                    Jewish
                  </Link>
                  , and multicultural backgrounds.
                </p>
                <p className="md:text-xl mb-4">
                  Whether you want to incorporate traditional elements or blend
                  them with modern elegance, we will work with you to craft a
                  wedding that reflects your love story.
                </p>
                <p className="md:text-xl mb-4">
                  From intimate gatherings to grand celebrations, we are
                  committed to making your wedding a seamless and joyful
                  experience. Let us handle the details while you focus on
                  making memories.
                </p>
                <p className="md:text-xl mb-4">
                  Contact us today to learn how we can make your wedding in
                  Great Falls truly extraordinary!
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
              Your Expert Great Falls Wedding Planner – We Handle Every Detail
            </h2>
            <p className="md:text-xl mb-4">
              When you need a professional wedding planner in Great Falls to
              handle every aspect of your special day, we’ve got you covered.
            </p>
            <p className="md:text-xl mb-4">
              From the moment you get engaged to the final farewell at your
              reception, our goal is to create a seamless, stress-free
              experience so you can enjoy every magical moment.
            </p>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Personalized Wedding Planning for Your Dream Celebration
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Every couple deserves a wedding that reflects their love story.
                Whether you envision a grand celebration or an intimate affair,
                we work closely with you to craft a customized plan that brings
                your vision to life. From venue selection to vendor
                coordination, we ensure every detail aligns with your style and
                preferences.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Seamless and Stress-Free Wedding Planning
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Planning a wedding can feel overwhelming, but with an
                experienced wedding planner, you can enjoy the process without
                the stress. We take care of all logistics—budgeting, vendor
                communication, timeline management—so you can focus on
                celebrating your love. Whether you need full-service planning or
                expert guidance along the way, we’re here to make the journey
                effortless.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • A Picture-Perfect Wedding Designed Just for You
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                From elegant floral arrangements to stunning décor, we help
                design a breathtaking atmosphere that captures your vision.
                Whether you need guidance on color palettes, table settings, or
                ceremony backdrops, we’ll ensure your wedding is as beautiful as
                you imagined.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Expert Month-Of Wedding Planning for a Flawless Celebration
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                If you've already planned most of your wedding but need a
                professional to ensure everything runs smoothly, our month-of
                wedding planner services are the perfect solution. We step in
                four to six weeks before your wedding, finalize all the details,
                and coordinate with vendors to guarantee a flawless event. Our
                expertise ensures that nothing is overlooked, allowing you to
                relax as your big day approaches.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Day-Of Wedding Planner to Keep Everything on Track
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                On your wedding day, you deserve to be fully present without
                worrying about logistics. Our day-of wedding planner services
                ensure everything flows smoothly, from vendor arrivals to the
                timeline and last-minute adjustments. We manage the
                behind-the-scenes details so you can enjoy a stress-free,
                unforgettable celebration.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Beyond the Wedding Day – We've Got It Covered
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Our support doesn’t stop when the reception ends. We assist with
                post-wedding details such as vendor payments, rental returns,
                and coordinating any after-wedding events. Whether it's a
                farewell brunch or a smooth honeymoon departure, we make sure
                your wedding journey concludes just as perfectly as it began.
              </p>
            </div>
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
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto  py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              Want a wedding day where you can relax while someone else takes
              care of every little detail?
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
                Here's How to Get Started
              </h2>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">
                  1. Book a call with Monica
                </h4>
                <p className="md:text-xl my-4">
                  Book a call with Monica to discuss how she can help as your
                  day of coordinator.
                </p>
              </div>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">
                  2. Tell Monica about your event
                </h4>
                <p className="md:text-xl my-4">
                  Let us create a detailed timeline for you, contact your
                  vendors, and oversee the details of your wedding day.
                </p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl">
                  3. Enjoy your Wedding Day
                </h4>
                <p className="md:text-xl my-4">
                  Enjoy your wedding and cherish the moment!
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
          <section>
            <div className="max-w-2xl mx-auto py-10 md:py-20">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Why Hire Monica Browne Weddings as Your Great Falls Wedding
                Coordinator?
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
          </section>
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
        </div>
        <div className="container max-w-5xl mx-auto px-6">
          <section>
            <div className="max-w-2xl mx-auto py-10">
              <h2 className="text-3xl md:text-5xl text-center mb-10">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. How much does a wedding planner in Great Falls cost?
              </h3>
              <p className="md:text-xl mb-4">
                In Great Falls, investing in a professional wedding planner
                typically ranges from <b>$3,500 to $10,000+ </b>depending on
                experience, wedding size, and level of service. If you’re
                looking for day-of coordination, costs usually range between
                <b> $2,300 and $7,000</b>.
              </p>
              <p className="md:text-xl mb-4">
                For full-service planning, prices start around{' '}
                <b>$4,000 and can exceed $10,000</b> based on your specific
                needs and wedding complexity. Every wedding is unique, so for a
                customized quote tailored to your celebration, schedule a
                consultation with us today.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. What does a wedding planner do, and how can you help with my
                wedding?
              </h3>
              <p className="md:text-xl mb-4">
                A wedding planner takes care of every detail of your wedding,
                from budgeting and vendor coordination to designing your dream
                décor and managing the logistics on the big day.
              </p>
              <p className="md:text-xl mb-4">
                We work with local venues, collaborate with top-tier vendors,
                and ensure that your wedding aligns with your vision while
                running smoothly.
              </p>
              <p className="md:text-xl mb-4">
                If you prefer to handle most of the planning yourself but want
                to enjoy your wedding day without stress, our month-of
                coordination services ensure that every last detail is executed
                flawlessly.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. When should I hire a wedding planner for my Great Falls
                wedding?
              </h3>
              <p className="md:text-xl mb-4">
                It’s best to hire a wedding planner <b>12 to 18 months</b>{' '}
                before your wedding to ensure you have plenty of time to secure
                vendors and plan every detail. However, we offer services at any
                stage of your planning journey—whether you’re just starting or
                only have a few weeks left.
              </p>
              <p className="md:text-xl mb-4">
                Our day-of coordination is ideal for couples who have already
                planned their wedding but need an expert to bring everything
                together, so they can focus on enjoying their celebration
                without stress.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4 How will you ensure my wedding day goes smoothly?
              </h3>
              <p className="md:text-xl mb-4">
                To guarantee a flawless wedding day, we create a detailed
                timeline, confirm vendor schedules, conduct a venue walkthrough,
                and coordinate the rehearsal beforehand.
              </p>
              <p className="md:text-xl mb-4">
                On the day of your wedding, we manage all logistics,
                troubleshoot any unexpected issues, and serve as the main point
                of contact for vendors and your wedding party. Our goal is to
                handle every detail behind the scenes so you can fully enjoy
                your celebration without stress.
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

// Exceptional Wedding Planning Services in Great Falls and Northern VA
// At Monica Browne Weddings, we specialize in creating seamless, elegant, and unforgettable weddings for couples in Great Falls and Northern Virginia. Whether you're envisioning a grand celebration or an intimate gathering, we ensure every detail is thoughtfully planned and beautifully executed.

// Our approach to wedding planning is designed to make the process effortless and enjoyable. From the initial consultation to the final send-off, we handle everything—venue selection, décor styling, floral arrangements, vendor coordination, and timeline management—so you can focus on celebrating this once-in-a-lifetime moment.

// We believe that every wedding should be a true reflection of the couple, which is why we take the time to understand your unique vision and personal style. Whether you’re looking for classic elegance, modern sophistication, or a fusion of cultural traditions, we bring your dream wedding to life with precision and creativity.

// As a wedding planner in Great Falls, we take great pride in celebrating diverse cultures and traditions. We work closely with couples from all backgrounds, including Indian, Jewish, and multicultural weddings, to create a personalized and meaningful experience. From incorporating traditional customs to blending contemporary elements, we ensure your wedding honors your heritage while reflecting your unique love story.

// Let us take care of the details so you can enjoy every moment of your wedding day stress-free. Contact Monica Browne Weddings today to begin planning your perfect celebration!
