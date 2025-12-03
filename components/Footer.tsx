'use client'

import { Pill, Facebook, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-react'
import { FaTiktok } from "react-icons/fa";


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
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-2 rounded-lg">
                <Pill className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold">VitaCare</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted healthcare partner, providing quality medications and wellness solutions since 2009.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Contact Us</h3>
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
                <a href="tel:+15551234567" className="text-gray-400 hover:text-primary-400 transition-colors">
                  +233 54 685 3264
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@vitacare.com" className="text-gray-400 hover:text-primary-400 transition-colors">
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
              © 2024 VitaCare Pharmacy. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
