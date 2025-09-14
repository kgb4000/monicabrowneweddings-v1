import Link from 'next/link'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

export const metadata = {
  title: 'Wedding Services | Monica Browne Weddings',
  description:
    'Wedding Services from Monica Browne Weddings include Full Service Wedding Planning, Day-of Cordination, Wedding Decor, Flowers, and Floral Design.',
  alternates: {
    canonical: 'https://monicabrowneweddings.com/wedding-services',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-services',
    site_name: 'Monica Browne Weddings',
    images: [
      {
        url: 'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/walking-down-aisle_o4wklu.webp',
        width: 3961,
        height: 2641,
        alt: 'Couple just married, walking down the aisle.',
      },
    ],
  },
}

export default async function WeddingServices() {
  return (
    <div>
      <main>
        <Hero
          herotext="Wedding Planning Services"
          heroSubText="We Create Beautiful Weddings For Busy Couples in Maryland, DC, and Northern Virginia"
          buttonText="Book My Call With Monica Today!"
          imageUrl="/images/wedding-reception-table-decor.webp"
          textColor="text-white"
        />
        <section>
          <div className="max-w-5xl mx-auto px-6 my-8">
            <h2 className="font-bold text-3xl md:text-5xl text-center my-10 md:my-20">
              Our Services
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495885/happy-bride-and-groom_bwyebx.webp"
                alt="Full service wedding planning from Monica Browne Weddings."
                loading="lazy"
              />
              <div>
                <h3 className="text-3xl mb-6 font-bold">
                  Full-Service Wedding Planning
                </h3>
                <p className="md:text-xl mb-4">
                  We're proud to offer couples full-service wedding planning.
                  Whatever you need, we're happy to create a customized package
                  that fits your needs. Give us a call to learn more about our
                  full-service or or partial planning service.
                </p>
                <Link href="/wedding-services/full-service-wedding-planning">
                  <p className="my-8 font-bold">
                    Full-Service Wedding Planning
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-6 my-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img
                src="/images/happy-bride.webp"
                loading="lazy"
                alt="Day of wedding planning services from Monica Browne Weddings."
              />
              <div className="service-info">
                <h3 className="text-3xl mb-6 font-bold">
                  Day-of Wedding Coordinator
                </h3>
                <p className="md:text-xl mb-4">
                  When you have everything else planned and you just need
                  someone to help you coordinate eveything on the day of your
                  wedding, call Monica browne Weddings. With Monica Browne
                  Weddings there as your day of wedding coordinator, you will
                  not...
                </p>
                <Link href="/day-of-wedding-coordinator-washington-dc">
                  <p className="my-8 font-bold">Day-of Wedding Planning</p>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="max-w-5xl mx-auto px-6 my-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img
                src="/images/jewish-wedding-kiddush-cup.jpeg"
                alt="Kiddush cup."
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="text-3xl mb-6 font-bold">
                  Jewish Wedding Planning
                </h3>
                <p className="md:text-xl mb-4">
                  Your dedicated wedding planners at Monica Browne Weddings are
                  here to make your Jewish wedding truly special. From crafting
                  a personalized plan that honors your cherished traditions to
                  helping you design a breathtaking chuppah and selecting
                  meaningful décor, we’re here to guide you every step of the
                  way.
                </p>
                <Link href="/jewish-wedding-planner-dc">
                  <p className="my-8">Read more</p>
                </Link>
              </div>
            </div>
          </div> */}
          <div className="max-w-5xl mx-auto px-6 my-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/v1736311019/Monica%20Browne%20Weddings/indian-bride_smaller.jpg"
                loading="lazy"
                alt="Indian wedding planner in DC, Mayland, and Northern Virginia."
                width="472"
                height="708"
              />
              <div className="service-info">
                <h3 className="text-3xl mb-6 font-bold">
                  Indian Wedding Planning
                </h3>
                <p className="md:text-xl mb-4">
                  Monica Browne Weddings offers premier Indian wedding planning
                  services that breathes life into your dream nuptial
                  celebrations. With a keen understanding of the rich and
                  diverse traditions of Indian weddings, we ensure every detail
                  is meticulously planned, from the vibrant sangeet night to the
                  grand baraat procession.
                </p>
                <Link href="/indian-wedding-planner-washington-dc">
                  <p className="my-8 font-bold">Indian Wedding Planning</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-6 my-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img
                src="/images/maryland-wedding-planner-472w.webp"
                alt="Micro wedding packages."
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="text-3xl mb-6 font-bold">
                  Small Wedding Planning
                </h3>
                <p className="md:text-xl mb-4">
                  Are you looking to have a small, intimate ceremony but don't
                  want to sacrifice quality? If so, a small wedding may be just
                  what you're looking for. Having a micro wedding offers all the
                  amenities of a traditional wedding but on a much smaller
                  scale...
                </p>
                <Link href="/wedding-services/small-wedding-planning">
                  <p className="my-8 font-bold">Small Wedding Planning</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-6 my-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/tall-wedding-flowers-centerpiece_ql8yf6.webp"
                alt="Wedding decoration services from Monica Browne Weddings."
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="text-3xl mb-6 font-bold">
                  Wedding Décor and Design
                </h3>
                <p className="md:text-xl mb-4">
                  The overall look of your wedding will last a lifetime for you
                  and your guests. With Monica Browne Weddings there as your
                  reception decorator, no stone will be unturned. We can
                  transform any venue into a beautiful place with gorgeous
                  floral designs...
                </p>
                <Link href="/wedding-decoration-services">
                  <p className="my-8 font-bold">Wedding Décor and Design</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-6 my-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495887/wedding-flower-centerpiece-design_vq2ofj.webp"
                alt="Wedding floral design services from Monica Browne Weddings."
                loading="lazy"
              />
              <div className="service-info">
                <h3 className="text-3xl mb-6 font-bold">Wedding Flowers</h3>
                <p className="md:text-xl mb-4">
                  Your local wedding planners and wedding florists at Monica
                  Browne Weddings are here to help. We offer a stunning range of
                  flowers for every aspect of your wedding. We will help you
                  choose designs around what you like while offering new wedding
                  flower ideas. If you need us to plan...
                </p>
                <Link href="/blog/how-much-do-wedding-flowers-cost-in-dc-maryland-and-virginia">
                  <p className="my-8 font-bold">Wedding Flowers</p>
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="max-w-5xl mx-auto px-6 my-2">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <img
                src="/images/birthday-party-event-planner.jpg"
                alt="Birhtday party event planner - Monica Browne."
                loading="lazy"
              />
              <div>
                <h3 className="text-3xl mb-6">Birthday Party Planning</h3>
                <p>
                  A birthday party is held to recognize the lives of the people
                  you care about and ensure that you have the best party
                  possible. Celebrate yourself, your mother, father, spouse,
                  child, or best friend ...
                </p>
                <Link href="/birthday-party-planning">
                  <p className="my-8">Read more</p>
                </Link>
              </div>
            </div>
          </div> */}
          <div className="center">
            <a href="tel:+2402660588">
              <Button
                buttonText="Call Monica (240) 665-3350"
                bgColor="bg-purple-500"
                borderWidth="border-0"
                textColor="text-white"
                textSize="md:text-xl"
              />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
