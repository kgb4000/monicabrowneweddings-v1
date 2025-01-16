import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title: 'Wedding Planners in Bethesda Maryland | Monica Browne Weddings',
  description:
    "Looking for a top ranked wedding planner in Bethesda? We'll make your wedding a memorable and enjoyable celebration for everyone! Book a call today!",
  alternates: {
    canonical: 'https://monicabrowneweddings.com/wedding-planner-bethesda-md',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-planner-bethesda-md',
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

export default async function WeddingPlannerBethesdaMD() {
  return (
    <div>
      <Hero
        herotext="Top Ranked Wedding Planner in Bethesda, Maryland"
        heroSubText="We Create Beautiful Weddings For Busy Couples in Bethesda"
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
                  Top Wedding Planner For Busy Couples in Bethesda, MD
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
              Planning A Wedding Can Take a Lot of Time - We Can Help!
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
                Monica Makes Planning Weddings in bethesda Easy
              </h2>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">
                  1. Schedule a Chat with Monica
                </h4>
                <p className="md:text-xl my-4">
                  Start by booking a consultation to discuss your wedding plans
                  and how Monica can step in to ensure everything runs smoothly
                  on your big day.
                </p>
              </div>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">
                  2. Share the Details of Your Vision
                </h4>
                <p className="md:text-xl my-4">
                  Tell us all about your event, and we’ll take it from there.
                  From creating a comprehensive timeline to managing vendor
                  communications and fine-tuning the logistics, we’ll handle
                  every detail with care.
                </p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl">
                  3. Celebrate Without Worry
                </h4>
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
                Why Hire Monica for Your Bethesda Wedding?
              </h2>
              <p className="md:text-xl mb-4">
                When you partner with Monica Browne Weddings, you’re entrusting
                your big day to a seasoned professional with over 15 years of
                experience turning wedding dreams into reality.
              </p>
              <p className="md:text-xl mb-4">
                Here’s why couples in Bethesda, MD, and DC love working with us:
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
            <div className="max-w-3xl mx-auto py-10">
              <h2 className="text-3xl md:text-5xl text-center mb-10">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. What are the best wedding venues in bethesda, MD?
              </h3>
              <p className="md:text-xl mb-4">
                Potomac is home to several stunning venues, from elegant country
                clubs to scenic estates and outdoor gardens. Popular options
                include{' '}
                <a
                  href="https://www.bolgercenter.com/weddings.html"
                  target="_blank"
                >
                  William F. Bolger Center
                </a>{' '}
                ,{' '}
                <a
                  href="https://montgomeryparks.org/parks-and-trails/rockwood-manor-park/"
                  target="_blank"
                >
                  Rockwood Manor
                </a>{' '}
                , and{' '}
                <a href="https://tpc.com/potomac/weddings/" target="_blank">
                  TPC Potomac at Avenel Farm
                </a>{' '}
                for a classic country club wedding.
              </p>
              <p className="md:text-xl mb-4">
                If you want to do most of the planning yourself and find your
                wedding venue and vendors on your own but still want to enjoy
                your wedding day without worrying about anything, consider
                hiring Monica Browne Weddings.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. How far in advance should we book our wedding planner?
              </h3>
              <p className="md:text-xl mb-4">
                It’s best to book your wedding planner 12–18 months in advance,
                especially if your wedding falls during peak season (spring or
                fall). This ensures ample time for planning, vendor selection,
                and securing your preferred dates.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. Do you help with vendor recommendations in Potomac, MD?
              </h3>
              <p className="md:text-xl mb-4">
                Absolutely! We work with a trusted network of local vendors,
                from florists and photographers to caterers and DJs, ensuring
                you have the best team for your wedding.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. Do I need a day-of coordinator if my venue has an on-site
                coordinator?
              </h3>
              <p className="md:text-xl mb-4">
                Yes, a venue coordinator typically focuses on the venue’s needs,
                such as setup and catering. A{' '}
                <Link href="/blog/wedding-planner-vs-coordinator">
                  day-of coordinator
                </Link>
                , on the other hand, is dedicated to managing your entire event,
                including vendor coordination, décor setup, and troubleshooting,
                to ensure your vision is brought to life across all aspects of
                your wedding.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #5 Do you offer day-of coordination services?
              </h3>
              <p className="md:text-xl mb-4">
                Yes, we specialize in day-of coordination to ensure your wedding
                day runs seamlessly. Our team handles all the details and
                logistics, so you can fully enjoy your celebration without
                stress. Our day-of coordination package typically includes
                creating and managing a detailed timeline, vendor communication
                and coordination, overseeing the setup and breakdown of the
                event, troubleshooting any last-minute issues, and ensuring the
                day flows smoothly from start to finish.
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
