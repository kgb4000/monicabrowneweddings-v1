import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title:
    'Wedding Planner For Busy Couples in Bowie, Maryland | Monica Browne Weddings',
  description:
    "Looking for a wedding planner in Bowie, MD? We'll take care of everything, from finding the perfect venue to finding the best caterers. Call us today!",
  alternate: {
    canonical: 'https://monicabrowneweddings.com/wedding-planner-bowie-md',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-planner-bowie-md',
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

export default function WeddingPlannerBowieMD() {
  return (
    <>
      <Hero
        herotext="Wedding Planner For Busy Couples in Bowie, Maryland"
        heroSubText="We design unforgettable weddings for busy couples in Bowie, MD, turning your vision into a flawless and beautifully crafted celebration"
        buttonText="Book A Call With Monica!"
        imageUrl="/images/happy-couple.webp"
        textColor="text-white"
      />
      <main>
        <section>
          <div className="container max-w-7xl mx-auto px-6 py-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl my-8 text-center">
                Wedding Planner for Bowie, Maryland Couples
              </h2>
              <p className="md:text-xl mb-4">
                Monica Browne Weddings offers wedding planning services for
                couples in Maryland and{' '}
                <Link href="/wedding-planner-washington-dc">
                  Washington, DC
                </Link>
                . Planning a wedding can be time-consuming, especially when you
                already have a busy life.
              </p>
              <p className="md:text-xl mb-4">
                Let us take some of the stress off of you so you can focus on
                enjoying your special day.
              </p>
              <p className="md:text-xl mb-4">
                Whether you just need help and guidance or a wedding planner to
                take over the entirety of planning, we're here to ensure your
                wedding is an enjoyable and memorable experience.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container max-w-5xl mx-auto grid lg:grid-cols-3 gap-2 px-6">
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
        </section>
        <section>
          <div className="container max-w-3xl mx-auto py-10 px-6">
            <p className="md:text-xl mb-4">
              The team at Monica Browne Weddings specializes in designing,
              implementing, and executing stylish and elegant weddings.
            </p>
            <p className="md:text-xl mb-4">
              Whether the wedding is going to be held in a grand ballroom or in
              your own backyard, we work diligently to create an unforgettable
              event for yourself and your loved ones.
            </p>
            <p className="md:text-xl mb-4">
              We also take pride in celebrating diversity by helping couples
              from various cultural backgrounds, including{' '}
              <Link href="/indian-wedding-planner">Indian couples</Link> and{' '}
              <Link href="/jewish-wedding-planner-maryland-dc-virginia">
                Jewish couples
              </Link>
              , create weddings that honor their unique traditions and love
              stories.
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
                  <h4 className="text-2xl md:text-3xl">1. Talk To Monica</h4>
                  <p className="md:text-xl my-4">
                    Book a call with us to discuss how we can help you plan your
                    wedding.
                  </p>
                </div>
                <div className="my-10">
                  <h4 className="text-2xl md:text-3xl">2. Create A Budget</h4>
                  <p className="md:text-xl my-4">
                    Determine your budget and start finalizing your wedding
                    details.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl md:text-3xl">
                    3. Enjoy Your Wedding Day
                  </h4>
                  <p className="md:text-xl my-4">
                    Enjoy your wedding day and cherish the moment!
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
        <section>
          {/* <div className="max-w-5xl mx-auto py-10">
            <div className="grid md:grid-cols-3 gap-2">
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
          </div> */}
          <div className="max-w-2xl mx-auto py-10 px-6">
            <h2 className="text-3xl md:text-5xl mb-8 text-center">
              What We Do When We Help You Plan Your Wedding
            </h2>
            <h3 className="text-2xl md:text-3xl mb-4">
              Help Create and Manage Your Wedding Budget
            </h3>
            <p className="md:text-xl mb-4">
              Wedding associated costs can quickly get out of hand unless you
              stay on top of what you're spending.
            </p>
            <p className="md:text-xl mb-4">
              We'll work with you to develop a wedding budget that you're
              comfortable with. We'll stay on top of all current and projected
              costs to ensure we don't go over budget.
            </p>
            <p className="md:text-xl mb-4">
              We'll send you progress reports to let you know where we're at
              with your current budget, so there are no surprises.
            </p>
            <h3 className="text-2xl md:text-3xl mb-4">
              Theme and Decor Development and Design
            </h3>
            <p className="md:text-xl mb-4">
              Determining the theme and decor of your wedding is one of the most
              fun and exciting parts of wedding planning.
            </p>
            <p className="md:text-xl mb-4">
              We'll discuss all of the ideas and visions you have for your
              wedding, mending them together into a truly unique theme that
              represents you and your partner.
            </p>
            <p className="md:text-xl mb-4">
              We also work on ceremony style development. Different cultures and
              religions have various traditions when it comes to wedding
              ceremonies.
            </p>
            <p className="md:text-xl mb-4">
              We'll ensure that your traditions are reflected in your ceremony.
            </p>
            <h3 className="text-2xl md:text-3xl mb-4">
              Ceremony and Reception Site Selection Assitance
            </h3>
            <p className="md:text-xl mb-4">
              Finding the best location for your ceremony and reception is a key
              part of wedding planning.
            </p>
            <p className="md:text-xl mb-4">
              You may want your wedding at a hotel and have both facets of your
              wedding at the same location.
            </p>
            <p className="md:text-xl mb-4">
              Or, you may request the ceremony to be at a church and the
              reception at another location. No matter what your needs are,
              we'll work with you to select the best locations possible within
              your budget.
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
            <h3 className="text-2xl md:text-3xl mb-4">
              Wedding Invitation and Accessory Selection Assistance
            </h3>
            <p className="md:text-xl mb-4">
              We'll work with you to create your wedding guest list and send out
              your invitations.
            </p>
            <p className="md:text-xl mb-4">
              We'll manage the guestlist and responses.
            </p>
            <p className="md:text-xl mb-4">
              From the response list, we'll create a seating arrangement, going
              over it with you in detail to ensure it's to your specifications.
            </p>
            <h3 className="text-2xl md:text-3xl mb-4">Vendor Management</h3>
            <p className="md:text-xl mb-4">
              Wedding vendors play a huge part in your big day.
            </p>
            <p className="md:text-xl mb-4">
              From florists to photographers to caterers, we'll provide you with
              vetted vendor referrals.
            </p>
            <p className="md:text-xl mb-4">
              We'll handle the scheduling of appointments and meetings with
              vendors and can attend them on your behalf.
            </p>
            <p className="md:text-xl mb-4">
              We'll review all wedding vendor contracts and service agreements
              and coordinate with them on the day of.
            </p>
            <h3 className="text-2xl md:text-3xl mb-4">
              Gift Registry Assitance
            </h3>
            <p className="md:text-xl mb-4">
              Our team will help you register at a variety of locations and
              websites, uploading your lists into a central location for the
              convenience of your guest list.
            </p>
            <h3 className="text-2xl md:text-3xl mb-4">
              Monthly Progress Updates
            </h3>
            <p className="md:text-xl mb-4">
              Throughout the process of planning your wedding, we'll provide you
              with a detailed wedding to-do list/checklist during the planning
              stages.
            </p>
            <p className="md:text-xl mb-4">
              You'll also have unlimited phone calls and emails during business
              hours.
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
            <h3 className="text-2xl md:text-3xl mb-4">
              Guest Lodging Arrangements
            </h3>
            <p className="md:text-xl mb-4">
              If your wedding is being held out of town, we'll work with nearby
              hotels to reserve blocks of rooms for your guests.
            </p>
            <h3 className="text-2xl md:text-3xl mb-4">Etiquette Advice</h3>
            <p className="md:text-xl mb-4">
              We'll go over everything you need to know about attire, hosting,
              guests, behavior, plus all the details you need to know about
              post-wedding etiquette, including thank you notes.
            </p>
            <h3 className="text-2xl md:text-3xl mb-4">
              Rehearsal Coordination and Supervision
            </h3>
            <p className="md:text-xl mb-4">
              We also offer rehearsal dinner planning and coordination.
            </p>
            <p className="md:text-xl mb-4">
              The rehearsal dinner is an important component of your wedding
              weekend.
            </p>
            <p className="md:text-xl mb-4">
              Whether it's hosted at a nearby restaurant or being catered at the
              ceremony location, we'll ensure everything goes smoothly.
            </p>
            <h3 className="text-2xl md:text-3xl mb-4">
              Itinerary and Day-of Timeline
            </h3>
            <p className="md:text-xl mb-4">
              We will provide all wedding party participants and vendors an
              itinerary and timeline for the day of your wedding.
            </p>
            <p className="md:text-xl mb-4">
              Everyone will know what time they're expected at each location, so
              there's no confusion.
            </p>
            <h3 className="text-2xl md:text-3xl mb-4">On Your Wedding Day</h3>
            <p className="md:text-xl mb-4">Your big day is here!</p>
            <p className="md:text-xl mb-4">
              We'll give the bride and groom a wedding morning wake-up call at a
              pre-determined agreed-upon time.
            </p>
            <p className="md:text-xl mb-4">
              We'll also coordinate wedding night hotel arrangements for Bride
              and Groom.
            </p>
            <p className="md:text-xl mb-4">
              We'll check into the hotel room for the bride and groom.
            </p>
            <p className="md:text-xl mb-4">
              We'll also decorate the room, adding in any extra details that'll
              make your night even more special.
            </p>
            <p className="md:text-xl mb-4">
              Our wedding planning services include one lead coordinator and two
              event assistants.
            </p>
            <p className="md:text-xl mb-4">
              You can feel confident that every aspect of your wedding will be
              handled flawlessly.
            </p>
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
        </section>
        <section>
          <div className="max-w-2xl mx-auto my-10 md:my-20 px-6">
            <h2 className="text-3xl md:text-5xl text-center">FAQs</h2>
            <h3 className="text-2xl md:text-3xl my-4">
              #1. Is it worth it to hire a wedding planner?
            </h3>
            <p className="md:text-xl mb-4">
              Whether or not you should hire a wedding planner depends on your
              specific needs. If you have a large, complicated wedding, it may
              be worth it to hire a wedding planner to handle everything for
              you.
            </p>
            <p className="md:text-xl mb-4">
              However, if you have a smaller, simpler wedding, you may not need
              all the services a full-service planner offers.
            </p>
            <p className="md:text-xl mb-4">
              In that case, you can save money by using a wedding planner who
              offers à la carte services or by using a{' '}
              <Link href="/day-of-wedding-coordinator-bowie-md">
                day-of coordinator
              </Link>
              .
            </p>
            <h3 className="text-2xl md:text-3xl my-4">
              #2. What can I expect from a full-service wedding planner?
            </h3>
            <p className="md:text-xl mb-4">
              When you hire a full-service wedding planner, you can expect them
              to be involved in every aspect of your wedding planning.
            </p>
            <p className="md:text-xl mb-4">
              They will help you choose your venue, select your vendors, and
              create a timeline for your big day.
            </p>
            <p className="md:text-xl mb-4">
              On your wedding day, they will ensure everything runs smoothly, so
              you can relax and enjoy yourself.
            </p>
            <h3 className="text-2xl md:text-3xl my-4">
              #3. What is the average cost of a full-service wedding planner?
            </h3>
            <p className="md:text-xl mb-4">
              The average cost of a full-service wedding planner is
              $4,500-$10,000. The exact cost will depend on the size and
              complexity of your wedding, as well as the location and services
              you require.
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
