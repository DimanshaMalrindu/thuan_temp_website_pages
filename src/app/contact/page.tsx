'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  contactMethod: string
  subject: string
  message: string
  attachment: File | null
  consent: boolean
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contactMethod: '',
    subject: '',
    message: '',
    attachment: null,
    consent: false,
  })
  const [errorMessage, setErrorMessage] = useState<{
    name: string
    email: string
    contactMethod: string
    subject: string
    message: string
    attachment: string
    consent: string
  }>({
    name: '',
    email: '',
    contactMethod: '',
    subject: '',
    message: '',
    attachment: '',
    consent: '',
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)

  const isEmailValid = (email: string) => {
    const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleFormSubmit = (event : FormEvent) => {
    event.preventDefault()
    const errors = {
      name: '',
      email: '',
      contactMethod: '',
      subject: '',
      message: '',
      attachment: '',
      consent: '',
    }

    if (!formData.name.trim()) {
      errors.name = 'Name field is required'
    }

    if (!formData.email.trim()) {
      errors.email = 'Email cannot be empty'
    } else if (!isEmailValid(formData.email)) {
      errors.email = 'Invalid email'
    }

    if (!formData.contactMethod) {
      errors.contactMethod = 'Please select a contact method'
    }

    if (!formData.message.trim()) {
      errors.message = 'Message cannot be empty.'
    }

    if (!formData.attachment) {
      errors.attachment = 'Please attach a file (PDF or image).'
    } else if (
      !['image/png', 'image/jpeg', 'image/jpg', 'application/pdf'].includes(
        formData.attachment.type
      )
    ) {
      errors.attachment = 'Attachment must be a PNG, JPEG, JPG, or PDF file.'
    }

    if (!formData.consent) {
      errors.consent = 'You must agree to the terms.'
    }

    setErrorMessage(errors)

    if (Object.values(errors).every((error) => error === '')) {
      setIsFormSubmitted(true)
      setFormData({
        name: '',
        email: '',
        contactMethod: '',
        subject: '',
        message: '',
        attachment: null,
        consent: false,
      })
    }
  }

  return (
    <>
      <div className="relative h-screen w-auto">
        <div className="relative lg:h-2/3 md:h-80 lg:h-96 h-72">
          <Image
            src="/assets/ev_charger_3.jpg"
            alt="EV Charger"
            fill
            className="object-cover"
          />
          <div className="absolute top-1/2 px-20 md:px-40 transform -translate-y-1/2 max-w-2xl">
            <p className="text-2xl md:text-3xl mt-3 text-white">
              Your charging business journey begins here!
            </p>
            <p className="mt-7 text-2xl md:text-5xl lg:text-6xl font-bold text-white">
              READY TO CONNECT?
            </p>
          </div>
        </div>
        <div className="pt-5 pb-5">
          <p className="lg:pl-28 px-6 text-sm md:text-base text-gray-600 md:space-x-5 space-x-3">
            <Link
              href="/"
              className="hover:underline hover:text-green-600 hover:underline-offset-4 transition-colors duration-400"
            >
              Home
            </Link>
            <span className="text-gray-400">&gt;</span>
            <Link
              href="/product"
              className="hover:underline hover:text-green-600 hover:underline-offset-4 transition-colors duration-200"
            >
              Product
            </Link>
            <span className="text-gray-400">&gt;</span>
            <Link
              href="/contact-sales"
              className="hover:underline hover:text-green-600 hover:underline-offset-4 transition-colors duration-200"
            >
              Contact sales
            </Link>
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-evenly lg:gap-4 pt-4 lg:pr-20">
          <div className="lg:pr-16 p-5">
            <p className="font-bold text-3xl max-w-sm">Together, we charge business</p>
            <p className="pt-6">Leave us a message and we will contact you later on</p>
          </div>
          <div>
            <form onSubmit={handleFormSubmit} className="lg:w-96 p-6">
              <div className="flex flex-col pb-7">
                <label htmlFor="name" className="required font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`border shadow rounded-sm p-1 w-full ${errorMessage.name ? 'border-red-500' : ''}`}
                  onChange={({ target }) => setFormData({...formData, name: target.value})}
                  
                />
                {errorMessage.name && (
                  <span className="text-red-500 text-sm">{errorMessage.name}</span>
                )}
              </div>
              <div className="flex flex-col pb-7">
                <label htmlFor="email" className="required font-semibold">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`border shadow rounded-sm p-1 w-full ${errorMessage.email ? 'border-red-500' : ''}`}
                  onChange={({ target }) => setFormData({...formData, email: target.value})}
                  
                />
                {errorMessage.email && (
                  <span className="text-red-500 text-sm">{errorMessage.email}</span>
                )}
              </div>
              <div className="flex flex-col space-y-1.5 pb-7">
                <label htmlFor="contactMethod" className="required font-semibold">Contact method</label>
                <div className="flex flex-row space-x-7">
                  <div>
                    <input type="radio" name="contactMethod" id="phone" checked={formData.contactMethod === 'phone'} onChange={({ target }) => setFormData({...formData, contactMethod: target.value})} />
                    <label htmlFor="phone"> Phone</label>
                  </div>
                  <div>
                    <input type="radio" name="contactMethod" id="email" checked={formData.contactMethod === 'email'} onChange={({ target }) => setFormData({...formData, contactMethod: target.value})} />
                    <label htmlFor="email"> Email</label>
                  </div>
                </div>
                {errorMessage.contactMethod && (
                  <span className="text-red-500 text-sm">{errorMessage.contactMethod}</span>
                )}
              </div>
              <div className="pb-7 flex flex-col">
                <label htmlFor="subject" className="font-semibold">Subject</label>
                <input type="text" name="subject" id="subject" className="border shadow rounded-sm p-1 w-full" />
              </div>
              <div className="flex flex-col pb-6">
                <label htmlFor="message" className="required font-semibold">Message</label>
                <textarea name="message" id="message" className={`border shadow rounded-sm p-1 w-full ${errorMessage.message ? 'border-red-500' : ''}`} onChange={({ target }) => setFormData({...formData, message: target.value})} ></textarea>
                {errorMessage.message && (
                  <span className="text-red-500 text-sm">{errorMessage.message}</span>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="attachment" className="required font-semibold">Attachment</label>
                <input type="file" name="attachment" id="attachment" className={`border shadow rounded-sm p-1 w-full ${errorMessage.attachment ? 'border-red-500' : ''}`}
                  accept="image/png, image/jpeg, image/jpg, .pdf" 
                  onChange={({ target }) => {
                    const file = target.files?.[0] || null
                    setFormData({...formData, attachment: file})
                  }}
                   
                />
                {errorMessage.attachment && (
                  <span className="text-red-500 text-sm">{errorMessage.attachment}</span>
                )}
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <input
                  type="checkbox"
                  id="consentCheckbox"
                  checked={formData.consent}
                  onChange={({ target }) => setFormData({ ...formData, consent: target.checked })}
                  className="w-4 h-4 rounded-sm border-gray-300 focus:ring-blue-500"
                />
                <label htmlFor="consentCheckbox" className="text-sm text-gray-700">
                  I agree to the {' '}
                  <span>
                    <Link href="/terms-and-conditions" className="text-blue-500 hover:underline">
                      Terms and Conditions
                    </Link>
                  </span>
                  {' '}and{' '}
                  <span>
                    <Link href="/privacy-policy" className="text-blue-500 hover:underline">
                      Privacy Policy
                    </Link>.
                  </span>
                </label>
              </div>
              {errorMessage.consent && (
                <span className="text-red-500 text-sm">{errorMessage.consent}</span>
              )}
              <div className="py-6">
                <button type="submit" className="shadow bg-green-500 hover:bg-green-700 text-white rounded-lg p-3">Send application</button>
              </div>
              {isFormSubmitted && (
                <div className="mt-4 text-green-500">
                  Form submitted successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}