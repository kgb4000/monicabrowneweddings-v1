import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer>
        <section className="bg-slate-50 md:py-20 py-10 mt-10 md:mt-20">
          <div className="container mx-auto max-w-7xl px-4">
            <div>
              <h2 className="text-2xl py-4">Monica Browne Weddings</h2>
              <p className="text-[1rem] pb-6 max-w-3xl">
                Monica Browne Weddings is one of the best wedding planners in
                Maryland, serving couples in DC and Northern Virginia. We offer
                full-service event planning, partial service event planning,
                day-of coordination, wedding decoration services, and floral
                design services. If you are a busy couple and need help, or if
                you need some help and guidance, please don't hesitate to reach
                out to us. You can book a call with us when you are ready.
              </p>
            </div>
            <div className="mx-auto lg:grid grid-cols-4 gap 4">
              <div className="py-4">
                <h3 className="text-xl font-bold">Hours</h3>
                <ul>
                  <li className="py-2">Monday: 9:00am - 5:00pm</li>
                  <li className="py-2">Tuesday: 9:00am - 5:00pm</li>
                  <li className="py-2">Wednesday: 9:00am - 5:00pm</li>
                  <li className="py-2">Thursday: 9:00am - 5:00pm</li>
                  <li className="py-2">Friday: 9:00am - 5:00pm</li>
                  <li className="py-2">Saturday: 9:00am - 5:00pm</li>
                  <li className="py-2">Sunday: Closed</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold py-4">Menu</h3>
                <ul>
                  <li className="py-2">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/about">About</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/wedding-services">Wedding Services</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/wedding-gallery">Wedding Gallery</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/testimonials">Testimonials</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="py-4">
                <h3 className="text-xl font-bold">Locations</h3>
                <ul>
                  <li className="py-2">
                    <Link href="/wedding-planner-annapolis-md">
                      Annapolis, MD{' '}
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/wedding-planner-bethesda-md">
                      Bethesda, MD
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/wedding-planner-bowie-md">Bowie, MD</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/wedding-planner-chevy-chase-md">
                      Chevy Chase, MD
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link href="/wedding-planner-crofton-md">Crofton, MD</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/wedding-planner-potomac-md">Potomac, MD</Link>
                  </li>
                  <li className="py-2">
                    <Link href="/wedding-planner-washington-dc">
                      Washington, DC
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="py-4">
                <h3 className="text-xl font-bold">Contact</h3>
                <p className="py-2">Book A Call</p>
                <p className="py-2">Email Monica Browne Weddings</p>
                <p className="py-2">Call (240) 665-3350</p>
                <p className="py-2">Bowie, MD 20720</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-black py-9 text-white">
            <p className="text-center text-[0.8rem]">
              Monica Browne Weddings &copy; {new Date().getFullYear()}
            </p>
          </div>
        </section>
      </footer>
    </>
  )
}
