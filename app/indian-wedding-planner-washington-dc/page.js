import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Indian Wedding Planner in Washington DC, Maryland, and Northern Virginia',
  description:
    'Exclusive full & partial-service Indian wedding planners in Washington, DC for events of 50 to 1200 guests. Contact us today to plan your dream wedding!',
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/indian-wedding-planner-washington-dc',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/indian-wedding-planner-washington-dc',
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
  },
}

export default function IndianWeddingPlannerDC() {
  return (
    <>
      <Hero
        herotext="Premier Indian Wedding Planner for Busy Couples in Washington"
        heroSubText="We specialize in crafting stunning Indian weddings for busy couples in Washington, DC, blending tradition, elegance, and modern flair to create unforgettable celebrations"
        buttonText="Book A Call With Monica!"
        imageUrl="/images/indian-wedding-ceremony-mgm.jpg"
        textColor="text-white"
      />
      <main>
        <div className="container max-w-7xl mx-auto px-6 py-10 md:py-20">
          <section>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl my-8 text-center leading-normal">
                Your Trusted Indian Wedding Planner in Washington, DC
              </h2>
              <p className="md:text-xl mb-4">
                Monica Browne Weddings is your trusted partner in the
                Washington, DC area, for creating stunning single and multi-day
                Indian and South Asian weddings.
              </p>
              <p className="md:text-xl mb-4">
                With over 20 years of expertise, Monica Browne is passionate
                about blending cherished traditions with your unique vision to
                craft a celebration that’s truly unforgettable.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-4 my-8">
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
                We specialize in honoring the rich cultural heritage of South
                Asian weddings while highlighting the individuality of each
                couple.
              </p>
              <p className="md:text-xl mb-4">
                From vibrant Sangeet nights to intricate Mehendi and Garba
                ceremonies, joyful Haldi rituals, and elegant post-wedding
                brunches, we handle every detail with care and precision,
                ensuring your entire wedding experience is flawless.
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
                Comprehensive Indian Wedding Planning Services
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
                    South Asian Dream Wedding Blueprint
                  </h3>
                  <p className="md:text-xl mb-4">
                    We begin with a consultation to understand your vision,
                    preferences, and budget, creating a detailed plan to keep
                    everything on track.
                  </p>
                  <p className="md:text-xl mb-4">
                    We assist with selecting the perfect venues for all your
                    events, coordinating logistics and contracts. We connect you
                    with trusted professionals for catering, decor, photography,
                    and entertainment.
                  </p>
                </div>
              </div>
              <div className="pb-4 grid sm:grid-cols-2 gap-x-10 items-center my-16">
                <img
                  src="images/newly-wed-indian-couple.jpg"
                  alt="Newly wed Indian couple."
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4 sm:order-2"
                />
                <div className="">
                  <h3 className="text-3xl font-bold pb-4">
                    The Ultimate Wedding Week Experience
                  </h3>
                  <p className="md:text-xl mb-4">
                    We coordinate all your events, from the Sangeet to the
                    reception, ensuring smooth transitions and flawless
                    execution.
                  </p>

                  <p className="md:text-xl mb-4">
                    For traditional elements, we organize mandaps, ceremonial
                    props, and work with priests or officiants to honor your
                    customs.
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
                  <h3 className="text-3xl  font-bold pb-4">
                    The Grand Celebration Coordination
                  </h3>
                  <p className="md:text-xl mb-4">
                    On your wedding day, we handle timelines, ensuring
                    everything runs smoothly.
                  </p>
                  <p className="md:text-xl mb-4">
                    We assist family and guests with transportation and
                    accommodations while providing full bridal and groom support
                    for wardrobe changes, makeup, and mehendi.
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
                    The Perfect Send-Off Experience
                  </h3>
                  <p className="md:text-xl mb-4">
                    We take care of post-wedding needs, including planning a
                    farewell brunch and managing final vendor payments.
                  </p>
                  <p className="md:text-xl mb-4">
                    From wrapping up logistics to collecting personal items, we
                    make sure the celebration ends seamlessly and stress-free.
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
                    One-of-a-Kind Wedding Touches
                  </h3>
                  <p className="md:text-xl mb-4">
                    Special moments like surprise performances and unique
                    elements can be added to make your wedding truly
                    unforgettable.
                  </p>
                  <p className="md:text-xl mb-4">
                    Our expertise ensures a memorable and stress-free
                    celebration.
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
                How to Begin Your Indian Wedding Planning Journey with Monica
              </h2>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">
                  1. Schedule a Consultation
                </h4>
                <p className="md:text-xl my-4">
                  Start by booking a call with Monica to discuss your unique
                  needs for your Indian wedding. From multi-day celebrations to
                  intricate cultural traditions, Monica will guide you on how
                  her expertise as a day-of coordinator can ensure a flawless
                  experience.
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
                  every aspect to honor your cultural traditions and
                  preferences.
                </p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl">
                  3. Celebrate Every Moment
                </h4>
                <p className="md:text-xl my-4">
                  Immerse yourself in the joy of your wedding festivities—from
                  the vibrant sangeet to the heartfelt pheras—while we handle
                  the behind-the-scenes details. With Monica coordinating every
                  step, you can focus on cherishing these unforgettable moments.
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
                Check out our 5-star reviews on Google.
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
              <div className="grid lg:grid-cols-3 gap-2 max-w-5xl mx-auto my-10">
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
                #1. How Much Does an Indian Wedding Cost in Washington, DC?
              </h3>
              <p className="md:text-xl mb-4">
                The cost of an Indian wedding in Washington, DC, typically
                ranges from <b>$100,000 to $300,000 or more</b>, depending on
                the scale of the celebration, number of guests, and level of
                customization, and the inclusion of traditional ceremonies like
                the Sangeet, Mehendi, and Baraat..
              </p>
              <p className="md:text-xl mb-4">
                Major expenses include venues ($10,000–$50,000), catering
                ($50–$200 per guest), décor and floral arrangements
                ($14,000–$80,000), outfits and jewelry ($5,000–$50,000),
                entertainment ($5,000–$30,000), and photography or videography
                ($10,000–$30,000) for multi-day coverage.
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
                #2. Do you have experience planning weddings with specific
                Indian cultural traditions?
              </h3>
              <p className="md:text-xl mb-4">Yes.</p>
              <p className="md:text-xl mb-4">
                We have vast knowledge in planning weddings across a variety of
                Indian cultural traditions, including but not limited to
                Punjabi, Gujarati, South Indian, Bengali, and Marathi weddings.
                We respect and understand the nuances of different regional and
                religious traditions.
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
                #5 We invited over 200 guests. Can you help with managing the
                guest list and RSVPs?
              </h3>
              <p className="md:text-xl mb-4">
                Yes, we can. We offer services to manage the guest list, send
                out invitations, and track RSVPs to ensure you have a clear
                picture of your guest count and any special requirements they
                may have.
              </p>
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
