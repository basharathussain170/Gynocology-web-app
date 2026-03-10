import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { MdShield } from 'react-icons/md'

const services = [
  {
    id: 1,
    title: 'Family Planning',
    slug: 'family-planning',
    description: 'Comprehensive family planning services to help you make informed decisions about your reproductive health.',
    emoji: '👨‍👩‍👧',
    bg: 'from-pink-50 to-rose-50',
  },
  {
    id: 2,
    title: 'Gynecology',
    slug: 'gynecology',
    description: 'Expert gynecological care with state-of-the-art equipment for all your women\'s health needs.',
    emoji: '🩺',
    bg: 'from-purple-50 to-pink-50',
    featured: true,
  },
  {
    id: 3,
    title: 'Prenatal Ultrasound',
    slug: 'prenatal-ultrasound',
    description: 'Advanced prenatal ultrasound services to monitor your baby\'s development throughout pregnancy.',
    emoji: '🔬',
    bg: 'from-blue-50 to-purple-50',
  },
  {
    id: 4,
    title: 'Fertility Medication',
    slug: 'fertility-medication',
    description: 'Specialized fertility treatment and medication services to help you on your journey to parenthood.',
    emoji: '💊',
    bg: 'from-green-50 to-teal-50',
  },
]

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(1)

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-tag justify-center">
            <MdShield className="text-primary text-xl" />
            OUR SERVICES
          </p>
          <h2 className="section-title">
            The Best Quality Service<br />You Can Get
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group ${
                activeCard === service.id
                  ? 'bg-secondary text-white shadow-2xl scale-105'
                  : 'bg-white text-secondary shadow-sm hover:shadow-lg hover:scale-102'
              }`}
              onMouseEnter={() => setActiveCard(service.id)}
            >
              {/* Card Image */}
              <div className={`h-48 bg-gradient-to-br ${service.bg} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl">{service.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div className={`p-6 ${activeCard === service.id ? 'bg-secondary' : 'bg-white'}`}>
                <h3 className={`font-extrabold text-lg mb-3 ${activeCard === service.id ? 'text-white' : 'text-secondary'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${activeCard === service.id ? 'text-gray-300' : 'text-gray-500'}`}>
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className={`flex items-center gap-2 font-bold text-sm transition-colors ${
                    activeCard === service.id
                      ? 'text-white hover:text-pink-300'
                      : 'text-primary hover:text-primary-dark'
                  }`}
                >
                  View All Details <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl px-8 py-5 shadow-sm">
          <p className="text-gray-600 font-medium mb-4 sm:mb-0">We help you live your life in full motion.</p>
          <Link to="/services" className="bg-secondary text-white px-8 py-3 rounded-full font-bold hover:bg-secondary-light transition-colors">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
