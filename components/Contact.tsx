'use client'

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for contacting us! We will get back to you soon.',
        })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+233 54 685 3264',
      link: 'tel:+233546853264',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'azzaypharmacy@gmail.com',
      link: 'mailto:azzaypharmacy@gmail.com',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Twumasi Aben Street, Dormaa Ahenkro',
      link: 'https://maps.app.goo.gl/Ni4EHWhUtDmz8FxSA',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Sat: 8AM-10PM, Sun: 9AM-8PM',
      link: '#',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold gradient-text">
            We're Here to Help
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? Need assistance? Our team is ready to support your healthcare journey.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Link
              key={info.title}
              href={info.link}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`bg-gradient-to-r ${info.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <info.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {info.details}
              </p>
            </Link>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-effect rounded-3xl p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              Send Us a Message
            </h3>

            {/* Status Messages */}
            {submitStatus.type && (
              <div
                className={`mb-6 p-4 rounded-xl ${submitStatus.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none disabled:bg-gray-100"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none disabled:bg-gray-100"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none disabled:bg-gray-100"
                  placeholder="+233 54 685 3264"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all duration-300 outline-none resize-none disabled:bg-gray-100"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-glow transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Map/Image with Overlay */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-full min-h-[500px]">
            {/* Background Image */}
            <Image
              src="/images/pharmacy-5.jpeg"
              alt="Azzay Pharmacy Store Location"
              fill
              className="object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/75 to-accent-900/80"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white p-8 relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 animate-float border-2 border-white/30">
                  <MapPin className="w-12 h-12" strokeWidth={2} />
                </div>
                <h3 className="text-3xl md:text-3xl font-display font-bold mb-4 drop-shadow-lg">
                  Visit Our Store
                </h3>
                <p className="text-lg md:text-xl text-white/95 mb-6 drop-shadow-md max-w-sm mx-auto">
                  Twumasi Aben Street<br />
                  Dormaa Ahenkro, Ghana
                </p>

                <Link
                  href="https://maps.app.goo.gl/Ni4EHWhUtDmz8FxSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-full font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Get Directions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact