import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Day-of Wedding Planner in Rockville for Orchestrating Your Perfect Day',
  description:
    "Looking for a professional wedding planner in Rockville? We'll make your wedding a memorable and enjoyable celebration for everyone! Book a call today!",
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/day-of-wedding-planner-rockville-md',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/day-of-wedding-planner-rockville-md',
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

export default async function WeddingPlannerRockvilleMD() {
  return (
    <div>
      <Hero
        herotext="Day of Wedding Planner in Rockville for Elegant & Timeless Celebrations"
        heroSubText="Transforming your wedding day into a truly unforgettable and stress-free experience you will remember"
        buttonText="Book A Call With Monica!"
        textColor="text-white"
        imageUrl="/images/newly-married-couple-potomac-md.webp"
      />
      <main>
        <div className="container max-w-7xl mx-auto px-6">
          <section>
            <div className="py-10 md:py-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-5xl my-8 text-center">
                  A Day-of Wedding Planner in Rockville, MD, Bringing Your Dream
                  Wedding to Life
                </h2>
                <p className="md:text-xl mb-4">
                  Monica Browne Weddings offers expert day-of coordination to
                  bring your vision to life flawlessly.
                </p>
                <p className="md:text-xl mb-4">
                  While you've handled the foundational planning, we step in to
                  expertly guide and execute every detail on your special day in
                  Silver Spring. Our support ensures a seamless event, allowing
                  you to relax and fully enjoy your celebration without the
                  stress of managing logistics.
                </p>
                <p className="md:text-xl mb-4">
                  We meticulously oversee the coordination of your vendors, the
                  setup of your chosen décor, and the smooth flow of your
                  timeline, giving you the freedom to focus on the joy of your
                  marriage and other important aspects of your life.
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
              <div className="grid lg:grid-cols-3 gap-4 my-8 max-w-5xl mx-auto">
                <img
                  src="/images/wedding-table-centerpiece-design.webp"
                  alt="Wedding planner Silver Spring, MD."
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
              Are You Rockville Couples Planning Your Wedding? Let Monica Help!
            </h2>
            <p className="md:text-xl mb-4">
              Here’s how we bring your planned dream day to life:
            </p>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Your Vision, Expertly Executed:
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                You've meticulously crafted your Rockville wedding plans, and
                we're here to bring that vision to life with precision. From our
                initial discussions, we’ll thoroughly understand your
                established style and preferences, ensuring your celebration
                unfolds exactly as you’ve imagined, feeling authentically you on
                the day itself.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Stress-Free Wedding Day Experience:
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                The wedding day should be about celebrating your love in Silver
                Spring, not managing logistics. We’ll seamlessly coordinate all
                the intricate details – from vendor arrivals and setups at your
                Silver Spring venue to adhering to your carefully planned
                timeline – allowing you to fully savor every precious moment.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Ensuring Your Stunning Details Shine:
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                You've thoughtfully selected your décor, floral arrangements,
                and every element that reflects your style. Our day-of
                coordination ensures these details are flawlessly implemented
                and beautifully presented at your Silver Spring celebration,
                leaving a lasting impression on your guests.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Seamless On-Site Coordination:
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                On your big day, we are your dedicated point of contact. We’ll
                manage vendor coordination, handle any unforeseen adjustments to
                the timeline, and ensure everything runs smoothly behind the
                scenes. You can relax and immerse yourselves in the joy of your
                wedding, confident that every detail is being expertly managed.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">• Flawless Wrap-Up:</h3>
              <p className="md:text-xl mb-4 ml-4">
                Even as the celebration in Silver Spring concludes, we’ll ensure
                a smooth wrap-up, overseeing vendor departures and addressing
                any immediate post-event logistics, allowing you to begin your
                married life without any lingering concerns.
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
          <div className="max-w-5xl mx-auto  py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              Want to envision a stress-free wedding day where you can fully
              relax, while a professional handles the details?
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
                Monica Makes Planning Weddings for Rockville Couples Easy!
              </h2>
              <div className="my-10">
                <p className="text-2xl md:text-3xl">
                  1. Book Your Free Complimentary Call:
                </p>
                <p className="md:text-xl my-4">
                  Take the first step by scheduling a chat with Monica to
                  discuss your wedding day needs and how she can ensure its
                  smooth execution.
                </p>
              </div>
              <div className="my-10">
                <p className="text-2xl md:text-3xl">
                  2. Outline Your Vision, We'll Execute It:
                </p>
                <p className="md:text-xl my-4">
                  Share the details of your Silver Spring wedding. We'll take
                  charge of creating a detailed timeline, managing vendor
                  communication, and perfecting all the logistics.
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl">
                  3. Create Lasting Memories:
                </p>
                <p className="md:text-xl my-4">
                  Focus on celebrating your love while we expertly handle all
                  the behind-the-scenes management of your special day.
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
                Why Should Couples in Rockville Hire Monica Browne Weddings?
              </h2>
              <p className="md:text-xl mb-4">
                Monica Browne Weddings brings over 15 years of seasoned
                expertise in making wedding dreams a vibrant reality.
              </p>
              <p className="md:text-xl mb-4">
                Here’s why couples throughout Maryland and{' '}
                <Link href="/day-of-wedding-coordinator-washington-dc">DC</Link>{' '}
                trust us with their special day:
              </p>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Seamless Planning and Execution
                </h3>
                <p className="md:text-xl mb-4">
                  We specialize in ensuring your wedding day flows effortlessly.
                  From the first look to the final farewell, we’ll keep
                  everything on schedule so you can relax and enjoy every
                  moment.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Meticulous Attention to Detail
                </h3>
                <p className="md:text-xl mb-4">
                  Whether it’s perfecting your floral arrangements or
                  coordinating vendor arrivals, we leave no stone unturned to
                  make sure every element aligns with your vision.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Expert Problem Solving
                </h3>
                <p className="md:text-xl mb-4">
                  Worried about last-minute surprises? Don’t be. We’re skilled
                  at handling the unexpected with poise, so you can stay
                  stress-free.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Effortless Coordination
                </h3>
                <p className="md:text-xl mb-4">
                  From creating a detailed timeline to overseeing logistics and
                  vendor communication, we take the reins to ensure your day is
                  as perfect as you imagined.
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
        </div>
        <div className="container max-w-5xl mx-auto mb-4 px-6">
          <div className="grid lg:grid-cols-3 gap-4 mx-auto">
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
        <div className="container max-w-5xl mx-auto mb-4 px-6">
          <section>
            <div className="max-w-3xl mx-auto py-10">
              <h2 className="text-3xl md:text-5xl text-center mb-10">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. What is the average cost of a wedding in Rockville, MD?
              </h3>
              <p className="md:text-xl mb-4">
                The cost of a wedding in Rockville can vary greatly depending on
                the size, style, and services you choose. On average, couples
                spend between{' '}
                <Link href="/blog/how-much-does-a-100-person-wedding-cost">
                  $32,000 and $70,000
                </Link>
                , with more elaborate celebrations exceeding $75,000. We’re here
                to help you plan a stunning wedding that fits your budget while
                maximizing value and ensuring every detail is just right.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. How far in advance should we book our wedding planner?
              </h3>
              <p className="md:text-xl mb-4">
                We recommend booking our services as early as possible — ideally
                12 to 18 months before your wedding date. Early planning helps
                us secure the best venues and vendors while carefully crafting
                every detail of your special day.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. Can you accommodate cultural or religious wedding
                traditions?
              </h3>
              <p className="md:text-xl mb-4">
                Absolutely! We specialize in incorporating cultural and
                religious traditions into your celebration, ensuring that every
                detail honors your heritage while creating a cohesive and
                unforgettable event.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. Are you familiar with wedding venues in Silver Spring, MD?
              </h3>
              <p className="md:text-xl mb-4">
                Yes! We have extensive experience with a wide range of Silver
                Spring venues, from elegant ballrooms to charming outdoor
                settings. We’ll help you find the perfect venue that matches
                your vision and fits seamlessly into your wedding plans.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #5 Do you offer day-of coordination services?
              </h3>
              <p className="md:text-xl mb-4">
                Yes, we do! We offer expert day-of coordination to ensure your
                wedding day runs smoothly from start to finish. Our team manages
                everything — from creating and overseeing a detailed timeline to
                coordinating with vendors, handling setup and breakdown,
                resolving any last-minute issues, and making sure every moment
                flows perfectly. With us handling the logistics, you can relax
                and fully enjoy your celebration.
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
