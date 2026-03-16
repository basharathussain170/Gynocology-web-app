import { Link } from 'react-router-dom'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import useScrollAnimation from '../hooks/useScrollAnimation'

const AboutSection = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);
  const [imageRef, imageVisible] = useScrollAnimation(0.1);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [tagRef, tagVisible] = useScrollAnimation(0.1);
  const [headingRef, headingVisible] = useScrollAnimation(0.1);
  const [descriptionRef, descriptionVisible] = useScrollAnimation(0.1);
  const [featuresRef, featuresVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1);

  const features = [
    'Well-Woman Examination',
    'Contraceptive Counseling',
    'Pap Smear and HPV Testing',
    'Prenatal Care',
    'Breast Examination',
    'Obstetric Ultrasound',
  ]

  return (
    <section ref={sectionRef} id="about-us" className="py-16 sm:py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — actual image */}
          <div ref={imageRef} className={`relative ${imageVisible ? 'scroll-animate-left visible' : 'scroll-animate-left'}`}>
            <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl" style={{ height: '350px sm:400px md:460px' }}>
              <img
                src="/Home-img/img1.webp"
                alt="Doctor with patient"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Content */}
          <div ref={contentRef} className={contentVisible ? 'scroll-animate-right visible' : 'scroll-animate-right'}>
            {/* "ABOUT US" tag */}
            <div ref={tagRef} className={tagVisible ? 'scroll-animate visible scroll-animate-stagger-1' : 'scroll-animate scroll-animate-stagger-1'}>
              <p
                className="flex items-center gap-2 font-extrabold text-xs sm:text-sm tracking-widest uppercase mb-4"
                style={{ color: '#d63384', letterSpacing: '0.18em' }}
              >
                <MdOutlineHealthAndSafety size={18} style={{ color: '#d63384' }} />
                ABOUT US
              </p>
            </div>

            {/* Heading */}
            <div ref={headingRef} className={headingVisible ? 'scroll-animate visible scroll-animate-stagger-2' : 'scroll-animate scroll-animate-stagger-2'}>
              <h2
                className="font-extrabold leading-tight mb-5"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.6rem)',
                  color: '#2d1050',
                  lineHeight: 1.2,
                }}
              >
                Your Trusted Partner<br />
                in Gynecological Care
              </h2>
            </div>

            {/* Description */}
            <div ref={descriptionRef} className={descriptionVisible ? 'scroll-animate visible scroll-animate-stagger-3' : 'scroll-animate scroll-animate-stagger-3'}>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8" style={{ maxWidth: '100%', sm: { maxWidth: '460px' } }}>
                Experience the future of healthcare. Our state-of-the-art facilities are equipped
                with the latest technology, ensuring you receive the world's best quality treatment.
              </p>
            </div>

            {/* Feature checklist — responsive columns */}
            <div ref={featuresRef} className={`grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-3 mb-8 sm:mb-10 ${featuresVisible ? 'scroll-animate visible scroll-animate-stagger-4' : 'scroll-animate scroll-animate-stagger-4'}`}>
              {features.map((feat, index) => (
                <div key={feat} className={`flex items-center gap-2 scroll-animate-stagger-${index + 5}`}>
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
                  <span className="text-xs sm:text-sm font-medium" style={{ color: '#2d1050' }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA row */}
            <div ref={ctaRef} className={`flex flex-col sm:flex-row flex-wrap items-center gap-4 sm:gap-6 ${ctaVisible ? 'scroll-animate visible scroll-animate-stagger-6' : 'scroll-animate scroll-animate-stagger-6'}`}>
              {/* About Us button */}
              <Link
                to="/about"
                className="flex items-center gap-2 font-bold text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 transition-all hover:opacity-90 hover:shadow-lg w-full sm:w-auto justify-center"
                style={{
                  background: 'linear-gradient(135deg, #d63384 0%, #c0267a 100%)',
                  boxShadow: '0 8px 24px rgba(214,51,132,0.35)',
                  fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
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