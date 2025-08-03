import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'
import Image from 'next/image'
const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export const metadata = {
  title:
    'Small Wedding Planner for Couples with Busy Schedules | Monica Browne Weddings',
  description:
    'Want a small wedding? We provide small wedding planning for couples looking for stress-free, intimate wedding experience. Book your free call today!',
  alternates: {
    canonical:
      'https://monicabrowneweddings.com/wedding-services/small-wedding-planning',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/wedding-services/small-wedding-planning',
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

export default function SmallWeddingPlanning() {
  return (
    <>
      <Hero
        herotext="Small Wedding Planning for Couples with Busy Schedules"
        buttonText="Book A Call Today!"
        imageUrl="/images/micro-wedding-cover-img.webp"
        textColor="text-white"
        heroSubText="We Help Busy Couples Create Small Intimate Weddings in DC, Maryland, and Northern Virginia"
      />
      <main>
        <section>
          <div className="container max-w-5xl mx-auto px-6 py-10 md:py-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl my-4 text-center max-w-2xl">
                Wedding Planner for Small Weddings in Washington, DC
              </h2>
              <p className="md:text-xl mb-4">
                Want a wedding day that's deeply personal, wonderfully intimate,
                and perfectly reflects your unique love story?
              </p>
              <p className="md:text-xl mb-4">
                If the thought of a grand, sprawling event feels overwhelming,
                or simply not "you," then you've found your small wedding
                planner.
              </p>
              <p className="md:text-xl mb-4">
                At Monica Browne Weddings, we specialize in planning beautiful,
                small weddings right here in the Washington D.C. area.
              </p>
              <p className="md:text-xl mb-4">
                We understand that an intimate wedding isn't about sacrificing
                elegance or joy; it's about concentrating your celebration on
                what truly matters: your commitment, surrounded by your closest
                loved ones.
              </p>
              <p className="md:text-xl mb-4">
                Whether you're dreaming of a chic micro-wedding in a historic
                Georgetown brownstone, a serene elopement by the cherry
                blossoms, or a charming gathering at a hidden gem venue, we'd be
                honored to be your dedicated <b>small wedding planner</b>.
              </p>
              <div className="center">
                <a href={calendly} target="_blank">
                  <Button
                    buttonText="Book a Call With Monica"
                    bgColor="bg-purple-500"
                    borderWidth="border-0"
                    textColor="text-white"
                    textSize="md:text-xl"
                  ></Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container max-w-5xl mx-auto px-6 py-10 md:py-10">
            <div className="lg:my-10">
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <Image
                  src="/images/micro-wedding-packages-maryland.webp"
                  alt="Small wedding planner | Monica Browne Weddings."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <div className="my-4 py-4 ">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl mb-8 text-center">
                    What are Micro Weddings?
                  </h2>
                  <p className="md:text-xl mb-4">
                    Micro weddings are intentionally scaled-down celebrations,
                    typically hosting 50 guests or fewer.
                  </p>
                  <p className="md:text-xl mb-4">
                    These intimate events prioritize a high-quality experience
                    over extensive guest lists, allowing for a deeply personal
                    and meaningful atmosphere.
                  </p>
                  <p className="md:text-xl mb-4">
                    Couples often discover that a smaller guest count can lead
                    to significant savings on elements like catering and
                    rentals.
                  </p>
                  <p className="md:text-xl mb-4">
                    This allows them to invest more in premium details, ensuring
                    a luxurious feel without the expansive costs of a large
                    affair.
                  </p>
                  <p className="md:text-xl mb-4">
                    Micro weddings also offer remarkable flexibility in venue
                    choice, opening doors to charming and unique locations
                    beyond traditional ballrooms, such as boutique hotels, art
                    galleries, or even private estates right here in Washington
                    D.C.
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
                  ></Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container max-w-5xl mx-auto px-6 md:py-10">
            <div className="lg:my-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-5xl mb-8 text-center">
                What Are The Advantages of Having a Small Wedding?
              </h2>
              <p className="md:text-xl mb-4">
                Choosing to have a small wedding in Washington D.C. isn't just a
                trend; it's a conscious choice for couples who value intimacy,
                meaning, and a truly personalized experience.
              </p>
              <p className="md:text-xl mb-4">
                While grand celebrations certainly have their place,
                micro-weddings and elopements offer a unique set of advantages
                that can make your special day even more memorable.
              </p>
              <p className="md:text-xl mb-4">
                Here's why so many couples are choosing to scale down and savor
                their celebrations:
              </p>
              <h3 className="text-2xl md:text-3xl mb-4">
                More Intimate & Meaningful Connections:
              </h3>
              <p className="md:text-xl mb-4">
                With a smaller guest list, you'll have the genuine opportunity
                to connect with every single person present.
              </p>
              <p className="md:text-xl mb-4">
                This fosters a deeper sense of togetherness and allows you to
                truly cherish moments with your closest friends and family,
                rather than feeling rushed to greet hundreds of guests.
              </p>
              <h3 className="text-2xl md:text-3xl mb-4">
                Reduced Stress, Increased Enjoyment:
              </h3>
              <p className="md:text-xl mb-4">
                Let's face it, larger weddings come with a lot of moving parts,
                opinions, and logistical complexities.
              </p>
              <p className="md:text-xl mb-4">
                A small wedding significantly cuts down on planning stress,
                allowing you to relax, be present, and genuinely enjoy the
                journey leading up to and including your wedding day.
              </p>
              <h3 className="text-2xl md:text-3xl mb-4">
                Cost-Effectiveness & Smart Splurges:
              </h3>
              <p className="md:text-xl mb-4">
                While "small" doesn't necessarily mean "cheap," it does mean you
                can allocate your budget more strategically. Instead of
                spreading funds thinly across a huge guest count, you can invest
                in gourmet food, luxurious details, a dream photographer, or a
                more unique DC wedding venue that might be out of reach for a
                larger event. It's about quality over quantity.
              </p>
              <h3 className="text-2xl md:text-3xl mb-4">
                Flexibility & Creative Freedom:
              </h3>
              <p className="md:text-xl mb-4">
                A smaller guest count opens up a world of possibilities for your
                celebration. You're not restricted to traditional large-scale
                venues and can explore charming restaurants, historic homes, art
                galleries, or even stunning outdoor spaces in Washington D.C.
                This flexibility allows for truly unique themes, decor, and
                experiences that reflect your personality as a couple.
              </p>
              <h3 className="text-2xl md:text-3xl mb-4">
                Emphasis on the Experience:
              </h3>
              <p className="md:text-xl mb-4">
                With fewer distractions, the focus shifts entirely to your love
                story and the vows you're exchanging. You can create an
                experience that feels authentic to you, whether that's an
                adventurous elopement or a sophisticated dinner party-style
                reception. It's about crafting memories that last a lifetime,
                centered on joy, connection, and profound personal significance.
              </p>
              <div className="center">
                <a href={calendly} target="_blank">
                  <Button
                    buttonText="Book a Call With Monica"
                    bgColor="bg-purple-500"
                    borderWidth="border-0"
                    textColor="text-white"
                    textSize="md:text-xl"
                  ></Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className=" bg-gray-800">
          <div className="lg:my-10 text-white">
            <div className="max-w-2xl mx-auto md:p-20 py-12 px-8 rounded-xl">
              <h2 className="text-3xl md:text-5xl text-center">
                Monica Makes Planning Small Weddings Easy
              </h2>
              <div>
                <div>
                  <div className="my-10">
                    <h4 className="text-2xl md:text-3xl">
                      1. Personalized Plan
                    </h4>
                    <p className="md:text-xl my-4">
                      Planning your small wedding should be an exciting and
                      enjoyable journey, not a stressful one. We've streamlined
                      our process into three clear steps, ensuring a seamless
                      and joyful path to your perfectly intimate celebration.
                    </p>
                  </div>
                  <div className="my-10">
                    <h4 className="text-2xl md:text-3xl">
                      2. Collaborative Planning & Design
                    </h4>
                    <p className="md:text-xl my-4">
                      We'll guide you through selecting the perfect small
                      wedding venues in DC and curating your ideal vendor team.
                      We'll collaborate closely on every design detail, ensuring
                      a personalized and beautiful aesthetic for your
                      micro-wedding.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-2xl md:text-3xl">
                      3. Execution & Your Beautiful Day
                    </h4>
                    <p className="md:text-xl my-4">
                      As your wedding day approaches, we finalize all logistics
                      and schedules, handling every detail behind the scenes. On
                      the day itself, our team ensures everything unfolds
                      seamlessly, allowing you to relax, celebrate, and fully
                      immerse yourselves in the joy of your perfectly planned
                      small wedding.
                    </p>
                  </div>
                </div>
                <div className="center">
                  <a href={calendly} target="_blank">
                    <Button
                      buttonText="Book a Call With Monica"
                      borderColor="border-black"
                      borderWidth="border-2"
                      textColor="text-white"
                      borderStyle="border-solid"
                    ></Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="my-10 md:my-20 px-6">
            <div className="lg:my-20 max-w-5xl mx-auto mb-10">
              <Image
                src="/images/micro-wedding-table-setup-linganore-wineries-maryland.webp"
                alt="Wedding table decorations by Monica Browne Weddings"
                loading="lazy"
                width="1500"
                height="1000"
              />
            </div>
            <div className="lg:my-20 max-w-3xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-5xl mb-10">
                  Our Small Wedding Planning Services in Washington D.C.
                </h2>
                <p className="md:text-xl mb-4">
                  Our goal as your dedicated small wedding planner DC is to
                  transform your vision into a stress-free reality, allowing you
                  to fully immerse yourselves in the joy of your special day.
                </p>
                <p className="md:text-xl mb-4">
                  Here's how we bring your intimate wedding to life:
                </p>
                <div>
                  <h3 className="text-2xl md:text-3xl my-4">
                    #1. Personalized Consultation & Visioning
                  </h3>
                  <p className="md:text-xl mb-4">
                    Our process begins by truly understanding your unique love
                    story, preferences, and the vision you hold for your micro
                    wedding. We'll delve into your style and budget, laying the
                    foundation for a celebration that perfectly reflects you.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl my-4">
                    #2. Venue Selection & Management
                  </h3>
                  <p className="md:text-xl mb-4">
                    Leveraging our deep knowledge of Washington D.C., we'll
                    guide you to the perfect intimate setting, from charming
                    urban spaces to historic gems. We handle all site visits and
                    contract negotiations, ensuring your chosen wedding venue is
                    ideal for your smaller guest list.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl my-4">
                    #3. Vendor Curation & Coordination
                  </h3>
                  <p className="md:text-xl mb-4">
                    We've cultivated a network of the finest local vendors who
                    excel at small-scale events, from photographers who capture
                    every nuanced moment to florists who craft exquisite
                    arrangements. Our team manages all communications and
                    logistics, so you don't have to.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl my-4">
                    #4. Design & Styling
                  </h3>
                  <p className="md:text-xl mb-4">
                    We'll work with you to create a cohesive aesthetic that
                    brings your vision to life, ensuring every element, from
                    decor and lighting to floral arrangements, enhances your
                    intimate wedding atmosphere. Our goal is to craft a visually
                    stunning and personalized experience for you and your
                    guests.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl my-4">
                    #5. Budget Management & Timeline Creation
                  </h3>
                  <p className="md:text-xl mb-4">
                    Staying on track is crucial, which is why we provide
                    transparent budget planning and diligent tracking. We also
                    create a detailed timeline, ensuring every aspect of your
                    small wedding unfolds seamlessly and stress-free.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl my-4">
                    #6. Day-Of Coordination
                  </h3>
                  <p className="md:text-xl mb-4">
                    On your wedding day, our team is on-site to meticulously
                    manage every detail, from vendor arrivals to guest flow.
                    This allows you to relax, immerse yourself in the joy of the
                    moment, and simply celebrate becoming Mr. and Mrs. (or Mrs.
                    and Mrs., or Mr. and Mr.!).
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl my-4">
                    #7. Elopement & Micro-Wedding Packages
                  </h3>
                  <p className="md:text-xl mb-4">
                    For those seeking an even simpler, yet still elegant,
                    celebration, we offer expertly designed DC elopement
                    packages and streamlined micro-wedding options. These
                    curated experiences provide a beautiful solution for couples
                    desiring minimal fuss and maximum romance.
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
          <div className="max-w-2xl mx-auto px-6 my-20">
            <h2 className="text-3xl lg:text-5xl my-8">
              Small Wedding Venues in and Around Washington, DC
            </h2>
            <p className="text-xl mb-4">
              These are just some of the small wedding venues in DC that will
              host your nano wedding.
            </p>
            <ul className="list-disc ml-10">
              <li>
                <p className="text-xl mb-4">
                  <a
                    href="https://www.districtwinery.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Distric Winery
                  </a>
                </p>
                <address>385 Water St SE, Washington, DC 20003</address>
                <p className="text-xl mb-4">
                  <small>(202) 484-9210</small>
                </p>
              </li>
              <li>
                <p className="text-xl mb-4">
                  <a
                    href="https://www.irongaterestaurantdc.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Iron Gate Restaurant
                  </a>
                </p>
                <address>1734 N St NW, Washington, DC 20036</address>
                <p className="text-xl mb-4">
                  <small>(202) 524-5202</small>
                </p>
              </li>
              <li className="mb-4">
                <p className="text-xl mb-4">
                  <a
                    href="https://fathomgallery.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fathom Gallery
                  </a>
                </p>
                <address>1333 14th St NW, Washington, DC 20005</address>
                <p className="text-xl mb-4">
                  <small>(202) 588-8111</small>
                </p>
              </li>
              <li className="mb-4">
                <p className="text-xl mb-4">
                  <a
                    href="https://www.swannhouse.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Swann House
                  </a>
                </p>
                <address>
                  1808 New Hampshire Ave NW, Washington, DC 20009
                </address>
                <p>
                  <small>(202) 265-4414</small>
                </p>
              </li>
              <li>
                <p className="text-xl mb-4">
                  <a
                    href="https://www.swannhouse.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Swann House
                  </a>
                </p>
                <address>
                  1808 New Hampshire Ave NW, Washington, DC 20009
                </address>
                <p>
                  <small>(202) 265-4414</small>
                </p>
              </li>
            </ul>
            <div className="center">
              <a href={calendly} target="_blank">
                <Button
                  buttonText="Book a Call With Monica"
                  borderColor="border-black"
                  borderWidth="border-2"
                  textColor="white"
                  borderStyle="border-solid"
                ></Button>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-slate-800 text-white">
          <div className="container mx-auto px-4 max-w-7xl py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl text-center mb-10">
              Service Areas
            </h2>
            <p className="md:text-xl mb-4 text-center max-w-2xl mx-auto">
              We plan small weddings in these cities around the Washington, DC,
              Maryland, Virginia metropolitan area (DMV)
            </p>
            <div className="grid md:grid-cols-3 gap-10 md:text-center my-10">
              <div>
                <p className="md:text-xl mb-4">Alexandria, VA</p>
                <p className="md:text-xl mb-4">Annapolis, MD</p>
                <p className="md:text-xl mb-4">Bethesda, MD</p>
                <p className="md:text-xl mb-4">Bowie, MD</p>
                <p className="md:text-xl mb-4">Chevy Chase, MD</p>
                <p className="md:text-xl mb-4">Columbia, MD</p>
              </div>
              <div>
                <p className="md:text-xl mb-4">Crofton MD</p>
                <p className="md:text-xl mb-4">Fairfax, VA</p>
                <p className="md:text-xl mb-4">Fort Washington, MD</p>
                <p className="md:text-xl mb-4">Great Falls, VA</p>
                <p className="md:text-xl mb-4">Olney, MD</p>
                <p className="md:text-xl mb-4">Potomac, MD</p>
              </div>
              <div>
                <p className="md:text-xl mb-4">Reston, VA</p>
                <p className="md:text-xl mb-4">Rockville, MD</p>
                <p className="md:text-xl mb-4">Silver Spring, MD</p>
                <p className="md:text-xl mb-4">Upper Marlboro, MD</p>
                <p className="md:text-xl mb-4">Waldorf, MD</p>
                <p className="md:text-xl mb-4">Washington, DC</p>
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
        <section>
          <div className="max-w-3xl mx-auto py-10 md:py-20 px-6">
            <h2 className="text-3xl md:text-5xl text-center mb-8">FAQs</h2>
            <div className="my-8">
              <h3 className="text-2xl md:text-3xl my-4">
                #1. How Many People Count for a Small Wedding?
              </h3>
              <p className="md:text-xl mb-4">
                A small wedding has a guest count of 50 people or less. Any
                number of more than 50 guests will be considered a medium or
                large wedding.
              </p>
            </div>
            <div className="my-8">
              <h3 className="text-2xl md:text-3xl my-4">
                #2. Who Do I Invite to My Small Wedding?
              </h3>
              <p className="md:text-xl mb-4">
                You want to invite your closest family and friends to your
                wedding, and the guest list is to be at most 50 people.
              </p>
            </div>
            <div className="my-8">
              <h3 className="text-2xl md:text-3xl my-4">
                #3. How Long Should a Micro Wedding Be?
              </h3>
              <p className="md:text-xl mb-4">
                Micro weddings are smaller than traditional weddings, with a
                smaller guest count, ceremony, and reception. Reception length
                will depend on how long you want to celebrate!
              </p>
            </div>
            <div className="my-8">
              <h3 className="text-2xl md:text-3xl my-4">
                #4. How much does a small wedding in Washington D.C. typically
                cost?
              </h3>
              <p className="md:text-xl mb-4">
                The cost of a small wedding in DC can vary widely based on guest
                count, venue choice, and your desired level of luxury and
                services.
              </p>
              <p className="md:text-xl mb-4">
                For a micro wedding (under 25 guests), couples in D.C. might
                expect to spend anywhere from <b>$6,000 to $25,000+</b>{' '}
                including venue, catering, photography, and other key vendors.
                {/* Elopements can range from a few thousand dollars (for just
                essentials) up to $10,000+ depending on photography, attire, and
                any included experiences. While often more cost-effective than
                large weddings, prioritizing quality vendors and unique
                experiences remains key for smaller events. */}
              </p>
            </div>
            <div className="my-8">
              <h3 className="text-2xl md:text-3xl my-4">
                #5. How Can I Save Money on a Micro Wedding?
              </h3>
              <p className="md:text-xl mb-4">
                Some ways to save money on a micro wedding include:
              </p>
              <ul className="wedding-saving-acts list-disc ml-8">
                <li className="md:text-xl mb-4">Reducing the guest count.</li>
                <li className="md:text-xl mb-4">
                  Asking friends and family to help with decor, food, and music.
                </li>
                <li className="md:text-xl mb-4">
                  Choosing simple decor and flowers.
                </li>
                <li className="md:text-xl mb-4">Selecting a shorter menu.</li>
                <li className="md:text-xl mb-4">
                  Saving on the wedding dress and suit.
                </li>
                <li className="md:text-xl mb-4">
                  Having a friend or family member do your makeup and hair.
                </li>
              </ul>
            </div>
            <p className="text-xl italic mt-10 text-center max-w-xl mx-auto">
              Book a 15-minute <i>no pressure call</i> with Monica and see she
              can help you plan your wedding.
            </p>
            <div className="center">
              <a href={calendly} target="_blank">
                <Button
                  buttonText="Book a Call With Monica"
                  bgColor="bg-purple-500"
                  borderWidth="border-0"
                  textColor="text-white"
                  textSize="md:text-xl"
                ></Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
