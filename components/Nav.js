'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const calendly =
  'https://calendly.com/mbweddings/fifteen-minute-call-with-monica-browne?'

const services = [
  { name: 'All Services', href: '/wedding-services' },
  {
    name: 'Full-Service Wedding Planning',
    href: '/wedding-services/full-service-wedding-planning',
  },
  {
    name: 'Day-of Coordinator',
    href: '/day-of-wedding-coordinator-washington-dc',
  },
  { name: 'Wedding Flowers', href: '/wedding-flowers' },
  { name: 'Small Weddings', href: '/wedding-services/small-wedding-planning' },
]

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="">
        <nav className="flex items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="text-black font-semibold hover:no-underline text-md"
            >
              Monica Browne Weddings
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              aria-label="Open main menu"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black font-extrabold"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 items-center">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 no-underline bg-transparent border-0 cursor-pointer p-0 outline-none">
                Services
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-4 text-gray-500"
                />
              </PopoverButton>
              <PopoverPanel
                anchor={{ to: 'bottom start', gap: 12 }}
                className="z-50 w-56 rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 p-1"
              >
                {({ close }) =>
                  services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => close()}
                      className="block rounded-lg px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 no-underline"
                    >
                      {item.name}
                    </Link>
                  ))
                }
              </PopoverPanel>
            </Popover>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900 no-underline"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href={calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-6 rounded-xl bg-purple-500 text-white text-sm/6 font-semibold no-underline"
            >
              Book a Call With Monica
            </a>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-black hover:no-underline font-bold">
                <p>Monica Browne Weddings</p>
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <button
                    type="button"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 bg-transparent border-0 cursor-pointer"
                  >
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 text-gray-500 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 space-y-1">
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 no-underline"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 no-underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href={calendly}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 no-underline"
                  >
                    <span className="inline-block py-4 px-8 rounded-xl bg-purple-500 text-white">
                      Book a Call With Monica
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
