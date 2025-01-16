import Link from 'next/link'
import Hero from '@/components/Hero'
import Button from '@/components/Button'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export const metadata = {
  title: 'Testimonials from Clients That Love Us | Monica Browne Weddings',
  description:
    'These are just some of the testimonials that we received from our happily married couples.Book a call today!',
  canonical: 'https://monicabrowneweddings.com/testimonials',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/testimonials',
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

export default function Testimonials() {
  return (
    <div>
      <Hero
        herotext="Testimonials"
        heroSubText="Kind words from the many happy couples we've work with"
        buttonText="Book a Call With Monica"
        textColor="text-white"
        imageUrl="/images/sweetheart-table-flower-background.jpg"
      />
      <main>
        <section>
          <div className="container max-w-3xl mx-auto px-6 py-10 md:py-20">
            <div>
              <h2 className="text-3xl md:text-5xl mb-10 md:mb-20 text-center max-w-2xl mx-auto leading-normal">
                Bride Testimonials
              </h2>
              <div className="mb-10">
                <p className="md:text-xl mb-4">
                  Mrs. Browne came as a recommendation from my wedding cake
                  designer and I couldn't be happier. Ms. Browne was prompt,
                  responsive, and incredibly knowledgeable about flowers and
                  design. She kept me updated and sent texts of her selections
                  from the flower market the week of my wedding. She delivered
                  my flowers the day before my event with thorough care
                  instructions and carefully packaged. I would, and have
                  recommended Ms. Browne for additional events and will be using
                  her for my wedding reception in 2022.
                </p>
                <p className="text-center italic py-4 font-bold md:text-xl mb-4">
                  Kimberley Hooper-Twumasi
                </p>
              </div>
              <div className="mb-10">
                <p className="md:text-xl mb-4">
                  Monica and her team made our wedding amazing! She was our
                  month of planner and helped us tremendously. I’m positive that
                  our wedding day wouldn’t have gone as seamlessly as it did if
                  Monica wasn’t there to manage everything. She went above and
                  beyond to make our wedding perfect and we don’t have a single
                  thing we would change about the day. Go ahead and book Monica
                  right now if you’re contemplating a wedding planner!!
                </p>
                <p className="text-center italic py-4 font-bold md:text-xl mb-4">
                  Emily Menge
                </p>
              </div>
              <div className="mb-10">
                <p className="md:text-xl mb-4">
                  The best thing I could have done for our daughter's wedding
                  was hire Monica Browne of Monica Brown Weddings to be our
                  Coordinator. A true professional; she is detailed oriented and
                  extremely easy to work with. There are not enough stars to
                  give Monica for a true rating (10 ++++…). She knows exactly
                  what the bride would need and how to go about it. The day of
                  the event, Monica and her team awesome professional. We would
                  highly recommend Monica Browne Weddings!
                </p>
                <p className="text-center italic py-4 font-bold md:text-xl mb-4">
                  Whitney Ames
                </p>
              </div>
              <div className="mb-10">
                <p className="md:text-xl mb-4">
                  Working with Monica as my wedding planner was one of the best
                  decisions I made. At the time, I lived in Philadelphia while I
                  was planning for my wedding in Washington DC. With Monica’s
                  expertise and experience with wedding planning, I was left
                  stress free on my wedding day. Each month, Monica sent me
                  monthly “to-do lists“ to ensure I remained on task. Thanks to
                  Monica, I was able to find vendors to fit my budget. Once
                  vendors were hired for my big day, Monica remained in constant
                  communication with them to ensure everyone was on the same
                  page. Even though I was no Bridezilla, I definitely had my
                  moments. Through those moments, Monica remained professional
                  at all times and was able to get me back on track. I would
                  definitely recommend Monica’s services to any bride I meet. I
                  am looking forward to working with her in the future when my
                  sister gets married!
                </p>
                <p className="text-center italic py-4 font-bold md:text-xl mb-4">
                  Diane
                </p>
              </div>
              <div className="center">
                <a href={calendly}>
                  <Button
                    buttonText="Book a call with Monica"
                    bgColor="bg-purple-500"
                    borderWidth="border-0"
                    textColor="text-white"
                    textSize="md:text-xl"
                  />
                </a>
              </div>
              <div className="my-20">
                <p className="md:text-xl mb-4">
                  I met Monica in Summer 2008, while I served as a Bridesmaid
                  for my best friend’s wedding. She was able to communicate the
                  wishes of the Bride & Groom, so that things would run
                  smoothly. She comes highly recommended by not only my friend,
                  but to others & has a GREAT Vendor List. Overall, she has a
                  great demeanor & is a pleasure to work with.
                </p>
                <p className="text-center italic py-4 font-bold md:text-xl mb-4">
                  Donna McIntyre
                </p>
              </div>
              <div className="mb-10">
                <p className="md:text-xl mb-4">
                  I am so thankful that I used Monica Browne Weddings for my
                  rooftop wedding in the summer of 2010. It has been 5 years and
                  I still have family and friends tell me how beautiful my
                  wedding day was. I could not have been more pleased at their
                  work. They listened to all my wants and carried them out
                  exactly how I asked them to. They were nice, understanding and
                  very easy to work with. They kept me on track and made the
                  experience enjoyable. I am very particular and I like to be
                  involved in everything however, I was able to let go and have
                  them handle everything. I was not disappointed at all and my
                  day turned out perfect. I could go on and on. I would
                  recommend them over and over again.
                </p>
                <p className="text-center italic py-4 font-bold md:text-xl mb-4">
                  Katrina Edmonds
                </p>
              </div>
              <div className="mb-10">
                <p className="md:text-xl mb-4">
                  Monica made my wedding day a success. I would recommend their
                  services to anyone looking for a group of women that come
                  together professionally to make such an important day
                  amazing!!!!
                </p>
                <p className="text-center italic py-4 font-bold md:text-xl mb-4">
                  Lisa
                </p>
              </div>
              <div className="mb-10">
                <p className="md:text-xl mb-4">
                  Choosing Monica Browne Weddings to meet my needs during one of
                  the most important events in my life was a decision that hosts
                  no regrets. True professionalism, at its best! While planning
                  a wedding can be very stressful and hectic, my experience with
                  Monica Browne Weddings was definitely one that was fun and
                  exciting! All tasks were completed in a very organized manner
                  and with so many things to accomplish, such organization was
                  very important. Monica Browne Weddings also referred me to
                  many vendors that were equally very professional. As a result,
                  my wedding day was truly all that I had dreamed it to be and
                  more! It was at last the vivid reality of all of the planning
                  and decision making done in the prior months. I am so thankful
                  for the memories I now have to cherish for a lifetime. Monica
                  Browne Weddings……..I can’t thank you enough!
                </p>
                <p className="text-center italic py-4 font-bold md:text-xl mb-4">
                  Teresa Thomas
                </p>
              </div>
            </div>
            <div className="center">
              <a href={calendly}>
                <Button
                  buttonText="Book a call with Monica"
                  bgColor="bg-purple-500"
                  borderWidth="border-0"
                  textColor="text-white"
                  textSize="md:text-xl"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
