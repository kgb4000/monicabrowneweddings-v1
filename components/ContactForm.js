'use client'

import { useState } from 'react'
import Button from '@/components/Button'

export const metadata = {
  title: 'Contact | Monica Browne Weddings',
  description:
    "If you're a busy couple planning your wedding and you think you may need help, please contact us.",
  alternate: {
    canonical: 'https://monicabrowneweddings.com/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://monicabrowneweddings.com/contact',
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

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {
      error: false,
      msg: null,
    },
  })

  const [inputs, setInputs] = useState({
    firstName: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  })

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const isEnabled = inputs.email.length && inputs.firstName > 0

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: msg,
        },
      })
      setInputs({
        firstName: '',
        email: '',
        phone: '',
        date: '',
        message: '',
      })
    } else {
      setStatus({
        info: {
          error: true,
          msg: msg,
        },
      })
    }
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setStatus((prevStatus) => ({
      ...prevStatus,
      submitting: true,
    }))

    const endpoint =
      'https://eekybmqof6.execute-api.us-east-1.amazonaws.com/prod/weddings-contact-form'

    const body = JSON.stringify({
      firstName: inputs.firstName,
      email: inputs.email,
      phone: inputs.phone,
      date: inputs.date,
      message: inputs.message,
    })

    console.log(body)

    const res = await fetch(endpoint, {
      method: 'POST',
      body,
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <>
      <div className="my-10">
        <h1 className="text-5xl md:text-7xl font-bold text-center">Contact</h1>
      </div>
      <main>
        <div className="max-w-2xl mx-auto px-6 mb-10">
          <p className="my-4">
            Call:{' '}
            <a itemProp="telephone" href="tel:240-665-3350">
              (240) 665-3350
            </a>
          </p>
          <p className="my-4">
            Email:{' '}
            <a href="mailto:monica@monicabrowneweddings.com" itemProp="email">
              monica@monicabrowneweddings.com
            </a>
          </p>
          <h2 className="text-3xl text-center my-8">Send Monica a Message</h2>
          <div>
            <form onSubmit={handleOnSubmit}>
              <label htmlFor="firstName">Hello my name is *</label>
              <input
                id="firstName"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.firstName}
                className="border-2  w-full my-4 p-4 rounded-xl"
              />
              <label htmlFor="email">My email is *</label>
              <input
                id="email"
                type="email"
                onChange={handleOnChange}
                required
                value={inputs.email}
                className="border-2  w-full my-4 p-4 rounded-xl"
              />
              <label htmlFor="phone">My phone number is *</label>
              <input
                id="phone"
                type="text"
                maxLength="10"
                placeholder="(202) 222-2222"
                value={inputs.phone}
                onChange={handleOnChange}
                required
                className="border-2  w-full my-4 p-4 rounded-xl"
              />
              <label htmlFor="date">My wedding date is *</label>
              <input
                id="date"
                type="date"
                placeholder="Your wedding date"
                value={inputs.date}
                onChange={handleOnChange}
                required
                className="border-2  w-full my-4 p-4 rounded-xl"
              />
              <div className="my-4">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  onChange={handleOnChange}
                  required
                  value={inputs.message}
                  className="border-2 h-[200px] w-full my-4 rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={status.submitting || isEnabled}
                borderColor="border-black"
                borderWidth="border-2"
                textColor="white"
                borderStyle="border-solid"
                buttonText="Send to Monica"
              >
                {!status.submitting
                  ? !status.submitted
                    ? 'Send to Monica'
                    : 'Submitted'
                  : 'Submitting...'}
              </Button>
            </form>
            {status.info.error && (
              <div className="error">Error: {status.info.msg}</div>
            )}
            {!status.info.error && status.info.msg && (
              <div className="success">
                Your message has been sent to Monica
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}
