import { Link } from 'react-router-dom'
import { FiArrowRight, FiCalendar } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden bg-gradient-to-br from-white via-pink-50 to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-1/2 h-full bg-gradient-to-l from-pink-100/40 to-transparent"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full py-16">
          {/* Left Content */}
          <div className="relative z-10 animate-fadeInUp">
            <p className="section-tag">
              <span className="w-8 h-0.5 bg-primary inline-block"></span>
              GYNECOLOGY
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight mb-6">
              We want you to{' '}
              <span className="text-secondary">experience birthing</span>{' '}
              <span className="text-primary">with lots of love!</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn-primary shadow-lg shadow-primary/30 text-base px-8 py-4"
              >
                <FiCalendar /> Book Appointment
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 font-bold text-secondary hover:text-primary transition-colors px-4 py-4"
              >
                Our Services <FiArrowRight />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-12">
              {[
                { num: '15+', label: 'Years Experience' },
                { num: '5K+', label: 'Happy Patients' },
                { num: '25+', label: 'Expert Doctors' },
              ].map((stat) => (
                <div key={stat.label} className="stat-card px-6 py-4 text-center">
                  <div className="text-2xl font-extrabold text-primary">{stat.num}</div>
                  <div className="text-xs text-gray-500 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image placeholder */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 rounded-3xl overflow-hidden h-[520px] bg-gradient-to-br from-pink-200 to-purple-100 flex items-center justify-center shadow-2xl">
              <div className="text-center text-gray-400 p-8">
                <div className="text-8xl mb-4">👩‍⚕️</div>
                <p className="text-lg font-semibold">Hero Image</p>
                <p className="text-sm">Replace with actual photo</p>
              </div>
              {/* Decorative dots */}
              <div className="absolute top-6 right-6 grid grid-cols-3 gap-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-primary/30 rounded-full"></div>
                ))}
              </div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 z-20">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl">❤️</div>
              <div>
                <div className="font-bold text-secondary text-sm">Expert Care</div>
                <div className="text-xs text-gray-400">24/7 Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
