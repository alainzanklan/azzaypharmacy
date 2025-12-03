'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'glass-effect shadow-lg py-1'
        : 'bg-transparent py-1'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with Image - BIGGER & MORE VISIBLE */}
          <Link href="#home" className="flex items-center">
            <div className="relative w-48 h-20 sm:w-56 sm:h-24 md:w-64 md:h-28 lg:w-72 lg:h-32">
              <Image
                src="/images/logo.jpeg"
                alt="Azzay Pharmacy Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-glow transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-gray-50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2.5 rounded-full font-medium text-center hover:shadow-glow transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar