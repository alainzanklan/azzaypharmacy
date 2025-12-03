'use client'

import { Award, Users, Clock, Heart } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, value: '10K+', label: 'Happy Customers' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Available Support' },
    { icon: Heart, value: '99%', label: 'Satisfaction Rate' },
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We source only from certified manufacturers and ensure every product meets the highest standards.',
      emoji: '✨',
    },
    {
      title: 'Expert Care',
      description: 'Our team of licensed pharmacists provides professional guidance and personalized health advice.',
      emoji: '🎓',
    },
    {
      title: 'Community Focus',
      description: 'We are committed to improving healthcare access and wellness in our community.',
      emoji: '🤝',
    },
    {
      title: 'Innovation',
      description: 'Embracing technology to make healthcare more convenient, efficient, and accessible.',
      emoji: '🚀',
    },
  ]

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl  font-display font-bold gradient-text">
            Your Trusted Healthcare Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Azzay Pharmacy is dedicated to providing exceptional
            healthcare services and quality products to our community.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-effect rounded-2xl p-8 hover:shadow-glow transition-all duration-300 transform group-hover:scale-105">
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-6 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" strokeWidth={2} />
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Story */}
          <div className="space-y-6">
            <h3 className=" text-2xl md:text-3xl font-display font-bold text-gray-900">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Azzay Pharmacy was founded with a simple mission: to make quality
              healthcare accessible to everyone. What started as a small neighborhood
              pharmacy has grown into a comprehensive healthcare provider serving
              thousands of families.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team of experienced pharmacists and healthcare professionals is
              committed to providing personalized care, expert advice, and the highest
              quality products to help you live your healthiest life.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-primary-600" />
                <span className="text-primary-700 font-medium">Licensed & Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-accent-50 px-4 py-2 rounded-full">
                <Heart className="w-5 h-5 text-accent-600" />
                <span className="text-accent-700 font-medium">Community Trusted</span>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl mb-4">{value.emoji}</div>
                <h4 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-90"></div>
          <div className="relative px-8 py-16 text-center text-white">
            <h3 className="text-2xl md:text-3xl  font-display font-bold mb-4">
              Ready to Experience Better Healthcare?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Azzay for their health needs.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Visit Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
