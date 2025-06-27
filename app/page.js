import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

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
                posts (stage: PUBLISHED, orderBy: createdAt_DESC, first: 3) {
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

const localBusinessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Monica Browne Weddings',
  description:
    "Monica Browne Weddings is one of the best wedding planners in Washington, DC, Maryland and Northern Virginia. We offer full-service event planning, partial service event planning, day-of coordination, event design, and floral design services. If you are a busy couple and need help, or if you need some help and guidance, please don't hesitate to reach out to us. You can book a call with us when you are ready.",
  image:
    'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/walking-down-aisle_o4wklu.webp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4710 Silverbrook Way',
    addressLocality: 'Bowie',
    addressRegion: 'MD',
    postalCode: '20720',
    addressCountry: 'US',
  },
  url: 'http://monicabrowneweddings.com',
  telephone: '+1-240-665-3350',
  openingHours: 'Mo,Tu,We,Th,Fr,Sa 09:00-17:00',
  geoMidpoint: {
    latitude: '39.013313',
    longitude: '-76.776924',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '39.013313',
    longitude: '-76.776924',
  },
  geoRadius: '1000',
  rating: {
    ratingValue: '5',
    ratingCount: '13',
  },
  areaServed: [
    // Use an array for multiple locations or GeoShapes
    {
      '@type': 'City',
      name: 'Washington',
      addressRegion: 'DC',
    },
    {
      '@type': 'City',
      name: 'Rockville',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Silver Spring',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Chevy Chase',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Olney',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Bowie',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Bethesda',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Potomac',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Annapolis',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Takoma Park',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Kensington',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Great Falls',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Alexandria',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Arlington',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Springfiled',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Fairfax',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Reston',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Sterling',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Loudoun County',
      addressRegion: 'VA',
    },
  ],
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How Much Does a Wedding Cost in the Washington DC Area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Getting married in the Washington DC area (Maryland, DC, and Virginia) can cost $32,000 - $70,000 and up. Most of your costs depend on how much your venue and caterer charge, plus how many guests you invite.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I Plan My Wedding Myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Many brides choose to take on planning their big day on their own, thinking they would save money. If you think you have the time to plan your wedding, go for it. It's a lot of work and a lot of time, and you will need some help. You will need the help of family and friends you can trust. If you think you are too busy and may not have the time, consider hiring a wedding planner or a day of wedding coordinator. Read this blog post to see which professional can assist you the best.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a Wedding Planner Save Me Money?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some brides consider wedding planners a luxury, but they can save you money in the long run. A good wedding planner will have connections with vendors and be able to get you discounts that you might not be able to get on your own. They will also be able to help you stay within your budget and avoid any last-minute financial surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Difference Between a Wedding Planner and a Day-of Coordinator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wedding planners are professionals that can help you plan every piece of the planning process. This would include planning your ceremony, cocktail hour, and reception. They will help you select the best vendors like DJs, caterers, decorators, transportation providers, and more. A day-of coordinator is a professional that will manage the actual day of your wedding. They become the point of contact for all your vendors, the venue, and all your guests. They keep you out of the loop to have a stress-free wedding day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do You Plan Weddings in Washington DC and Virginia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Even though we are based in Maryland, we offer full-service and partial-service event planning to all couples throughout the DMV area. We have planned weddings in Washington, DC and Northern Virginia and can work with you regardless of location. Book a call today to get started planning your dream wedding!',
      },
    },
  ],
}

export default async function Home() {
  const posts = await getPosts()
  return (
    <div>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
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
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-4">
                <img
                  src="images/bride-groom-night-photo.webp"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="md:pb-4"
                />
                <div className="">
                  <h3 className="text-xl font-bold pb-4">Wedding Planning</h3>
                  <p className="md:text-xl mb-4">
                    Our full-service wedding planning in{' '}
                    <Link href="/wedding-planner-washington-dc">
                      Washington, DC
                    </Link>
                    , <Link href="/wedding-planner-bowie-md">Maryland</Link>,
                    and Virginia, is designed to guide you through every step of
                    your wedding journey. From initial concept creation to the
                    final farewell, we handle all the details so you can focus
                    on enjoying your special day.
                  </p>
                  <p className="md:text-xl mb-4">
                    We assist with venue selection, vendor management, budget
                    planning, design, timelines, and day-of coordination,
                    ensuring your wedding is flawlessly executed and uniquely
                    yours.
                  </p>
                  <Link
                    href="/blog/dc-wedding-planning-services"
                    className="md:text-xl mb-4"
                  >
                    Learn more about wedding planning services here.
                  </Link>
                </div>
              </div>
              <div className="pb-4 grid lg:grid-cols-2 gap-8 items-center">
                <img
                  src="https://res.cloudinary.com/browne-company/image/upload/v1736309718/Monica%20Browne%20Weddings/black-grooms-men_rae1fu.webp"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4 lg:order-2"
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
                    <Link href="/day-of-wedding-coordinator-bowie-md">
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
                  <Link
                    href="/day-of-wedding-coordinator-washington-dc"
                    className="md:text-xl mb-4"
                  >
                    Learn more about day-of wedding coordination.
                  </Link>
                </div>
              </div>
              <div className="pb-4 grid lg:grid-cols-2 gap-8 items-center">
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
                  <Link href="/wedding-flowers" className="md:text-xl mb-4">
                    Learn more about wedding flowers.
                  </Link>
                </div>
              </div>
              <div className="pb-4 grid lg:grid-cols-2 gap-8 items-center">
                <img
                  src="images/micro-wedding-cover-img.webp"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4 lg:order-2"
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
                  <Link
                    href="/micro-wedding-packages-maryland"
                    className="md:text-xl mb-4"
                  >
                    Learn more about micro weddings.
                  </Link>
                </div>
              </div>
              <div className="pb-4 grid lg:grid-cols-2 gap-8 items-center">
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
                  <Link
                    href="/indian-wedding-planner-washington-dc"
                    className="md:text-xl mb-4"
                  >
                    Learn more about Indian wedding planning.
                  </Link>
                </div>
              </div>
              <p className="md:text-xl italic my-8 text-center max-w-md mx-auto">
                Book a 15-minute with Monica and see she can help you plan your
                wedding celebration
              </p>
              <a href={calendly} target="_blank">
                <Button
                  buttonText="Book Your Call Today!"
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
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1736309749/Monica%20Browne%20Weddings/bride-with-flowers_xcqpkf.webp"
                  alt="Black bride with bouquet."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <Image
                  src="/images/black-bride-and-groom.webp"
                  alt="Black bride and groom smiling."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1736309659/Monica%20Browne%20Weddings/SierraCharles001_imfsnr.jpg"
                  alt="Newly wed couple posing at wedding venue.."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <Image
                  src="https://res.cloudinary.com/browne-company/image/upload/v1736310789/Monica%20Browne%20Weddings/couple-posing-in-dc_qh7vtr.webp"
                  alt="Newly wed couple posing at wedding venue.."
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
        </section>
        <section className="bg-slate-800 text-white">
          <div className="container mx-auto px-6 max-w-xl py-20">
            <h2 className="text-3xl md:text-5xl text-center mb-4 leading-normal">
              Monica Makes Wedding Planning Simple For Busy Couples
            </h2>
            <div className="py-6">
              <div className="py-2">
                <p className="text-2xl md:text-3xl">#1. Call Monica</p>
                <p className="md:text-xl my-4">
                  Talk with Monica and see how her company can help you bring
                  your vision to life.
                </p>
              </div>
              <div className="py-2">
                <p className="text-2xl md:text-3xl">
                  #2. Share the Details of Your What You Want
                </p>
                <p className="md:text-xl my-4">
                  Tell us all about what you want, and we’ll take it from there.
                  From creating a comprehensive timeline to managing vendor
                  communications and fine-tuning the logistics, we’ll handle
                  every detail with care.
                </p>
              </div>
              <div className="py-2">
                <p className="text-2xl md:text-3xl">
                  #3. Enjoy Your Special Day
                </p>
                <p className="md:text-xl my-4">
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
                Monica Browne Weddings is one of the top Maryland wedding
                planners.
              </p>
              <p className="md:text-xl mb-4">
                No, we are not in the Washington Post or Martha Stewart
                Weddings, and that's not our focus.
              </p>
              <p className="md:text-xl mb-4">
                Our only focus is to provide our clients with wedding planning
                services that will help you save time and money and assist in
                any way possible and create your dream wedding.
              </p>
              <p className="md:text-xl mb-4">
                See our{' '}
                <a
                  href="https://www.google.com/search?q=monica+browne+weddings&oq=monica+browne+weddings&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxiABDIJCAAQRRg7GIAEMgoIARAAGIAEGKIEMgoIAhAAGIAEGKIEMgoIAxAAGIAEGKIEMgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg3ODQ3ajFqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#mpd=~2535347168599140905/customers/reviews"
                  target="_blank"
                >
                  5-star reviews
                </a>{' '}
                .
              </p>
              <p className="md:text-xl mb-4">
                When you hire us, you hire an experienced planning company with
                over 15 years in the event industry and someone you can trust.
              </p>
              <p className="md:text-xl mb-4">
                You get <Link href="/about">Monica</Link>, an incredible
                knowledge professional at your disposal, and a team that will do
                whatever it takes to ensure your wedding goes off without any
                issues.
              </p>
              {/* <p className="md:text-xl mb-4">
                We are here to help you plan one of the biggest days of your
                life and make sure you enjoy every moment. You can count on us
                to be there every step of the way, and we look forward to
                working with you.
              </p> */}
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
              <p className="md:text-xl mb-4">
                <Link href="/blog/wedding-planner-vs-coordinator">
                  Read this post
                </Link>{' '}
                to learn more.
              </p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl my-2 font-bold">
                #5. Do You Plan Weddings in Washington DC and Virginia?
              </h3>
              <p className="md:text-xl mb-4">Yes.</p>
              <p className="md:text-xl mb-4">
                Even though we are based in{' '}
                <Link href="/wedding-planner-bowie-md">Maryland</Link>, we offer
                full-service and partial-service event planning to all couples
                throughout the DMV area.
              </p>
              <p className="md:text-xl mb-4">
                We have planned weddings in{' '}
                <Link href="/wedding-planner-washington-dc">
                  Washington, DC
                </Link>{' '}
                and Northern Virginia and can work with you regardless of
                location. Book a call today to get started planning your dream
                wedding!
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
