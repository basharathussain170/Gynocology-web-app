import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import pregnant from "/help-img/reproduction.png"
import pregnancy from "/help-img/pregnancy.png"
import scan from "/help-img/ultrasound.png"
import birth from "/help-img/baby-buggy.png"
import care from "/help-img/baby_care.png"
import feeding from "/help-img/feeding.png"

const tabs = [
  {
    id: 'getting-pregnant',
    label: 'Getting Pregnant',
    icon:  <img src={pregnant} alt="pregnant" className="w-9 h-9 object-contain" />,
    image: '/Home-img/img4.webp',
    heading: 'Your Journey to Parenthood Starts Here',
    content: 'We provide comprehensive fertility evaluations, ovulation tracking, and personalized treatment plans to help you achieve your dream of becoming a parent.',
    features: [
      'Fertility assessments and evaluations',
      'Ovulation monitoring services',
      'Hormonal testing and analysis',
      'Personalized treatment planning',
      'Emotional support throughout the process',
    ],
  },
  {
    id: 'pregnancy',
    label: 'Pregnancy',
    icon: <img src={pregnancy} alt="pregnancy" className="w-9 h-9 object-contain" />,
    image: '/Home-img/img1 (2).webp',
    heading: 'Comprehensive Care at the Professional Pregnancy Center',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    features: [
      'Prenatal care and health consultations',
      'Ultrasounds and diagnostic imaging services',
      'Nutritional guidance for expecting mothers',
      'Labor preparation and childbirth classes',
      'Postnatal support and wellness programs',
    ],
  },
  {
    id: 'first-scan',
    label: 'Your First Scan',
    icon:  <img src={scan} alt="scan" className="w-9 h-9 object-contain" />,
    image: '/Home-img/img3.webp',
    heading: "Your Baby's First Glimpse at the World",
    content: 'Experience the joy of seeing your baby for the first time with our state-of-the-art ultrasound technology and expert sonographers.',
    features: [
      'High-resolution 3D/4D ultrasound imaging',
      'Expert sonographer consultations',
      'Dating and viability scans',
      'Nuchal translucency screening',
      'Detailed anomaly scans',
    ],
  },
  {
    id: 'baby-birth',
    label: 'Baby Birth',
    icon:  <img src={birth} alt="birth" className="w-9 h-9 object-contain" />,
    image: '/Home-img/img2.webp',
    heading: 'Safe and Supported Birthing Experience',
    content: 'Our expert team ensures you have a safe, comfortable, and memorable birthing experience with 24/7 support from our dedicated professionals.',
    features: [
      'Natural birth support and guidance',
      'Epidural and pain management options',
      'Emergency C-section capabilities',
      'Dedicated birthing suites',
      'Immediate postpartum care',
    ],
  },
  {
    id: 'baby-care',
    label: 'Baby Care',
    icon: <img src={care} alt="care" className="w-9 h-9 object-contain" />,
    image: '/Home-img/img1 (1).webp',
    heading: 'Expert Newborn Care and Support',
    content: 'We provide comprehensive newborn care services to ensure your baby gets the best start in life with expert medical guidance.',
    features: [
      'Newborn health assessments',
      'Breastfeeding support and guidance',
      'Vaccinations and immunizations',
      'Developmental milestone tracking',
      'Pediatric nutrition counseling',
    ],
  },
  {
    id: 'feeding-baby',
    label: 'Feeding Baby',
    icon: <img src={feeding} alt="feeding" className="w-9 h-9 object-contain" />,
    image: '/Home-img/img6.webp',
    heading: 'Supporting Your Breastfeeding Journey',
    content: 'Our lactation consultants and nutrition experts are here to support you and your baby through every step of the feeding journey.',
    features: [
      'Lactation consultant services',
      'Breastfeeding technique guidance',
      'Formula feeding support',
      'Weaning advice and support',
      'Nutritional guidance for infants',
    ],
  },
]

const WhoWeHelp = () => {
  const [activeTab, setActiveTab] = useState('pregnancy')
  const activeData = tabs.find(t => t.id === activeTab)

  return (
    <section className="py-20" style={{ background: '#f5f5f7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2
          className="text-center font-extrabold mb-10"
          style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', color: '#2d1050' }}
        >
          We Are Helping People Who Are
        </h2>

        {/* Tab bar */}
        <div
          className="flex flex-wrap lg:flex-nowrap w-full justify-center gap-1 sm:gap-2 rounded-2xl p-2 shadow-sm mb-12 mx-auto overflow-x-auto"
          style={{ background: '#ffffff', maxWidth: '1000px' }}
        >
          {tabs.map(tab => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-2 font-semibold rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 transition-all text-base whitespace-nowrap hover:text-[#db479d]"
                style={{
                  background: isActive ? '#db479d' : 'transparent',
                  color: isActive ? '#ffffff' : '#2d1050',
                  // boxShadow: isActive ? '0 4px 14px rgba(219,71,157,0.3)' : 'none',
                }}
              >
                <img
                  src={tab.icon.props.src}
                  alt={tab.icon.props.alt}
                  className={`w-9 h-9 object-contain ${isActive ? 'brightness-0 invert' : ''}`}
                />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div>
            <h3
              className="font-extrabold mb-4"
              style={{
                fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                color: '#2d1050',
                lineHeight: 1.25,
              }}
            >
              {activeData.heading}
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed text-sm sm:text-base">
              {activeData.content}
            </p>

            <ul className="space-y-3 mb-8">
              {activeData.features.map(feat => (
                <li key={feat} className="flex items-center gap-3">
                  {/* Pink checkmark */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <path
                      d="M3 8.5L6.5 12L13 5"
                      stroke="#d63384"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm font-medium" style={{ color: '#2d1050' }}>{feat}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-white rounded-full px-8 py-4 transition-all hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #d63384 0%, #c0267a 100%)',
                boxShadow: '0 8px 24px rgba(214,51,132,0.35)',
                fontSize: '0.95rem',
              }}
            >
              Read more <FiArrowRight />
            </Link>
          </div>

          {/* Right: image */}
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ height: '340px' }}>
            <img
              src={activeData.image}
              alt={activeData.label}
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhoWeHelp