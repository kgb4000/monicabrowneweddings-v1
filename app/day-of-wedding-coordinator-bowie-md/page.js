import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title: 'Day of Wedding Coordinator in Bowie | Monica Browne Weddings',
  description:
    'Monica Browne Weddings is a day of wedding coordinator serving Bowie, MD. If you want someone you can trust to coordinate your wedding, call us today!',
  canonical:
    'https://monicabrowneweddings.com/day-of-wedding-coordinator-bowie-md',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/day-of-wedding-coordinator-bowie-md',
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

export default function WeddingPlannerBowieMD() {
  return (
    <>
      <Hero
        herotext="Professional Day of Wedding Coordinator in Bowie, Maryland"
        heroSubText="We provide professional day-of wedding coordination services for couples in Bowie, Maryland."
        buttonText="Book A Call Today!"
        textColor="text-white"
        imageUrl="/images/bride-groom-night-photo.webp"
      />
      <main>
        <div className="container max-w-7xl mx-auto px-6 py-10 md:py-20">
          <section>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl my-8 text-center">
                Day of Wedding Coordinator fro Couples in Bowie, Maryland
              </h2>
              <p className="md:text-xl mb-4">
                Monica Browne Weddings offers day-of and month-of wedding
                coordinator services to couples in Bowie, and{' '}
                <Link href="/day-of-wedding-coordinator-washington-dc">
                  Washington, DC
                </Link>
                .
              </p>
              <div className="grid lg:grid-cols-3 gap-4 mb-8">
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
              <p className="md:text-xl mb-4">
                When all you need is someone to manage the wedding day for you,
                give us a call to see why we are one of the top day-of wedding
                coordinators in Bowie.
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
            <div className="lg:my-20 max-w-3xl mx-auto py-10">
              <h2 className="text-3xl md:text-5xl mb-8">
                So You Already Started
              </h2>
              <p className="md:text-xl mb-4">
                When you have hired all, or some of your wedding vendors like:
              </p>
              <ul className="ml-8 my-10 list-disc">
                <li className="md:text-xl mb-4">The DJ</li>
                <li className="md:text-xl mb-4">The caterer</li>
                <li className="md:text-xl mb-4">The photographer</li>
                <li className="md:text-xl mb-4">The videographer</li>
                <li className="md:text-xl mb-4">Secured your wedding venue</li>
                <li className="md:text-xl mb-4">
                  Confirm the tables and chairs from your rental company
                </li>
                <li className="md:text-xl mb-4">Your wedding decorations</li>
                <li className="md:text-xl mb-4">Your dance floor</li>
                <li className="md:text-xl mb-4">Your wedding florist</li>
                <li className="md:text-xl mb-4">
                  Your hairstylist and makeup pro
                </li>
                <li className="md:text-xl mb-4">Secured your wedding cake</li>
                <li className="md:text-xl mb-4">The officiant</li>
                <li className="md:text-xl mb-4">
                  Your getaway car (limo) driver
                </li>
              </ul>
              <p className="md:text-xl mb-4">
                As a bride or groom, you don't want to be the person
                coordinating your wedding on your wedding day, and you should
                hire a day of wedding coordinator.
              </p>
              <p className="md:text-xl mb-4">
                You want to hire a wedding professional like Monica Browne who
                is a wedding planner and coordinator:
              </p>
              <ul className="ml-8 my-10 list-disc">
                <li className="md:text-xl mb-4">
                  With 15 years experience in the wedding industry
                </li>
                <li className="md:text-xl mb-4">
                  You could trust to make sure your event starts and ends on
                  time
                </li>
                <li className="md:text-xl mb-4">
                  To make sure the decorations are exactly what you expected
                </li>
                <li className="md:text-xl mb-4">
                  To ensure that everything else gets executed properly
                </li>
                <li className="md:text-xl mb-4">
                  To take care of problems and keep your wedding running
                  smoothly
                </li>
              </ul>
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
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Want a Wedding Day With No Stress Because Someone Else is
                Handling it For You?
              </h2>
              <div className="grid grid-cols-2 gap-2 mb-4 py-10">
                <img src="/images/bride-groom-serious-love.webp" />
                <img src="/images/bride-groom-serious-love.webp" />
                <img src="/images/bride-groom-serious-love.webp" />
                <img src="/images/bride-groom-serious-love.webp" />
              </div>
              <p className="text-xl italic mt-10 text-center max-w-xl mx-auto">
                Book a 15-minute call with Monica and see how a day-of wedding
                coordinator can help manage your wedding day
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
          <section className="bg-gray-50">
            <div className="my-10 lg:my-20">
              <div className="max-w-3xl mx-auto  md:p-20 py-12 px-8 rounded-xl">
                <h2 className="text-3xl md:text-5xl">How to Get Started</h2>
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
            </div>
          </section>
          <section>
            <div className="lg:my-20 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl mb-8">
                What Does Monica Browne Weddings Do as Your Day-of Coordinator?
              </h2>
              <p className="md:text-xl mb-4">
                A day of wedding coordinator is a professional responsible for
                managing your entire wedding day and helping you finalize the
                details weeks leading up to the big event.
              </p>
              <p className="md:text-xl mb-4">
                We become the point of contact for all you wedding vendors, and
                we oversee all the critical details of your wedding like:
              </p>
              <ul className="ml-8 my-10 list-disc">
                <li className="md:text-xl mb-4">
                  Reviewing your wedding vendor contracts
                </li>
                <li className="md:text-xl mb-4">
                  Preparing a timeline for the vendors and your wedding party
                </li>
                <li className="md:text-xl mb-4">
                  Supervising your wedding rehearsal
                </li>
                <li className="md:text-xl mb-4">
                  Giving you progress updates on actions to be done
                </li>
                <li className="md:text-xl mb-4">
                  Discussing the order of events for the ceremony with the
                  officiant
                </li>
                <li className="md:text-xl mb-4">
                  Coordinating the layout of the tables for the reception
                </li>
                <li className="md:text-xl mb-4">
                  Doing ceremony and reception site inspection and walk-throughs
                </li>
                <li className="md:text-xl mb-4">Plus more</li>
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
          <div className="grid lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
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
            <div className="lg:my-20 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl mb-8">
                Why Choose Monica Browne Weddings as Your Day of Wedding
                Coordinator?
              </h2>
              <p className="md:text-xl mb-4">
                At Monica Browne Weddings, we pride ourselves on being one of
                Maryland's premier day-of wedding coordinators. Monica and her
                team of experienced professionals are dedicated to ensuring your
                wedding day is flawless and exactly as you envisioned.
              </p>
              <p className="md:text-xl mb-4">
                Our goal is simple: to handle every detail so you can focus on
                cherishing the moment and creating memories that will last a
                lifetime.
              </p>
              <p className="md:text-xl mb-4">
                From the moment you hire us as your day-of coordinator, we’ll be
                available to answer any questions and provide guidance every
                step of the way.
              </p>
              <p className="md:text-xl mb-4">
                When your wedding is eight weeks away, you can count on us to
                take the reins and handle the following with care and precision:
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
                  Craft a comprehensive timeline for all participants
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
            <div className="max-w-3xl mx-auto my-10 md:my-20">
              <h2 className="text-3xl md:text-5xl text-center">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. Why Should I Consider Hiring a Day-of Coordinator?
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
                #2. How Much Does a Day-of Coordinator Cost in Bowie?
              </h3>
              <p className="md:text-xl mb-4">
                While the national average for a wedding coordinator is between
                $800 and $1500, the cost of a wedding coordinator in Bowie is
                between $2500 to $5000 depending on the size of the wedding.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. When To Hire a Day of Wedding Coordinator?
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
                #4. What is the difference between event planner and day of
                coordinator?
              </h3>
              <p className="md:text-xl mb-4">
                The primary difference between an event planner and a day-of
                coordinator lies in the scope of their responsibilities and when
                they get involved.
              </p>
              <p className="md:text-xl mb-4">
                An event planner is typically hired during the early stages of
                planning, taking charge of the entire process from concept to
                execution. On the other hand, a day-of coordinator is primarily
                focused on the actual day of the event, ensuring that all
                aspects run smoothly and according to plan.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #5 How many hours does it take to plan a wedding?
              </h3>
              <p className="md:text-xl mb-4">
                On average, planning a wedding can take anywhere from 100 to 150
                hours, spread over several months or even a year. Factors that
                influence the planning time include the level of customization,
                number of guests, location, and the couple's level of
                involvement in the planning process.
              </p>
            </div>
          </section>
          <p className="text-xl italic mt-10 text-center max-w-xl mx-auto">
            Book a 15-minute call with Monica and see how a day-of wedding
            coordinator can help manage your wedding day
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
      </main>
    </>
  )
}
