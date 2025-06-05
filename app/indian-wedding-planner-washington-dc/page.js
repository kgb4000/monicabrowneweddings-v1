import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title: 'Indian Wedding Planner in DC, for Stunning Celebrations',
  description:
    'Indian wedding planners in  Washington DC, offering full-service, day-of, and month-of wedding planning. Book a call today!',
  alternates: {
    canonical: 'https://monicabrowneweddings.com/indian-wedding-planner',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/indian-bride.jpg',
      site_name: 'Monica Browne Weddings',
      images: [
        {
          url: 'https://monicabrowneweddings.com/public/images/indian-bride.jpg',
          width: 1000,
          height: 1500,
          alt: 'Indian bride at her wedding.',
        },
      ],
    },
  },
}

const indianWeddingPlanningStructuredData = {
  '@context': 'https://schema.org/',
  '@type': 'Service',
  serviceType: 'Indian Wedding Planner',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Monica Browne Weddings',
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
      name: 'Bowie',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Chevy Chase',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Bethesda',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Rockville',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Burtonsville',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Silver Spring',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Pikesville',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Potomac',
      addressRegion: 'MD',
    },
    {
      '@type': 'City',
      name: 'Arlington',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Springfield',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Alexandria',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'McLean',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Great Falls',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Vienna',
      addressRegion: 'VA',
    },
    {
      '@type': 'City',
      name: 'Fairfax',
      addressRegion: 'VA',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  url: 'https://monicabrowneweddings.com/indian-wedding-planner-washington-dc',
  telephone: '+1-240-655-3350',
  email: 'monica@monicabrowneweddings.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4710 Silverbrook Way',
    addressLocality: 'Bowie',
    addressRegion: 'MD',
    postalCode: '20720',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '38.9072',
    longitude: '-77.0369',
  },
  priceRange: '$$',
  // image: 'https://monicabrowneweddings.com/public/images/indian-bride.jpg',
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How Much Does an Indian Wedding in Washington, DC Cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of an Indian wedding in Washington, DC, typically ranges from $80,000 to $300,000 or more, depending on the scale of the celebration, number of guests, and level of customization, and the inclusion of traditional ceremonies like the Sangeet, Mehendi, and Baraat. Major expenses include venues ($10,000–$50,000), catering ($50–$200 per guest), décor and floral arrangements ($14,000–$80,000), outfits and jewelry ($5,000–$50,000), entertainment ($5,000–$30,000), and photography or videography ($10,000–$30,000) for multi-day coverage. Factors such as guest count, multi-day traditional events, customized décor, and peak wedding seasons can significantly affect costs. Budget-friendly strategies like selecting venues that accommodate multiple events, choosing balanced catering packages, and prioritizing impactful décor can help manage expenses. With the guidance of an experienced wedding planner who understands Indian traditions, you can create a stunning celebration that honors your heritage while staying within budget',
      },
    },
    {
      '@type': 'Question',
      name: 'What services do you provide as an Indian wedding planner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. As a full-service Indian wedding planner, we provide comprehensive planning, including venue selection, vendor management, decor detailing, and menu curation. We also offer day-of coordination and consultation services',
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
      name: 'Can you assist with pre-wedding ceremonies, such as Sangeet, Mehndi, and Haldi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We understand the importance of pre-wedding ceremonies in an Indian wedding and can assist in planning and organizing these events as per your cultural traditions and personal preferences.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle last-minute changes or emergencies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We understand that weddings can be dynamic and changes may come up. We have a highly experienced team capable of handling last-minute adjustments or emergencies, ensuring your wedding runs as smoothly as possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'We invited over 200 guests. Can you help with managing the guest list and RSVPs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can. We offer services to manage the guest list, send out invitations, and track RSVPs to ensure you have a clear picture of your guest count and any special requirements they may have.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Indian wedding planner cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An Indian wedding planner cost varies based on factors such as the size of the wedding, number of events, location, and level of service required.For full-service planning, which includes managing multiple ceremonies, vendor coordination, décor design, and logistics, prices typically range from $7,000 to $25,000+, depending on complexity. If you need month-of coordination, costs usually start around$7,000 to $15,000, while day-of coordination services range from $4,500 to $7,000. Indian weddings require extensive planning due to multiple events like the Sangeet, Mehndi, Baraat, and Reception, which can impact overall pricing.',
      },
    },
  ],
}

export default function IndianWeddingPlannerDC() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(indianWeddingPlanningStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqStructuredData)}
      </script>
      <Hero
        herotext="Indian Wedding Planner in DC, for Seamless & Stunning Celebrations"
        heroSubText="We specialize in crafting stunning Indian weddings for busy couples in the DC area, blending tradition, elegance, and a modern flair to your special event"
        buttonText="Book A Call With Monica!"
        imageUrl="/images/indian-wedding-ceremony-mgm.jpg"
        textColor="text-white"
      />
      <main>
        <div className="container max-w-7xl mx-auto px-6 py-10 md:py-20">
          <section>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl my-8 text-center leading-normal">
                Indian Wedding Planning Services in Washington, DC for
                Culturally Inspired Celebrations
              </h2>
              <p className="md:text-xl mb-4">
                Monica Browne Weddings is your trusted partner in the
                Washington, DC area, for creating stunning single and multi-day
                Indian and South Asian weddings.
              </p>
              <p className="md:text-xl mb-4">
                With over 20 years of expertise,{' '}
                <Link href="/about">Monica</Link> is passionate about blending
                cherished traditions with your unique vision to craft a
                celebration that’s truly unforgettable.
              </p>
            </div>
            {/* <div className="grid lg:grid-cols-3 gap-4 my-8">
              <img
                src="/images/newly-wed-indian-couple-at-the-door.jpg"
                alt="Wedding table centerpiece design for small wedding."
                loading="lazy"
                width="472"
                height="708"
              />
              <img
                src="/images/indian-couple-smilingnpm run dev
                .jpg"
                alt="Wedding table centerpiece design for small wedding."
                loading="lazy"
                width="472"
                height="708"
              />
              <img
                src="/images/newly-wed-indian-couple-at-the-door.jpg"
                alt="Wedding table centerpiece design for small wedding."
                loading="lazy"
                width="472"
                height="708"
              />
            </div> */}
            <div className="max-w-3xl mx-auto">
              <p className="md:text-xl mb-4">
                We specialize in honoring the rich cultural heritage of Indian
                weddings while highlighting the individuality of each couple.
              </p>
              <p className="md:text-xl mb-4">Not sure where to start?</p>
              <p className="md:text-xl mb-4">
                Our consultation services provide guidance, expertise, and
                advice to help you navigate your way to a picture-perfect Indian
                wedding.
              </p>
              <p className="md:text-xl mb-4">
                Contact us today to begin planning a celebration you and your
                guests will cherish forever!
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
            <div className="max-w-7xl mx-auto py-10 md:py-20">
              <h2 className="text-3xl md:text-5xl mb-8 text-center max-w-3xl mx-auto">
                Premiere Wedding Planning Services for Indian Weddings
              </h2>
              <div className="pb-4 grid md:grid-cols-2 gap-x-10 items-center my-16">
                <img
                  src="images/indian-wedding-ceremony-mgm.jpg"
                  alt="Indian wedding planner."
                  loading="lazy"
                  height="auto"
                  className="pb-4"
                />
                <div className="">
                  <h3 className="text-3xl font-bold pb-4">
                    Full Wedding Planning, Day-of Planning, and Month-of
                    Planning
                  </h3>
                  <p className="md:text-xl mb-4">
                    Comprehensive management of all wedding events, including
                    engagement, mehndi,{' '}
                    <a
                      href="https://en.wikipedia.org/wiki/Punjabi_wedding_traditions"
                      target="_blank"
                    >
                      sangeet
                    </a>
                    , baraat, wedding ceremony, and reception.
                  </p>
                  <p className="md:text-xl mb-4">
                    Budget planning and vendor coordination for venues,
                    catering, décor, photography, entertainment,and end-to-end
                    event timeline creation and execution.
                  </p>
                </div>
              </div>
              <div className="pb-4 grid sm:grid-cols-2 gap-x-10 items-center my-16">
                <img
                  src="images/indian-wedding-ceremony-with-priest.jpg"
                  alt="Newly wed Indian couple."
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4 sm:order-2"
                />
                <div className="">
                  <h3 className="text-3xl font-bold pb-4">
                    Cultural and Ritual Coordination
                  </h3>
                  <p className="md:text-xl mb-4">
                    Guidance on traditional Indian wedding rituals specific to
                    Hindu, Sikh, Muslim, or Christian communities.
                  </p>
                  <p className="md:text-xl mb-4">
                    Coordination with priests, pandits, or other religious
                    officiants. Setup and management of ceremonial elements like
                    mandap, fire pit, and vidaai arrangements.
                  </p>
                </div>
              </div>
              <div className="pb-4 grid sm:grid-cols-2 gap-x-10 items-center my-16">
                <img
                  src="images/groom-at-indian-wedding.jpg"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4"
                />
                <div className="">
                  <h3 className="text-3xl  font-bold pb-4">Décor and Design</h3>
                  <p className="md:text-xl mb-4">
                    Transform your venue into stunning spaces that reflect your
                    vision is a key service. This includes designing custom
                    themes, selecting color schemes, and creating floral
                    arrangements.
                  </p>
                  <p className="md:text-xl mb-4">
                    Create ceremonial structures like the mandap and designing
                    the stage for the reception. Lighting and ambiance play a
                    significant role, and this service ensures that every
                    element enhances the wedding’s aesthetic appeal.
                  </p>
                </div>
              </div>
              <div className="pb-4 grid sm:grid-cols-2 gap-x-10 items-center my-16">
                <img
                  src="images/indian-bride-in-black-bmw.jpg"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4 sm:order-2"
                />
                <div>
                  <h3 className="text-3xl font-bold pb-4">
                    Guest and Logistics Management
                  </h3>
                  <p className="md:text-xl mb-4">
                    Your wedding might involve 150 to 300 famlily and guests. We
                    handle accommodation bookings, transportation arrangements,
                    and welcome kits for guests. Our services also include
                    managing RSVPs, coordinating shuttles, and providing
                    assistance to guests during the events.
                  </p>
                  <p className="md:text-xl mb-4">
                    Every logistical detail is addressed to ensure a comfortable
                    and organized experience for everyone.
                  </p>
                </div>
              </div>
              <div className="pb-4 grid sm:grid-cols-2 gap-8 items-center">
                <img
                  src="images/indian-bride-with-parents-smiling.jpg"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4"
                />
                <div className="">
                  <h3 className="text-3xl font-bold pb-4">
                    Entertainment and Catering Coordination
                  </h3>
                  <p className="md:text-xl mb-4">
                    Entertainment and food are integral to Indian weddings. This
                    service includes arranging traditional music, such as dhol
                    players or live singers, as well as modern options like
                    Bollywood DJs and choreographers for sangeet performances.
                  </p>
                  <p className="md:text-xl mb-4">
                    <Link href="/blog/how-to-choose-the-right-catering-menu-for-your-dc-wedding">
                      Catering
                    </Link>{' '}
                    coordination ensures an authentic Indian menu with options
                    for dietary preferences like vegetarian, vegan, halal, or
                    Jain.
                  </p>
                </div>
              </div>
              <div className="center">
                <a href={calendly} target="_blank">
                  <Button
                    buttonText="Book a Call With Monica Today!"
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
          <div className="py-10">
            <div className="max-w-3xl mx-auto md:p-20 py-10 px-8 rounded-xl text-white">
              <h2 className="text-3xl md:text-5xl">
                Simple and Stress Free Wedding Planning
              </h2>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">
                  1. Schedule a Consultation
                </h4>
                <p className="md:text-xl my-4">
                  Start by booking a call with Monica to discuss your needs for
                  your Indian wedding. Monica will guide you on how her
                  expertise as a professional wedding planner can ensure a
                  flawless experience.
                </p>
              </div>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">
                  2. Share Your Wedding Vision
                </h4>
                <p className="md:text-xl my-4">
                  Tell Monica all about your event, including the ceremonies,
                  rituals, and vendors involved. We’ll craft a detailed timeline
                  for each event, manage vendor communications, and oversee
                  every aspect to honor your cultural traditions.
                </p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl">
                  3. Celebrate Every Moment
                </h4>
                <p className="md:text-xl my-4">
                  We handle all the behind-the-scenes details so that you can
                  enjoy yourself. With Monica coordinating every step, you can
                  focus on cherishing these unforgettable moments.
                </p>
                <div className="center">
                  <a href={calendly} target="_blank">
                    <Button
                      buttonText="Book a Call With Monica"
                      borderColor="border-white"
                      borderWidth="border-2"
                      textColor="text-white"
                      borderStyle="border-solid"
                      textSize="md:text-2xl"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container max-w-7xl mx-auto px-6 py-10 md:py-20">
          <div className="grid lg:grid-cols-1 gap-4 max-w-7xl mx-auto">
            <img
              src="images/indian-bride-with-parents-smiling.jpg"
              loading="lazy"
              width="100%"
              height="auto"
              className="pb-4"
              alt="Indian bride with mother and father during ceremony."
            />

            {/* <img
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
            /> */}
          </div>
          <section>
            <div className="max-w-3xl mx-auto py-10 md:py-20">
              <h2 className="text-3xl md:text-5xl mb-8 text-center">
                Why Couples Love Working with Monica Browne Weddings
              </h2>
              <p className="md:text-xl mb-4">
                At Monica Browne Weddings, we bring expertise, creativity, and
                cultural understanding to every wedding we plan.
              </p>
              <p className="md:text-xl mb-4">
                Here’s why couples trust us to make their South Asian wedding
                unforgettable:
              </p>
              <p className="md:text-xl mb-4">
                Check out our{' '}
                <a
                  href="https://www.google.com/search?client=firefox-b-1-d&q=monica+browne+weddings#lrd=0x89b7eb901b80745b:0x27f704e516f44ed0,1,,,"
                  target="_blank"
                >
                  5-star reviews
                </a>{' '}
                on Google.
              </p>
              <p className="md:text-xl mb-4">
                We love what we do, and it shows. We're passionate about
                creating beautiful celebrations that reflect each couple's
                unique style and personality, and we take great pride in our
                work.
              </p>
              <p className="md:text-xl mb-4">
                You can be confident that your wedding or event will be in good
                hands when you choose Monica Browne Weddings. We're
                professional, reliable, and fun to work with – everything you
                could want in a wedding planner!
              </p>
              <p className="md:text-xl mb-4">
                Contact us today to learn more about our services or to schedule
                a free consultation. We can't wait to start planning your
                perfect event!
              </p>
              <p className="md:text-xl italic mt-10 text-center max-w-xl mx-auto">
                Book a 15-minute with Monica and see how she can help you plan
                your Indian wedding celebration
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
            <div className="max-w-7xl mx-auto py-10 md:py-20">
              <h2 className="text-3xl md:text-5xl max-w-3xl mx-auto text-center mb-8">
                Want To Enjoy Your Wedding While a Professional Deals With All
                the Stress and Logistics?
              </h2>
              <div className="grid sm:grid-cols-3 gap-2 max-w-5xl mx-auto my-10">
                <img
                  src="/images/indian-couple-smiling.jpg"
                  alt="Indian newlywed couple smiling."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <img
                  src="/images/indian-bride.jpg"
                  alt="Indian bride at wedding."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <img
                  src="/images/indian-groom-with-friends.jpg"
                  alt="Indian groom with friends at wedding."
                  loading="lazy"
                  width="472"
                  height="708"
                />
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
              <div className="center">
                <a href={calendly} target="_blank">
                  <Button
                    buttonText="Book a Call With Monica Today!"
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
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl text-center">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. How Much Does an Indian Wedding in Washington, DC Cost?
              </h3>
              <p className="md:text-xl mb-4">
                The cost of an Indian wedding in Washington, DC, typically
                ranges from <b>$80,000 to $300,000 or more</b>, depending on the
                scale of the celebration, number of guests, and level of
                customization, and the inclusion of traditional ceremonies like
                the Sangeet, Mehendi, and Baraat.
              </p>
              <p className="md:text-xl mb-4">
                Major expenses include venues <b>($10,000–$50,000)</b>, catering
                <b>($50–$200 per guest)</b>, décor and floral arrangements
                <b>($14,000–$80,000)</b>, outfits and jewelry{' '}
                <b>($5,000–$50,000)</b>, entertainment <b>($5,000–$30,000)</b>,
                and photography or videography
                <b>($10,000–$30,000)</b> for multi-day coverage.
              </p>
              <p className="md:text-xl mb-4">
                Factors such as guest count, multi-day traditional events,
                customized décor, and peak wedding seasons can significantly
                affect costs.
              </p>
              <p className="md:text-xl mb-4">
                Budget-friendly strategies like selecting venues that
                accommodate multiple events, choosing balanced catering
                packages, and prioritizing impactful décor can help manage
                expenses.
              </p>
              <p className="md:text-xl mb-4">
                With the guidance of an experienced{' '}
                <Link href="/about">wedding planner</Link> who understands
                Indian traditions, you can create a stunning celebration that
                honors your heritage while staying within budget.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. How much does an Indian wedding planner cost?
              </h3>
              <p className="md:text-xl mb-4">
                An Indian wedding planner cost varies based on factors such as
                the size of the wedding, number of events, location, and level
                of service required.
              </p>
              <p className="md:text-xl mb-4">
                For full-service planning, which includes managing multiple
                ceremonies, vendor coordination, décor design, and logistics,
                prices typically range from <b>$7,000 to $25,000+</b>, depending
                on complexity.
              </p>
              <p className="md:text-xl mb-4">
                If you need month-of coordination, costs usually start around
                <b> $7,000 to $15,000</b>, while day-of coordination services
                range from <b>$4,500 to $7,000</b>.
              </p>
              <p className="md:text-xl mb-4">
                Indian weddings require extensive planning due to multiple
                events like the Sangeet, Mehndi, Baraat, and Reception, which
                can impact overall pricing.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. What services do you provide as an Indian wedding planner?
              </h3>
              <p className="md:text-xl mb-4">Yes.</p>
              <p className="md:text-xl mb-4">
                As a full-service Indian wedding planner, we provide
                comprehensive planning, including venue selection, vendor
                management, decor detailing, and menu curation. We also offer
                day-of coordination and consultation services.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. Can you assist with pre-wedding ceremonies, such as Sangeet,
                Mehndi, and Haldi?
              </h3>
              <p className="md:text-xl mb-4">Absolutely.</p>
              <p className="md:text-xl mb-4">
                We understand the importance of pre-wedding ceremonies in an
                Indian wedding and can assist in planning and organizing these
                events as per your cultural traditions and personal preferences.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. How do you handle last-minute changes or emergencies?
              </h3>
              <p className="md:text-xl mb-4">
                We understand that weddings can be dynamic and changes may come
                up. We have a highly experienced team capable of handling
                last-minute adjustments or emergencies, ensuring your wedding
                runs as smoothly as possible.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #5. We invited over 200 guests. Can you help with managing the
                guest list and RSVPs?
              </h3>
              <p className="md:text-xl mb-4">
                Yes, we can. We offer services to manage the guest list, send
                out invitations, and track RSVPs to ensure you have a clear
                picture of your guest count and any special requirements they
                may have.
              </p>
              {/* <h3 className="text-2xl md:text-3xl my-4">
                #6. Do you have references from previous clients or a portfolio
                of past weddings?
              </h3>
              <p className="md:text-xl mb-4">
                Absolutely! We're proud of our past work and satisfied clients.
                We're more than happy to share references and a portfolio of
                weddings we've planned. This gives you a clear understanding of
                our capabilities and the quality of our services.
              </p> */}
              <p className="md:text-xl italic my-8 text-center max-w-xl mx-auto">
                Book a 15-minute with Monica and see how she can help you plan
                your Indian wedding celebration
              </p>
              <div className="center">
                <a href={calendly} target="_blank">
                  <Button
                    buttonText="Book a Call With Monica!"
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
      </main>
    </>
  )
}
