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
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] w-full max-w-lg mx-auto lg:mx-0">

              {/* Back Image - Top Left */}
              <div className="absolute left-0 top-0 w-[55%] sm:w-[58%] md:w-[60%] h-[45%] sm:h-[48%] glass-effect rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-all duration-300 z-10">
                <Image
                  src="/images/pharmacy-1.jpeg"
                  alt="Pharmacy Interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Middle Image - Top Right (overlaps with first) */}
              <div className="absolute right-0 top-[8%] w-[55%] sm:w-[58%] md:w-[60%] h-[45%] sm:h-[48%] glass-effect rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300 z-20" style={{ animationDelay: '0.2s' }}>
                <Image
                  src="/images/pharmacy-2.jpeg"
                  alt="Pharmacist Consultation"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Front Image - Bottom Center (overlaps with both) */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[65%] sm:w-[68%] md:w-[70%] h-[48%] sm:h-[50%] glass-effect rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300 z-30" style={{ animationDelay: '0.4s' }}>
                <Image
                  src="/images/pharmacy-3.jpeg"
                  alt="Medication Products"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 md:-top-3 md:-right-3 glass-effect rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-xl animate-float z-40" style={{ animationDelay: '1s' }}>
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-2 md:p-3 rounded-lg">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 whitespace-nowrap">Verified</p>
                    <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 whitespace-nowrap">Licensed</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Bottom Left */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-0 sm:left-0 md:-bottom-3 md:-left-3 glass-effect rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 shadow-xl animate-float z-40" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-br from-accent-500 to-accent-600 p-2 md:p-3 rounded-lg">
                    <LucideUserCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs md:text-sm font-bold text-gray-800 whitespace-nowrap">Certified</p>
                    <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 whitespace-nowrap">Pharmacists</p>
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