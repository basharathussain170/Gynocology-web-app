import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { MdShield } from 'react-icons/md'

const allServices = [
  {
    title: 'Prenatal Ultrasound',
    slug: 'prenatal-ultrasound',
    emoji: '🔬',
    bg: 'from-blue-50 to-purple-50',
    description: 'Advanced prenatal ultrasound services to monitor your baby\'s development.',
  },
  {
    title: 'Family Planning',
    slug: 'family-planning',
    emoji: '👨‍👩‍👧',
    bg: 'from-pink-50 to-rose-50',
    description: 'Comprehensive family planning services for your reproductive health.',
  },
  {
    title: 'Gynecology',
    slug: 'gynecology',
    emoji: '🩺',
    bg: 'from-purple-50 to-pink-50',
    description: 'Expert gynecological care with state-of-the-art equipment.',
    featured: true,
  },
  {
    title: 'Fertility Medication',
    slug: 'fertility-medication',
    emoji: '💊',
    bg: 'from-green-50 to-teal-50',
    description: 'Specialized fertility treatment and medication services.',
  },
  {
    title: 'Prenatal Care',
    slug: 'prenatal-care',
    emoji: '🤰',
    bg: 'from-yellow-50 to-orange-50',
    description: 'Complete prenatal care for a healthy pregnancy journey.',
  },
  {
    title: 'Well-Woman Exam',
    slug: 'well-woman-exam',
    emoji: '💉',
    bg: 'from-teal-50 to-blue-50',
    description: 'Comprehensive annual well-woman health examinations.',
  },
]

const ServicesPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeCard, setActiveCard] = useState(2)

  const handlePrev = () => setActiveIndex(Math.max(0, activeIndex - 1))
  const handleNext = () => setActiveIndex(Math.min(allServices.length - 3, activeIndex + 1))

  const visibleServices = allServices.slice(activeIndex, activeIndex + 3)

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-72 sm:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-300">
              <div className="text-9xl opacity-30">👶</div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-secondary mb-4">Services</h1>
            <div className="flex items-center gap-2">
              <Link to="/" className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                Home <FiChevronRight size={14} /> Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Slider */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
            {/* Left heading + controls */}
            <div className="lg:col-span-1">
              <p className="section-tag">
                <MdShield className="text-primary text-xl" />
                OUR SERVICES
              </p>
              <h2 className="section-title mb-4">
                The Best Quality Service You Can Get
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Experience the future of healthcare. Our state-of-the-art facilities are equipped with the latest technology.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  disabled={activeIndex === 0}
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <FiChevronLeft />
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeIndex >= allServices.length - 3}
                  className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>

            {/* Service cards */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {visibleServices.map((service, i) => (
                <div
                  key={service.slug}
                  className={`rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    activeCard === i
                      ? 'bg-secondary text-white shadow-2xl scale-105'
                      : 'bg-white text-secondary shadow-sm hover:shadow-lg'
                  }`}
                  onMouseEnter={() => setActiveCard(i)}
                >
                  <div className={`h-44 bg-gradient-to-br ${service.bg} flex items-center justify-center`}>
                    <span className="text-6xl">{service.emoji}</span>
                  </div>
                  <div className="p-5">
                    <h3 className={`font-extrabold text-base mb-2 ${activeCard === i ? 'text-white' : 'text-secondary'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-xs leading-relaxed mb-4 ${activeCard === i ? 'text-gray-300' : 'text-gray-500'}`}>
                      {service.description}
                    </p>
                    <Link
                      to={`/services/${service.slug}`}
                      className={`flex items-center gap-2 text-xs font-bold transition-colors ${
                        activeCard === i ? 'text-white hover:text-pink-300' : 'text-primary hover:text-primary-dark'
                      }`}
                    >
                      View All Details <FiArrowRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pregnancy timeline on services page too */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary text-center mb-16">
            Taking Care of You and Your<br />Baby Pregnancy Timeline
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-9 gap-4 items-end">
            {[1,2,3,4,5,6,7,8,9].map(m => (
              <div key={m} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="group-hover:scale-110 transition-transform">
                  <svg width="50" height={80 + m * 10} viewBox="0 0 60 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="30" cy="20" rx="12" ry="14" fill="#2d1b4e" />
                    <path d="M38 10 Q50 5 48 30 Q46 20 38 18Z" fill="#2d1b4e" />
                    <ellipse cx="30" cy="24" rx="10" ry="12" fill="#f4c5a0" />
                    <rect x="20" y="36" width="20" height="22" rx="4" fill="#e91e8c" />
                    <rect x="20" y="58" width="20" height="50" rx="4" fill="#f8b5c5" />
                    {m >= 3 && (
                      <ellipse
                        cx={30 + Math.min((m - 3) * 3, 14)}
                        cy="75"
                        rx={Math.min((m - 3) * 5, 22)}
                        ry={Math.min((m - 3) * 4, 18)}
                        fill="#f8b5c5"
                      />
                    )}
                    {m >= 3 && (
                      <ellipse cx={30 + Math.min((m - 3) * 2, 8)} cy="75" rx={Math.min((m - 2) * 2, 8)} ry={Math.min((m - 2) * 2.5, 10)} fill="white" opacity="0.7" />
                    )}
                    <rect x="22" y="106" width="7" height="35" rx="3.5" fill="#f8b5c5" />
                    <rect x="31" y="106" width="7" height="35" rx="3.5" fill="#f8b5c5" />
                    <ellipse cx="25" cy="143" rx="6" ry="4" fill="#f4c5a0" />
                    <ellipse cx="34" cy="143" rx="6" ry="4" fill="#f4c5a0" />
                    <path d="M20 42 Q8 50 10 62" stroke="#f4c5a0" strokeWidth="5" strokeLinecap="round" fill="none" />
                    <path d="M40 42 Q52 50 50 62" stroke="#f4c5a0" strokeWidth="5" strokeLinecap="round" fill="none" />
                  </svg>
                </div>
                <div className="px-2 py-1 rounded-lg text-xs font-bold border border-gray-200 bg-white text-secondary whitespace-nowrap">
                  {m} Month
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage
