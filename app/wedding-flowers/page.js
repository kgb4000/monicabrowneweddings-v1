import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title: 'Weddidng Florist For Beautiful Wedding Flowers | Monica Browne',
  description:
    'The most stunning wedding flowers design services for your dream wedding. 5 star customer reviews. Effortless and affordable. Book a call today!',
  canonical: 'https://monicabrowneweddings.com/wedding-flowers',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-flowers',
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

export default function WeddingFlowers() {
  return (
    <div>
      <Hero
        herotext="Wedding Flowers and Floral Design"
        heroSubText="We create beautiful and unique floral experiences for your wedding"
        buttonText="Talk to Monica about Flowers"
        textColor="text-white"
        imageUrl="/images/sweetheart-table-flower-background.jpg"
      />
      <main>
        <section>
          <div className="container max-w-3xl mx-auto px-6 py-10 md:py-20">
            <div>
              <h2 className="text-3xl md:text-5xl mb-8 text-center max-w-2xl mx-auto leading-normal">
                Custom Wedding Flowers Design Service
              </h2>
              <p className="text-xl pb-4">
                We understand that planning a wedding is exciting but
                time-consuming. With so many aspects to plan, it can be a little
                overwhelming.
              </p>
              <p className="text-xl pb-4">
                Your local wedding planners and wedding florists at Monica
                Browne Weddings are here to help. We offer a stunning range of
                flowers for every aspect of your wedding.
              </p>
              <p className="text-xl pb-4">
                We will help you choose designs around what you like while
                offering new wedding flower ideas. If you need us to plan
                everything or just ask for some guidance, we are here for you.
              </p>
            </div>
            <div className="my-4">
              <h2 className="text-3xl mb-8">
                Get The Perfect Flowers For Your Wedding
              </h2>
              <p className="text-xl pb-4">
                The team at Monica Browne Weddings specializes in designing,
                implementing, and executing stylish and elegant weddings.
              </p>
              <p className="text-xl pb-4">
                Whether the wedding is going to be held in a grand ballroom or
                in your own backyard, we work diligently to create an
                unforgettable event for yourself and your loved ones.
              </p>
              <p className="text-xl pb-4">
                We're proud to help couples in the Annapolis, Bethesda, Chevy
                Chase, Rockville, Silver Spring, and Washington DC areas.
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
            <div className="my-4">
              <h2 className="text-3xl mb-8">Flower Recommendations</h2>
              <p className="text-xl pb-4">
                With years of experience in the wedding planning industry, our
                team has created countless custom floral designs.
              </p>
              <p className="text-xl pb-4">
                We help couples visualize the flower design possibilities for
                their wedding venue and wedding party.
              </p>
              <p className="text-xl pb-4">
                Carefully select each item, or leave it to us to do the work for
                you. Some examples of the custom designs you may like are:
              </p>
            </div>
            <div className="my-4">
              <h3 className="text-2xl mb-4">Custom Floral Designs</h3>
              <p className="text-xl pb-4">
                With years of experience in the wedding planning industry, our
                team has created countless wedding flowers designs.
              </p>
              <p className="text-xl pb-4">
                We help couples visualize the flower design possibilities for
                their wedding venue and wedding party.
              </p>
              <p className="text-xl pb-4">
                Carefully select each item, or leave it to us to do the work for
                you. Some examples of the custom designs you may like are:
              </p>
              <ul className="ml-8 list-disc">
                <li className="text-xl pb-4">Bouquets</li>
                <li className="text-xl pb-4">Waist corsage</li>
                <li className="text-xl pb-4">Wrist corsage</li>
                <li className="text-xl pb-4">Headdresses and crowns</li>
                <li className="text-xl pb-4">
                  Venue signage- welcome signboard, seating arrangements, bar
                  signage, and more.
                </li>
                <li className="text-xl pb-4">Venue entranceway</li>
                <li className="text-xl pb-4">Aisle flower arrangements</li>
                <li className="text-xl pb-4">Chair decorations</li>
                <li className="text-xl pb-4">Overhead chandelier pieces</li>
              </ul>
            </div>
            <div className="my-4">
              <h3 className="text-2xl mb-4">Table Centerpieces</h3>
              <p className="text-xl pb-4">
                No wedding table is complete without a centerpiece. Whether
                petite and simplistic or grand and elaborate, floral
                centerpieces complement every table.
              </p>
              <p className="text-xl pb-4">
                Centerpieces are key for keeping the wedding color scheme
                consistent throughout the venue.
              </p>
              <p className="text-xl pb-4">
                Most importantly, the head table should have beautiful floral
                arrangements to encompass the happy couple and their wedding
                party.{' '}
              </p>
            </div>
            <div className="my-4">
              <h3 className="text-2xl mb-4">Boutonnieres</h3>
              <p className="text-xl pb-4">
                Also known as ‘buttonholes,’ these are small flower arrangements
                worn by the male wedding party members on their jacket or lapel.
              </p>
              <p className="text-xl pb-4">
                We carefully handcraft each one to ensure consistency and
                quality.
              </p>
              <p className="text-xl pb-4">
                Of course, the groom’s is made extra special and will be in
                keeping with the style of the bride’s bouquet if desired.{' '}
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
            <div className="my-4">
              <h3 className="text-2xl mb-4">The Wedding Arbor</h3>
              <p className="text-xl pb-4">
                The most important location in the wedding venue- where the
                happy couple will say “I do”.
              </p>
              <p className="text-xl pb-4">
                Or a beautifully creative backdrop for wedding photos. A wedding
                arbor or arch is a must-have at any wedding.
              </p>
              <p className="text-xl pb-4">
                Get creative with exciting shapes and designs for memorable
                wedding photos. We can create the perfect arbor for your style
                and theme.
              </p>
              <p className="text-xl pb-4">
                Choose from cascading floral arrangements, simple modern
                designs, exciting uplighting, personalized monogram lighting,
                flowing linen drapes- the choices are endless.
              </p>
              <p className="text-xl pb-4">
                Create a very special scene that will enhance your wedding
                photos.
              </p>
            </div>
            <div className="my-4">
              <h3 className="text-2xl mb-4">Table design</h3>
              <p className="text-xl pb-4">
                Centerpieces are not the only choice when it comes to floral
                designs for wedding tables.
              </p>
              <p className="text-xl pb-4">
                Try something different, or add to your centerpiece designs.
                Floral arrangements for the head table can include cascading
                table edge arrangements, backdrops, overhead floral chandeliers,
                and chair decorations.
              </p>
              <p className="text-xl pb-4">
                Floral table runners, party favors, and place settings are very
                popular choices.
              </p>
              <p className="text-xl pb-4">
                Give guests that WOW factor and create a beautiful surrounding
                for your special day.
              </p>
            </div>
            <h3 className="text-2xl mb-4">Linen selection</h3>
            <p className="text-xl pb-4">
              It may not seem that way, but like flowers, linens are an
              important part of weddings, from table cloths and chair covers to
              arch drapes, napkins, and table runners.
            </p>
            <p className="text-xl pb-4">
              Linens are functional in that they protect guests and furniture
              from spills and stains.
            </p>
            <p className="text-xl pb-4">
              However, they also play a big part in aesthetics and are used as
              decoration.
            </p>
            <p className="text-xl pb-4">
              They contribute to the color scheme and overall look and
              atmosphere of the wedding.
            </p>
            <p className="text-xl pb-4">
              Complementing linens with flower arrangements can be tricky, so we
              are always more than happy to help with this.
            </p>
            <section>
              <div className="my-8">
                <h2 className="text-3xl mb-8">
                  How To Get Started With Monica
                </h2>
                <ul className="ml-8 list-disc">
                  <li>
                    <h4 className="text-2xl mb-4">Talk To Monica</h4>
                    <p className="text-xl pb-4">
                      Book your first call with Monica and see how she can help
                      you pick out the flowers for your wedding.
                    </p>
                  </li>
                  <li>
                    <h4 className="text-2xl mb-4">Budget And Plan</h4>
                    <p className="text-xl pb-4">
                      Determine your budget and start finalizing your wedding
                      details.{' '}
                    </p>
                  </li>
                  <li>
                    <h4 className="text-2xl mb-4">Enjoy Your Wedding Day</h4>
                    <p className="text-xl pb-4">
                      We will handle the designs, delivery, arrangement-
                      everything- for you. Just enjoy your wedding day and
                      celebrate.
                    </p>
                  </li>
                </ul>

                <div className="center">
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
            <section>
              <div className="my-8">
                <h2 className="text-3xl mb-8">
                  We Care About Your Wedding Day
                </h2>
                <p className="text-xl pb-4">
                  At Monica Browne Weddings, we consider our couples as family.
                </p>
                <p className="text-xl pb-4">
                  We want our clients to have the most special day, so we do
                  what we can to help. It always amazes us how kind and generous
                  our clients are with their feedback and experiences.
                </p>
                {/* <p className="text-xl pb-4">
                  See our gallery of wedding photos from some of our happy
                  couples{' '}
                  <Link href="/wedding-gallery" passHref>
                    here
                  </Link>
                  .
                </p> */}
                <p className="text-xl pb-4">
                  Read testimonials from some of our valued clients{' '}
                  <Link href="/testimonials" passHref>
                    here
                  </Link>
                  .
                </p>
                <p className="text-xl pb-4">
                  Also, see our{' '}
                  <a
                    href="https://www.google.com/search?client=firefox-b-1-d&q=monicabrowneweddings#lrd=0x89b7eb901b80745b:0x27f704e516f44ed0,1,,,"
                    target="_blank"
                  >
                    5-star reviews
                  </a>{' '}
                  on Google here.
                </p>
              </div>
            </section>
            <section>
              <div className="my-8">
                <h2 className="text-3xl mb-4">Wedding Flower Pricing</h2>
                <p className="text-xl pb-4">
                  Weddings can be costly enough, but luckily the cost of wedding
                  flowers doesn’t have to be sky-high.
                </p>
                <p className="text-xl pb-4">
                  We work with you to help you achieve the designs you want
                  within your budget. Simply book a call, chat with Monica, and
                  we’ll create your quote.
                </p>
              </div>
            </section>
            <section>
              <div className="my-8">
                <h2 className="text-3xl mb-8">
                  Start Selecting The Perfect Wedding Flowers
                </h2>
                <p className="text-xl pb-4">
                  Create lasting memories on the most special day with a
                  beautiful scene of flowers at your wedding.
                </p>
                <p className="text-xl pb-4">
                  Don’t delay in discovering the possibilities within your
                  budget, and let Monica Browne Weddings do the hard work for
                  you.
                </p>
                <div className="center">
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
          </div>
        </section>
      </main>
    </div>
  )
}
