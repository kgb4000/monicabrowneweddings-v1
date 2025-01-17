import Link from 'next/link'
import ShareBtn from '@/components/ShareBtn'

import { RichText } from '@graphcms/rich-text-react-renderer'

async function getPost(slug) {
  const res = await fetch(
    'https://api-us-east-1.graphcms.com/v2/cktkjtoxd0dod01z1bc0w41e9/master',
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
                    alt
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
                    alt
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
  return data.post
}

export async function generateMetadata({ params }) {
  const slug = (await params).slug
  const post = await getPost(slug)
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

  return (
    <>
      <section>
        <div className="container max-w-2xl mx-auto mt-10 px-4">
          <h1 className="text-4xl my-10">{post.title}</h1>
          <div className="mb-2 flex items-center">
            <Link href="/about" passHref>
              <img
                src={post.author.image.url}
                className="w-[5rem] rounded-full border-3 border-black m-0"
                alt={post.author.name}
                title={post.author.name}
              />
            </Link>
            <Link href="/about">
              <p className="mx-2 font-bold">{post.author.name}</p>
            </Link>
            {/* <span>
              {new Date(post.updatedAt).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span> */}
          </div>
          <p className="text-xl">Be a dear and share:</p>
          <ShareBtn
            shareLink={`https://monicabrowneweddings.com/blog/${post.slug}`}
          />
          <article>
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
                  <ul className="text-xl leading-relaxed text-ui-fg-base font-normal lg:my-5 list-disc mx-10 my-10">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="md:text-xl leading-relaxed text-ui-fg-base font-normal lg:my-8">
                    {children}
                  </li>
                ),
              }}
            />
          </article>
          <div className="my-20 border-4 border-solid border-slate-50 p-8">
            <img
              src={post.author.image.url}
              className="w-[5rem] my-6"
              alt={post.author.name}
              title={post.author.name}
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
