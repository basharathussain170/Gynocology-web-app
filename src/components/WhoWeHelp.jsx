import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { BsCheckCircleFill } from 'react-icons/bs'

const tabs = [
  {
    id: 'getting-pregnant',
    label: 'Getting Pregnant',
    icon: '🤱',
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
    icon: '🤰',
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
    icon: '🔍',
    heading: 'Your Baby\'s First Glimpse at the World',
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
    icon: '👶',
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
    icon: '🍼',
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
    icon: '🥛',
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center mb-10">
          We Are Helping People Who Are
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 bg-white rounded-2xl p-2 shadow-sm mb-12 w-full max-w-4xl mx-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-secondary mb-4">
              {activeData.heading}
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">{activeData.content}</p>
            <ul className="space-y-3 mb-8">
              {activeData.features.map(feat => (
                <li key={feat} className="check-item">
                  <BsCheckCircleFill className="text-primary flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <Link to="/services" className="btn-primary shadow-lg shadow-primary/30">
              Read more <FiArrowRight />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden h-96 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center shadow-xl">
              <div className="text-center text-gray-400">
                <div className="text-8xl mb-4">{activeData.icon}</div>
                <p className="text-lg font-semibold">{activeData.label}</p>
                <p className="text-sm">Replace with actual photo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeHelp
