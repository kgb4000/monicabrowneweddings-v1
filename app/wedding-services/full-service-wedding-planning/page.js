import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Full-Service Wedding Planning | Your Dream Day, Flawlessly Executed by Monica Browne Weddings',
  description:
    'Relax and enjoy your engagement! Our full-service wedding planning covers every detail for your perfect wedding day. Get your free consultation!',
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/wedding-services/full-service-wedding-planning',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-services/full-service-wedding-planning',
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

export default async function fullServiceWeddingPlanning() {
  return (
    <div>
      <Hero
        herotext="Full-Service Wedding Planning for Busy Couples in the DMV"
        heroSubText="We create stunning weddings for busy couples in Washington, DC, blending timeless traditions with modern elegance for a day you’ll cherish forever"
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
                  Top Rated Full-Service Wedding Planner for Busy Couples
                </h2>
                <p className="md:text-xl mb-4">
                  Are you dreaming of a wedding day that unfolds seamlessly,
                  reflecting your unique love story without the stress of
                  endless planning?
                </p>
                <p className="md:text-xl mb-4">
                  At Monca Browne Weddings, we make that dream a reality.
                </p>
                <p className="md:text-xl mb-4">
                  Our full-service wedding planning is designed to handle every
                  intricate detail, from the grand vision to the tiniest
                  flourish, ensuring you can truly savor your engagement and
                  celebrate your special day without a single worry.
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
                Why Choose Full-Service Wedding Planning?
              </h2>
              <p className="md:text-xl mb-4">
                Planning a wedding is often described as one of life's most
                exciting, yet most demanding, projects.
              </p>
              <p className="md:text-xl mb-4">
                From securing the perfect wedding venue to curating a dream team
                of vendors and managing wedding timelines, the sheer volume of
                decisions and tasks can quickly become overwhelming.
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
                Many couples find themselves grappling with:
              </p>
              <div className="my-10">
                <h3 className="text-2xl mb-2">Overwhelm and stress:</h3>
                <p className="md:text-xl mb-4">
                  Juggling full-time jobs, personal lives, and hundreds of
                  wedding decisions can quickly lead to burnout.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">Time constraints:</h3>
                <p className="md:text-xl mb-4">
                  Researching, vetting, and meeting with vendors is incredibly
                  time-consuming.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">Budget anxieties:</h3>
                <p className="md:text-xl mb-4">
                  Keeping track of every expense and making sure you're getting
                  the best value can be daunting.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">Lack of expertise:</h3>
                <p className="md:text-xl mb-4">
                  Navigating contracts, wedding etiquette, and unforeseen
                  challenges requires specialized knowledge.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">The desire for perfection:</h3>
                <p className="md:text-xl mb-4">
                  You want your day to be flawless, but aren't sure how to
                  achieve it on your own.
                </p>
              </div>
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
              <div className="my-4">
                <p className="md:text-xl mb-4">
                  This is where full-service wedding planning becomes your
                  ultimate solution.
                </p>
                <p className="md:text-xl mb-4">
                  Imagine shedding all those worries and instead, simply
                  enjoying the journey to your "I do."
                </p>
                <p className="md:text-xl mb-4">
                  With Monica Browne Weddings, you're not just hiring a planner;
                  you're gaining a dedicated partner, an expert guide, and a
                  trusted confidante committed to bringing your unique vision to
                  life.
                </p>
                <p className="md:text-xl mb-4">
                  Your engagement should be a time of joy and anticipation, not
                  stress.
                </p>
                <p className="md:text-xl mb-4">
                  Our approach means we handle every facet of your wedding,
                  allowing you to focus on what truly matters: celebrating your
                  love and creating unforgettable memories.
                </p>
                <p className="md:text-xl mb-4">
                  Let us take the reins so you can relax and truly cherish every
                  moment leading up to and on your extraordinary day.
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
          </div>
        </section>
        <section className="bg-slate-50">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="max-w-3xl mx-auto py-10 md:py-20 px-6">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                What Our Full-Service Wedding Planning Service Includes
              </h2>
              <p className="md:text-xl mb-4">
                Our full-service wedding planning is designed to be full
                service.
              </p>
              <p className="md:text-xl mb-4">
                From the moment you say "yes" to the final dance, we're with you
                every step of the way, meticulously managing each detail to
                ensure a seamless and joyful experience.
              </p>
              <p className="md:text-xl mb-4">
                Here is a detailed look at what you get:
              </p>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #1. Initial Consultation & Visioning:
                </h3>
                <p className="md:text-xl mb-4">
                  We'll start with an in-depth conversation to understand your
                  unique love story, your wildest dreams for your wedding day,
                  budget parameters, and absolute must-haves. We'll then help
                  you translate these ideas into a cohesive wedding concept,
                  developing mood boards and design inspirations that truly
                  reflect your style.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #2. Comprehensive Budget Management:
                </h3>
                <p className="md:text-xl mb-4">
                  We'll create a realistic and detailed wedding budget that
                  aligns with your financial goals, then meticulously track all
                  expenses, payments, and deposits. Our goal is to maximize your
                  investment and ensure there are no unwelcome surprises.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #3. Expert Vendor Curation & Management:
                </h3>
                <p className="md:text-xl mb-4">
                  Leveraging our extensive network of trusted professionals in
                  Mitchellville and beyond, we'll recommend and secure the
                  best-fit vendors for your vision and budget. This includes
                  everything from the perfect wedding venue and caterer to your
                  photographer, florist, entertainment, officiant, hair and
                  makeup artists, and more. We'll handle all contract
                  negotiations, communications, and logistical coordination with
                  each vendor.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #4. Exquisite Design & Styling:
                </h3>
                <p className="md:text-xl mb-4">
                  This is where your wedding truly comes to life! We'll develop
                  a cohesive wedding design that encompasses your color palette,
                  theme, lighting, floral arrangements, decor elements, and
                  table settings. We'll also create detailed floor plans and
                  layout designs to ensure optimal flow and aesthetics for your
                  celebration.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #5. Detailed Timeline Creation & Management:
                </h3>
                <p className="md:text-xl mb-4">
                  We'll craft a comprehensive master wedding timeline leading up
                  to your big day, complete with reminders for key milestones.
                  For the wedding day itself, we'll develop a meticulously
                  detailed day-of timeline for all vendors and the wedding
                  party, ensuring everything runs smoothly and on schedule.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">#6. Etiquette & Advisement:</h3>
                <p className="md:text-xl mb-4">
                  Navigating wedding traditions, guest lists, invitation
                  wording, and gift registry etiquette can be complex. We're
                  here to provide expert guidance and advice on all aspects of
                  wedding protocol, ensuring every decision feels right for you.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #7. Guest Experience & Logistics:
                </h3>
                <p className="md:text-xl mb-4">
                  We'll help coordinate essential guest services, such as
                  securing hotel room blocks for out-of-town guests, arranging
                  transportation logistics if needed, and managing your RSVP
                  tracking. If you're considering welcome bags, we can assist
                  with assembly and distribution.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #8. Rehearsal Dinner Coordination:
                </h3>
                <p className="md:text-xl mb-4">
                  Beyond the wedding day, we can assist with the planning and
                  coordination of your rehearsal dinner, ensuring a seamless
                  kickoff to your wedding weekend.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  #9. Flawless Day-Of Wedding Coordination:
                </h3>
                <p className="md:text-xl mb-4">
                  This is the culmination of all our hard work! On your wedding
                  day, our team will be on-site from start to finish, acting as
                  the central point of contact for all vendors and handling any
                  unforeseen issues. We'll oversee setup, manage the timeline,
                  cue important moments, coordinate the bridal party, and ensure
                  a smooth, stress-free celebration for you and your loved ones.
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
              Why Hire Us For Full Service Wedding Planning
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
                    Experience & Local Expertise:
                  </h3>
                  <p className="md:text-xl mb-4">
                    We're not just planners; we're seasoned experts with years
                    of experience bringing dream weddings to life. Our deep
                    knowledge of Mitchellville, MD, and the surrounding areas
                    means we have invaluable insights into local venues, hidden
                    gems, and the best ways to navigate the unique aspects of
                    planning an event in this region. We understand the flow of
                    local events and have established relationships with
                    top-tier vendors right here in our community.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Unrivaled Vendor Network:
                  </h3>
                  <p className="md:text-xl mb-4">
                    Over the years, we've cultivated strong, trusted
                    relationships with the most reputable and talented wedding
                    vendors in the DMV area. From exceptional photographers and
                    florists to gourmet caterers and captivating entertainment,
                    we connect you with professionals who consistently deliver
                    excellence and align perfectly with your style and budget.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    A Personalized & Collaborative Approach:
                  </h3>
                  <p className="md:text-xl mb-4">
                    Your wedding should be a reflection of your unique love
                    story, not a template. We pride ourselves on a highly
                    personalized approach, taking the time to truly listen to
                    your vision, preferences, and concerns. We see ourselves as
                    an extension of your team, working collaboratively with you
                    every step of the way to ensure your personality shines
                    through in every detail.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Attention to Detail:
                  </h3>
                  <p className="md:text-xl mb-4">
                    We live for the details. From the initial concept
                    development to the final moments of your reception, our team
                    is relentlessly focused on precision. We anticipate
                    potential challenges before they arise, leaving no stone
                    unturned to ensure every element of your day is executed
                    flawlessly, just as you envisioned.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Transparent Communication & Peace of Mind:
                  </h3>
                  <p className="md:text-xl mb-4">
                    We believe in open, honest, and proactive communication.
                    You'll always be informed, updated, and confident in the
                    planning process. Our goal is to alleviate your stress,
                    allowing you to relax and truly enjoy your engagement,
                    knowing that every aspect is expertly managed and under
                    control.
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
                Who Benefits Most from Full-Service Wedding Planning?
              </h2>
              <p className="md:text-xl mb-4">
                If any of these describe you, full-service planning is likely
                your ideal solution:
              </p>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Busy Professionals & Demanding Schedules:
                </h3>
                <p className="md:text-xl mb-4">
                  If your careers leave you with limited free time, coordinating
                  hundreds of wedding details can feel impossible. We step in as
                  your dedicated project managers, handling all the research,
                  communication, and logistics, freeing you to focus on your
                  work and personal life.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Couples Desiring a Highly Personalized & Unique Event:
                </h3>
                <p className="md:text-xl mb-4">
                  You have a distinct vision for your day, but aren't sure how
                  to bring it all together. Our full-service approach allows us
                  to delve deep into your style and preferences, curating every
                  element to reflect your personality and create a truly
                  one-of-a-kind celebration.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Those Planning a Destination Wedding:
                </h3>
                <p className="md:text-xl mb-4">
                  If you're not local to Mitchellville, MD, or if you're
                  planning your wedding from out of state, managing vendors and
                  logistics from a distance is incredibly challenging. We act as
                  your on-the-ground team, ensuring seamless coordination and
                  execution without the need for constant travel.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Couples Who Want a Truly Stress-Free Engagement:
                </h3>
                <p className="md:text-xl mb-4">
                  Your engagement should be a joyful time of anticipation, not
                  anxiety. If the thought of endless spreadsheets, vendor
                  negotiations, and timelines fills you with dread, full-service
                  planning allows you to fully enjoy this special period,
                  knowing every detail is expertly handled.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Detailed Timeline Creation & Management:
                </h3>
                <p className="md:text-xl mb-4">
                  We'll craft a comprehensive master wedding timeline leading up
                  to your big day, complete with reminders for key milestones.
                  For the wedding day itself, we'll develop a meticulously
                  detailed day-of timeline for all vendors and the wedding
                  party, ensuring everything runs smoothly and on schedule.
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
                  Couples with Complex Logistics or Multiple Events:
                </h3>
                <p className="md:text-xl mb-4">
                  If your wedding involves multiple locations, intricate
                  transportation, or a series of weekend events (like a welcome
                  party, rehearsal dinner, and brunch), our full-service
                  planning ensures every piece fits together flawlessly.
                </p>
              </div>
              <p className="md:text-xl mb-4">
                Full-service planning is for any couple who prioritizes peace of
                mind, desires a well planned and beautifully executed wedding,
                and wants to genuinely enjoy every moment of their engagement
                and wedding day.
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
