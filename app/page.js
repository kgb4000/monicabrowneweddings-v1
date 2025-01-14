import Link from 'next/link'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly = 'rtrt'

const getPosts = async () => {
  const response = await fetch(
    'https://api-us-east-1.graphcms.com/v2/cktkjtoxd0dod01z1bc0w41e9/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
                posts (orderBy: createdAt_DESC, first: 3) {
                  title
                  slug
                  coverImage {
                    url
                    width
                    height
                  }
                }
              }`,
      }),
    }
  )

  const { data } = await response.json()

  return data.posts
}

export default async function Home() {
  const posts = await getPosts()
  return (
    <div>
      <Hero
        herotext="Professional Wedding Planning Services For Busy Couples"
        heroSubText="We Create Beautiful Weddings For Busy Couples in Maryland, Washington, DC, and Northern Virginia"
        buttonText="Book A Call With Monica!"
        textColor="text-white"
        imageUrl="/images/wedding-couple.jpg"
      />
      <main>
        <section>
          <div className="container mx-auto max-w-7xl px-6 py-8 md:py-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center md:mb-10 max-w-2xl mx-auto">
              Wedding Planning Services
            </h2>
            <div className="py-10">
              <div className="pb-4 grid sm:grid-cols-2 gap-8 items-center mb-12">
                <img
                  src="images/bride-groom-night-photo.webp"
                  loading="lazy"
                  height="auto"
                  className="pb-4"
                />
                <div className="">
                  <h3 className="text-xl font-bold pb-4">Wedding Planning</h3>
                  <p className="md:text-xl mb-4">
                    Our full-service wedding planning in{' '}
                    <Link href="/wedding-planner-washington-dc">
                      Washington, DC
                    </Link>
                    ,{' '}
                    <Link href="/wedding-services/wedding-planner-bowie-md">
                      Maryland
                    </Link>
                    , and Virginia, is designed to guide you through every step
                    of your wedding journey. From initial concept creation to
                    the final farewell, we handle all the details so you can
                    focus on enjoying your special day.
                  </p>
                  <p className="md:text-xl mb-4">
                    We assist with venue selection, vendor management, budget
                    planning, design, timelines, and day-of coordination,
                    ensuring your wedding is flawlessly executed and uniquely
                    yours.
                  </p>
                  <p className="md:text-xl mb-4">
                    <Link href="/wedding-services/wedding-planner-bowie-md">
                      Learn more here
                    </Link>
                  </p>
                </div>
              </div>
              <div className="pb-4 grid sm:grid-cols-2 gap-8 items-center">
                <img
                  src="images/black-grooms-men.webp"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4 sm:order-2"
                />
                <div className="">
                  <h3 className="text-xl font-bold pb-4">
                    Day-of Wedding Coordination
                  </h3>
                  <p className="md:text-xl mb-4">
                    Our day-of coordination service in{' '}
                    <Link href="/day-of-wedding-coordinator-washington-dc">
                      Washington, DC
                    </Link>{' '}
                    and{' '}
                    <Link href="/wedding-services/day-of-wedding-coordinator-bowie-md">
                      Bowie, MD
                    </Link>{' '}
                    , ensures your wedding day runs seamlessly, just as you
                    envisioned. We take over all the final details, including
                    vendor communication, timeline management, and on-site
                    coordination.
                  </p>
                  <p className="md:text-xl mb-4">
                    From setting up décor to keeping the schedule on track, we
                    ensure you and your loved ones can relax and enjoy every
                    moment of your special day.
                  </p>
                  <p className="md:text-xl mb-4">
                    <Link href="/day-of-wedding-coordinator-washington-dc">
                      Learn more here
                    </Link>
                  </p>
                </div>
              </div>
              <div className="pb-4 grid sm:grid-cols-2 gap-8 items-center">
                <img
                  src="images/wedding-flower-ring.jpg"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4"
                />
                <div className="">
                  <h3 className="text-xl font-bold pb-4">Wedding Flowers</h3>
                  <p className="md:text-xl mb-4">
                    Our wedding floral services bring your vision to life with
                    stunning, custom-designed arrangements. From breathtaking
                    bouquets and elegant centerpieces to dramatic ceremony
                    arches and intricate installations, we craft each piece with
                    artistry and precision.
                  </p>
                  <p className="md:text-xl mb-4">
                    Let us enhance your wedding day with blooms that perfectly
                    reflect your style and theme.
                  </p>
                  <p className="md:text-xl mb-4">
                    <Link href="/wedding-flowers">Learn more here</Link>
                  </p>
                </div>
              </div>
              <div className="pb-4 grid sm:grid-cols-2 gap-8 items-center">
                <img
                  src="images/micro-wedding-cover-img.webp"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4 sm:order-2"
                />
                <div>
                  <h3 className="text-xl font-bold pb-4">
                    Micro Wedding Planning
                  </h3>
                  <p className="md:text-xl mb-4">
                    Our micro wedding planning service is perfect for couples
                    seeking an intimate and meaningful celebration. We handle
                    every detail, from finding the ideal venue to curating a
                    personalized guest experience.
                  </p>
                  <p className="md:text-xl mb-4">
                    With a focus on quality and creativity, we ensure your
                    small-scale wedding feels just as magical and memorable as a
                    grand affair.
                  </p>
                  <Link href="/micro-wedding-packages-maryland">
                    <p className="my-8">Read more</p>
                  </Link>
                </div>
              </div>
              <div className="pb-4 grid sm:grid-cols-2 gap-8 items-center">
                <img
                  src="images/indian-wedding-ceremony-mgm.jpg"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4"
                />
                <div className="">
                  <h3 className="text-xl font-bold pb-4">
                    Indian Wedding Planning
                  </h3>
                  <p className="md:text-xl mb-4">
                    Our Indian wedding planning service specializes in creating
                    vibrant, culturally rich celebrations that honor traditions
                    while reflecting your unique style.
                  </p>
                  <p className="md:text-xl mb-4">
                    From coordinating multiple events like the Mehndi, Sangeet,
                    and Baraat to sourcing the finest vendors for décor,
                    cuisine, and attire, we handle every detail with precision
                    and care.
                  </p>
                  <Link href="/indian-wedding-planner-washington-dc">
                    <p className="my-8">Read more</p>
                  </Link>
                </div>
              </div>
              <p className="md:text-xl italic my-8 text-center max-w-md mx-auto">
                Book a 15-minute with Monica and see she can help you plan your
                wedding celebration
              </p>
              <Button
                buttonText="Book Your Call Today!"
                bgColor="bg-purple-500"
                borderWidth="border-0"
                textColor="text-white"
                textSize="md:text-xl"
              />
            </div>
          </div>
        </section>
        <section className="bg-slate-50">
          <div className="container mx-auto px-4 max-w-7xl py-20">
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
                  <img
                    src="images/kimberley-hooper-twumasi.png"
                    className="basis-1 rounded-full border-orange-800 border-4"
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
                  <img
                    src="images/emily-menge.png"
                    className="basis-1 rounded-full border-orange-800 border-4"
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
                  <img
                    src="images/whitney-ames.png"
                    className="basis-1 rounded-full border-orange-800 border-4"
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
        <section>
          <div className="container max-w-7xl mx-auto px-6 py-10 md:py-20">
            <div className="max-w-3xl mx-auto ">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Want a Wedding Day With No Stress Because Someone Else is
                Handling All The Details?
              </h2>
              <div className="grid grid-cols-2 gap-2 mb-10">
                <img src="/images/couple-posing-in-dc.jpg" />
                <img src="/images/couple-posing-in-dc.jpg" />
                <img src="/images/couple-posing-in-dc.jpg" />
                <img src="/images/couple-posing-in-dc.jpg" />
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
        {/* <section>
          <div className="container mx-auto py-10 md:py-20 max-w-5xl">
            <div>
              <div className="lg:grid grid-cols-2 gap-x-10 items-center">
                <img
                  src="images/couple-posing-in-dc.jpg"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4 hidden lg:block rounded-lg"
                />
                <div className="">
                  <h2 className="text-3xl font-bold py-6 text-center md:text-left">
                    Planning Your Wedding Can Take a Lot of Time & Energy
                  </h2>
                  <ul className="md:text-xl py-4 list-disc ml-8">
                    <li className="md:text-xl mb-4">
                      Time searching for the right venue
                    </li>
                    <li className="md:text-xl mb-4">
                      Time reading and reviewing vendor contracts
                    </li>
                    <li className="md:text-xl mb-4">
                      Time creating and managing your budget
                    </li>
                    <li className="md:text-xl mb-4">
                      Keeping organized and making timely decisions
                    </li>
                    <li className="md:text-xl mb-4">
                      Time creating your timeline, seating charts, and arranging
                      hotels for guests
                    </li>
                    <li className="md:text-xl mb-4">
                      Time finding a person you can trust
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="md:text-xl italic max-w-xl text-center mx-auto py-8">
              Book a call with Monica and see how she can help you plan the
              wedding you always wanted!
            </p>
            <Button
              buttonText="Book My Call With Monica!"
              bgColor="bg-purple-500"
              borderWidth="border-0"
              textColor="text-white"
              textSize="md:text-xl"
            />
          </div>
        </section> */}
        <section className="bg-slate-800 text-white">
          <div className="container mx-auto px-6 max-w-xl py-20">
            <h2 className="text-3xl md:text-5xl text-center mb-4 leading-normal">
              Monica Makes Wedding Planning Simple For Busy Couples
            </h2>
            <div className="py-6">
              <div className="py-2">
                <h3 className="text-2xl mb-4">#1. Call Monica</h3>
                <p className="md:text-xl mb-4">
                  Talk with Monica and see how her company can help you bring
                  your vision to life.
                </p>
              </div>
              <div className="py-2">
                <h3 className="text-2xl mb-4">#2. Create Your Budget</h3>
                <p className="md:text-xl mb-4">
                  Create Your Budget Work out a budget and start planning the
                  details, like decor, ceremony details, reception details,
                  guest list, etc.
                </p>
              </div>
              <div className="py-2">
                <h3 className="text-2xl mb-4">#3. Enjoy Your Special Day</h3>
                <p className="md:text-xl mb-4">
                  Call Monica and see how she can help make your wedding day a
                  success.
                </p>
              </div>
            </div>
            <Button
              buttonText="Book My Call With Monica!"
              borderColor="border-white"
              borderWidth="border-2"
              textColor="text-white"
              borderStyle="border-solid"
              textSize="md:text-xl"
            />
          </div>
        </section>
        <section>
          <div className="container max-w-3xl mx-auto py-10 md:py-20 px-4">
            <h2 className="text-3xl md:text-5xl text-center mb-10">
              Latest Post From Monica
            </h2>
            <ul>
              {posts.map((post) => (
                <div key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="no-underline">
                    <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                      <img
                        src={post.coverImage.url}
                        alt={post.title}
                        title={post.title}
                        loading="lazy"
                        width={post.coverImage.width}
                        height={post.coverImage.height}
                      />
                      <div className="">
                        <h3 className="text-2xl lg:py-4 text-black">
                          {post.title}
                        </h3>
                        <p className="my-4">Read more</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </ul>
            <Link href="/blog">
              <Button
                buttonText="Read and Learn More"
                bgColor="bg-purple-500"
                borderWidth="border-0"
                textColor="text-white"
                textSize="md:text-xl"
              />
            </Link>
          </div>
        </section>
        <section className="bg-slate-50">
          <div className="container mx-auto px-4 max-w-xl py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl text-center mb-10">
              Why Hire Monica as Your Wedding Planner?
            </h2>
            <p className="md:text-xl mb-4">
              Monica Browne Weddings is one of the top Maryland wedding
              planners.
            </p>
            <p className="md:text-xl mb-4">
              No, we are not in the Washington Post or Martha Stewart Weddings,
              and that's not our focus.
            </p>
            <p className="md:text-xl mb-4">
              Our only focus is to provide our clients with wedding planning
              services that will help you save time and money and assist in any
              way possible and create your dream wedding.
            </p>
            <p className="md:text-xl mb-4">See our 5-star reviews.</p>
            <p className="md:text-xl mb-4">
              When you hire us, you hire an experienced planning company with
              over 15 years in the event industry and someone you can trust.
            </p>
            <p className="md:text-xl mb-4">
              You get a company with incredible knowledge at your disposal, a
              credible resource, and a team that will do whatever it takes to
              ensure your wedding goes off without any issues.
            </p>
            <p className="md:text-xl mb-4">
              We are here to help you plan one of the biggest days of your life
              and make sure you enjoy every moment. You can count on us to be
              there every step of the way, and we look forward to working with
              you.
            </p>
            <Button
              buttonText="Call Monica Today!"
              bgColor="bg-purple-500"
              borderWidth="border-0"
              textColor="text-white"
              textSize="md:text-xl"
            />
          </div>
        </section>
        <section>
          <div className="container mx-auto px-4 max-w-2xl py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl text-center mb-10">FAQs</h2>
            <div>
              <h3 className="text-2xl md:text-3xl my-2 font-bold">
                #1. How Much Does a Wedding Cost in the Washington DC Area?
              </h3>
              <p className="md:text-xl mb-4">
                Getting married in the Washington DC area (Maryland, DC, and
                Virginia) can cost{' '}
                <Link href="/blog/how-much-does-a-100-person-wedding-cost">
                  $32,000 - $70,000
                </Link>{' '}
                and up. Most of your costs depend on how much your venue and
                caterer charge, plus how many guests you invite.
              </p>
              <p className="md:text-xl mb-4">
                Other costs may include your photographer, ceremony and
                reception decorations, flowers, transportation, attire, and the
                rings. Additional costs may include a wedding planner, a
                photographer, ceremony and reception decorations, flowers,
                transportation, your dress, and the rings.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl my-2 font-bold">
                #2. Can I Plan My Wedding Myself?
              </h3>
              <p className="md:text-xl mb-4">
                You can definitely plan your own wedding.
              </p>
              <p className="md:text-xl mb-4">
                Many brides choose to take on planning their big day on their
                own, thinking they would save money. If you think you have the
                time to plan your wedding, go for it. It's a lot of work and a
                lot of time, and you will need some help. You will need the help
                of family and friends you can trust.
              </p>
              <p className="md:text-xl mb-4">
                If you think you are too busy and may not have the time,
                consider hiring a{' '}
                <Link href="/wedding-planner-washington-dc">
                  wedding planner
                </Link>{' '}
                or a{' '}
                <Link href="/day-of-wedding-coordinator-washington-dc">
                  day of wedding coordinator
                </Link>
                . Read this blog post to see which professional can assist you
                the best.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl my-2 font-bold">
                #3. Can a Wedding Planner Save Me Money?
              </h3>
              <p className="md:text-xl mb-4">
                Some brides consider wedding planners a luxury, but they can
                save you money in the long run. A good wedding planner will have
                connections with vendors and be able to get you discounts that
                you might not be able to get on your own. They will also be able
                to help you stay within your budget and avoid any last-minute
                financial surprises.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl my-2 font-bold">
                #4. What is the Difference Between a Wedding Planner and a
                Day-of Coordinator?
              </h3>
              <p className="md:text-xl mb-4">
                Wedding planners are professionals that can help you plan every
                piece of the planning process. This would include planning your
                ceremony, cocktail hour, and reception.
              </p>
              <p className="md:text-xl mb-4">
                They will help you select the best vendors like DJs, caterers,
                decorators, transportation providers, and more.
              </p>
              <p className="md:text-xl mb-4">
                A day-of coordinator is a professional that will manage the
                actual day of your wedding. They become the point of contact for
                all your vendors, the venue, and all your guests.
              </p>
              <p className="md:text-xl mb-4">
                They keep you out of the loop to have a stress-free wedding day.
              </p>
              <p className="md:text-xl mb-4">Read this to learn more.</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl my-2 font-bold">
                #5. Do You Plan Weddings in Washington DC and Virginia?
              </h3>
              <p className="md:text-xl mb-4">Yes.</p>
              <p className="md:text-xl mb-4">
                Even though we are Maryland wedding planners, we offer
                full-service and partial-service event planning to couples
                throughout the DMV area.
              </p>
              <p className="md:text-xl mb-4">
                We have planned weddings in Washington DC and Northern Virginia
                and can work with you regardless of location. Contact us today
                to get started planning your dream wedding!
              </p>
            </div>
            <Button
              buttonText="Book My Call With Monica Today!"
              bgColor="bg-purple-500"
              borderWidth="border-0"
              textColor="text-white"
              textSize="md:text-xl"
            />
          </div>
        </section>
      </main>
    </div>
  )
}
