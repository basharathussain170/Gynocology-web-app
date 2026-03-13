import { Link } from 'react-router-dom'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { MdOutlineHealthAndSafety } from 'react-icons/md'

const AboutSection = () => {
  const features = [
    'Well-Woman Examination',
    'Contraceptive Counseling',
    'Pap Smear and HPV Testing',
    'Prenatal Care',
    'Breast Examination',
    'Obstetric Ultrasound',
  ]

  return (
    <section id="about-us" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — actual image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl" style={{ height: '460px' }}>
              <img
                src="/Home-img/img1.webp"
                alt="Doctor with patient"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* "ABOUT US" tag */}
            <p
              className="flex items-center gap-2 font-extrabold text-xs tracking-widest uppercase mb-4"
              style={{ color: '#d63384', letterSpacing: '0.18em' }}
            >
              <MdOutlineHealthAndSafety size={18} style={{ color: '#d63384' }} />
              ABOUT US
            </p>

            {/* Heading */}
            <h2
              className="font-extrabold leading-tight mb-5"
              style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
                color: '#2d1050',
                lineHeight: 1.2,
              }}
            >
              Your Trusted Partner<br />
              in Gynecological Care
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8" style={{ maxWidth: '460px' }}>
              Experience the future of healthcare. Our state-of-the-art facilities are equipped
              with the latest technology, ensuring you receive the world's best quality treatment.
            </p>

            {/* Feature checklist — 2 columns */}
            <div
              className="grid grid-cols-2 gap-x-6 gap-y-3 mb-10"
              style={{ maxWidth: '480px' }}
            >
              {features.map((feat) => (
                <div key={feat} className="flex items-center gap-2">
                  {/* Pink checkmark */}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0"
                  >
                    <path
                      d="M3 8.5L6.5 12L13 5"
                      stroke="#d63384"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm font-medium" style={{ color: '#2d1050' }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-6">
              {/* About Us button */}
              <Link
                to="/about"
                className="flex items-center gap-2 font-bold text-white rounded-full px-8 py-4 transition-all hover:opacity-90 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #d63384 0%, #c0267a 100%)',
                  boxShadow: '0 8px 24px rgba(214,51,132,0.35)',
                  fontSize: '0.95rem',
                }}
              >
                About Us <FiArrowRight />
              </Link>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2"
                  style={{ borderColor: '#d63384' }}
                >
                  <FiPhone size={18} style={{ color: '#d63384' }} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Contact us</p>
                  <p className="font-extrabold text-base" style={{ color: '#2d1050' }}>
                    +1 123 456 7890
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutSection