import Link from 'next/link'
import Button from '@/components/Button'
const getPosts = async () => {
  const response = await fetch(
    'https://us-east-1.cdn.hygraph.com/content/cktkjtoxd0dod01z1bc0w41e9/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
          posts (orderBy: createdAt_DESC, first: 20) {
            title
            slug
            coverImage {
              url
              width
              height
            }
          }
        }`,
      }),
    }
  )

  const { data } = await response.json()
  return data.posts
}

export const metadata = {
  title: "Monica's Blog | Monica Browne Weddings",
  description:
    'Wedding Services from Monica Browne Weddings include Full Service Wedding Planning, Day-of Cordination, Wedding Decor, Flowers, and Floral Design.',
  alternates: {
    canonical: 'https://monicabrowneweddings.com/blog',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://monicabrowneweddings.com/blog',
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
  },
}

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

export default async function Posts() {
  const posts = await getPosts()

  return (
    <>
      <div className="my-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-center">
          Monica's Blog
        </h1>
        <p className="my-10 text-xl">Thoughts and Ideas From Monica</p>
      </div>
      <div className="container max-w-7xl mx-auto px-6">
        <div className="mb-20"></div>
        <div className="lg:grid grid-cols-3 gap-x-8 justify-between w-full">
          <ul className="col-span-2">
            {posts.map((post) => (
              <div key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-black no-underline"
                >
                  <div className="grid lg:grid-cols-2 lg:gap-8 items-center mb-8">
                    <img
                      className="mb-6"
                      src={post.coverImage.url}
                      alt={post.title}
                      title={post.title}
                      loading="lazy"
                      width={post.coverImage.width}
                      height={post.coverImage.height}
                    />
                    <div className="">
                      <h3 className="text-3xl mb-6">{post.title}</h3>
                      <p>Read more</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </ul>
          <div className="w-1/2">
            <img
              src="https://res.cloudinary.com/browne-company/image/upload/q_auto/v1631816208/monica_cqphqb.jpg"
              className="mb-4"
            />
            <p>
              Hi, I'm Monica with <Link href="/">Monica Browne Weddings</Link>.
              I help busy couples in Maryland and DC plan their dream wedding.
              If you're a busy couple and need help planning your wedding,
              please don't hesitiate to{' '}
              <a href={calendly} target="_blank">
                book a call
              </a>
              .
            </p>
          </div>
        </div>
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
    </>
  )
}
