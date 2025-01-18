import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/Hero'

import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title: 'Jewish Wedding Planner in Washington DC | Maryland | Virginia',
  description:
    "Looking for jewish Wedding Planner in DC, Maryland or Northern Virginia? We'll make your wedding a memorable and enjoyable celebration for everyone! Book a call today!",
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/jewish-wedding-planner-washington-dc-maryland-virginia',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/jewish-wedding-planner-washington-dc-maryland-virginia',
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

export default async function JewishWeddingPlanner() {
  return (
    <div>
      <Hero
        herotext="Jewish Wedding Planner for Busy Couples in Washington, DC, Maryland, & Northern Virginia"
        heroSubText="We design unforgettable weddings for Jewish couples, combining cherished traditions with contemporary style to create a celebration that’s uniquely yours"
        buttonText="Book A Call With Monica!"
        textColor="text-white"
        imageUrl="/images/jewish-wedding-ceremony.png"
      />
      <main>
        <div className="container max-w-7xl mx-auto px-6">
          <section>
            <div className="py-10 md:py-20">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-5xl my-8 text-center">
                  Wedding Planner and Day-of Coordinatior For Busy Jewish
                  Couples in DC, MD, VA
                </h2>
                <p className="md:text-xl mb-4">
                  At Monica Browne Weddings, we understand that planning a
                  Jewish wedding is not just about the event itself—it’s about
                  honoring centuries-old traditions, creating meaningful
                  connections, and crafting a celebration that reflects your
                  unique love story.
                </p>
                <p className="md:text-xl mb-4">
                  As experienced wedding planners in the Washington, DC area, we
                  are here to help you create a beautiful and memorable Jewish
                  wedding that seamlessly blends tradition with modern elegance.
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
              From "Mazel Tov!" to The Last Dance, We’ll Bring Your Jewish
              Wedding Dreams to Life
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
                • Your Vision, Rooted in Tradition and Personal Style
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Every couple has a unique love story and connection to their
                faith and traditions. We’ll work closely with you to craft a
                wedding that honors your Jewish heritage while celebrating your
                personal style and preferences. From incorporating meaningful
                rituals like the chuppah and the ketubah signing to ensuring the
                day reflects your love story, we’ll create a plan that’s as
                unique as you are.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Stress-Free Planning with Cultural Expertise
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Planning a wedding involves countless details, and Jewish
                weddings often have additional elements like the ceremony
                structure, kosher catering, and adherence to religious customs.
                We’re here to manage it all—ensuring every tradition is upheld
                while creating a seamless and stress-free experience for you.
                From vendor coordination to budget management, we’ve got you
                covered.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Breathtaking Designs Infused with Meaning
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                From elegant chuppah designs to stunning décor that complements
                your chosen theme, we specialize in creating visual elements
                that are both beautiful and meaningful. Whether it’s
                incorporating traditional symbols like the Star of David or
                crafting a modern, stylish celebration, we’ll help design a day
                that wows your guests and reflects your heritage.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Flawless Wedding Day Coordination with Cultural Sensitivity
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                On your wedding day, you should be fully present to soak in
                every moment—from the signing of the ketubah to the Hora dance.
                We’ll manage the entire day, ensuring every ritual and detail
                runs smoothly. Our team will coordinate with your officiant,
                vendors, and family members to make your day truly
                unforgettable.
              </p>
            </div>
            <div className="my-10">
              <h3 className="text-2xl mb-2">
                • Support Beyond the "Mazel Tov"
              </h3>
              <p className="md:text-xl mb-4 ml-4">
                Our commitment doesn’t end with the final toast. After your
                celebration, we’ll handle post-wedding details, including
                returning rentals, finalizing vendor payments, and ensuring any
                last-minute tasks are completed. Whether you’re hosting a
                post-wedding brunch or heading off on your honeymoon, we’ll
                ensure your wedding experience is joyful from start to finish.
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
              Want a wedding day where you can relax and enjoy every cherished
              tradition while we handle every detail?
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
            <p className="text-xl italic text-center max-w-md mx-auto">
              Let us help you create a Jewish wedding filled with love,
              tradition, and unforgettable memories. Mazel Tov!
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
        <section className="bg-slate-50">
          <div className="container mx-auto px-4 max-w-7xl py-20">
            <h2 className="text-5xl text-center mb-10 leading-normal">
              Testimonials
            </h2>
            <div className="max-w-2xl mx-auto">
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
        <div>
          <section className="bg-slate-100">
            <div className="max-w-2xl mx-auto py-10 md:py-20 px-6">
              <h2 className="text-3xl md:text-5xl text-center">
                Here's How to Get Started
              </h2>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">
                  1. Book a call with Monica
                </h4>
                <p className="md:text-xl my-4">
                  Schedule a call with Monica to discuss how she can help as
                  your wedding day coordinator, ensuring every cherished Jewish
                  tradition is seamlessly included.
                </p>
              </div>
              <div className="my-10">
                <h4 className="text-2xl md:text-3xl">
                  2. Share Your Vision and Traditions
                </h4>
                <p className="md:text-xl my-4">
                  Tell us about your wedding plans, and we’ll craft a detailed
                  timeline, coordinate with your vendors, and manage every
                  detail to honor your heritage and preferences.
                </p>
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl">
                  3. Celebrate Your Wedding Day
                </h4>
                <p className="md:text-xl my-4">
                  Relax, enjoy your special day, and immerse yourself in the joy
                  of your wedding traditions and celebrations!
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
                Why Choose Monica Browne Weddings for Your Jewish Wedding?
              </h2>
              <p className="md:text-xl mb-4">
                Planning a wedding in the DC area comes with its own set of
                challenges, from finding the perfect venue to coordinating
                multiple vendors.
              </p>
              <p className="md:text-xl mb-4">
                Add to that the deep cultural and religious significance of a
                Jewish wedding, and it becomes even more important to work with
                a planner who understands these customs.
              </p>
              <p className="md:text-xl mb-4">
                Here’s why we’re the perfect choice:
              </p>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Expertise in Jewish Wedding Traditions:
                </h3>
                <p className="md:text-xl mb-4">
                  From the signing of the Ketubah to the breaking of the glass,
                  we have extensive experience coordinating every aspect of a
                  traditional Jewish wedding.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Connections with Local Vendors:
                </h3>
                <p className="md:text-xl mb-4">
                  We work with Kosher caterers, florists familiar with chuppah
                  designs, and other vendors who are sensitive to the needs of
                  Jewish weddings.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  Custom Planning:
                </h3>
                <p className="md:text-xl mb-4">
                  Whether you’re planning an Orthodox, Conservative, Reform, or
                  interfaith wedding, we ensure your day is tailored to your
                  vision while respecting religious customs.
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
              <h2 className="text-3xl md:text-5xl mb-8 text-center max-w-2xl">
                Key Jewish Wedding Traditions We Honor
              </h2>
              <p className="md:text-xl mb-4">
                A Jewish wedding is rich with symbolism and meaningful rituals.
                Here are some of the traditions we ensure are flawlessly
                executed:
              </p>
              <div>
                <h3 className="font-semibold text-2xl mb-2">1. The Chuppah:</h3>
                <p className="md:text-xl mb-4">
                  A central element of every Jewish wedding, the chuppah
                  represents the home you will build together. We help design
                  and coordinate the perfect chuppah, whether you prefer a
                  traditional cloth canopy or a modern floral design.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  2. Ketubah Signing:
                </h3>
                <p className="md:text-xl mb-4">
                  This beautiful contract outlines your commitment to each
                  other. We work with calligraphers and artists to create a
                  stunning Ketubah that doubles as a keepsake.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">3. Bedeken:</h3>
                <p className="md:text-xl mb-4">
                  The veiling ceremony is a touching moment that signifies love
                  and respect. We coordinate this tradition to flow seamlessly
                  into your day.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  4. Seven Blessings:
                </h3>
                <p className="md:text-xl mb-4">
                  Recited during the ceremony, these blessings celebrate love,
                  joy, and community. We ensure the ceremony includes a
                  meaningful rendition of this tradition.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-2xl mb-2">
                  5. Breaking the Glass:
                </h3>
                <p className="md:text-xl mb-4">
                  One of the most iconic moments, breaking the glass symbolizes
                  the fragility of relationships and the joy of building a life
                  together. We make sure this moment is unforgettable.
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
          <section>
            <div className="max-w-3xl mx-auto py-10">
              <h2 className="text-3xl md:text-5xl text-center mb-10">FAQs</h2>
              <h3 className="text-2xl md:text-3xl my-4">
                #1. How much does a Jewish wedding cost in DC?
              </h3>
              <p className="md:text-xl mb-4">
                The cost of a Jewish wedding in the Washington, DC area can vary
                widely depending on factors such as the venue, guest count,
                catering, and specific traditions included. On average, couples
                can expect to spend between $50,000 and $75,000 for a
                well-rounded Jewish wedding in the area. We work closely with
                you to create a budget that aligns with your vision while
                maximizing value.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #2. Can you help with interfaith weddings?
              </h3>
              <p className="md:text-xl mb-4">
                Absolutely! We have extensive experience planning interfaith
                weddings and are sensitive to blending traditions in a way that
                respects both families.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #3. Do you work with specific rabbis or officiants?
              </h3>
              <p className="md:text-xl mb-4">
                We have relationships with officiants in the DC area and can
                help you find someone who aligns with your beliefs and
                preferences.
              </p>
              <h3 className="text-2xl md:text-3xl my-4">
                #4. What is your experience with Kosher catering?
              </h3>
              <p className="md:text-xl mb-4">
                Through our network, we can find the top Kosher caterers in the
                DC area to ensure your menu meets all dietary requirements
                without compromising on flavor.
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
