import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'
import Image from 'next/image'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Day of Wedding Coordinator in Annapolis, MD, for a Flawless Wedding Experience',
  description:
    'Looking for a day-of wedding coordinator in Annapolis? We are local wedding planning experts that can make you special day flawless. Book a call today!',
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/day-of-wedding-coordinator-annapolis-md',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/day-of-wedding-coordinator-annapolis-md',
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
  url: 'https://monicabrowneweddings.com/day-of-wedding-coordinator-washington-dc',
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
      name: 'Annapolis',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Parole',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Mayo',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Edgewater',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Arnold',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Severna Park',
      addressRegion: 'MD',
    },
  ],

  rating: {
    ratingValue: '5',
    ratingCount: '13',
  },
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

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What exactly does a Day-of Coordinator do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A Day-of Coordinator steps in to manage all the logistics and details of your wedding day, allowing you to relax and enjoy the celebration.While you've likely handled the major planning, we take over the on-site coordination, vendor management, timeline execution, and problem-solving, ensuring everything runs smoothly according to your vision. We're your point of contact on the day, handling any last-minute issues and ensuring a stress-free experience.",
      },
    },
    {
      '@type': 'Question',
      name: 'What services do you provide as an Indian wedding planner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. As a full-service Indian wedding planner, we provide comprehensive planning, including venue selection, vendor management, decor detailing, and menu curation. We also offer day-of coordination and consultation services',
      },
    },
    {
      '@type': 'Question',
      name: 'How Much Does a Day-of Coordinator Cost in Annapolis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The cost of a Day-of Coordinator in Annapolis can vary depending on several factors, including the size and complexity of your wedding, the specific services you require, and the experience level of the coordinator. Generally, you can expect to invest anywhere from $2300 to $7000 for professional Day-of Coordination services in the Annapolis area. We offer customizable packages to fit different needs and budgets, so the best way to get an accurate quote is to contact us for a free consultation. We'd be happy to discuss your wedding plans and provide you with a personalized proposal.",
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a Day-of Coordinator and a full wedding planner?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A full wedding planner is involved in the entire wedding planning process, from budgeting and vendor selection to design and execution. A Day-of Coordinator focuses solely on the logistics and management of the wedding day itself. We step in closer to the wedding date to finalize details and ensure everything unfolds seamlessly. Think of it this way: you've planned the party, and we're there to make sure it's a smashing success.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with Annapolis wedding venues?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We'ere from Annapolis, and we have experience , and we're familiar with the unique layouts, vendor requirements, and logistical considerations of many local establishments. While we're happy to work at any venue, our experience in Annapolis can be a valuable asset in ensuring a smooth and successful wedding day.",
      },
    },
  ],
}

export default function dayOfWeddingCoordinatorAnnapolisMD() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(serviceStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      <Hero
        herotext="Day of Wedding Coordinator in Annapolis, MD for a Flawless Wedding Experience"
        heroSubText="We offer expert day-of wedding coordination services for couples in Annapolis, ensuring your special day is seamless and stress-free"
        buttonText="Book A Call With Monica!"
        imageUrl="/images/wedding-at-irongate-in-washington-dc.jpg"
        textColor="text-white"
      />
      <main>
        <div className="container max-w-7xl mx-auto px-6">
          <section>
            <div className="py-10 md:py-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-5xl my-8 text-center">
                  Day of and Month-of Wedding Coordinator in Annapolis, MD, for
                  a Seamless & Stunning Celebration
                </h2>
                <p className="md:text-xl mb-4">
                  Planning your dream wedding in beautiful Annapolis?
                </p>
                <p className="md:text-xl mb-4">
                  Monica Browne Weddings specializes in providing top-tier Day
                  of Coordination services for couples just like you. From
                  managing vendors at your chosen Annapolis wedding venue to
                  ensuring every detail is flawlessly executed, we handle the
                  logistics so you can relax and truly enjoy your special day.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 my-8 max-w-5xl mx-auto">
                <Image
                  src="/images/wedding-table-centerpiece-design.webp"
                  alt="Wedding table centerpiece design for small wedding."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <Image
                  src="/images/wedding-cake.webp"
                  alt="Wedding cake picture"
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <Image
                  src="/images/wedding-table-with-cork-centerpiece.webp"
                  alt="Wedding table decorations by Monica Browne Weddings"
                  loading="lazy"
                  width="472"
                  height="708"
                />
              </div>
              <div className="max-w-3xl mx-auto">
                <p className="md:text-xl mb-4">
                  Contact us today to discover how our experienced Annapolis Day
                  of Wedding Coordinator can bring your vision to life,
                  stress-free.
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
        <section className="bg-slate-800">
          <div className="max-w-3xl mx-auto py-10 md:py-20 text-white px-6">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              Stress-Free Annapolis Wedding Management: The Power of Day-of
              Coordination
            </h2>
            <p className="md:text-xl mb-4">
              Planning your dream Annapolis wedding is exciting, but it can also
              be overwhelming. You've likely invested countless hours into
              perfecting every detail. But on your big day, you deserve to relax
              and savor every moment, not manage logistics. That's where an
              Annapolis Day of Coordinator comes in.
            </p>
            <p className="md:text-xl mb-4">You've probably already:</p>
            <ul className="ml-8 my-10 list-disc">
              <li className="md:text-xl mb-4">
                Secured your dream Annapolis wedding venue.
              </li>
              <li className="md:text-xl mb-4">
                Booked essential vendors: DJ, cater, photographer, videographer.
              </li>
              <li className="md:text-xl mb-4">
                Coordinated with your florist, hairstylist, and makeup artist.
              </li>
              <li className="md:text-xl mb-4">
                Coordinated with your florist, hairstylist, and makeup artist.
              </li>
              <li className="md:text-xl mb-4">
                Arranged rentals: tables, chairs, dance floor, and more.
              </li>
            </ul>
            <p className="md:text-xl mb-4">
              Now, let us handle the rest. Our Day of Coordination services
              ensure a stress-free and flawlessly executed wedding day.
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
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto  py-10 md:py-20">
            <p className="text-3xl md:text-5xl mb-8 text-center">
              Imagine a wedding day filled with joy, not stress. We'll manage
              all the details, allowing you to savor every precious moment
            </p>
            <div className="grid grid-cols-2 gap-2 mb-10">
              <Image
                src="/images/couple-posing-in-dc.jpg"
                alt="Newly wed couple at Irongate Restaurant in Washington, DC"
                loading="lazy"
                width="472"
                height="708"
              />
              <Image
                src="/images/couple-posing-in-dc.jpg"
                alt="Newly wed couple at Irongate Restaurant in Washington, DC"
                loading="lazy"
                width="472"
                height="708"
              />
              <Image
                src="/images/couple-posing-in-dc.jpg"
                alt="Newly wed couple at Irongate Restaurant in Washington, DC"
                loading="lazy"
                width="472"
                height="708"
              />
              <Image
                src="/images/couple-posing-in-dc.jpg"
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
                Why Hire Monica Browne Weddings for Wedding Day Management in
                Annapolis?
              </h2>
              <p className="md:text-xl mb-4">
                Planning a wedding in Annapolis is a special experience, and you
                deserve a Day of Coordinator who understands the unique nuances
                of this beautiful location. Here's why Annapolis couples choose
                us:
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
          <div className="grid sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <Image
              src="/images/wedding-table-centerpiece-design.webp"
              alt="Wedding table centerpiece design for small wedding."
              loading="lazy"
              width="472"
              height="708"
            />
            <Image
              src="/images/wedding-cake.webp"
              alt="Wedding cake picture"
              loading="lazy"
              width="472"
              height="708"
            />
            <Image
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
                Day of Wedding Coordinator Services in Annapolis
              </h2>
              <p className="md:text-xl mb-4">
                Our comprehensive Annapolis Day of Coordination services ensure
                a stress-free and perfectly executed wedding day. We handle all
                the behind-the-scenes details so you can relax and celebrate.
              </p>
              <ul className="ml-8 my-10 list-disc">
                <li className="md:text-xl mb-4">
                  <span className="font-bold">Vendor Management:</span>{' '}
                  Coordinating with all vendors, confirming arrival times,
                  managing setup, and ensuring smooth transitions throughout the
                  day.
                </li>
                <li className="md:text-xl mb-4">
                  <span className="font-bold">
                    Timeline Creation & Management:{' '}
                  </span>
                  Developing a detailed wedding day timeline and overseeing its
                  execution, keeping everything on schedule.
                </li>
                <li className="md:text-xl mb-4">
                  <span className="font-bold">On-Site Coordination: </span>
                  Overseeing all aspects of the wedding day, from ceremony to
                  reception, handling any last-minute issues that may arise.
                </li>
                <li className="md:text-xl mb-4">
                  <span className="font-bold">
                    Ceremony & Reception Coordination:{' '}
                  </span>
                  Managing the flow of events, ensuring smooth transitions
                  between ceremony, cocktail hour, and reception.
                </li>
                <li className="md:text-xl mb-4">
                  <span className="font-bold">Problem Solving: </span>Handling
                  any unexpected issues or emergencies that may arise, allowing
                  you to enjoy your day without worry.
                </li>
                <li className="md:text-xl mb-4">
                  <span className="font-bold">
                    Rehearsal Coordination (Optional):
                  </span>{' '}
                  Managing the wedding rehearsal, ensuring everyone knows their
                  roles and the flow of the ceremony.
                </li>
                <li className="md:text-xl mb-4">
                  <span className="font-bold">Emergency Kit: </span>Preparing a
                  comprehensive wedding day emergency kit to handle any
                  unforeseen mishaps.
                </li>
              </ul>
              <p className="md:text-xl mb-4">
                A day of wedding coordinator will manage your wedding day when
                the day arrives.
              </p>
              <p className="md:text-xl mb-4">
                Our dedicated Annapolis Day of Coordination services are
                designed to bring your wedding vision to life flawlessly. We
                handle every detail, so you can focus on celebrating with your
                loved ones.
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
              <h2 className="text-3xl md:text-5xl text-center">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. What exactly does a Day-of Coordinator do?
              </h3>
              <p className="md:text-xl mb-4">
                A Day-of Coordinator steps in to manage all the logistics and
                details of your wedding day, allowing you to relax and enjoy the
                celebration.
              </p>
              <p className="md:text-xl mb-4">
                While you've likely handled the major planning, we take over the
                on-site coordination, vendor management, timeline execution, and
                problem-solving, ensuring everything runs smoothly according to
                your vision. We're your point of contact on the day, handling
                any last-minute issues and ensuring a stress-free experience.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. How Much Does a Day-of Coordinator Cost in Annapolis?
              </h3>
              <p className="md:text-xl mb-4">
                The cost of a Day-of Coordinator in Annapolis can vary depending
                on several factors, including the size and complexity of your
                wedding, the specific services you require, and the experience
                level of the coordinator.
              </p>
              <p className="md:text-xl mb-4">
                Generally, you can expect to invest anywhere from{' '}
                <span className="font-bold">$2300 to $7000</span> for
                professional Day-of Coordination services in the Annapolis area.
              </p>
              <p className="md:text-xl mb-4">
                We offer customizable packages to fit different needs and
                budgets, so the best way to get an accurate quote is to contact
                us for a free consultation. We'd be happy to discuss your
                wedding plans and provide you with a personalized proposal.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. What's the difference between a Day-of Coordinator and a
                full wedding planner?
              </h3>
              <p className="md:text-xl mb-4">
                A full wedding planner is involved in the entire wedding
                planning process, from budgeting and vendor selection to design
                and execution.
              </p>
              <p className="md:text-xl mb-4">
                A Day-of Coordinator focuses solely on the logistics and
                management of the wedding day itself. We step in closer to the
                wedding date to finalize details and ensure everything unfolds
                seamlessly. Think of it this way: you've planned the party, and
                we're there to make sure it's a smashing success.
              </p>
              <p className="md:text-xl mb-4">
                Read this{' '}
                <Link href="/blog/wedding-planner-vs-coordinator">post</Link> to
                learn more.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. Do you work with Annapolis wedding venues?
              </h3>
              <p className="md:text-xl mb-4">
                We'ere from Annapolis, and we have experience , and we're
                familiar with the unique layouts, vendor requirements, and
                logistical considerations of many local establishments. While
                we're happy to work at any venue, our experience in Annapolis
                can be a valuable asset in ensuring a smooth and successful
                wedding day.
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
    </>
  )
}
