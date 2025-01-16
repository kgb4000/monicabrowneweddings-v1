import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title: 'Wedding Decorations and Design Services in the Washington, DC Area',
  description:
    'Looking for the best wedding decoration services for your dream wedding? Monica Browne Weddings can get it done! Book a call with Monica today!',
  alternates: {
    canonical: 'https://monicabrowneweddings.com/wedding-decoration-services',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/wedding-decoration-services',
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

export default function WeddingDecorationServices() {
  return (
    <>
      <Hero
        herotext="Wedding Decorations and Design Services for Busy Couples in the Washington, DC Area"
        heroSubText="Modern and Stylish Wedding Decorators and Event Design Services in DC, Maryland, and Norhtern Virginia"
        buttonText="Book A Call Today!"
        imageUrl="/images/wedding-reception-decor.webp"
        textColor="text-white"
      />
      <main>
        <div className="container max-w-7xl mx-auto px-6 py-10 md:py-20">
          <section>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl my-8 text-center">
                Wedding Decoration and Design Services
              </h2>
              <p className="md:text-xl mb-4">
                If you're looking for wedding design and need a professional
                wedding decorator near you, then Monica Browne Weddings are the
                professional for you.
              </p>
              <p className="md:text-xl mb-4">
                Monica Browne Weddings is a wedding planner in the DMV area and
                specialize in wedding planning, wedding décor, and wedding
                coordination services.
              </p>
              <p className="md:text-xl mb-4">
                We have been in the wedding industry for over 20 years, creating
                beautiful and stylish events for modern busy couples in DMV.
              </p>
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
              <h2 className="text-3xl lg:text-5xl my-8 text-center">
                We Make Your Wedding Day Your Special Event
              </h2>
              <p className="md:text-xl mb-4">
                Your wedding decorations may not be the most important thing on
                your to-do list, but are still an important part of this
                momentous occasion.
              </p>
              <p className="md:text-xl mb-4">
                Your wedding decorations will set the tone and the mood for you
                and your guest.
              </p>
              <p className="md:text-xl mb-4">
                How you decorate for your wedding is what you, your family, and
                your guests will remember for the rest of their lives.
              </p>
              <p className="md:text-xl mb-4">
                Let us help make your big day a beautiful one.
              </p>
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
            <div className="max-w-5xl mx-auto my-10 md:my-20">
              <div className="grid md:grid-cols-2 gap-2 mb-8">
                <img
                  src="/images/dc-wedding-planner.webp"
                  alt="Wedding table centerpiece design for small wedding."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <img
                  src="/images/tall-wedding-flowers-centerpiece.webp"
                  alt="Wedding table centerpiece design for small wedding."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <img
                  src="/images/black-red-wedding-decor.webp"
                  alt="Black and red wedding decorations and design by Monica Browne Weddings"
                  loading="lazy"
                  width="472"
                  height="708"
                  className="col-span-2"
                />
              </div>
            </div>
          </section>
          <section>
            <div className="lg:my-20 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl mb-8">Wedding Decorations</h2>
              <p className="md:text-xl mb-4">
                Your wedding decorations are anything that you want to make your
                wedding your own wedding.
              </p>
              <p className="md:text-xl mb-4">
                Your wedding decorations may consists of:
              </p>
              <ul className="ml-8 my-10 list-disc">
                <li className="md:text-xl mb-4">A Tent</li>
                <li className="md:text-xl mb-4">Floral Bouquets</li>
                <li className="md:text-xl mb-4">Custom up-lighting</li>
                <li className="md:text-xl mb-4">Signature bar</li>
                <li className="md:text-xl mb-4">
                  A lounge area for your guests and wedding party
                </li>
                <li className="md:text-xl mb-4">Custom flower arch</li>
                <li className="md:text-xl mb-4">Custom table centerpieces</li>
                <li className="md:text-xl mb-4">Custom champagne flutes</li>
                <li className="md:text-xl mb-4">Dance floor</li>
                <li className="md:text-xl mb-4">Custom tables and chairs</li>
                <li className="md:text-xl mb-4">Secured your wedding cake</li>
              </ul>
              <p className="md:text-xl mb-4">
                As a top wedding designer in Maryland, we can handle all your
                wedding decor needs.
              </p>
              <p className="md:text-xl mb-4">
                Our vision is to create and design the wedding you want. The
                overall look should be the look you want. The overall look
                should be the look you want.
              </p>
              <p className="md:text-xl mb-4">
                Your wedding is your special day, and you are the one that
                decides how you want it to look.
              </p>
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
              <div className="max-w-5xl mx-auto my-10 md:my-20">
                <div className="grid grid-cols-2 gap-2 mb-8">
                  <img src="/images/bride-groom-serious-love.webp" />
                  <img src="/images/bride-groom-serious-love.webp" />
                  <img src="/images/bride-groom-serious-love.webp" />
                  <img src="/images/bride-groom-serious-love.webp" />
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl my-8 text-center">
                Why Hire Monica Browne Weddings for Your Wedding Decorations?
              </h2>
              <p className="md:text-xl mb-4">
                How many people have the time, creativity, and motivation to
                decorate their wedding?
              </p>
              <p className="md:text-xl mb-4">
                It's not as simple as some may think, but it's not the same as
                decorating for a birthday party.
              </p>
              <p className="md:text-xl mb-4">
                Everything has to be perfect and set up just right.
              </p>
              <p className="md:text-xl mb-4">
                The flowers have to be arranged a certain way, the colors must
                match, and so much more.
              </p>
              <p className="md:text-xl mb-4">
                It is so much easier to hire a professional wedding decorator to
                handle all the decorative details. It can be extremely
                frustrating and exhausting for someone who has never done this
                type of work before.
              </p>
              <p className="md:text-xl mb-4">
                Here are the main benefits of hiring a wedding decorator:
              </p>
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
            <div className="my-10 lg:my-20">
              <div className="max-w-3xl mx-auto bg-gray-50 md:p-20 py-12 px-8 rounded-xl">
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
                        buttonText="Book a Call With Monica Today!"
                        bgColor="bg-purple-500"
                        borderWidth="border-0"
                        textColor="text-white"
                        textSize="md:text-xl"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="lg:my-20 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl mb-8">
                What Does Monica Browne Weddings Do as Your Day-of Coordinator?
              </h2>
              <p className="md:text-xl mb-4">
                A day of wedding coordinator is a professional responsible for
                managing your entire wedding day and helping you finalize the
                details weeks leading up to the big event.
              </p>
              <p className="md:text-xl mb-4">
                We become the point of contact for all you wedding vendors, and
                we oversee all the critical details of your wedding like:
              </p>
              <ul className="ml-8 my-10 list-disc">
                <li className="md:text-xl mb-4">
                  Reviewing your wedding vendor contracts
                </li>
                <li className="md:text-xl mb-4">
                  Preparing a timeline for the vendors and your wedding party
                </li>
                <li className="md:text-xl mb-4">
                  Supervising your wedding rehearsal
                </li>
                <li className="md:text-xl mb-4">
                  Giving you progress updates on actions to be done
                </li>
                <li className="md:text-xl mb-4">
                  Discussing the order of events for the ceremony with the
                  officiant
                </li>
                <li className="md:text-xl mb-4">
                  Coordinating the layout of the tables for the reception
                </li>
                <li className="md:text-xl mb-4">
                  Doing ceremony and reception site inspection and walk-throughs
                </li>
                <li className="md:text-xl mb-4">Plus more</li>
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
          <div className="grid lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
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
            <div className="lg:my-20 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl mb-8">
                Why Choose Monica Browne Weddings as Your Day of Wedding
                Coordinator?
              </h2>
              <p className="md:text-xl mb-4">
                At Monica Browne Weddings, we pride ourselves on being one of
                Maryland's premier day-of wedding coordinators. Monica and her
                team of experienced professionals are dedicated to ensuring your
                wedding day is flawless and exactly as you envisioned.
              </p>
              <p className="md:text-xl mb-4">
                Our goal is simple: to handle every detail so you can focus on
                cherishing the moment and creating memories that will last a
                lifetime.
              </p>
              <p className="md:text-xl mb-4">
                From the moment you hire us as your day-of coordinator, we’ll be
                available to answer any questions and provide guidance every
                step of the way.
              </p>
              <p className="md:text-xl mb-4">
                When your wedding is eight weeks away, you can count on us to
                take the reins and handle the following with care and precision:
              </p>
              <ul className="ml-8 my-10 list-disc">
                <li className="md:text-xl mb-4">
                  Review and organize all vendor contracts
                </li>
                <li className="md:text-xl mb-4">
                  Confirm all vendor payments and schedules
                </li>
                <li className="md:text-xl mb-4">
                  Coordinate final fittings for your wedding attire and your
                  bridal party
                </li>
                <li className="md:text-xl mb-4">
                  Ensure your bridal party has their dresses and tuxedos secured
                </li>
                <li className="md:text-xl mb-4">
                  Conduct a walk-through of the ceremony and reception venues
                </li>
                <li className="md:text-xl mb-4">
                  Craft a comprehensive timeline for all participants
                </li>
                <li className="md:text-xl mb-4">
                  Supervise and coordinate a two-hour rehearsal the week of your
                  wedding
                </li>
                <li className="md:text-xl mb-4">
                  Act as the primary point of contact for your bridal party
                  starting on rehearsal day
                </li>
                <li className="md:text-xl mb-4">
                  Manage and oversee all logistics on your wedding day
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
            <div className="max-w-3xl mx-auto my-10 md:my-20">
              <h2 className="text-3xl md:text-5xl text-center">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. What types of wedding decorations do you offer?
              </h3>
              <p className="md:text-xl mb-4">
                We provide a wide range of decorations, including floral
                arrangements, table centerpieces, ceremony backdrops, lighting,
                drapery, and custom décor elements tailored to your wedding
                theme and style.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. Can you help us design a theme for our wedding?
              </h3>
              <p className="md:text-xl mb-4">
                Absolutely! We specialize in creating cohesive wedding themes
                that reflect your personality and vision. Whether you’re looking
                for classic elegance, rustic charm, or modern sophistication,
                we’ll design a look that’s uniquely yours.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. Do you provide on-site setup and breakdown for the
                decorations?
              </h3>
              <p className="md:text-xl mb-4">
                Yes, our team handles all aspects of setup and breakdown on your
                wedding day, ensuring everything is perfectly arranged before
                your event and removed seamlessly afterward.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. Can you work within our budget?
              </h3>
              <p className="md:text-xl mb-4">
                Of course! We’ll collaborate with you to design stunning décor
                that aligns with your budget, offering creative solutions to
                maximize impact without exceeding your limits.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #5 o you offer rental options for wedding decorations?
              </h3>
              <p className="md:text-xl mb-4">
                Yes, we provide a variety of rental items, including arches,
                vases, linens, candle holders, and more. This allows you to
                achieve a luxurious look without purchasing every item outright.
              </p>
            </div>
          </section>
          <p className="text-xl italic mt-10 text-center">
            Book a 15-minute with Monica and see she can help you plan your
            wedding
          </p>
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
      </main>
    </>
  )
}
