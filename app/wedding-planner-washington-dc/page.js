import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Wedding Planner in Washington, DC, for Couples Who Want an Unforgettable Day',
  description:
    "Looking for a top ranked wedding planner in Washington DC? We'll make your wedding a memorable and enjoyable celebration for everyone! Book a call today!",
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

const getPosts = async () => {
  const response = await fetch(
    'https://us-east-1.cdn.hygraph.com/content/cktkjtoxd0dod01z1bc0w41e9/master',
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

export default async function weddingPlannerWashingtonDC() {
  const posts = await getPosts()
  return (
    <div>
      <Hero
        herotext="Wedding Planner in Washington, DC, for Couples Who Want an Unforgettable Day"
        heroSubText="We create stunning weddings for busy couples in Washington, DC, blending timeless traditions with modern elegance for a day you’ll cherish forever"
        buttonText="Book A Call With Monica!"
        textColor="text-white"
        imageUrl="/images/KINA1058.jpg"
      />
      <main>
        <div className="container max-w-7xl mx-auto px-6">
          <section>
            <div className="py-10 md:py-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-5xl my-8 text-center">
                  Top Rated Wedding Planning Services in Washington, DC
                </h2>
                <p className="md:text-xl mb-4">
                  Monica Browne Weddings offers wedding planning services to
                  couples in Washington, DC.
                </p>
                <p className="md:text-xl mb-4">
                  We focus on making planning your wedding simple and easy, and
                  also make sure the process is not stressful for you.
                </p>
                <p className="md:text-xl mb-4">
                  Our goal is to make sure that you are happy, and that you
                  fully celebrate this momentous and historic occasion.
                </p>
                <p className="md:text-xl mb-4">
                  We take care of your entire event, from planning and design,
                  coordination, selecting flowers,{' '}
                  <Link href="/wedding-decoration-services">decorations</Link>,
                  and more.
                </p>
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
              <div className="max-w-3xl mx-auto">
                <p className="md:text-xl mb-4">
                  We take immense pride in celebrating the rich tapestry of
                  cultures and traditions by helping couples from diverse
                  backgrounds, including{' '}
                  <Link href="/indian-wedding-planner">Indian</Link> and{' '}
                  <Link href="/jewish-wedding-planner-dc">Jewish couples</Link>,
                  create weddings that beautifully honor their heritage and
                  personal love stories.
                </p>
                <p className="md:text-xl mb-4">
                  From incorporating meaningful rituals and customs unique to
                  each culture to blending traditional elements with modern
                  touches, we work closely with our clients to craft a
                  celebration that is truly reflective of their identities.
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
          </section>
        </div>
        <section className="bg-slate-800">
          <div className="max-w-3xl mx-auto py-10 md:py-20 text-white px-6">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              When You need a Professional Wedding Planner to Take Care of
              Everything - We Got You
            </h2>
            <p className="md:text-xl mb-4">
              From the moment you say "Yes!" to the final dance at your
              reception, we’re here to ensure every detail is covered with care
              and precision.
            </p>
            <p className="md:text-xl mb-4">
              Here’s how we make your dream wedding a reality:
            </p>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Your Vision, Perfectly Crafted
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Every couple has a unique love story, and we’re here to bring
                yours to life. From the moment we meet, we’ll work closely with
                you to understand your style, preferences, and dreams. Together,
                we’ll create a personalized plan that captures your vision and
                ensures your wedding reflects who you are.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Stress-Free Planning Made Simple
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Planning a wedding involves countless details, but we’re here to
                handle them all. From managing budgets to coordinating vendors,
                we take the stress out of the process so you can focus on the
                joy of your engagement. Rest assured, every aspect will be
                organized and executed flawlessly.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Picture-Perfect Designs and Décor
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Not sure where to start with colors, themes, or{' '}
                <Link href="/wedding-flowers">floral centerpieces</Link>? That’s
                our specialty. We’ll guide you through the design process,
                helping to create a stunning atmosphere that wows your guests
                and matches your style. From ceremony setups to reception décor,
                we’ll make your vision a reality.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Flawless Wedding Day Coordination
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                On your big day, you deserve to be fully present without
                worrying about the details. We’ll oversee every element, from
                vendor arrivals to the timeline and last-minute adjustments.
                With us managing behind the scenes, you can enjoy every moment
                with your loved ones.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">• Beyond the "I Do's</h3>
              <p className="md:text-xl mb-4 ml-4">
                Our support doesn’t stop at the altar. After the celebration,
                we’ll handle all the post-wedding logistics, such as returning
                rentals, final vendor payments, and tying up loose ends. Whether
                it’s a post-wedding brunch or honeymoon send-off, we’ll ensure
                the perfect ending to your special day.
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
                Here's How to Get Started
              </h2>
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
          </section>
        </div>
        <div className="container max-w-5xl mx-auto px-6">
          <section>
            <div className="max-w-2xl mx-auto py-10 md:py-20">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Why Hire Monica Browne Weddings as Your DC Wedding Planner
              </h2>
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
                <h3 className="font-semibold text-2xl mb-2">Problem Solving</h3>
                <p className="md:text-xl mb-4">
                  Unexpected issues? We handle them quickly so you never have to
                  worry about anything on your wedding day.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Flawless Coordination
                </h3>
                <p className="md:text-xl mb-4">
                  We manage your timeline, communicate with vendors, and oversee
                  the day’s logistics to keep everything on track.
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
            <div className="max-w-3xl mx-auto py-10 md:py-20">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Why Couples Trust Monica Browne Weddings as Their Wedding
                Planner
              </h2>
              <p className="md:text-xl mb-4">
                Couples choose us because we know how to handle the details that
                matter most, especially as your wedding day approaches.
              </p>
              <p className="md:text-xl mb-4">
                When your big day is just eight weeks away, we step in to manage
                everything with meticulous care:
              </p>
              <ul className="ml-8 my-10 list-disc">
                <li className="md:text-xl mb-4">
                  Vendor Management: Review and organize vendor contracts,
                  confirm payments, and finalize schedules.
                </li>
                <li className="md:text-xl mb-4">
                  Wedding Attire Coordination: Oversee final fittings for you
                  and your bridal party, ensuring everyone has their attire
                  ready.
                </li>
                <li className="md:text-xl mb-4">
                  Venue Walkthroughs: Conduct detailed walk-throughs of your
                  ceremony and reception venues to ensure perfection.
                </li>
                <li className="md:text-xl mb-4">
                  Detailed Wedding Timeline: Create a comprehensive schedule for
                  the entire day, keeping everyone informed and on track.
                </li>
                <li className="md:text-xl mb-4">
                  Rehearsal Oversight: Supervise and coordinate a two-hour
                  rehearsal during your wedding week to ensure everything runs
                  smoothly.
                </li>
                <li className="md:text-xl mb-4">
                  Point of Contact: Serve as the main communication hub for your
                  bridal party starting on rehearsal day.
                </li>
                <li className="md:text-xl mb-4">
                  Day-of Logistics: Manage every detail on your wedding day,
                  from vendor arrivals to timeline execution, so you can relax
                  and enjoy.
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
        </div>
        <section>
          <div className="container max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl text-center mb-10">
              Latest Post From Monica
            </h2>
            <ul>
              {posts.map((post) => (
                <div key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="no-underline">
                    <div className="grid lg:grid-cols-2 gap-8 items-center mb-8 my-6">
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
        <div className="container max-w-5xl mx-auto px-6">
          <section>
            <div className="max-w-3xl mx-auto py-10">
              <h2 className="text-3xl md:text-5xl text-center mb-10">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. How much does a day-of wedding planner in DC cost?
              </h3>
              <p className="md:text-xl mb-4">
                In our area, you can expect to invest anywhere from{' '}
                <b>$3,500 to $10,000+ </b>for a seasoned professional. Several
                factors influence this range, including the planner's
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
                <b>$4,000 and can exceed $10,000</b> depending on your needs.
                For a personalized quote tailored to your unique celebration,
                book a call today.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. What does a wedding planner do, and how can you help with my
                wedding?
              </h3>
              <p className="md:text-xl mb-4">
                A wedding planner handles all aspects of your wedding, from
                budgeting and vendor coordination to designing your dream décor
                and managing the big day. For Washington, DC weddings, we
                specialize in navigating local venues, working with trusted
                vendors, and ensuring your event aligns with your vision and
                runs smoothly.
              </p>
              <p className="md:text-xl mb-4">
                If you want to do most of the planning yourself and find your
                wedding venue and vendors on your own but still want to enjoy
                your wedding day without worrying about anything, consider
                hiring Monica Browne Weddings.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. When should I hire a wedding planner for my DC wedding?
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
                We provide full-service wedding planning, partial planning, and
                day-of coordination. Full-service planning covers everything
                from start to finish, partial planning allows you to get help
                with specific aspects of your wedding, and{' '}
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
          </section>
        </div>
      </main>
    </div>
  )
}
