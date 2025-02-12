import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Day-of | Full Service | Month-of Wedding Planner in Chevy Chase Maryland',
  description:
    'Looking for a wedding planner in Chevy Chase because you need some help? Call Monica Browne Weddings. We can help you plan the wedding of your dreams.',
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/wedding-planner-chevy-chase-md',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-planner-chevy-chase-md',
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

export default async function WeddingPlannerChevyChaseMD() {
  return (
    <div>
      <Hero
        herotext="Wedding Planners in Chevy Chase, Maryland"
        heroSubText="We Create Beautiful Weddings For Busy Couples Getting Married in Chevy Chase"
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
                  A Premiere Planner For Wedding Management in Chevy Chase
                </h2>
                <p className="md:text-xl mb-4">
                  Even though you may not know where to start planning your
                  wedding, you can still have the wedding of your dreams.
                </p>
                <p className="md:text-xl mb-4">
                  Monica Browne Weddings is here to help and guide you through
                  the process. With our help and guidance, you will undoubtedly
                  get the wedding you want and have time to do the other
                  essential things in your life.
                </p>
                <p className="md:text-xl mb-4">
                  We take care of your entire event, from planning and design,
                  coordination, selecting{' '}
                  <Link href="/wedding-flowers">flowers</Link>, decorations ,
                  and more.
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
              Planning a Wedding Can Take a Lot of Time - We Can Help!
            </h2>
            <p className="md:text-xl mb-4">
              From the moment you get engaged to the last toast of your
              reception, we’re here to ensure your wedding journey is seamless
              and unforgettable.
            </p>
            <p className="md:text-xl mb-4">
              Here’s how we make your dream day come to life:
            </p>
            <div className="my-10">
              <h3 className="text-2xl mb-2">• Your Story, Brought to Life</h3>
              <p className="md:text-xl mb-4 ml-4">
                Every love story is unique, and your wedding should reflect
                that. From our first meeting, we’ll dive deep into your vision,
                style, and preferences. Together, we’ll design a celebration
                that’s as one-of-a-kind as your love, creating a day that feels
                authentically you.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Hassle-Free Planning Experience
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Wedding planning doesn’t have to be overwhelming. We’ll take
                care of the intricate details—from tracking your budget to
                coordinating with vendors—so you can savor the joy of being
                engaged. Trust us to handle the logistics, leaving you with
                peace of mind and excitement for what’s ahead.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Stunning Designs Tailored to You
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Whether you need help choosing a color palette or envisioning
                the perfect{' '}
                <Link href="/wedding-flowers">floral arrangements</Link>, we’ve
                got you covered. We specialize in crafting breathtaking designs
                and atmospheres that leave a lasting impression on your guests
                while staying true to your style.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Seamless Coordination on Your Big Day
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Your wedding day should be all about celebrating love, not
                stressing over logistics. We’ll manage everything—from vendor
                arrivals to timeline adjustments—to ensure the day unfolds
                exactly as planned. You’ll be free to enjoy every moment while
                we take care of the rest.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">• Post-Celebration Support</h3>
              <p className="md:text-xl mb-4 ml-4">
                Our services don’t end when the music stops. We’ll handle
                everything from returning rentals to managing final payments,
                ensuring your transition to married life is smooth. Whether it’s
                a farewell brunch or a memorable send-off, we’re here to wrap up
                your celebration beautifully.
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
              Want a wedding day where you can relax and be the King and Queen
              for a day?
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
                Monica Makes Planning Weddings in Chevy Chase Simple and Easy
              </h2>
              <div className="my-10">
                <h3 className="text-2xl md:text-3xl">
                  1. Book a Call with Monica
                </h3>
                <p className="md:text-xl my-4">
                  Start by booking a consultation to discuss your wedding plans
                  and how Monica can step in to ensure everything runs smoothly
                  on your big day.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl md:text-3xl">
                  2. Share the Details of Your Vision
                </h3>
                <p className="md:text-xl my-4">
                  Tell us all about your event, and we’ll take it from there.
                  From creating a comprehensive timeline to managing vendor
                  communications and fine-tuning the logistics, we’ll handle
                  every detail with care.
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl">3. Celebrate and Enjoy</h3>
                <p className="md:text-xl my-4">
                  Relax and savor every moment of your wedding day while we
                  manage the behind-the-scenes work. Focus on making memories,
                  knowing everything is under control!
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
                Why Hire Monica for Your Chevy Chase Wedding?
              </h2>
              <p className="md:text-xl mb-4">
                When you partner with Monica Browne Weddings, you’re entrusting
                your big day to a seasoned professional with over 15 years of
                experience turning wedding dreams into reality.
              </p>
              <p className="md:text-xl mb-4">
                Here’s why couples in Chevy Chase, and{' '}
                <Link href="/wedding-planner-bethesda-md">Bethesda</Link> love
                working with Monica:
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
            <div className="max-w-2xl mx-auto py-10">
              <h2 className="text-3xl md:text-5xl text-center mb-10">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. What is the average cost of a wedding in Chevy Chase, MD?
              </h3>
              <p className="md:text-xl mb-4">
                The cost of a wedding in Chevy Chase, can vary widely depending
                on the size, style, and services required. On average, couples
                spend between{' '}
                <Link href="/blog/how-much-does-a-100-person-wedding-cost">
                  $32,000 and $70,000
                </Link>
                , with more elaborate weddings exceeding $90,000. We can help
                you plan a beautiful wedding that fits within your budget while
                maximizing value and ensuring every detail is perfect.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. How Much Does a Day-of Wedding Coordinator Cost in Chevy
                Chase?
              </h3>
              <p className="md:text-xl mb-4">
                In Chevy Chase, MD, a day-of wedding coordinator typically costs
                between <strong>$2,500 and $7,000</strong>. While the title
                suggests they only work on the wedding day itself, day-of
                coordinators in Chevy Chase actually start their involvement a
                few weeks before. We review your contracts, create detailed
                timelines, and handle all the final vendor communication. Think
                of us as your wedding day conductor, ensuring everything runs
                smoothly and according to plan. Factors influencing the cost
                include the complexity of your wedding, the number of guests,
                and your wedding location. A larger guest list or a wedding with
                multiple locations will naturally require more coordination.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. Is it Woth it to Hire a Wedding Planner?
              </h3>
              <p className="md:text-xl mb-4">
                Absolutely! In a dynamic area like Chevy Chase, a wedding
                planner is worth their weight in gold. They bring invaluable
                expertise in vendor management, budget allocation, design, and
                logistics, ensuring your wedding vision comes to life
                seamlessly. Think of them as your experienced guide, navigating
                the complexities of wedding planning so you don't have to.
                They'll save you time, reduce stress, and ultimately allow you
                to fully savor your special day, knowing every detail is
                meticulously handled. While there's certainly a cost involved,
                the peace of mind and the potential for cost savings through
                their vendor connections often make it a worthwhile investment.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. How Many Hours Does it Take to Plan a Wedding?
              </h3>
              <p className="md:text-xl mb-4">
                On average, couples can spend between{' '}
                <strong>100 and 250 hours</strong> on the entire process. This
                includes everything from the initial stages of brainstorming and
                budgeting to the meticulous details of seating charts and
                favors. The time commitment can vary depending on the wedding's
                size, style, and the couple's DIY involvement. Keep in mind that
                this is an average, and some weddings may require significantly
                more or less time.
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
