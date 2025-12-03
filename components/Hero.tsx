'use client'

import { ArrowRight, Heart, Shield, Clock, LucideUserCheck } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = [
    { icon: Heart, text: 'Quality Care' },
    { icon: Shield, text: 'Trusted Service' },
    { icon: Clock, text: '24/7 Support' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${mounted ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="inline-block">
              <span className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                🌟 Your Life Is Important
              </span>
            </div>

            <h1 className="text-5xl md:text-5xl lg:text-7xl font-display font-bold leading-tight">
              Welcome to{' '}
              <span className="gradient-text">Azzay</span>
              <br />
              Pharmacy
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Experience healthcare reimagined. We provide premium medications,
              expert consultations, and personalized wellness solutions tailored
              to your needs.
            </p>

            <div className="flex flex-wrap gap-4">

              <Link href="#services"
                className="group bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-glow transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link href="#contact"
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-medium text-lg border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-4">
              {features.map((feature, index) => (
                <div
                  key={feature.text}
                  className="flex items-center space-x-2 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-gradient-to-r from-primary-100 to-accent-100 p-2 rounded-lg group-hover:shadow-lg transition-shadow">
                    <feature.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Layered Images */}
          <div className={`relative ${mounted ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.90s' }}>
            <div className="relative h-[500px] w-full">
              {/* Back Image - Bottom Layer */}
              <div className="absolute left-0 top-14 md:top-14 md:left-5 w-64 h-80 glass-effect rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-100 animate-none">
                <Image
                  src="/images/pharmacy-1.jpeg"
                  alt="Pharmacy Interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Middle Image - Center Layer */}
              <div className="absolute right-0 md:top-0 md:right-20 w-60 md:w-72 h-80 glass-effect rounded-3xl overflow-hidden shadow-2xl transform hover:rotate-0 transition-transform duration-500 animate-scale-in z-10" style={{ animationDelay: '1s' }}>
                <Image
                  src="/images/pharmacy-2.jpeg"
                  alt="Pharmacist Consultation"
                  fill
                  className="object-cover"
                  objectPosition='top'
                  priority
                />
              </div>

              {/* Front Image - Top Layer */}
              <div className="absolute left-16 bottom-12 md:bottom-12 md:left-28 w-60 h-64 glass-effect rounded-3xl overflow-hidden shadow-xl transition-transform duration-500 animate-slide-up z-20" style={{ animationDelay: '2s' }}>
                <Image
                  src="/images/pharmacy-3.jpeg"
                  alt="Medication Products"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-4 -right-4 glass-effect rounded-2xl p-4 shadow-xl animate-float z-30 " style={{ animationDelay: '10s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary-500 p-3 rounded-xl">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Verified</p>
                    <p className="text-xs text-gray-600">Licensed</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Bottom Left */}
              <div className="absolute -bottom-4 -left-4 glass-effect rounded-2xl p-4 shadow-xl animate-float z-30" style={{ animationDelay: '5s' }}>
                <div className="flex items-center space-x-3">
                  <div className="bg-accent-500 p-3 rounded-xl">
                    <LucideUserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Certified</p>
                    <p className="text-xs text-gray-600">Pharmacists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero