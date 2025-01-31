import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'
import Image from 'next/image'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title: 'Day of Wedding Coordinator/Planner for Busy Couples in Washington DC',
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
  provider: {
    '@type': 'LocalBusiness',
    name: 'Monica Browne Weddings',
  },
  areaServed: {
    '@type': 'State',
    name: 'Washington, DC',
  },
}

export default function DayOfWeddingCoordinatorWashingtonDC() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(serviceStructuredData)}
      </script>
      <Hero
        herotext="Day of Wedding Coordinator/Planner for Busy Couples in Washington, DC"
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
                  Day of Wedding Coordinator and Planner in Washington, DC
                </h2>
                <p className="md:text-xl mb-4">
                  Monica Browne Weddings offers day-of wedding coordinator
                  services to couples in Washington, DC. .
                </p>
                <p className="md:text-xl mb-4">
                  When all you need is someone to manage the wedding day for
                  you, give us a call to see why we are one of the top day-of
                  wedding coordinators in the DC area.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-4 my-8 max-w-5xl mx-auto">
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
                  When all you need is someone to manage the wedding day for
                  you, give us a call to see why we are one of the top day-of
                  wedding coordinators in Bowie.
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
              When All You Need is a Day-of Coordinator for The Day of
            </h2>
            <p className="md:text-xl mb-4">
              Planning a wedding involves juggling countless details, from
              hiring vendors to organizing logistics.
            </p>
            <p className="md:text-xl mb-4">
              By the time your big day arrives, you’ve likely already:
            </p>
            <ul className="ml-8 my-10 list-disc">
              <li className="md:text-xl mb-4">
                Booked the DJ, caterer, photographer, and videographer.
              </li>
              <li className="md:text-xl mb-4">
                Secured your wedding venue and rentals like tables, chairs, and
                dance floors.
              </li>
              <li className="md:text-xl mb-4">
                Coordinated with your florist, hairstylist, and makeup artist.
              </li>
              <li className="md:text-xl mb-4">
                Finalized details for your wedding cake, officiant, and getaway
                car.
              </li>
            </ul>
            <p className="md:text-xl mb-4">
              As a bride or groom, your wedding day should be about celebrating,
              not coordinating. That’s where a day-of wedding coordinator comes
              in.
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
        <div className="container max-w-5xl mx-auto px-6">
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
          <div className="grid lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
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
                What We Do as Your Day of Wedding Coordinator
              </h2>
              <p className="md:text-xl mb-4">
                When your wedding is{' '}
                <span className="underline-offset-8">eight weeks away</span>,
                you can count on us to take the reins and handle the following
                with care and precision:
              </p>
              <ul className="ml-8 my-10 list-disc">
                <li className="md:text-xl mb-4">
                  Review and organize all vendor contracts
                </li>
                <li className="md:text-xl mb-4">
                  Confirm all vendor payments and schedules
                </li>
                <li className="md:text-xl mb-4">
                  Coordinate final fittings for your wedding attire and your
                  bridal party
                </li>
                <li className="md:text-xl mb-4">
                  Ensure your bridal party has their dresses and tuxedos secured
                </li>
                <li className="md:text-xl mb-4">
                  Conduct a walk-through of the ceremony and reception venues
                </li>
                <li className="md:text-xl mb-4">
                  Craft a comprehensive{' '}
                  <Link href="/blog/wedding-day-timeline-4pm-ceremony">
                    wedding timeline{' '}
                  </Link>
                  for all participants
                </li>
                <li className="md:text-xl mb-4">
                  Supervise and coordinate a two-hour rehearsal the week of your
                  wedding
                </li>
                <li className="md:text-xl mb-4">
                  Act as the primary point of contact for your bridal party
                  starting on rehearsal day
                </li>
                <li className="md:text-xl mb-4">
                  Manage and oversee all logistics on your wedding day
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
              <h2 className="text-3xl md:text-5xl text-center">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. Why Should I Hire a Day-of Coordinator?
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
                #2. How Much Does a Day-of Coordinator Cost in DC?
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
                The best time to hire a day of wedding coordinator is between
                six to eight weeks before your wedding date.
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
                On average, planning a wedding can take anywhere from 100 to 150
                hours, spread over several months or even a year.
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
