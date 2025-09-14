import Link from 'next/link'
import ShareBtn from '@/components/ShareBtn'
import Image from 'next/image'

import { RichText } from '@graphcms/rich-text-react-renderer'

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
  const { data } = await res.json()
  return data?.post || null
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

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://monicabrowneweddings.com/blog/${post.slug}`,
    },
  }
}

export default async function Page({ params }) {
  const slug = (await params).slug
  const post = await getPost(slug)

  if (!post) {
    return (
      <div className="container max-w-2xl mx-auto my-10 px-4">
        <h1 className="text-4xl my-10">Post Not Found</h1>
        <p className="text-xl">The requested blog post could not be found.</p>
        <Link href="/blog" className="md:text-xl text-purple-500 underline">
          Back to blog
        </Link>
      </div>
    )
  }

  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Monica Browne Weddings',
      logo: {
        '@type': 'ImageObject',
        url: post.coverImage.url,
      },
    },
    datePublished: post.updatedAt,
    image: post.coverImage.url,
  }
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(articleStructuredData)}
      </script>
      <section>
        <div className="container max-w-2xl mx-auto my-10 px-4">
          <h1 className="text-4xl my-10">{post.title}</h1>
          <div className="mb-2 flex items-center">
            <Link href="/about" passHref>
              <img
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
            {/* <span>
              {new Date(post.updatedAt).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span> */}
          </div>
          <p className="text-xl py-2">Be a dear and share:</p>
          <ShareBtn
            shareLink={`https://monicabrowneweddings.com/blog/${post.slug}`}
          />
          <article className=" py-4">
            <RichText
              content={post.content.json}
              renderers={{
                h2: ({ children }) => (
                  <h2 className="text-2xl lg:text-4xl leading-relaxed text-ui-fg-base font-normal lg:my-5">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl lg:text-3xl leading-relaxed text-ui-fg-base font-normal lg:my-5">
                    {children}
                  </h3>
                ),
                h4: ({ children }) => (
                  <h4 className="text-xl lg:text-3xl leading-relaxed text-ui-fg-base font-normal lg:my-5">
                    {children}
                  </h4>
                ),
                a: ({ children, href, openInNewTab }) => (
                  <Link
                    href={href}
                    className="#a29bfe underline"
                    target={openInNewTab ? '_blank' : '_self'}
                    rel="noreferrer"
                  >
                    {children}
                  </Link>
                ),
                p: ({ children }) => (
                  <p className="md:text-xl leading text-ui-fg-base font-normal my-6 leading-8">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="leading-relaxed text-ui-fg-base font-normal lg:my-5 list-disc mx-10 mb-10">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="md:text-xl leading text-ui-fg-base font-normal my-6 leading-8">
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
              }}
            />
          </article>
          <div className="my-4 border-4 border-solid border-slate-50 p-8">
            <img
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
