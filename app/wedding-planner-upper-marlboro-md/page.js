import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Wedding Planner in Upper Marlboro, MD for Orchestrating Your Perfect Day',
  description:
    "Looking for a professional wedding planner in Upper Marlboro? We'll make your wedding a memorable and enjoyable celebration for everyone! Book a call today!",
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/day-of-wedding-planner-upper marlboro-md',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/day-of-wedding-planner-upper marlboro-md',
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

export default async function WeddingPlannerUpperMarlboroMD() {
  return (
    <div>
      <Hero
        herotext="Wedding Planner in Upper Marlboro, MD | Elevating Every Moment of Your Wedding"
        heroSubText="Transforming your wedding dreams into a truly unforgettable, stress-free reality"
        buttonText="Book A Call With Monica!"
        textColor="text-white"
        imageUrl="/images/sierra-and-charles-walking-up-stairs-at-vineyard.jpg"
      />
      <main>
        <div className="container max-w-7xl mx-auto px-6">
          <section>
            <div className="py-10 md:py-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-5xl my-8 text-center">
                  Wedding Planner in Upper Marlboro, MD, Bringing Your Dream
                  Wedding to Life
                </h2>
                <p className="md:text-xl mb-4">
                  Monica Browne Weddings provides <b>full-service</b> and{' '}
                  <b>day-of wedding planning</b> to ensure your celebration in
                  Upper Marlboro is nothing short of perfect.
                </p>
                <p className="md:text-xl mb-4">
                  For couples who've handled the initial planning, our expert
                  day-of coordination steps in to bring your vision to life
                  flawlessly.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-4 my-8 max-w-5xl mx-auto">
                <img
                  src="/images/wedding-table-centerpiece-design.webp"
                  alt="Wedding planner Upper Marlboro, MD."
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
                  We meticulously oversee every detail, from vendor management
                  and décor setup to the seamless flow of your timeline. Our
                  support guarantees a stress-free event, freeing you to fully
                  immerse yourselves in the joy of your special day.
                </p>
                <p className="md:text-xl mb-4">
                  Whether you need us to guide you from "yes" to "I do," or to
                  flawlessly execute the plans you've already made, we're here
                  to ensure every detail is perfect.
                </p>
                <p className="md:text-xl mb-4">
                  We carefully coordinate vendors, oversee décor setup, and
                  manage your timeline, allowing you to relax and truly savor
                  every moment of your celebration.
                </p>

                <p className="text-xl italic mt-10 text-center max-w-md mx-auto">
                  Book a 15-minute with Monica and see how she can help you plan
                  your wedding today!
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
        <div className="container max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto  py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              Want a stress-free wedding day?
            </h2>
            <div className="grid grid-cols-2 gap-2 mb-10">
              <Image
                src="/images/bride-groom-serious-love.webp"
                alt="Newly wed couple posing for wedding photos."
                loading="lazy"
                width="472"
                height="708"
              />
              <Image
                src="/images/happy-bride-and-groom.webp"
                alt="Newly wed couple posing for wedding photos."
                loading="lazy"
                width="472"
                height="708"
              />
              <Image
                src="/images/wedding-bride.webp"
                alt="Beautiful newlywed bride."
                loading="lazy"
                width="472"
                height="708"
              />
              <Image
                src="/images/KINA0330.jpg"
                alt="Brothers posing at Irongate Restaurant."
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
                Monica Makes Planning Weddings for Upper Marlboro Couples Easy!
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
                  Share the details of your Upper Marlboro wedding. We'll take
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
        <div className="container max-w-5xl mx-auto px-6 mt-20">
          <section>
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              Why Should Couples in Upper Marlboro Hire Monica Browne Weddings?
            </h2>
            <div className="lg:grid grid-cols-2 gap-10 items-top">
              <Image
                src="/images/sierra-and-charles.jpg"
                alt="Beautiful newlywed bride."
                loading="lazy"
                width="472"
                height="708"
              />
              <div className="max-w-2xl mx-auto py-10 md:py-20">
                <p className="md:text-xl mb-4">
                  Here’s why couples in{' '}
                  <Link href="/wedding-planner-bowie-md">Bowie</Link> and{' '}
                  <Link href="/day-of-wedding-coordinator-washington-dc">
                    DC
                  </Link>{' '}
                  trust us with their special day:
                </p>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Seamless Planning and Execution
                  </h3>
                  <p className="md:text-xl mb-4">
                    We specialize in ensuring your wedding day flows
                    effortlessly. From the first look to the final farewell,
                    we'll keep everything on schedule, allowing you to relax and
                    enjoy every precious moment of your ceremony and reception.
                    Learn more about our{' '}
                    <Link href="/blog/dc-wedding-planning-services">
                      wedding planning services.
                    </Link>
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Meticulous Attention to Detail
                  </h3>
                  <p className="md:text-xl mb-4">
                    Whether it's perfecting your floral arrangements,
                    coordinating vendor arrivals, or managing intricate décor
                    setup, we leave no stone unturned. We ensure every element
                    aligns with your unique wedding vision, creating a truly
                    personalized experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Expert Problem Solving
                  </h3>
                  <p className="md:text-xl mb-4">
                    Worried about last-minute surprises or unexpected
                    challenges? Don't be. Our team is skilled at handling the
                    unexpected with poise and efficiency, ensuring your special
                    day remains stress-free and joyful.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Effortless Coordination
                  </h3>
                  <p className="md:text-xl mb-4">
                    From creating a detailed wedding timeline to overseeing all
                    logistics and vendor communication, we take the reins. This
                    ensures your event is as perfect as you imagined, allowing
                    you to focus on the joy of your marriage.
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
                #1. What is the average cost of a wedding in Upper Marlboro, MD?
              </h3>
              <p className="md:text-xl mb-4">
                The cost of a wedding in Upper Marlboro, MD, can vary
                significantly based on your guest count, desired style, and
                chosen services. On average, couples typically spend anywhere
                from{' '}
                <Link href="/blog/how-much-does-a-100-person-wedding-cost">
                  $32,000 and $70,000
                </Link>
                , with more elaborate celebrations often exceeding{' '}
                <b>$75,000.</b> Our goal is to help you plan a stunning and
                memorable wedding that aligns perfectly with your budget,
                ensuring exceptional value and meticulous attention to every
                detail.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. How far in advance should we book our wedding planner?
              </h3>
              <p className="md:text-xl mb-4">
                We highly recommend securing your wedding planner as early as
                possible – ideally <b>12 to 18</b> months before your wedding
                date. Booking in advance allows us ample time to secure your
                preferred venues and vendors and meticulously craft every
                element of your special day, ensuring a seamless and stress-free
                planning process.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. Can you accommodate cultural or religious wedding
                traditions?
              </h3>
              <p className="md:text-xl mb-4">
                Absolutely! We specialize in respectfully incorporating diverse
                cultural and religious traditions into your wedding celebration.
                Our team works closely with you to ensure every detail honors
                your heritage, creating a beautiful, cohesive, and unforgettable
                event that truly reflects your unique background.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. Are you familiar with wedding venues in Upper Marlboro, MD?
              </h3>
              <p className="md:text-xl mb-4">
                Yes, we are! We possess extensive experience with a wide array
                of wedding venues in Upper Marlboro, MD, ranging from grand
                ballrooms and elegant estates to charming outdoor settings and
                unique event spaces. We’ll guide you in selecting the perfect
                venue that not only matches your wedding vision but also
                seamlessly integrates with your overall plans.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #5 Do you offer day-of coordination services?
              </h3>
              <p className="md:text-xl mb-4">
                Yes, we do! Our expert day-of coordination services are designed
                to ensure your wedding day unfolds flawlessly from beginning to
                end. We manage every logistical detail, including creating and
                overseeing a detailed timeline, coordinating all vendors,
                handling setup and breakdown, and swiftly resolving any
                last-minute issues. With us managing the intricate logistics,
                you can relax, be present, and fully savor every magical moment
                of your celebration.
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
