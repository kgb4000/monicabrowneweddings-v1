import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'
import Image from 'next/image'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Wedding Planner For Busy Couples in Fort Washington, Maryland | Monica Browne Weddings',
  description:
    "Looking for a wedding planner in Fort Washington, MD? We'll take care of everything, from finding the perfect venue to finding the best caterers. Call us today!",
  alternate: {
    canonical:
      'https://monicabrowneweddings.com/wedding-planner-fort-washington-md',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-planner-fort-washington-md',
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

export default function WeddingPlannerFortWashingtonMD() {
  return (
    <>
      <Hero
        herotext="Wedding Planning in Fort Washington: Expert Planners for Your Busy Schedule"
        heroSubText="We turning your vision into a flawless, beautifully crafted celebration you'll actually get to enjoy"
        buttonText="Book A Call With Monica!"
        imageUrl="/images/happy-couple.webp"
        textColor="text-white"
      />
      <main>
        <section>
          <div className="container max-w-7xl mx-auto px-6 py-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl my-8 text-center">
                Wedding Planner for Fort Washington, Maryland Couples
              </h2>
              <p className="md:text-xl mb-4">
                Planning a wedding is a huge undertaking, especially when you're
                already juggling a busy life.
              </p>
              <p className="md:text-xl mb-4">
                At Monica Browne Weddings, we get it. We offer comprehensive
                wedding planning services for couples in Fort Washington,{' '}
                <Link href="/wedding-planner-bowie-md">Bowie</Link>, and the
                surrounding{' '}
                <Link href="/wedding-planner-washington-dc">
                  Washington, DC
                </Link>{' '}
                area.
              </p>
              <p className="md:text-xl mb-4">
                Our goal is simple: to lift the burden of planning off your
                shoulders so you can truly savor every moment of your special
                day.
              </p>
              <p className="md:text-xl mb-4">
                Let us take some of the stress off of you so you can focus on
                enjoying your special day.
              </p>
              <p className="md:text-xl mb-4">
                Whether you need a little guidance to stay on track or a
                dedicated planner to handle every last detail, we're here to
                ensure your wedding journey is as enjoyable and memorable as the
                "I do's."
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container max-w-5xl mx-auto grid lg:grid-cols-3 gap-2 px-6">
            <Image
              src="https://res.cloudinary.com/browne-company/image/upload/v1736309749/Monica%20Browne%20Weddings/bride-with-flowers_xcqpkf.webp"
              alt="Wedding planner in Fort Washington, MD."
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
        </section>
        <section>
          <div className="container max-w-3xl mx-auto py-10 px-6">
            <p className="md:text-xl mb-4">
              We specialize in designing and executing stylish, elegant, and
              seamless weddings.
            </p>
            <p className="md:text-xl mb-4">
              From grand ballroom affairs to intimate backyard celebrations, our
              team works tirelessly to craft an unforgettable event for you and
              your loved ones.
            </p>
            <p className="md:text-xl mb-4">
              We're also proud to celebrate the beautiful tapestry of love,
              helping couples from diverse cultural backgrounds weave their
              unique traditions and stories into a truly personalized
              celebration.
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
          <div className="px-6 bg-slate-50 py-20 mb-10">
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl md:text-5xl text-center">
                How to Get Started
              </h2>
              <div>
                <div className="my-10">
                  <h4 className="text-2xl md:text-3xl">1. Let's Connect</h4>
                  <p className="md:text-xl my-4">
                    Book a call with us to discuss your vision, your needs, and
                    how our expert planning services can bring your Fort
                    Washington wedding to life seamlessly.
                  </p>
                </div>
                <div className="my-10">
                  <h4 className="text-2xl md:text-3xl">
                    2. Craft Your Vision & Details
                  </h4>
                  <p className="md:text-xl my-4">
                    Once we understand your desires, we'll help you create a
                    realistic budget and begin to solidify all those exciting
                    wedding details. We'll guide you through every decision,
                    ensuring everything aligns with your dream.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl">
                    3. Savor Every Moment
                  </h4>
                  <p className="md:text-xl my-4">
                    With all the planning handled, your only job on the big day
                    is to relax, celebrate, and cherish every single moment!
                    We'll be behind the scenes, ensuring everything unfolds
                    flawlessly so you can simply enjoy your beautifully crafted
                    celebration.
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
          </div>
        </section>
        <section>
          <div className="container max-w-7xl mx-auto px-6 py-10 md:py-20">
            <div className="max-w-3xl mx-auto ">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Want a Wedding Day With No Stress Because Someone Else is
                Handling All The Details?
              </h2>
              <div className="grid grid-cols-2 gap-2 mb-10">
                <img src="https://res.cloudinary.com/browne-company/image/upload/v1736311733/Monica%20Browne%20Weddings/bride-at-wedding_umiq78.webp" />
                <img src="https://res.cloudinary.com/browne-company/image/upload/v1736309743/Monica%20Browne%20Weddings/bride-groom-serious-love_moyugv.webp" />
                <img src="https://res.cloudinary.com/browne-company/image/upload/v1736309709/Monica%20Browne%20Weddings/black-bride-and-groom_etu7gf.webp" />
                <img src="https://res.cloudinary.com/browne-company/image/upload/v1736309793/Monica%20Browne%20Weddings/happy-bride-and-groom_jawncb.webp" />
              </div>
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
        <section className="bg-slate-50">
          <div className="container max-w-5xl mx-auto gap-x-10 grid lg:grid-cols-2 items-center py-10 lg:py-20 px-6">
            <div className="mb-10 lg:mb-0">
              <Image
                src="https://res.cloudinary.com/browne-company/image/upload/v1736309749/Monica%20Browne%20Weddings/bride-with-flowers_xcqpkf.webp"
                alt="Black bride with bouquet."
                loading="lazy"
                width="472"
                height="708"
              />
            </div>
            <div className="container mx-auto px-4 max-w-xl">
              <h2 className="text-3xl md:text-5xl text-center lg:text-left mb-10">
                Why Hire Monica as Your Wedding Planner?
              </h2>
              <p className="md:text-xl mb-4">
                When you're searching for a wedding planner you want someone you
                can truly trust.
              </p>
              <p className="md:text-xl mb-4">
                At Monica Browne Weddings, our focus isn't on celebrity
                magazines; it's entirely on you and your dream day.
              </p>
              <p className="md:text-xl mb-4">
                Our mission is straightforward: to provide exceptional{' '}
                <Link href="/blog/dc-wedding-planning-services">
                  wedding planning services
                </Link>{' '}
                that genuinely save you time, alleviate stress, and help you
                maximize your budget.
              </p>
              <p className="md:text-xl mb-4">
                We're here to assist in every possible way, ensuring your vision
                blossoms into a flawlessly executed celebration.
              </p>
              <p className="md:text-xl mb-4">
                With over 15 years of experience in the event industry, Monica
                Browne Weddings brings a wealth of knowledge and expertise to
                your planning journey.
              </p>
              <p className="md:text-xl mb-4">
                When you hire us, you're not just getting a service; you're
                getting <Link href="/about">Monica</Link> herself – an
                incredibly knowledgeable professional dedicated to your
                wedding's success – and a supportive team committed to ensuring
                your day unfolds perfectly, free of issues.
              </p>
              <p className="md:text-xl mb-4">
                Just check out our{' '}
                <a
                  href="https://www.google.com/search?q=monica+browne+weddings&oq=monica+browne+weddings&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxiABDIJCAAQRRg7GIAEMgoIARAAGIAEGKIEMgoIAhAAGIAEGKIEMgoIAxAAGIAEGKIEMgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg3ODQ3ajFqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#mpd=~2535347168599140905/customers/reviews"
                  target="_blank"
                >
                  5-star reviews
                </a>{' '}
                to see what our clients say!
              </p>
              <Button
                buttonText="Call Monica Today!"
                bgColor="bg-purple-500"
                borderWidth="border-0"
                textColor="text-white"
                textSize="md:text-xl"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-2xl mx-auto my-10 md:my-20 px-6">
            <h2 className="text-3xl md:text-5xl text-center">FAQs</h2>
            <h3 className="text-2xl md:text-3xl my-4 font-bold">
              #1. What are typical wedding planner prices in Fort Washington,
              MD?
            </h3>
            <p className="md:text-xl mb-4">
              The cost of a wedding planner in Fort Washington, MD, can start
              from around<b>$2,300 - $7,000</b> for <b>day-of coordination</b>{' '}
              and go upwards of <b>$7,000-$15,000+</b> for comprehensive
              <b>full-service wedding planning</b>.
            </p>
            <h3 className="text-2xl md:text-3xl my-4 font-bold">
              #2. What is a normal budget allocation for a wedding planner?
            </h3>
            <p className="md:text-xl mb-4">
              Generally, couples allocate about 10-15% of their total wedding
              budget to their wedding planner. However, this is a flexible
              guideline.
            </p>
            <p className="md:text-xl mb-4">
              For busy couples, investing in a planner can often save money and
              time in the long run by helping you make smart vendor choices,
              negotiate contracts, and avoid costly mistakes.
            </p>
            <p className="md:text-xl mb-4">
              Your budget for a wedding planner should ultimately reflect the
              level of assistance you need to ensure a stress-free and perfectly
              executed day.
            </p>
            <h3 className="text-2xl md:text-3xl my-4 font-bold">
              #3. What services does Monica Browne Weddings offer for busy
              couples in Fort Washington?
            </h3>
            <p className="md:text-xl mb-4">
              Monica Browne Weddings offers a range of{' '}
              <Link href="/blog/dc-wedding-planning-services">
                wedding planning services
              </Link>{' '}
              tailored to take the pressure off busy couples.
            </p>
            <p className="md:text-xl mb-4">
              This includes: full-service wedding planning from concept to
              execution.{' '}
            </p>
            <p className="md:text-xl mb-4">
              Partial planning for couples who have started but need expert
              guidance.{' '}
            </p>
            <p className="md:text-xl mb-4">Vendor selection and management. </p>
            <p className="md:text-xl mb-4">
              Budget creation and tracking, timeline development, design
              conceptualization, rehearsal coordination, and seamless day-of
              management.
            </p>
            <p className="md:text-xl mb-4">
              Our goal is to handle all the intricate details so you can focus
              on enjoying your engagement and wedding day.
            </p>
            <h3 className="text-2xl md:text-3xl my-4 font-bold">
              #4. Do I really need a wedding planner if my venue has a
              coordinator?
            </h3>
            <p className="md:text-xl mb-4">
              While many venues offer an on-site coordinator, their role is
              primarily to manage the venue's operations and ensure its policies
              are followed.
            </p>
            <p className="md:text-xl mb-4">
              We work exclusively for you. We oversee all vendors (not just the
              venue's), manage your comprehensive timeline, handle unforeseen
              issues, and ensure your entire vision comes together seamlessly.
            </p>
            <p className="md:text-xl mb-4">
              We are your advocate and problem-solver, allowing you to relax and
              fully immerse yourself in your celebration without any stress.
            </p>
            <h3 className="text-2xl md:text-3xl my-4 font-bold">
              #5. How far in advance should I book a wedding planner for my
              wedding?
            </h3>
            <p className="md:text-xl mb-4">
              We recommend booking your wedding planner as soon as possible
              after you get engaged, ideally 12-18 months before your wedding
              date.
            </p>
            <p className="md:text-xl mb-4">
              This allows us ample time to assist with crucial early decisions
              like venue selection, budget creation, and securing top-tier
              vendors.
            </p>
            <p className="md:text-xl mb-4">
              For busy couples, booking early means more time for us to plan
              every detail, ensuring a relaxed and enjoyable journey to your
              wedding day.
            </p>
            <p className="md:text-xl mb-4">
              However, we also accommodate shorter timelines based on
              availability.
            </p>
          </div>
        </section>
        <p className="text-xl italic mt-10 text-center max-w-md mx-auto px-6">
          Book a 15-minute with Monica and see how she can help you plan your
          wedding today!
        </p>
        <a href={calendly} target="_blank">
          <Button
            buttonText="Book a Call With Monica"
            bgColor="bg-purple-500"
            borderWidth="border-0"
            textColor="text-white"
            textSize="md:text-xl"
          />
        </a>
      </main>
    </>
  )
}
