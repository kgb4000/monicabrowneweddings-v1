import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title: 'About Monica Browne Weddings',
  description:
    'Monica Browne Weddings is a wedding planning company dedicated to hepling busy couples plan their dream wedding.',
  alternates: {
    canonical: 'https://monicabrowneweddings.com/about',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/about',
    site_name: 'Monica Browne Weddings',
    images: [
      {
        url: 'https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495886/monica-browne-wedding-planner_qa1xcl.webp',
        width: 1500,
        height: 1000,
        alt: 'Couple just married, walking down the aisle.',
      },
    ],
    description:
      'We are a wedding planning company dedicated to making sure that you enjoy planning your wedding.',
  },
}

export default function About() {
  return (
    <>
      <div className="my-20 text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-center">
          About Monica Browne Weddings
        </h1>
      </div>
      <main itemScope itemType="https://schema.org/LocalBusiness">
        <section>
          <div className="container max-w-3xl mx-auto px-6 py-10 md:py-20">
            {/* <h2 className="text-3xl md:text-5xl text-center mb-8">About Us</h2> */}
            <p className="md:text-xl mb-4" itemProp="description">
              Monica Browne Weddings is a wedding planner in Bowie, MD
              delivering wedding planning services in{' '}
              <Link href="/wedding-planner-bowie-md">Bowie</Link>,{' '}
              <Link href="/blog/dc-wedding-planning-services">
                Washington, DC
              </Link>
              , and Northern Virginia.
            </p>
            <p className="md:text-xl mb-4">
              We that a lot of couples in our area don't have a lot of time,
              even to plan their own wedding.
            </p>
            <p className="md:text-xl mb-4">That's where we come in.</p>
            <p className="md:text-xl mb-4">
              We can help you plan the wedding of your dreams and give you more
              free time to do the essential things you need to do.
            </p>
            <div className="center">
              <a href={calendly} rel="noreferrer" target="_blank">
                <Button
                  buttonText="Book a call with Monica"
                  bgColor="bg-purple-500"
                  borderWidth="border-0"
                  textColor="text-white"
                  textSize="md:text-xl"
                ></Button>
              </a>
            </div>
          </div>
        </section>
        <section className="bg-slate-50 text-black">
          <div className="container mx-auto px-6 max-w-3xl py-10 md:py-20">
            <div>
              <h2 className="text-3xl md:text-5xl max-w-2xl mx-auto text-center pb-6 font-bold">
                Planning your wedding should be a fun experience
              </h2>
              <img
                src="images/happy-couple.webp"
                loading="lazy"
                width="100%"
                height="auto"
                className="pb-4"
              />
              <p className="md:text-xl mb-4">
                But for some busy couples, it can be frustrating and stressful.
              </p>
              <p className="md:text-xl mb-4">
                Some couples are too busy in their day-to-day lives to take the
                time to plan the wedding they want.
              </p>
              <p className="md:text-xl mb-4">
                That's where a professional wedding planner like Monica Browne
                Weddings can help. We're a full-service event planning company
                that will take care of your entire wedding planning process.
              </p>
              <p className="md:text-xl mb-4">
                Our{' '}
                <Link href="/blog/dc-wedding-planning-services">
                  wedding planning services
                </Link>{' '}
                can give you the freedom and flexibility to plan your event and
                maintain your busy lifestyle.
              </p>
              <p className="md:text-xl mb-4">
                We also give you helpful tips and suggestions, which will save
                you from worrying about all the essential and unique details.
              </p>
              <p className="md:text-xl mb-4">
                Our talented team of professionals will work closely with you to
                create a custom plan that fits your vision and budget.
              </p>
              <p className="md:text-xl mb-4">
                As professional event planners, we will help you choose the best
                vendors, pick a theme and style for your event, and handle all
                the small details enjoy yourself.
              </p>
              <p className="md:text-xl mb-4">
                We will help you plan the perfect wedding. We will help make it
                a meaningful and happy, fun experience, not a stressful one.
              </p>
              <p className="md:text-xl mb-4">
                With our 15 years of experience as event planners, we are one of
                the top wedding planners in the Maryland area that can bring
                your vision to life.
              </p>
              <p className="md:text-xl mb-4">
                Check out some of our{' '}
                <a
                  href="https://www.google.com/search?q=monica+browne+weddings&oq=monica+browne+weddings&gs_lcrp=EgZjaHJvbWUqCQgAEEUYOxiABDIJCAAQRRg7GIAEMgoIARAAGIAEGKIEMgoIAhAAGIAEGKIEMgoIAxAAGIAEGKIEMgYIBBBFGDsyBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQg3ODQ3ajFqN6gCCLACAQ&sourceid=chrome&ie=UTF-8#mpd=~2535347168599140905/customers/reviews"
                  target="_blank"
                >
                  5-star reviews
                </a>{' '}
                on Google. If you are looking for a wedding event planner in
                Maryland, DC, and Virginia, please contact us today to schedule
                a consultation.
              </p>
              <p className="md:text-xl mb-4">
                We are happy to help you make history.
              </p>
              <p className="md:text-xl italic max-w-xl text-center mx-auto py-6">
                Book a 15-minute call with Monica and see how she can help you
                plan your dream wedding today!
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
          <div className="container max-w-3xl mx-auto px-6  py-10 md:py-20">
            <h2 className="text-3xl md:text-5xl text-center mb-8">
              How Monica Can Help You
            </h2>
            <div>
              <ul className="ml-8 list-disc my-4">
                <li className="md:text-xl mb-4">
                  Help prepare and manage your wedding budget
                </li>
                <li className="md:text-xl mb-4">
                  Keep you organized to cut stress
                </li>
                <li className="md:text-xl mb-4">
                  <Link href="/wedding-services/full-service-wedding-planning">
                    Full-service wedding planning
                  </Link>
                  .
                </li>
                <li className="md:text-xl mb-4">
                  Help research and choose venues and vendors
                </li>
                <li className="md:text-xl mb-4">
                  <Link href="/wedding-flowers">Wedding flowers</Link>
                </li>
                <li className="md:text-xl mb-4">
                  Organize your wedding rehearsal and communicate with your
                  wedding party
                </li>
                <li className="md:text-xl mb-4">
                  <Link href="/wedding-services/partial-wedding-planning">
                    Partial wedding planning
                  </Link>
                </li>
              </ul>
              <ul className="ml-8 list-disc my-4">
                <li className="md:text-xl mb-4">
                  Read and negotiate vendor contracts
                </li>
                <li className="md:text-xl mb-4">
                  Communicate with your wedding party and guests
                </li>
                <li className="md:text-xl mb-4">
                  Handle problems that may come up
                </li>
                <li className="md:text-xl mb-4">
                  Be a dependable resource with 15+ years of experience, so we
                  know what to do
                </li>
                <li className="md:text-xl mb-4">
                  <Link href="/day-of-wedding-coordinator-washington-dc">
                    Day of Wedding Coordination
                  </Link>
                </li>
              </ul>
            </div>
            <div className="center">
              <Link href="/wedding-services">
                <Button
                  buttonText="See Our Services"
                  bgColor="bg-purple-500"
                  borderWidth="border-0"
                  textColor="text-white"
                  textSize="md:text-xl"
                ></Button>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="container max-w-3xl mx-auto px-6 py-10 md-py-20">
            <h2 className="text-3xl mb-8"> About Monica</h2>
            <div>
              <img
                src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631495886/monica-browne-wedding-planner_qa1xcl.webp"
                className="about-img"
                alt="Monica browne Wedding Planner"
                title="Monica Browne Wedding Planner"
                loading="lazy"
              />
              <h2 className="text-2xl my-4">Monica Browne</h2>
              <p className="md:text-xl mb-4">
                Planning a wedding or special event is something that I live
                for!
              </p>
              <p className="md:text-xl mb-4">
                I love when two people are so in love that they want to join
                together, create a family, and start a great life together.
              </p>
              <p className="md:text-xl mb-4">
                I also love being a part of a new beginning for every one of my
                clients.
              </p>
              <p className="md:text-xl mb-4">
                My family is my everything to me! I am a wife, mother,
                confidant, and friend.
              </p>
              <p className="md:text-xl mb-4">
                I should also add I am a massive fan of chocolate, and I love to
                enjoy a glass of red wine while binge-watching horror films!
              </p>
              <p className="md:text-xl mb-4">
                When I am not planning weddings or{' '}
                <Link href="/wedding-flowers">creating floral designs</Link>, I
                like traveling, exploring different cultures, and trying other
                foods. Big emphasis on the food!
              </p>
              <p className="md:text-xl mb-4">What about my love for events?</p>
              <p className="md:text-xl mb-4">
                My desire to enter the event planning industry was when I was a
                little girl and witnessed fabulous events by my parents and
                grandparents.
              </p>
              <p className="md:text-xl mb-4">
                That desire grew into me working with wonderful clients like
                you.
              </p>
              <p className="md:text-xl mb-4">
                Over this past decade and a half, I've shared heartfelt memories
                and created bonds with clients that will last a lifetime.
              </p>
              <p className="md:text-xl mb-4">
                I am excited and looking forward to hearing more about your
                vision and working with you.
              </p>
              <p className="md:text-xl mb-4">Book a call and let's talk.</p>
            </div>
            <div className="center">
              <a href={calendly} rel="noreferrer" target="_blank">
                <Button
                  buttonText="Book a call with Monica"
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
