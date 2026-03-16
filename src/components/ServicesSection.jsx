import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import useScrollAnimation from '../hooks/useScrollAnimation'

const services = [
  {
    id: 1,
    title: 'Family planning',
    slug: 'family-planning',
    description: 'It is a long established fact that a reader will be distracted.',
    image: '/Home-img/img2.webp',
  },
  {
    id: 2,
    title: 'Gynecology',
    slug: 'gynecology',
    description: 'It is a long established fact that a reader will be distracted.',
    image: '/Home-img/img3.webp',
    featured: true,
  },
  {
    id: 3,
    title: 'Prenatal ultrasound',
    slug: 'prenatal-ultrasound',
    description: 'It is a long established fact that a reader will be distracted.',
    image: '/Home-img/img4.webp',
  },
  {
    id: 4,
    title: 'Fertility medication',
    slug: 'fertility-medication',
    description: 'It is a long established fact that a reader will be distracted.',
    image: '/Home-img/img1 (1).webp',
  },
];

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(2)
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} id="services" className="py-16 sm:py-20" style={{ background: '#f5f5f7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={headerRef} className={`text-center mb-12 ${headerVisible ? 'scroll-animate visible' : 'scroll-animate'}`}>
          <p
            className="flex items-center justify-center gap-2 font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-4"
            style={{ color: '#d63384', letterSpacing: '0.18em' }}
          >
            <MdOutlineHealthAndSafety size={17} style={{ color: '#d63384' }} />
            OUR SERVICES
          </p>
          <h2
            className="font-extrabold leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', color: '#2d1050', lineHeight: 1.2 }}
          >
            The Best Quality Service<br />You Can Get
          </h2>
        </div>

        {/* Cards grid */}
        <div ref={cardsRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 ${cardsVisible ? 'scroll-animate visible' : 'scroll-animate'}`}>
          {services.map((service) => {
            const isActive = activeCard === service.id
            return (
              <div
                key={service.id}
                className={`rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 scroll-animate-scale ${cardsVisible ? 'visible' : ''} scroll-animate-stagger-${service.id}`}
                style={{
                  boxShadow: isActive
                    ? '0 20px 48px rgba(45,16,80,0.18)'
                    : '0 2px 12px rgba(0,0,0,0.07)',
                  transform: isActive ? 'translateY(-6px)' : 'translateY(0)',
                  background: isActive ? '#2d1050' : '#ffffff',
                }}
                onMouseEnter={() => setActiveCard(service.id)}
              >
                {/* Image */}
                <div className="overflow-hidden" style={{ height: '160px sm:180px md:200px' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3
                    className="font-extrabold text-base sm:text-lg mb-2"
                    style={{ color: isActive ? '#ffffff' : '#2d1050' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5"
                    style={{ color: isActive ? 'rgba(255,255,255,0.7)' : '#9ca3af' }}
                  >
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex items-center gap-2 font-bold text-xs sm:text-sm transition-colors"
                    style={{ color: isActive ? '#ffffff' : '#d63384' }}
                  >
                    View All Details{' '}
                    <BsArrowRightCircleFill
                      size={17}
                      style={{ color: isActive ? '#ffffff' : '#d63384' }}
                    />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA bar */}
        <div
          ref={ctaRef}
          className={`mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between rounded-2xl px-6 sm:px-8 py-4 sm:py-5 ${ctaVisible ? 'scroll-animate visible' : 'scroll-animate'}`}
          style={{ background: '#ffffff', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
        >
          <p className="text-gray-600 font-medium text-sm sm:text-base mb-4 sm:mb-0 text-center sm:text-left">
            We help you live your life in full motion.
          </p>
          <Link
            to="/services"
            className="font-bold text-white rounded-full px-6 sm:px-8 py-3 transition-all hover:opacity-90 w-full sm:w-auto text-center"
            style={{ background: '#2d1050', fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)' }}
          >
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection
