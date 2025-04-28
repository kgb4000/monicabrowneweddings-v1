import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'
import Image from 'next/image'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title: 'Day of Wedding Planner in DC, for Flawless Wedding Day Coordination',
  description:
    'Day-Of Wedding Coordination | Stress-Free DC Weddings by Monica Browne Weddings.  Enjoy your special day!  Experienced & reliable.  Book a free call now!',
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/day-of-wedding-coordinator-washington-dc',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/day-of-wedding-coordinator-washington-dc',
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
      name: 'Washington',
      addressRegion: 'DC',
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

const getPosts = async () => {
  const response = await fetch(
    'https://us-east-1.cdn.hygraph.com/content/cktkjtoxd0dod01z1bc0w41e9/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
                posts (orderBy: createdAt_DESC, first: 3) {
                  title
                  slug
                  coverImage {
                    url
                    width
                    height
                  }
                }
              }`,
      }),
    }
  )

  const { data } = await response.json()

  return data.posts
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why Should I Hire a Day-of Coordinator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You should consider hiring a day-of wedding coordinator if you're on a budget. If you want to do most of the planning yourself and find your wedding venue and vendors on your own but still want to enjoy your wedding day without worrying about anything, consider hiring Monica Browne Weddings.",
      },
    },
    {
      '@type': 'Question',
      name: 'How Much Does a Day-of Coordinator Cost in DC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The cost of an experienced day-of wedding coordinator in the DC area, typically ranges from $2,300 to $7,000, though prices can vary based on wedding size, complexity, and the coordinator's experience. While the national average is lower, DC's market reflects higher costs. Factors influencing price include the scope of services included and the coordinator's expertise. It's wise to research, compare quotes, and secure a detailed contract outlining services and fees before booking.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is The Best Time To Hire a Day-of Wedding Coordinator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to hire a day of wedding coordinator is between six to eight weeks before your wedding date. This leaves enough time to read vendor contracts, do a walk-through of the different sites, form a relationship with the other vendors, and sort out any missing details that you may have missed while planning your event.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a wedding planner and day of coordinator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary difference between wedding planner and a day-of coordinator lies in the scope of their responsibilities and when they get involved. A wedding planner is typically hired during the early stages of planning, taking charge of the entire process from concept to execution. On the other hand, a day-of coordinator is primarily focused on the actual day of the event, ensuring that all aspects run smoothly and according to plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many hours does it take to plan a wedding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "On average, planning a wedding can take anywhere from 100 to 250 hours, spread over several months or even a year. Factors that influence the planning time include the level of customization, number of guests, location, and the couple's level of involvement in the planning process.",
      },
    },
  ],
}

export default async function DayOfWeddingCoordinatorWashingtonDC() {
  const posts = await getPosts()
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceStructuredData)}
      </script>
      <Hero
        herotext="Day-of Wedding Planner in Washington, DC, for Flawless Wedding Day Coordination"
        heroSubText="We offer expert day-of wedding coordination services for couples in Washington, DC, ensuring your special day is seamless and stress-free"
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
                  Day of Wedding Planner in DC for Stress-Free Wedding
                  Coordination
                </h2>
                <p className="md:text-xl mb-4">
                  Monica Browne Weddings offers day-of wedding coordinator
                  services to couples in Washington, DC.
                </p>
                <p className="md:text-xl mb-4">
                  When all you need is someone to manage the wedding day for
                  you, give us a call to see why we are one of the top day-of
                  wedding coordinators in the DC area.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-4 my-8 max-w-5xl mx-auto">
                <Image
                  src="/images/bride-with-flowers.webp"
                  alt="Day-of wedding coordinator in Washington, DC."
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
                  When all you need is someone to manage the wedding day for
                  you, give us a call to see why we are one of the top day-of
                  wedding coordinators in DC.
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
          <div className="max-w-3xl mx-auto py-10 md:py-20 text-white">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              When All You Need is a Day-of Planner for The Day-of
            </h2>
            <p className="md:text-xl mb-4">
              Your wedding is one of the most important days of your life, and
              every detail should be just as you’ve envisioned. From the initial
              planning stages to the final farewell, we’re here to make the
              process effortless and enjoyable.
            </p>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Bringing Your Dream Wedding to Life
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Your wedding should be a reflection of your love story, and
                we’re here to make that happen. From the very first
                consultation, we take the time to understand your vision,
                personal style, and unique preferences. Whether you envision a
                classic, modern, or culturally inspired celebration, we tailor
                every detail to create a wedding that feels authentically you.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Premiere Day-Of Wedding Coordination
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Your wedding day should be about love, laughter, and making
                memories—not dealing with logistics. As your day-of wedding
                planner, we take charge of all the moving parts, ensuring
                everything runs on time and according to plan. From vendor
                check-ins and timeline management to handling unexpected
                challenges, we oversee every detail behind the scenes so you can
                be fully present and enjoy every moment. With our expert
                coordination, your wedding day will be smooth, stress-free, and
                unforgettable.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Seamless Month-Of Wedding Planning
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                If you’ve handled most of the planning but need a professional
                to tie up the loose ends, our month-of wedding planner services
                in Great Falls are designed for you. We step in about four to
                six weeks before your big day, reviewing contracts, confirming
                timelines, and coordinating with vendors to ensure everything is
                in place. Our goal is to eliminate any last-minute stress,
                giving you the confidence that your wedding will be executed
                flawlessly while you focus on enjoying the excitement leading up
                to your special day.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Elegant Designs That Capture Your Style
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Creating a beautiful wedding begins with thoughtful design. We
                assist with everything from color palettes and floral
                arrangements to table settings and lighting, crafting a
                breathtaking ambiance that leaves a lasting impression. Whether
                you need inspiration or have a clear vision in mind, we’ll bring
                your wedding aesthetic to life with stunning decor and flawless
                execution.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Support Beyond the Celebration
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                The wedding may end, but our services don’t stop there. We take
                care of the final touches, such as vendor payments, rental
                returns, and post-wedding celebrations, so you can seamlessly
                transition into newlywed life. Whether it’s coordinating a
                farewell brunch or ensuring all details are wrapped up, we’re
                here to make sure your wedding journey is smooth from start to
                finish.
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
                  textSize="md:text-xl"
                />
              </a>
            </div>
          </div>
        </section>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto  py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              Want a Wedding Day With No Stress Because Someone Else is Handling
              All The Details?
            </h2>
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
        <div className="container max-w-5xl mx-auto">
          <section>
            <div className="max-w-2xl mx-auto py-10 md:py-20">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Why Hire Monica Browne Weddings as Your Day-of Wedding
                Coordinator in DC
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
                  <Link href="/wedding-services/wedding-decoration-services">
                    decorations
                  </Link>{' '}
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
          <div className="grid lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
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
                What We Do as Your Day-of Wedding Planner
              </h2>
              <p className="md:text-xl mb-4">
                When your wedding is{' '}
                <span className="underline-offset-8">eight weeks away</span>,
                you can count on us to take the reins and handle the following
                with care and precision:
              </p>
              <div className="mb-10">
                <p className="md:text-xl mb-4">
                  <b>Final Timeline Management –</b> Ensure all events, from the
                  ceremony to the reception, run according to the pre-planned{' '}
                  <Link href="/blog/wedding-day-timeline-4pm-ceremony">
                    timeline
                  </Link>
                  .
                </p>
                <p className="md:text-xl mb-4">
                  <b>Vendor Coordination –</b> Confirm arrival times, oversee
                  setup, and act as the main point of contact for all vendors.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Bridal Party Assistance –</b> Help the bride, groom, and
                  wedding party stay on schedule and address any last-minute
                  needs.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Vendor Coordination –</b> Confirm arrival times, oversee
                  setup, and act as the main point of contact for all vendors.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Guest Coordination –</b> Assist guests with seating,
                  provide directions, and address any questions to ensure a
                  smooth experience.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Ceremony Coordination –</b> Organize the processional and
                  recessional, cue musicians or DJs, and coordinate with the
                  officiant for a seamless ceremony.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Reception Oversight –</b> Ensure smooth transitions between
                  events such as the grand entrance, first dance, speeches,
                  dinner service, and cake cutting.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Vendor Coordination –</b> Confirm arrival times, oversee
                  setup, and act as the main point of contact for all vendors.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Troubleshooting Issues –</b> Handle unexpected situations
                  like missing items, weather changes, or last-minute vendor
                  adjustments.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Emergency Kit Readiness –</b> Provide essentials such as
                  safety pins, sewing kits, stain removers, breath mints, and
                  band-aids for any last-minute fixes.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Manage Wedding Day Logistics –</b> Ensure transportation,
                  accommodations, and any special requests are properly
                  coordinated.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Gift & Personal Item Management –</b> Keep track of gifts,
                  personal belongings, and ensure everything is packed and
                  delivered to the appropriate place.
                </p>
                <p className="md:text-xl mb-4">
                  <b>End-of-Night Wrap-Up –</b> Oversee cleanup, ensure rental
                  items are returned, and confirm vendors have completed their
                  tasks before closing out the venue.
                </p>
                <p className="md:text-xl mb-4">
                  <b>Keep the Couple Stress-Free –</b> Allow you to fully enjoy
                  their wedding day without worrying about logistics, vendor
                  coordination, or minor issues.
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
            </div>
          </section>
          <section>
            <div className="container max-w-3xl mx-auto px-6">
              <h2 className="text-3xl md:text-5xl text-center mb-10">
                Latest Post From Monica
              </h2>
              <ul>
                {posts.map((post) => (
                  <div key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="no-underline">
                      <div className="grid lg:grid-cols-2 gap-8 items-center mb-8 my-6">
                        <img
                          src={post.coverImage.url}
                          alt={post.title}
                          title={post.title}
                          loading="lazy"
                          width={post.coverImage.width}
                          height={post.coverImage.height}
                        />
                        <div className="">
                          <h3 className="text-2xl lg:py-4 text-black">
                            {post.title}
                          </h3>
                          <p className="my-4">Read more</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </ul>
              <Link href="/blog">
                <Button
                  buttonText="Read and Learn More"
                  bgColor="bg-purple-500"
                  borderWidth="border-0"
                  textColor="text-white"
                  textSize="md:text-xl"
                />
              </Link>
            </div>
          </section>
          <section>
            <div className="max-w-3xl mx-auto py-10">
              <h2 className="text-3xl md:text-5xl text-center">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. Why Should I Hire a Day-of Planner?
              </h3>
              <p className="md:text-xl mb-4">
                You should consider hiring a day-of wedding coordinator if
                you're on a budget.
              </p>
              <p className="md:text-xl mb-4">
                If you want to do most of the planning yourself and find your
                wedding venue and vendors on your own but still want to enjoy
                your wedding day without worrying about anything, consider
                hiring Monica Browne Weddings.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. How Much Does a Day-of Wedding Coordinator Cost in DC?
              </h3>
              <p className="md:text-xl mb-4">
                The cost of an experienced day-of wedding coordinator in the DC
                area, typically ranges from <b>$2,300 to $7,000</b>, though
                prices can vary based on wedding size, complexity, and the
                coordinator's experience. While the national average is lower,
                DC's market reflects higher costs. Factors influencing price
                include the scope of services included and the coordinator's
                expertise. It's wise to research, compare quotes, and secure a
                detailed contract outlining services and fees before booking.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. When is The Best Time To Hire a Day-of Wedding Coordinator?
              </h3>
              <p className="md:text-xl mb-4">
                The best time to hire a day of wedding coordinator is between{' '}
                <b>six to eight weeks</b> before your wedding date.
              </p>
              <p className="md:text-xl mb-4">
                This leaves enough time to read vendor contracts, do a
                walk-through of the different sites, form a relationship with
                the other vendors, and sort out any missing details that you may
                have missed while planning your event.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. What is the difference between a wedding planner and day of
                coordinator?
              </h3>
              <p className="md:text-xl mb-4">
                The primary difference between{' '}
                <Link href="/wedding-services/wedding-planner-washington-dc">
                  wedding planner
                </Link>{' '}
                and a day-of coordinator lies in the scope of their
                responsibilities and when they get involved.
              </p>
              <p className="md:text-xl mb-4">
                A wedding planner is typically hired during the early stages of
                planning, taking charge of the entire process from concept to
                execution.
              </p>
              <p className="md:text-xl mb-4">
                On the other hand, a day-of coordinator is primarily focused on
                the actual day of the event, ensuring that all aspects run
                smoothly and according to plan.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #5 How many hours does it take to plan a wedding?
              </h3>
              <p className="md:text-xl mb-4">
                On average, planning a wedding can take anywhere from{' '}
                <b>100 to 250 hours</b>, spread over several months or even a
                year.
              </p>
              <p className="md:text-xl mb-4">
                Factors that influence the planning time include the level of
                customization, number of guests, location, and the couple's
                level of involvement in the planning process.
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
