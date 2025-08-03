import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Partial Wedding Planning Services| Your Dream Day, Flawlessly Executed',
  description: `Partial wedding planning - perfect for couples who've started planning but need expert help bringing it all together. Get your free consultation!`,
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/wedding-services/partial-wedding-planning',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-planner-washington-dc',
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

export default async function weddingPlannerWashingtonDC() {
  return (
    <div>
      <Hero
        herotext="Partial Wedding Planning Services for Couples in D.C, Maryland, and Virginia"
        heroSubText="When you just need a wedding planning expert  to pull it all together, so you can full enjoy your wedding day"
        buttonText="Book A Call With Monica!"
        textColor="text-white"
        imageUrl="/images/newly-wed-couple-in-washington-dc.webp"
      />
      <main>
        <section>
          <div className="container max-w-7xl mx-auto px-6">
            <div className="py-10 md:py-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-5xl my-8 text-center">
                  Partial Wedding Planning Services for Couples in the D.C.
                  Metro Area
                </h2>
                <p className="md:text-xl mb-4">
                  You've done the big decisions - venue, dress, vendors - but
                  now you're feeling overwhelmed as your wedding day approaches.
                </p>
                <p className="md:text-xl mb-4">
                  Our partial planning service steps in 4-6 months before your
                  wedding to coordinate details, manage vendors, and ensure
                  flawless execution.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 my-8 max-w-5xl mx-auto">
                <Image
                  src="/images/wedding-table-centerpiece-design.webp"
                  alt="Full service wedding planning."
                  title="Full service wedding planning"
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
                  Imagine enjoying every moment, knowing that every vendor,
                  every timeline, and every design element is expertly managed.
                </p>
                <p className="md:text-xl mb-4">
                  We're here to transform your vision into an unforgettable
                  experience.
                </p>
                <p className="md:text-xl mb-4">
                  Ready to start planning your perfect wedding day?
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
          </div>
        </section>
        <section className="bg-slate-800">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="max-w-3xl mx-auto py-10 md:py-20 text-white px-6">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                What is Partial Wedding Planning?
              </h2>
              <p className="md:text-xl mb-4">
                You've tackled the big decisions - booked your venue, found your
                dress, selected key vendors - but now the details are piling up
                and your wedding date is getting closer.
              </p>
              <p className="md:text-xl mb-4">Sound familiar?</p>
              <p className="md:text-xl mb-4">
                Our partial planning service steps in during those crucial final
                4-6 months to take the coordination burden off your shoulders.
              </p>
              <p className="md:text-xl mb-4">
                We work with what you've already planned, fill in any gaps, and
                make sure everything runs smoothly on your actual wedding day.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto px-6">
            <Image
              src="/images/KINA0562.jpg"
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
            <Image
              src="/images/KINA0531.jpg"
              alt="Newly wed couple at Irongate Restaurant in Washington, DC"
              loading="lazy"
              width="472"
              height="708"
            />
          </div>
          <div className="container max-w-5xl mx-auto px-6">
            <div className="max-w-3xl mx-auto py-10 md:py-20 text-white px-6">
              <p className="md:text-xl mb-4">
                Think of us as your professional project managers who specialize
                in weddings. You keep the creative control you want while we
                handle the logistics that can drive you crazy.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-slate-50">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="max-w-3xl mx-auto py-10 md:py-20 px-6">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                What's Included in Your Partial Wedding Planning Service
              </h2>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #1. Vendor Management & Communication:
                </h3>
                <p className="md:text-xl mb-4">
                  We become the primary contact for all your vendors, handling
                  contracts, payments, and timeline coordination. No more
                  juggling emails from your photographer, caterer, florist, and
                  DJ - we manage all those conversations and keep everyone on
                  the same page.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #2. Detailed Day-of Timeline Creation:
                </h3>
                <p className="md:text-xl mb-4">
                  We create hour-by-hour schedules for your wedding day,
                  including setup times, vendor arrivals, ceremony processional,
                  reception timeline, and breakdown. Everyone gets their
                  personalized timeline so they know exactly when and where to
                  be.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #3. Design Review & Final Touches:
                </h3>
                <p className="md:text-xl mb-4">
                  We review your overall design plan to ensure everything works
                  together - from your ceremony decor to reception centerpieces.
                  If something feels off or incomplete, we help you refine it.
                  We also coordinate final details like linens, lighting, and
                  room layouts with your venue.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #4. Guest Experience Planning:
                </h3>
                <p className="md:text-xl mb-4">
                  We help coordinate hotel blocks, transportation logistics,
                  welcome bags, and guest communication. We also manage your
                  final headcount and work with your caterer on seating
                  arrangements and special dietary needs.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">#5. Rehearsal Coordination:</h3>
                <p className="md:text-xl mb-4">
                  We run your ceremony rehearsal, making sure your wedding party
                  knows where to stand, when to walk, and what to expect. This
                  eliminates confusion and nerves on your actual wedding day.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #6. Complete Day-of Coordination:
                </h3>
                <p className="md:text-xl mb-4">
                  On your wedding day, our team arrives early to oversee vendor
                  setup, manage the timeline, coordinate your wedding party,
                  handle any problems that come up, and make sure you can focus
                  on celebrating instead of worrying about logistics.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">#7. Budget Finalization:</h3>
                <p className="md:text-xl mb-4">
                  We help you organize final vendor payments, track any
                  remaining expenses, and make sure you stay within your budget
                  during these final months when costs can quickly add up.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #8. Emergency Problem Solving:
                </h3>
                <p className="md:text-xl mb-4">
                  Weather issues, vendor problems, last-minute changes - we
                  handle whatever comes up so you don't have to stress about it.
                  Our job is to solve problems before they affect your day.
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
          </div>
        </section>
        <div className="container max-w-7xl mx-auto px-6 my-20">
          <section>
            <h2 className="text-3xl md:text-5xl mb-4 text-center max-w-2xl mx-auto">
              Why Choose Monica Browne Weddings for Partial Planning
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center lg:my-10">
              <Image
                src="/images/bride-with-flowers.webp"
                alt="Newly wed couple at Irongate Restaurant in Washington, DC"
                loading="lazy"
                width="472"
                height="708"
              />
              <div className="max-w-2xl mx-auto">
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Local DC Area Expertise:
                  </h3>
                  <p className="md:text-xl mb-4">
                    We know the venues, vendors, and logistics specific to
                    Washington DC, Maryland, and Virginia. We understand permit
                    requirements, venue restrictions, and local vendor
                    capabilities.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Flexible Approach:
                  </h3>
                  <p className="md:text-xl mb-4">
                    We adapt to work with any vendors you've already selected,
                    regardless of whether we've worked with them before. We're
                    not trying to replace your choices - we're here to
                    coordinate them.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Proven Systems:
                  </h3>
                  <p className="md:text-xl mb-4">
                    We use tried-and-tested timeline templates, vendor
                    communication processes, and day-of coordination methods
                    that prevent common wedding day problems.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Calm Under Pressure:
                  </h3>
                  <p className="md:text-xl mb-4">
                    When something goes wrong (and something always does), we
                    handle it quickly and quietly so you never know there was an
                    issue.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Personal Attention:
                  </h3>
                  <p className="md:text-xl mb-4">
                    You're not just another wedding on our calendar. We take
                    time to understand your specific vision and priorities, then
                    make sure those come through on your wedding day.
                  </p>
                </div>
              </div>
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
          </section>
        </div>
        <section className="bg-slate-800 text-white">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="max-w-3xl mx-auto py-10 md:py-20 px-6">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Who Benefits Most from Partial Planning Wedding Services?
              </h2>
              <div className="my-10">
                <h3 className="text-2xl mb-2">DIY Couples Who Hit a Wall:</h3>
                <p className="md:text-xl mb-4">
                  You loved planning initially but now feel overwhelmed by all
                  the moving pieces as your date approaches.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Couples with Vendor Relationships Already Established:
                </h3>
                <p className="md:text-xl mb-4">
                  You've booked most of your key vendors but need someone to
                  coordinate between them and manage day-of logistics.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">Long-Distance Planners:</h3>
                <p className="md:text-xl mb-4">
                  You've planned you wedding from out of state from but need
                  someone local to handle final details and day-of coordination
                  in the DC area.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">Budget-Conscious Couples:</h3>
                <p className="md:text-xl mb-4">
                  You want professional coordination without the higher cost of
                  full-service planning from the beginning.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">Control-Oriented Planners:</h3>
                <p className="md:text-xl mb-4">
                  You want to maintain decision-making control but recognize you
                  need professional help executing everything smoothly.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Individuals Who Value Expert Guidance & Industry Knowledge:
                </h3>
                <p className="md:text-xl mb-4">
                  You appreciate having a seasoned professional guide you
                  through every decision, offer valuable insights, and navigate
                  potential pitfalls. We bring years of experience and an
                  extensive network to ensure informed choices and a smooth
                  process.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Couples Who Want to Enjoy Their Wedding Day:
                </h3>
                <p className="md:text-xl mb-4">
                  You want to be present and enjoy your celebration instead of
                  managing vendors and timelines.
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
          </div>
        </section>
        <section className="bg-slate-50">
          <div className="container mx-auto px-4 max-w-9xl py-20 mb-20">
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
                  <Image
                    src="/images/kimberley-hooper-twumasi.png"
                    className="basis-1 rounded-full border-orange-800 border-4"
                    loading="lazy"
                    alt="Kimberley Hooper-Twumasi"
                    width={36}
                    height={36}
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
                  <Image
                    src="/images/emily-menge.png"
                    className="basis-1 rounded-full border-orange-800 border-4"
                    loading="lazy"
                    alt="Emily Menge"
                    width={36}
                    height={36}
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
                  <Image
                    src="/images/whitney-ames.png"
                    className="basis-1 rounded-full border-orange-800 border-4"
                    loading="lazy"
                    alt="Whitney Ames"
                    width={36}
                    height={36}
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
        <div className="px-6">
          <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto mb-20">
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
        </div>
        <section>
          <div className="container max-w-3xl mx-auto px-6 py-20">
            <div className="">
              <h2 className="text-3xl md:text-5xl text-center mb-10">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. What is the typical timeline for full-service wedding
                planning?
              </h3>
              <p className="md:text-xl mb-4">
                We recommend starting full-service planning anywhere from 12 to
                18 months before your desired wedding date. This allows ample
                time for vendor selection, design development, and securing your
                preferred dates. However, we're experienced in planning weddings
                on shorter timelines too, so don't hesitate to reach out even if
                your date is closer!
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. How much does full-service wedding planning cost?
              </h3>
              <p className="md:text-xl mb-4">
                In the wider DMV (D.C., Maryland, Virginia) area, the cost for
                full-service wedding planning generally ranges from{' '}
                <b>$7,000 to $25,000+</b>, with many couples investing between
                <b>$9,000 and $15,000</b> for comprehensive services. This range
                reflects the extensive support and expertise provided from
                concept to execution.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. Do you work with specific budgets, or is there a minimum?
              </h3>
              <p className="md:text-xl mb-4">
                We work with a diverse range of budgets and believe beautiful
                weddings can be created at various price points. During our
                initial consultation, we'll discuss your financial comfort zone
                and help you understand how to best allocate your resources to
                achieve your vision. Our aim is always to provide maximum value
                and transparency.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. How do you select your vendors, and can we bring our own?
              </h3>
              <p className="md:text-xl mb-4">
                We pride ourselves on our network of trusted, professional, and
                reliable wedding vendors in Mitchellville and the surrounding
                areas. Our recommendations are based on proven quality,
                professionalism, and their ability to align with your specific
                style and budget. While we highly recommend our vetted partners,
                we're certainly open to working with vendors you may already
                have in mind, provided they meet our standards of excellence.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #5 Is full-service planning only for large, elaborate weddings?
              </h3>
              <p className="md:text-xl mb-4">
                Not at all! While we excel at producing grand celebrations,
                full-service planning is equally valuable for intimate weddings
                and micro-weddings. The benefit isn't just about the size of the
                event, but about the level of support and peace of mind you
                receive. If you want a stress-free experience, regardless of
                guest count, full-service is for you.
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
        <section className="bg-slate-800 text-white">
          <div className="container mx-auto px-4 max-w-7xl py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl text-center mb-10">
              Service Areas
            </h2>
            <p className="md:text-xl mb-4 text-center max-w-2xl mx-auto">
              We specialize in wedding planning services in these cities around
              the Washington, DC, Maryland, Virginia metropolitan area (DMV)
            </p>
            <div className="grid grid-cols-3 gap-10 text-center my-10">
              <div>
                <p className="md:text-xl mb-4">
                  <Link href="/day-of-wedding-planner-alexandria-va">
                    Alexandria, VA
                  </Link>
                </p>
                <p className="md:text-xl mb-4">
                  <Link href="/day-of-wedding-coordinator-annapolis-md">
                    Annapolis, MD
                  </Link>
                </p>
                <p className="md:text-xl mb-4">Bethesda, MD</p>
                <p className="md:text-xl mb-4">
                  <Link href="/wedding-planner-bowie-md">Bowie, MD</Link>
                </p>
                <p className="md:text-xl mb-4">Chevy Chase, MD</p>
                <p className="md:text-xl mb-4">Columbia, MD</p>
              </div>
              <div>
                <p className="md:text-xl mb-4">Crofton MD</p>
                <p className="md:text-xl mb-4">Fairfax, VA</p>
                <p className="md:text-xl mb-4">
                  <Link href="/wedding-planner-fort-washington-md">
                    Fort Washington, MD
                  </Link>
                </p>
                <p className="md:text-xl mb-4">
                  <Link href="/wedding-planner-in-great-falls-va">
                    Great Falls, VA
                  </Link>
                </p>
                <p className="md:text-xl mb-4">Olney, MD</p>
                <p className="md:text-xl mb-4">
                  <Link href="/wedding-planner-potomac-md">Potomac, MD</Link>
                </p>
              </div>
              <div>
                <p className="md:text-xl mb-4">Reston, VA</p>
                <p className="md:text-xl mb-4">
                  <Link href="/day-of-wedding-planner-rockville-md">
                    Rockville, MD
                  </Link>
                </p>
                <p className="md:text-xl mb-4">
                  <Link href="/day-of-wedding-planner-silver-spring-maryland">
                    Silver Spring, MD
                  </Link>
                </p>
                <p className="md:text-xl mb-4">
                  <Link href="/wedding-planner-upper-marlboro-md">
                    Upper Marlboro, MD
                  </Link>
                </p>
                <p className="md:text-xl mb-4">Waldorf, MD</p>
                <p className="md:text-xl mb-4">
                  <Link href="/wedding-planner-washington-dc">
                    Washington, DC
                  </Link>
                </p>
              </div>
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
      </main>
    </div>
  )
}
