import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export const metadata = {
  title:
    'Indian Wedding Planner Washington DC, MAryland, and Northern Virginia',
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
        herotext="Indian Wedding Planner, Washington, DC"
        heroSubText="We create beautiful Indian weddings for busy couples in living in Washington, DC"
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
              <div className="pb-4 grid md:grid-cols-2 gap-8 items-center mb-12">
                <img
                  src="images/wedding-couple.jpg"
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
                    events, coordinating logistics and contracts. Our vendor
                    management services connect you with trusted professionals
                    for catering, decor, photography, and entertainment.
                  </p>
                  <p className="md:text-xl mb-4">
                    To bring your vision to life, we design custom themes and
                    decor while managing guest lists, invitations, and RSVPs.
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
                  <h3 className="text-3xl font-bold pb-4">
                    The Ultimate Wedding Week Experience
                  </h3>
                  <p className="md:text-xl mb-4">
                    We coordinate all your events, from the Sangeet to the
                    reception, ensuring smooth transitions and flawless
                    execution.
                  </p>
                  <p className="md:text-xl mb-4">
                    Entertainment is arranged, including DJs, live music, and
                    cultural performances, with all technical details managed.
                  </p>
                  <p className="md:text-xl mb-4">
                    For traditional elements, we organize mandaps, ceremonial
                    props, and work with priests or officiants to honor your
                    customs.
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
                  <p className="md:text-xl mb-4">
                    Our team ensures every detail is managed so you can enjoy
                    your day.
                  </p>
                  <p className="md:text-xl mb-4">
                    Let us enhance your wedding day with blooms that perfectly
                    reflect your style and theme.
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
                  src="images/indian-wedding-ceremony-mgm.jpg"
                  loading="lazy"
                  width="100%"
                  height="auto"
                  className="pb-4"
                />
                <div className="">
                  <h3 className="text-3xl font-bold pb-4">
                    One-of-a-Kind Wedding Touches
                  </h3>
                  <p className="text-xl pb-4">
                    We also offer destination wedding planning, fusion wedding
                    customization, and personalized wedding favors.
                  </p>
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
          <div className="py-10">
            <div className="max-w-3xl mx-auto md:p-20 py-10 px-8 rounded-xl text-white">
              <h2 className="text-3xl md:text-5xl">How to Get Started</h2>
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
                      borderColor="border-white"
                      borderWidth="border-2"
                      textColor="text-white"
                      borderStyle="border-solid"
                      textSize="md:text-2xl"
                    ></Button>
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
            <div className="max-w-3xl mx-auto py-10 md:py-20">
              <h2 className="text-3xl md:text-5xl text-center mb-8">
                Want To Enjoy Your Wedding While a Professional Deals With All
                the Stress and Logistics?
              </h2>
              <div className="grid lg:grid-cols-3 gap-2 max-w-3xl mx-auto my-10">
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
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl text-center">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. What services do you provide as an Indian wedding planner?
              </h3>
              <p className="md:text-xl mb-4">
                As a full-service Indian wedding planner, we provide
                comprehensive planning, including venue selection, vendor
                management, decor detailing, and menu curation. We also offer
                day-of coordination and consultation services.
              </p>

              <h3 className="text-2xl md:text-3xl my-4">
                #2. Do you have experience planning weddings with specific
                Indian cultural traditions?
              </h3>
              <p className="md:text-xl mb-4">Yes.</p>
              <p className="md:text-xl mb-4">
                We have vast experience in planning weddings across a variety of
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
