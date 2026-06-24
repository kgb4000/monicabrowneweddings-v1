import Link from 'next/link'
import ShareBtn from '@/components/ShareBtn'
import Image from 'next/image'
import AudioPlayer from '@/components/AudioPlayer'

import { RichText } from '@graphcms/rich-text-react-renderer'

// Prevents </script> injection from CMS content breaking out of the JSON-LD block
function jsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

async function getPost(slug) {
  const res = await fetch(
    'https://us-east-1.cdn.hygraph.com/content/cktkjtoxd0dod01z1bc0w41e9/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
        query Post($slug: String!) {
                post(where: {slug: $slug}) {
                  title
                  tags
                  description
                  date
                  updatedAt
                  slug
                  coverImage {
                    url
                    width
                    height
                    altText
                  }
                  quickAnswer
                  audio {
                    url
                  }
                  content {
                    json
                  }
                  author {
                    name
                    image {
                    url
                    height
                    width
                    altText
                    }
                    biography
                  }
                }
            }`,
        variables: {
          slug: slug,
        },
      }),
    }
  )
  const json = await res.json()
  if (json.errors) {
    console.error('[getPost] GraphQL errors:', JSON.stringify(json.errors))
  }
  return json.data?.post || null
}

async function getAllPosts() {
  const res = await fetch(
    'https://us-east-1.cdn.hygraph.com/content/cktkjtoxd0dod01z1bc0w41e9/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
          posts (stage: PUBLISHED) {
            slug
          }
        }`,
      }),
    }
  )
  const { data } = await res.json()
  return data.posts || []
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const slug = (await params).slug
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Monica Browne Weddings',
      description: 'The requested blog post could not be found.',
    }
  }

  const url = `https://monicabrowneweddings.com/blog/${post.slug}`
  const imageUrl = post.coverImage?.url

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author?.name || 'Monica Browne' }],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.description,
      images: imageUrl ? [{ url: imageUrl }] : [],
      publishedTime: post.date || post.updatedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author?.name || 'Monica Browne'],
      section: 'Wedding Planning',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: imageUrl ? [imageUrl] : [],
    },
  }
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://monicabrowneweddings.com',
  name: 'Monica Browne Weddings',
  image: 'https://monicabrowneweddings.com/logo.png',
  url: 'https://monicabrowneweddings.com',
  telephone: '+12406653350',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bowie',
    addressRegion: 'MD',
    postalCode: '20720',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 38.9429,
    longitude: -76.7308,
  },
  areaServed: [
    { '@type': 'City', name: 'Washington, DC' },
    { '@type': 'State', name: 'Maryland' },
    { '@type': 'State', name: 'Virginia' },
  ],
  description:
    'Full-service wedding planning, day-of coordination, wedding decoration services, and floral design for couples in Washington DC, Maryland, and Northern Virginia.',
  founder: { '@type': 'Person', name: 'Monica Browne' },
  serviceType: [
    'Full-Service Wedding Planning',
    'Day-of Wedding Coordination',
    'Partial Wedding Planning',
    'Wedding Decoration Services',
    'Wedding Floral Design',
  ],
}

export default async function Page({ params }) {
  const slug = (await params).slug
  const post = await getPost(slug)

  if (!post) {
    return (
      <div className="container max-w-2xl mx-auto my-10 px-4">
        <h1 className="text-2xl md:text-4xl my-10 font-bold">Post Not Found</h1>
        <p className="text-xl">The requested blog post could not be found.</p>
        <Link href="/blog" className="md:text-xl text-purple-500 underline">
          Back to blog
        </Link>
      </div>
    )
  }

  const pageUrl = `https://monicabrowneweddings.com/blog/${post.slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.coverImage?.url,
    datePublished: post.date || post.updatedAt,
    dateModified: post.updatedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Monica Browne',
      url: 'https://monicabrowneweddings.com/about',
      jobTitle: 'Wedding Planner and Creative Director',
      worksFor: {
        '@type': 'Organization',
        name: 'Monica Browne Weddings',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Monica Browne Weddings',
      logo: {
        '@type': 'ImageObject',
        url: 'https://monicabrowneweddings.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://monicabrowneweddings.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://monicabrowneweddings.com/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: pageUrl,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema) }}
      />
      <section>
        <div className="container max-w-2xl mx-auto my-10 px-4">
          <h1 className="text-2xl md:text-4xl my-10 font-bold leading-snug">{post.title}</h1>
          <div className="mb-2 flex items-center">
            <Link href="/about" passHref>
              <Image
                src={post.author.image.url}
                className="w-[5rem] rounded-full border-3 border-black m-0"
                alt={post.author.image.altText || post.author.name}
                title={post.author.name}
                width={post.author.image.width}
                height={post.author.image.height}
              />
            </Link>
            <Link href="/about">
              <p className="mx-4 font-bold">{post.author.name}</p>
            </Link>
          </div>
          <p className="text-xl py-2">Be a dear and share:</p>
          <ShareBtn shareLink={pageUrl} />
          {post.audio?.url && <AudioPlayer src={post.audio.url} />}
          {post.quickAnswer && (
            <div className="my-6 rounded-xl border-l-4 border-purple-500 bg-purple-50 px-6 py-5">
              <p className="text-xs font-bold uppercase tracking-widest text-purple-600 mb-2">Quick Answer</p>
              <p className="text-base md:text-lg leading-relaxed text-gray-800">{post.quickAnswer}</p>
            </div>
          )}
          <article className="py-4">
            <RichText
              content={post.content.json}
              renderers={{
                h2: ({ children }) => (
                  <h2 className="text-2xl lg:text-4xl font-bold leading-snug mt-10 mb-4">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl lg:text-3xl font-bold leading-snug mt-8 mb-3">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-lg lg:text-2xl font-semibold leading-snug mt-6 mb-2">
                    {children}
                  </h4>
                ),
                a: ({ children, href, openInNewTab }) => (
                  <Link
                    href={href}
                    className="text-purple-600 underline"
                    target={openInNewTab ? '_blank' : '_self'}
                    rel="noreferrer"
                  >
                    {children}
                  </Link>
                ),
                p: ({ children }) => (
                  <p className="text-base md:text-lg leading-relaxed my-5 text-gray-800">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-8 my-5 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-8 my-5 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-base md:text-lg leading-relaxed text-gray-800">
                    {children}
                  </li>
                ),
                img: ({ src, altText, height, width }) => (
                  <Image
                    src={src}
                    alt={altText || 'Blog post image'}
                    height={height}
                    width={width}
                    objectFit="cover"
                  />
                ),
                table: ({ children }) => (
                  <div className="table-wrapper">
                    <table>{children}</table>
                  </div>
                ),
              }}
            />
          </article>
          <div className="my-4 border-4 border-solid border-slate-50 p-8">
            <Image
              src={post.author.image.url}
              className="w-[5rem] my-6"
              alt={post.author.image.altText || post.author.name}
              title={post.author.name}
              width={post.author.image.width}
              height={post.author.image.height}
            />
            <p className="text-xl leading-normal">{post.author.biography}</p>
          </div>
          <Link href="/blog" className="md:text-xl">
            Back to blog
          </Link>
        </div>
      </section>
    </>
  )
}
