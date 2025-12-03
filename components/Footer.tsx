'use client'

import { Facebook, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTiktok } from "react-icons/fa"

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'BP Check',
    'Rapid Malaria Test',
    'Blood Glucose Check',
    'Weight Management',
    'Beauty and Sundry',
    'Drug Information',
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://web.facebook.com/people/Azzay-Pharmacy-Limited/61574063334939/', label: 'Facebook' },
    { icon: FaTiktok, href: 'https://www.tiktok.com/@azzay.pharmacy.li', label: 'Tiktok' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.youtube.com/@azzaypharmacy', label: 'Youtube' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            {/* Logo - Using Next.js Link and Image components */}
            <Link href="#home" className="inline-block">
              <div className="relative w-40 h-16 sm:w-44 sm:h-18">
                <Image
                  src="/images/logo.jpeg"
                  alt="Azzay Pharmacy Logo"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed">
              Your trusted healthcare partner, providing quality medications and wellness solution.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-md font-display font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-md font-display font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Twumasi Aben Street<br />
                  Dormaa Ahenkro, Ghana
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+233546853264" className="text-gray-400 hover:text-primary-400 transition-colors">
                  +233 54 685 3264
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:azzaypharmacy@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                  azzaypharmacy@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 pb-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-display font-bold">Stay Updated</h3>
            <p className="text-gray-400">Subscribe to our newsletter for health tips and exclusive offers.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all duration-300 text-white"
              />
              <button className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-3 rounded-lg font-bold hover:shadow-glow transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Azzay Pharmacy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer