'use client'

import { Activity, TestTube, Droplet, Scale, Sparkles, BookOpen } from 'lucide-react'
import { useState } from 'react'

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      icon: Activity,
      title: 'BP Check',
      description: 'Professional blood pressure monitoring service with instant results and health recommendations from our qualified pharmacists.',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
    },
    {
      icon: TestTube,
      title: 'Rapid Malaria Test',
      description: 'Quick and accurate malaria screening using advanced rapid diagnostic tests with results available in minutes.',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-50',
      iconColor: 'text-accent-600',
    },
    {
      icon: Droplet,
      title: 'Blood Glucose Check',
      description: 'Comprehensive blood sugar testing service for diabetes management and health monitoring with personalized guidance.',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
    {
      icon: Scale,
      title: 'Weight Management',
      description: 'Personalized weight management programs including consultation, nutritional advice, and progress tracking support.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
    {
      icon: Sparkles,
      title: 'Beauty and Sundry',
      description: 'Curated selection of premium skincare products, cosmetics, personal care items, and daily essentials for your well-being.',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      icon: BookOpen,
      title: 'Drug Information',
      description: 'Expert pharmaceutical advice on medication usage, interactions, side effects, and proper storage from licensed pharmacists.',
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
  ]

  const products = [
    { name: 'Health Tests', items: 'BP, Glucose, Malaria' },
    { name: 'Beauty Care', items: '200+ items' },
    { name: 'Medications', items: '400+ items' },
    { name: 'Wellness', items: '100+ items' },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From medications to wellness products, we offer everything you need for a healthier life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100">
                <div className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-display font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6">
                  <a
                    href="#contact"
                    className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300`}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Categories */}
        <div className="glass-effect rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-display font-bold text-center mb-8 gradient-text">
            Popular Product Categories
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3">
                  {index === 0 && '🔎'}
                  {index === 1 && '💄'}
                  {index === 2 && '💊'}
                  {index === 3 && '🌿'}
                </div>
                <h4 className="font-display font-bold text-gray-900 mb-1">{product.name}</h4>
                <p className="text-sm text-gray-600">{product.items}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services