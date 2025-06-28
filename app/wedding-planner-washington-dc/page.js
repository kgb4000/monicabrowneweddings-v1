import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Washington DC Wedding Planner - Effortless & Elegant | Monica Browne Weddings',
  description:
    'Experience a seamless, elegant wedding in Washington DC. Monica Browne Weddings handles every detail, ensuring your DC wedding vision comes to life.',
  alternates: {
    canonical: 'https://monicabrowneweddings.com/wedding-planner-washington-dc',
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
        herotext="Washington, DC Wedding Planner, for Couples Who Want an Unforgettable Day"
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
                  Top Rated Washington, DC Wedding Planner and Coordinator for
                  Busy Washington Couples
                </h2>
                <p className="md:text-xl mb-4">
                  As a top-rated wedding planner and coordinator in Washington,
                  DC, Monica Browne Weddings specializes in making wedding
                  planning not just simple and easy, but genuinely stress-free
                  for busy couples like you.
                </p>
                <p className="md:text-xl mb-4">
                  Our ultimate goal is to ensure you can fully immerse
                  yourselves in celebrating this momentous and historic
                  occasion, confident that every intricate detail is being
                  expertly handled.
                </p>
                <p className="md:text-xl mb-4">
                  From the very first consultation, we dedicate ourselves to
                  bringing your unique vision to life. This includes
                  comprehensive planning and exquisite design, day-of
                  coordination, and thoughtful selection of every element—from
                  the perfect flowers and stunning decorations to curating a
                  team of trusted vendors.
                </p>
              </div>
              <div className="grid lg:grid-cols-3 gap-4 my-8 max-w-5xl mx-auto">
                <Image
                  src="/images/wedding-table-centerpiece-design.webp"
                  alt="DC wedding planner."
                  title="DC wedding planner"
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
                  Our commitment is to manage the entire event, allowing you to
                  savor every precious moment leading up to, and including, your
                  wedding day.
                </p>
                <p className="md:text-xl mb-4">
                  We have a deep passion for helping couples from diverse
                  backgrounds create weddings that beautifully honor their
                  heritage and personal love stories.
                </p>
                <p className="md:text-xl mb-4">
                  From the moment we begin planning, our focus is on
                  understanding and seamlessly incorporating the meaningful
                  rituals, symbolic gestures, and traditional attire that are
                  unique to your cultural background.
                </p>
                <p className="md:text-xl mb-4">
                  Whether it's a specific ceremony, a nuanced custom, or a
                  particular piece of attire, we work diligently to ensure these
                  elements are woven flawlessly into the fabric of your wedding
                  day.
                </p>
                <p className="md:text-xl mb-4">
                  Our promise is to create an experience that feels profoundly
                  authentic and deeply personal to you, your families, and your
                  guests.
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
        <section>
          <div className="container max-w-7xl mx-auto px-6 my-20 ">
            <h2 className="text-3xl lg:text-5xl my-14 text-center">
              Our DC Wedding Planning Services
            </h2>
            <div className="grid lg:grid-cols-3 gap-10">
              <div>
                <Image
                  src="/images/KINA0531.jpg"
                  alt="Full-service wedding planning."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="text-center my-4 text-2xl font-bold">
                  Full-Service Wedding Planning
                </h3>
                <p className="md:text-xl">
                  Our most comprehensive offering, covering every detail from
                  concept to execution. Ideal for busy couples seeking a
                  completely stress-free experience.
                </p>
                <p className="md:text-xl text-center my-4">
                  <Link href="/blog/dc-full-service-wedding-planner">
                    Learn more here
                  </Link>
                </p>
              </div>
              <div>
                <Image
                  src="/images/KINA0669.jpg"
                  alt="Partial-service wedding planning."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="text-center my-4 text-2xl font-bold">
                  Partial Wedding Planning
                </h3>
                <p className="md:text-xl">
                  Perfect for coules who have started planning but need expert
                  guidance and support for specific elements or the final
                  stages.
                </p>
                {/* <p className="md:text-xl text-center my-4">
                  <Link href="/blog/dc-full-service-wedding-planner">
                    Learn more here
                  </Link>
                </p> */}
              </div>
              <div>
                <Image
                  src="/images/KINA0531.jpg"
                  alt="Day-of wedding coordination."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <h3 className="text-center my-4 text-2xl font-bold">
                  Day-Of Wedding Coordination
                </h3>
                <p className="md:text-xl">
                  For couples who have planned everything but want professional
                  oversight on their wedding day to ensure seamless execution.
                </p>
                <p className="md:text-xl text-center my-4">
                  <Link href="/day-of-wedding-coordinator-washington-dc">
                    Learn more here
                  </Link>
                </p>
              </div>
            </div>
            <div className="center mt-20">
              <a href="/blog/dc-wedding-planning-services" target="_blank">
                <Button
                  buttonText="Learn about more our DC wedding services"
                  bgColor="bg-purple-500"
                  borderWidth="border-0"
                  textColor="text-white"
                  textSize="md:text-xl"
                />
              </a>
            </div>
          </div>
        </section>
        <section className="bg-slate-800">
          <div className="container max-w-5xl mx-auto px-6 my-20 ">
            <div className="max-w-3xl mx-auto py-10 md:py-20 text-white px-6">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Your Dedicated Washington D.C. Wedding Planner: We Handle
                Everything
              </h2>
              <p className="md:text-xl mb-4">
                From the exhilarating moment you say "Yes!" to the joyous final
                dance at your D.C. reception, Monica Browne Weddings is your
                trusted partner, ensuring every detail is meticulously covered
                with care and precision.
              </p>
              <p className="md:text-xl mb-4">
                We're here to transform your vision into an unforgettable
                reality in the nation's capital.
              </p>
              <p className="md:text-xl mb-4">
                Here's how we make your dream Washington D.C. wedding a truly
                seamless experience:
              </p>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Your D.C. Vision, Perfectly Crafted:
                </h3>
                <p className="md:text-xl mb-4">
                  Every couple has a unique love story, and we're here to bring
                  yours vibrantly to life amidst the charm of{' '}
                  <Link href="https://washington.org/" target="_blank">
                    Washington D.C.
                  </Link>
                  . From our very first meeting, we'll listen intently to
                  understand your style, preferences, and dreams.
                </p>
                <p className="md:text-xl mb-4">
                  Together, we'll create a personalized wedding plan that not
                  only captures your unique vision but also ensures your
                  celebration authentically reflects who you are, whether it's a
                  grand affair in a historic D.C. venue or an intimate
                  gathering.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Stress-Free Planning, Simplified for D.C. Couples:
                </h3>
                <p className="md:text-xl mb-4">
                  Planning a wedding, especially in a bustling city like D.C.,
                  involves countless intricate details. But with us, you won't
                  have to worry about a thing.
                </p>
                <p className="md:text-xl mb-4">
                  From managing budgets to navigating the logistics of{' '}
                  <Link
                    href="https://www.washingtonian.com/best/wedding-vendors/"
                    target="_blank"
                  >
                    D.C. vendors
                  </Link>{' '}
                  and venues, we take the stress out of the entire process. This
                  leaves you free to fully embrace the joy of your engagement
                  and anticipate your big day. Rest assured, every aspect will
                  be flawlessly organized and executed.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Picture-Perfect D.C. Designs and Décor:
                </h3>
                <p className="md:text-xl mb-4">
                  Unsure where to begin with colors, themes, or stunning floral
                  centerpieces that complement your chosen D.C. setting? That's
                  precisely our specialty.
                </p>
                <p className="md:text-xl mb-4">
                  We'll expertly guide you through the entire design process,
                  helping to create a breathtaking atmosphere that truly wows
                  your guests and perfectly matches your personal style. From
                  elegant ceremony setups to sophisticated reception décor,
                  we'll transform your vision into a stunning D.C. reality.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">
                  Flawless Washington D.C. Wedding Day Coordination:
                </h3>
                <p className="md:text-xl mb-4">
                  On your grand day, you deserve to be completely present,
                  savoring every moment without a single worry about the
                  details.
                </p>
                <p className="md:text-xl mb-4">
                  We'll meticulously oversee every element, from vendor arrivals
                  and adherence to your personalized timeline to seamlessly
                  handling any last-minute adjustments.
                </p>
                <p className="md:text-xl mb-4">
                  With Monica Browne Weddings expertly managing everything
                  behind the scenes, you can simply relax and enjoy every
                  cherished moment with your loved ones in Washington D.C.
                </p>
              </div>
              <div className="my-10">
                <h3 className="text-2xl mb-2">Beyond the "I Do's</h3>
                <p className="md:text-xl mb-4">
                  Our support doesn’t stop at the altar. After the celebration,
                  we’ll handle all the post-wedding logistics, such as returning
                  rentals, final vendor payments, and tying up loose ends.
                  Whether it’s a post-wedding brunch or honeymoon send-off,
                  we’ll ensure the perfect ending to your special day.
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
            <div className="container mx-auto px-6 max-w-xl py-20">
              <h2 className="text-3xl md:text-5xl text-center mb-4 leading-normal">
                Monica Makes Wedding Planning Simple For DC Couples
              </h2>
              <div className="my-10">
                <p className="text-2xl md:text-3xl">
                  1. Book a call with Monica
                </p>
                <p className="md:text-xl my-4">
                  Book a call with Monica to discuss how she can help as your
                  day of coordinator.
                </p>
              </div>
              <div className="my-10">
                <p className="text-2xl md:text-3xl">
                  2. Tell Monica about your event
                </p>
                <p className="md:text-xl my-4">
                  Let us create a detailed timeline for you, contact your
                  vendors, and oversee the details of your wedding day.
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl">
                  3. Enjoy your Wedding Day
                </p>
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

        <div className="container max-w-5xl mx-auto px-6 my-20">
          <section>
            <h2 className="text-3xl md:text-5xl mb-4 text-center">
              Why Hire Monica Browne Weddings as Your DC Wedding Coordinator
            </h2>
            <div className="grid md:grid-cols-2 gap-10 items-top my-10">
              <div>
                <Image
                  src="/images/bride-with-flowers.webp"
                  alt="Newly wed couple at Irongate Restaurant in Washington, DC"
                  loading="lazy"
                  width="472"
                  height="708"
                />
              </div>
              <div className="max-w-2xl mx-auto">
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
                    <Link href="/wedding-decoration-services">decorations</Link>{' '}
                    to managing vendor setups, we make sure every detail matches
                    your vision.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Problem Solving
                  </h3>
                  <p className="md:text-xl mb-4">
                    Unexpected issues? We handle them quickly so you never have
                    to worry about anything on your wedding day.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-2xl mb-2">
                    Flawless Coordination
                  </h3>
                  <p className="md:text-xl mb-4">
                    We manage your timeline, communicate with vendors, and
                    oversee the day’s logistics to keep everything on track.
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
        <section className="bg-slate-50">
          <div className="container mx-auto px-4 max-w-9xl py-20 my-20">
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
        <div>
          <div className="grid lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-20">
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
          <div className="container max-w-3xl mx-auto px-6 py-10">
            <div className="">
              <h2 className="text-3xl md:text-5xl text-center mb-10">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. How much does a DC wedding planner cost?
              </h3>
              <p className="md:text-xl mb-4">
                In our area, you can expect to invest anywhere from{' '}
                <b>$7,000 to $15,000+ </b>for a{' '}
                <Link href="/blog/dc-full-service-wedding-planner">
                  full-service wedding planner
                </Link>
                . Several factors influence this range, including the planner's
                experience, the scale of your wedding, and the scope of services
                you require.
              </p>
              <p className="md:text-xl mb-4">
                For couples seeking assistance solely on the big day,{' '}
                <Link href="/day-of-wedding-coordinator-washington-dc">
                  day-of coordination
                </Link>{' '}
                typically falls between <b>$2,300 and $7,000</b>.
              </p>
              <p className="md:text-xl mb-4">
                If you're looking for comprehensive support from "yes" to "I
                do," full-service planning packages generally start around{' '}
                <b>$7,000 and can exceed $15,000</b> depending on your needs.
              </p>
              <p className="md:text-xl mb-4">
                For a personalized quote tailored to your unique celebration,
                book a call today.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. What does a DC wedding planner do, and how can you help with
                my wedding?
              </h3>
              <p className="md:text-xl mb-4">
                A wedding planner handles all aspects of your wedding, from
                budgeting and vendor coordination to designing your dream décor
                and managing the big day.
              </p>
              <p className="md:text-xl mb-4">
                For Washington, DC weddings, we work with trusted vendors, and
                ensure your event aligns with your vision.
              </p>
              <p className="md:text-xl mb-4">
                If you want to do most of the planning yourself and find your
                wedding venue and vendors on your own but still want to enjoy
                your wedding day without worrying about anything, consider
                hiring Monica Browne Weddings.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. When should I hire a DC wedding planner wedding?
              </h3>
              <p className="md:text-xl mb-4">
                Ideally, you should hire a wedding planner <b>12-18 months</b>{' '}
                before your wedding. However, we offer services for all stages
                of planning, whether you’re just starting or your wedding is
                only a few weeks away. Our day-of coordination is perfect for
                couples who’ve done most of the planning but need expert help to
                execute the final details.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. What types of wedding planning services do you offer?
              </h3>
              <p className="md:text-xl mb-4">
                We provide{' '}
                <Link href="/blog/dc-full-service-wedding-planner">
                  full-service wedding planning
                </Link>
                , partial planning, and day-of coordination. Full-service
                planning covers everything from start to finish, partial
                planning allows you to get help with specific aspects of your
                wedding, and{' '}
                <Link href="/day-of-wedding-coordinator-washington-dc">
                  day-of coordination
                </Link>{' '}
                ensures your wedding day runs smoothly while you relax and
                enjoy.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #5 How will you ensure my wedding day goes smoothly?
              </h3>
              <p className="md:text-xl mb-4">
                We create a detailed wedding day timeline, confirm all vendor
                schedules, conduct a venue walkthrough, and coordinate a
                rehearsal before the wedding. On the big day, we manage
                logistics, troubleshoot any issues, and serve as the primary
                contact for vendors and your wedding party, ensuring everything
                flows seamlessly.
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
      </main>
    </div>
  )
}
