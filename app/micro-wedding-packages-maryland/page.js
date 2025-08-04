import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

const calendly = 'https://calendly.com/monica-17/monica-browne-weddings-call'

export const metadata = {
  title: 'Micro Wedding Packages for Maryland Couples | Monica Browne Weddings',
  description:
    'Want a unique nano wedding experience? We have micro wedding packages for Maryland couples looking for stress-free, intimate weddings. Call us today!',
  canonical: 'https://monicabrowneweddings.com/micro-wedding-packages-maryland',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/micro-wedding-packages-maryland',
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

export default function MicroWeddingPackages() {
  return (
    <>
      <Hero
        herotext="Micro Wedding Packages for Maryland Couples"
        buttonText="Book A Call Today!"
        imageUrl="/images/micro-wedding-cover-img.webp"
        textColor="text-white"
        heroSubText="We Help Busy Couples Create Small Intimate Weddings"
      />
      <main>
        <div className="container max-w-5xl mx-auto px-6 py-10 md:py-20">
          <section>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl my-8 text-center">
                Micro Wedding Packages
              </h2>
              <p className="md:text-xl mb-4">
                Are you looking to have a small, intimate ceremony somewhere in
                Maryland but don't want to sacrifice quality?
              </p>
              <p className="md:text-xl mb-4">
                If so, a micro wedding package may be what you're looking for.
              </p>
              <p className="md:text-xl mb-4">
                A micro wedding package offers all the amenities of a
                traditional wedding but on a much smaller scale. This can be
                perfect for couples looking to save money and time while still
                having a beautiful and memorable wedding day.
              </p>
              <p className="md:text-xl mb-4">
                So if you want a small, intimate wedding without sacrificing
                quality, a micro wedding may be just what you want.
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
          <section>
            <div className="lg:my-20">
              <div className="md:flex gap-8 items-center mb-8">
                <img
                  src="/images/micro-wedding-packages-maryland.webp"
                  alt="Micro wedding packages in Maryland."
                  loading="lazy"
                  width="472"
                  height="708"
                />
                <div className="my-4">
                  <h2 className="text-2xl md:text-3xl lg:text-5xl mb-8">
                    What are Micro Weddings?
                  </h2>
                  <p className="md:text-xl mb-4">
                    Micro weddings are smaller events that typically have 50
                    guests or less.
                  </p>
                  <p className="md:text-xl mb-4">
                    Unlike a big wedding, these events often focus on quality
                    over quantity.
                  </p>
                  <p className="md:text-xl mb-4">
                    Some couples save money with a smaller guest list, less
                    food, and a smaller vendor team.
                  </p>
                  <p className="md:text-xl mb-4">
                    Micro weddings can be held at various venues, from
                    traditional venues to more unique locations like wineries or
                    exotic beach locations.
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
          </section>
          <section>
            <div className="lg:my-20 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl lg:text-5xl mb-8">
                What Are The Advantages of Having a Micro Wedding in Maryland
              </h2>
              <p className="md:text-xl mb-4">
                In recent years, more and more couples in Maryland have opted
                for small weddings over large, traditional events. And several
                benefits come along with having a smaller intimate affair.
              </p>
              <p className="md:text-xl mb-4">
                Here are just a few of the many benefits:
              </p>
              <h3 className="text-2xl md:text-3xl mb-4">You Can Save Money</h3>
              <p className="md:text-xl mb-4">
                One of the biggest benefits of micro weddings is that you can
                save money.
              </p>
              <p className="md:text-xl mb-4">
                With the{' '}
                <Link href="/blog/how-much-does-a-100-person-wedding-cost">
                  cost of a wedding
                </Link>{' '}
                in the Washington, DC area being where it is, you can spend less
                by having a small wedding.
              </p>
              <p className="md:text-xl mb-4">
                You can spend less on catering, ceremony and reception
                decorations, and your venue.
              </p>
              <p className="md:text-xl mb-4">
                But a micro wedding doesn't mean less money for every couple.
              </p>
              <p className="md:text-xl mb-4">
                You can have a micro wedding with 50 guests and still spend
                between $25,000 and $40,000. It all depends on what you want to
                spend money on.
              </p>
              <h3 className="text-2xl md:text-3xl mb-4">You'll Save Time</h3>
              <p className="md:text-xl mb-4">
                Planning a large traditional wedding can be extremely
                time-consuming. But with a smaller event, you'll have more time
                to enjoy the planning process and focus on the essential
                details.
              </p>
              <p className="md:text-xl mb-4">
                Plus, you won't have to spend as much time coordinating with
                your vendors or dealing with logistics.
              </p>
              <h3 className="text-2xl md:text-3xl mb-4">
                You Can be More Creative
              </h3>
              <p className="md:text-xl mb-4">
                When you have a nano event, you have more freedom to be creative
                with your decorations and details. You can choose to have a
                daytime wedding or a {''}
                <Link href="/blog/wedding-at-night">wedding at night</Link>.
                Plus, you can get discounts on your vendor services during a
                smaller event.
              </p>
              <h3 className="text-2xl md:text-3xl mb-4">
                You Can Focus on Quality Over Quantity
              </h3>
              <p className="md:text-xl mb-4">
                One of the best things about having a micro wedding is that you
                can focus on quality over quantity. When you have a smaller
                guest list, you can spend more time and money on making sure
                each guest has a wonderful time. Plus, you'll be able to create
                a more intimate setting that will make your wedding day even
                more special.
              </p>
              <p className="md:text-xl mb-4">
                Micro weddings are becoming increasingly popular, so if you're
                considering having one, start planning your dream day today with
                one of Maryland's unique micro wedding packages.
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
          <section>
            <div className="lg:my-20">
              <div className="md:grid grid-cols-2 gap-8 items-center">
                <img
                  src="/images/couple-at-winery-wedding-venue-in-maryland.webp"
                  alt="Couple at winery wedding venue in Maryland."
                  loading="lazy"
                  className="my-8"
                />
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-5xl mb-8">
                    What are Your Next Steps in Planning Your Microwedding?
                  </h2>
                  <h3 className="text-2xl md:text-3xl mb-4">
                    #1. Set a Budget
                  </h3>
                  <p className="md:text-xl mb-4">
                    The first thing you'll need to do when planning is to set a
                    budget. You'll save money on everything from your venue to
                    catering when you have a smaller guest list. Plus, you can
                    often get discounts on your wedding vendor services when you
                    have a smaller wedding.
                  </p>
                  <h3 className="text-2xl md:text-3xl mb-4">
                    #2. Choose Your Wedding Venue
                  </h3>
                  <p className="md:text-xl mb-4">
                    One of the best things about having a small wedding in
                    Maryland is that you can be creative with your venue. You
                    can choose to have your custom ceremony and reception at the
                    exact location or opt for a unique setting like a park or an
                    outdoor garden venue.
                  </p>
                  <h3 className="text-2xl md:text-3xl mb-4">
                    #3. Choose Your Guest List
                  </h3>
                  <p className="md:text-xl mb-4">
                    Another good thing about having a micro wedding is focusing
                    on quality over quantity. With a smaller guest list, you can
                    spend more time and money ensuring each guest has a
                    wonderful time. Plus, you'll be able to create a more
                    custom, private setting that will make your wedding day even
                    more special.
                  </p>
                  <h3 className="text-2xl md:text-3xl mb-4">
                    #4. Start Planning
                  </h3>
                  <p className="md:text-xl mb-4">
                    Now that you know what a micro wedding is and how to plan
                    one, it's time to start planning your dream day. With some
                    help from Monica Browne Weddings, you can have a small,
                    unique wedding you'll love.
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
          </section>
          <section>
            <div className="lg:my-20">
              <div className="max-w-3xl mx-auto bg-gray-50 md:p-20 py-12 px-8 rounded-xl">
                <h2 className="text-3xl md:text-5xl">
                  Monica Makes Planning Your Nano Weddings Easy
                </h2>
                <div>
                  <div>
                    <div className="my-10">
                      <h4 className="text-2xl md:text-3xl">
                        1. Talk To Monica
                      </h4>
                      <p className="md:text-xl my-4">
                        Call and talk with Monica and see how she can help you
                        plan everything.
                      </p>
                    </div>
                    <div className="my-10">
                      <h4 className="text-2xl md:text-3xl">
                        2. Create A Budget
                      </h4>
                      <p className="md:text-xl my-4">
                        Work out your costs and start planning your wedding
                        details.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl">
                        3. Enjoy Your Wedding Day
                      </h4>
                      <p className="md:text-xl my-4">
                        Just enjoy your wedding day and cherish the moment.
                      </p>
                    </div>
                  </div>
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
              </div>
            </div>
          </section>
          {/* <section>
            <img
              src="/images/micro-wedding-table-setup-linganore-wineries-maryland.webp"
              alt="Wedding table decorations by Monica Browne Weddings"
              loading="lazy"
              width="1500"
              height="1000"
            />
          </section> */}
          <section>
            <div className="my-10 md:my-20">
              <div className="lg:my-20 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl mb-10">
                  What Do I Need to Plan My Micro Wedding?
                </h2>
                <img
                  src="/images/micro-wedding-table-setup-linganore-wineries-maryland.webp"
                  alt="Wedding table decorations by Monica Browne Weddings"
                  loading="lazy"
                  width="1500"
                  height="1000"
                />
                <div>
                  <div>
                    <h3 className="text-2xl md:text-3xl my-4">
                      #1. Guest list
                    </h3>
                    <p className="md:text-xl mb-4">
                      Determine who you want to invite to your micro wedding. As
                      it's a small event, consider inviting only your closest
                      family and friends.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl my-4">#2. Venue</h3>
                    <p className="md:text-xl mb-4">
                      Choose a venue that can accommodate your guest count.It
                      can be an outdoor location, a private residence, or a
                      smaller event space.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl my-4">#3. Vendors</h3>
                    <p className="md:text-xl mb-4">
                      Research and book vendors essential to your micro
                      weddings, such as a photographer, caterer, florist, and
                      musician. You may also need to rent chairs, tables,
                      linens, and other decor items.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl my-4">#4. Ceremony</h3>
                    <p className="md:text-xl mb-4">
                      Decide on the type of ceremony you want, whether a
                      traditional religious ceremony or something more
                      personalized. Remember the officiant.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl my-4">#5. Reception</h3>
                    <p className="md:text-xl mb-4">
                      Reception: Plan your reception, including dinner service,
                      speeches, and any entertainment you want.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl my-4">#6. Decor</h3>
                    <p className="md:text-xl mb-4">
                      Decide on the type of wedding decor you want, including
                      flowers, lighting, and other decor elements that can help
                      create the desired atmosphere.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl my-4">
                      #7. Wedding Attire
                    </h3>
                    <p className="md:text-xl mb-4">
                      Choose wedding attire that fits the size and style of your
                      small wedding.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl my-4">
                      #8. Invitations
                    </h3>
                    <p className="md:text-xl mb-4">
                      Design and send out invitations to your guests, providing
                      all the necessary details about the event.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl my-4">#9. Timeline</h3>
                    <p className="md:text-xl mb-4">
                      Create a detailed{' '}
                      <Link
                        href="/blog/wedding-day-timeline-4pm-ceremony"
                        passHref
                      >
                        timeline
                      </Link>{' '}
                      of your micro wedding, including the schedule for the day
                      and any important events you want to include.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl my-4">
                      #10. Wedding Planner
                    </h3>
                    <p className="md:text-xl mb-4">
                      Hiring a wedding planner can be incredibly helpful,
                      especially if you want to ensure your event runs smoothly
                      and stress-free.
                    </p>
                    <p className="md:text-xl mb-4">
                      A{' '}
                      <Link href="/wedding-services/wedding-planner-bowie-md">
                        wedding planner
                      </Link>{' '}
                      can assist with all aspects of the planning process, from
                      creating a budget and timeline to sourcing vendors and
                      coordinating the day-of logistics.
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
          {/* <section>
            <h2 className="text-3xl my-8">Wedding Gallery</h2>
            <div className="grid lg:grid-cols-3 gap-8">
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
              <Link href="/wedding-gallery">
                <Button
                  buttonText="See More Photos"
                  borderColor="border-black"
                  borderWidth="border-2"
                  textColor="white"
                  borderStyle="border-solid"
                ></Button>
              </Link>{' '}
            </div>
          </section> */}
          <section>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl lg:text-5xl my-8">
                Small Wedding Venues in Maryland to Consider
              </h2>
              <p className="text-xl mb-4">
                These are just some of the small wedding venues in Maryland that
                will host your nano wedding.
              </p>
              <ul className="list-disc ml-10">
                <li>
                  <p className="text-xl mb-4">
                    <a
                      href="https://www.google.com/search?q=Prisms+Annapolis&client=firefox-b-1-d&ei=a53_Yr7xLP-viLMPxJ2ayAg&ved=0ahUKEwj-0rT-jdP5AhX_F2IAHcSOBokQ4dUDCA0&uact=5&oq=Prisms+Annapolis&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEB4QFjIGCAAQHhAWMgIIJjoHCAAQRxCwAzoKCAAQRxCwAxDJAzoHCAAQsAMQQzoSCC4QxwEQrwEQyAMQsAMQQxgBSgQIQRgASgQIRhgBUKMKWKMKYIkRaANwAXgAgAE1iAE1kgEBMZgBAKABAqABAcgBFMABAdoBBggBEAEYCA&sclient=gws-wiz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Prisms Annapolis
                    </a>
                  </p>
                  <address>49 Spa Rd, Annapolis, MD 21401</address>
                  <p className="text-xl mb-4">
                    <small>(410) 295-0104</small>
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <a
                      href="https://www.google.com/search?q=Annapolis+Maritime+Museum&client=firefox-b-1-d&ei=Tp3_YoSWOtzm5NoP-M2A2Ag&ved=0ahUKEwiE9dfwjdP5AhVcM1kFHfgmAIsQ4dUDCA0&uact=5&oq=Annapolis+Maritime+Museum&gs_lcp=Cgdnd3Mtd2l6EAMyEQguEIAEELEDEIMBEMcBEK8BMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADOgoIABBHELADEMkDOg0ILhDHARCvARCwAxBDSgQIQRgASgQIRhgAUIEMWIEMYOATaANwAXgAgAFFiAFFkgEBMZgBAKABAqABAcgBCcABAQ&sclient=gws-wiz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Annapolis Maritime Museum
                    </a>
                  </p>
                  <address> 723 Second St, Annapolis, MD 21403</address>
                  <p className="text-xl mb-4">
                    <small>(410) 271-7271</small>
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <a
                      href="https://www.google.com/search?q=The+Country+Club+at+Woodmore&client=firefox-b-1-d&ei=NJ3_Yt6FA7msiLMPqoSe4Aw&ved=0ahUKEwje7-3jjdP5AhU5FmIAHSqCB8wQ4dUDCA0&uact=5&oq=The+Country+Club+at+Woodmore&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjICCCY6BwgAEEcQsAM6EgguEMcBEK8BEMgDELADEEMYAToSCC4QxwEQ0QMQyAMQsAMQQxgBSgQIQRgASgQIRhgAUOYKWOYKYOMTaANwAXgAgAFliAFlkgEDMC4xmAEAoAECoAEByAEMwAEB2gEECAEYCA&sclient=gws-wiz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The Country Club at Woodmore
                    </a>
                  </p>
                  <address>
                    12320 Pleasant Prospect, Mitchellville, MD 20721
                  </address>
                  <p>
                    <small>(301) 249-6100</small>
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <a
                      href="https://www.google.com/search?q=Historic+Oakland&client=firefox-b-1-d&ei=F53_YryoOsKq5NoPq9OQoA8&ved=0ahUKEwj8j7vWjdP5AhVCFVkFHaspBPQQ4dUDCA0&uact=5&oq=Historic+Oakland&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEOgcIABBHELADOhIILhDHARCvARDIAxCwAxBDGAFKBAhBGABKBAhGGABQ7BJY7BJg8iFoBHABeACAAU6IAU6SAQExmAEAoAECoAEByAELwAEB2gEECAEYCA&sclient=gws-wiz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Historic Oakland
                    </a>
                  </p>
                  <address>5430 Vantage Point Rd, Columbia, MD 21044</address>
                  <p>
                    <small>(410) 730-4801</small>
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <a
                      href="https://www.google.com/search?q=The+Blackwall+Barn+and+Lodge&client=firefox-b-1-d&ei=_Zz_YsK2Dtew5NoPxKeKsA4&ved=0ahUKEwiCqdzJjdP5AhVXGFkFHcSTAuYQ4dUDCA0&uact=5&oq=The+Blackwall+Barn+and+Lodge&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyCQgAEB4QyQMQFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWOgoIABBHELADEMkDOgcIABBHELADSgQIQRgASgQIRhgAUOEJWOEJYJYSaANwAXgAgAFDiAFDkgEBMZgBAKABAqABAcgBCMABAQ&sclient=gws-wiz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      The Blackwall Barn and Lodge
                    </a>
                  </p>
                  <address>329 Gambrills Rd, Gambrills, MD 21054</address>
                  <p>
                    <small>(410) 317-2276</small>
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <a
                      href="https://www.google.com/search?q=William+Paca+House+and+Garden&client=firefox-b-1-d&ei=45z_YoCsE4uh5NoPqoymqA0&ved=0ahUKEwjAqa69jdP5AhWLEFkFHSqGCdUQ4dUDCA0&uact=5&oq=William+Paca+House+and+Garden&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMgIIJjIFCAAQhgM6BwgAEEcQsAM6CggAEEcQsAMQyQM6BwgAELADEEM6EgguEMcBEK8BEMgDELADEEMYAUoECEEYAEoECEYYAVCDDFiDDGDpFmgDcAF4AIABU4gBU5IBATGYAQCgAQKgAQHIARTAAQHaAQYIARABGAg&sclient=gws-wiz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      William Paca House and Garden
                    </a>
                  </p>
                  <address>186 Prince George St, Annapolis, MD 21401</address>
                  <p className="text-xl mb-4">
                    <small>(410) 990-4543</small>
                  </p>
                </li>
                <li>
                  <p className="text-xl mb-4">
                    <a
                      href="https://www.google.com/search?q=Chesapeake+Bay+Maritime+Museum&client=firefox-b-1-d&ei=OZz_YvbzLcPn5NoP-rKuyA4&ved=0ahUKEwi29MDsjNP5AhXDM1kFHXqZC-kQ4dUDCA0&uact=5&oq=Chesapeake+Bay+Maritime+Museum&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEIAEEMcBEK8BMggIABCABBDJAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgsILhCABBDHARCvATIFCAAQgAQyBQgAEIAEOgcIABBHELADOhIILhDHARCvARDIAxCwAxBDGAFKBAhBGABKBAhGGABQyglYyglggRJoA3ABeACAAUyIAUySAQExmAEAoAECoAEByAELwAEB2gEECAEYCA&sclient=gws-wiz"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Chesapeake Bay Maritime Museum
                    </a>
                  </p>
                  <address>213 N Talbot St, St Michaels, MD 21663</address>
                  <p className="text-xl mb-4">
                    <small>(410) 745-2916</small>
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
          <section>
            <div className="max-w-3xl mx-auto py-10 md:py-20">
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
                  #4. How Much Should I Save For a Micro Wedding?
                </h3>
                <p className="md:text-xl mb-4">
                  You can save between $5,000 to $30,000 for your micro wedding.
                  Remember, this is your wedding, and you can spend any amount
                  you wish to. A micro wedding is not about how much money you
                  spend. It's more about how many guests you invite.
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
                    Asking friends and family to help with decor, food, and
                    music.
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
        </div>
      </main>
    </>
  )
}
