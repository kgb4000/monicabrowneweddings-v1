import Link from 'next/link'

export const metadata = {
  title: 'Page Not Found | Monica Browne Weddings',
}

export default function NotFound() {
  return (
    <main className="container max-w-2xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold mb-6">Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-10">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        href="/"
        className="inline-block py-4 px-8 rounded-2xl bg-purple-500 text-white font-bold no-underline"
      >
        Back to Home
      </Link>
    </main>
  )
}
