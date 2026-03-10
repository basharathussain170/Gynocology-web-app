import { useParams, Link } from 'react-router-dom'
import { FiArrowRight, FiChevronRight, FiPhone, FiCalendar } from 'react-icons/fi'
import { BsCheckCircleFill } from 'react-icons/bs'
import { MdShield } from 'react-icons/md'

const serviceData = {
  'family-planning': {
    title: 'Family Planning',
    emoji: '👨‍👩‍👧',
    color: 'from-pink-50 to-rose-50',
    tagline: 'Empowering You to Plan Your Family with Confidence',
    intro: 'Our comprehensive family planning services are designed to help you make informed decisions about your reproductive health. We provide personalized guidance, education, and medical support to help you achieve your family goals.',
    features: [
      'Contraception consultation and prescription',
      'Fertility awareness education',
      'Pre-conception counseling',
      'Hormonal health assessment',
      'Natural family planning guidance',
      'Long-term contraception options',
      'Emergency contraception information',
      'Reproductive health monitoring',
    ],
    process: [
      { step: '01', title: 'Initial Consultation', desc: 'Comprehensive health assessment and discussion of your family planning goals and medical history.' },
      { step: '02', title: 'Personalized Plan', desc: 'Development of a customized family planning strategy tailored to your specific needs and preferences.' },
      { step: '03', title: 'Treatment & Support', desc: 'Ongoing medical care, prescriptions, and support throughout your family planning journey.' },
      { step: '04', title: 'Follow-up Care', desc: 'Regular check-ins to ensure your plan is working effectively and adjustments as needed.' },
    ],
    stats: [
      { num: '98%', label: 'Patient Satisfaction' },
      { num: '5K+', label: 'Families Helped' },
      { num: '15+', label: 'Years Experience' },
    ],
  },
  'gynecology': {
    title: 'Gynecology',
    emoji: '🩺',
    color: 'from-purple-50 to-pink-50',
    tagline: 'Comprehensive Women\'s Health Care at Every Stage of Life',
    intro: 'Our gynecology department provides complete women\'s health services from adolescence through menopause. Our board-certified gynecologists use the latest technology and evidence-based practices to ensure you receive exceptional care.',
    features: [
      'Annual well-woman examinations',
      'Pap smear and cervical cancer screening',
      'STI testing and treatment',
      'Menstrual disorder management',
      'Polycystic ovary syndrome (PCOS) care',
      'Endometriosis diagnosis and treatment',
      'Minimally invasive gynecologic surgery',
      'Menopause management and HRT',
    ],
    process: [
      { step: '01', title: 'Comprehensive Exam', desc: 'Thorough physical examination and review of your complete medical and gynecological history.' },
      { step: '02', title: 'Diagnostic Testing', desc: 'Advanced laboratory and imaging tests to accurately diagnose any conditions.' },
      { step: '03', title: 'Treatment Plan', desc: 'Evidence-based treatment options discussed and implemented with your full participation.' },
      { step: '04', title: 'Ongoing Monitoring', desc: 'Regular follow-up appointments to track progress and ensure optimal outcomes.' },
    ],
    stats: [
      { num: '99%', label: 'Accuracy Rate' },
      { num: '10K+', label: 'Patients Served' },
      { num: '25+', label: 'Specialist Doctors' },
    ],
  },
  'prenatal-ultrasound': {
    title: 'Prenatal Ultrasound',
    emoji: '🔬',
    color: 'from-blue-50 to-purple-50',
    tagline: 'See Your Baby\'s World Through Advanced Imaging Technology',
    intro: 'Our state-of-the-art prenatal ultrasound services provide crystal-clear imaging to monitor your baby\'s growth and development. Our certified sonographers ensure every scan is performed with precision and care.',
    features: [
      'First trimester viability scans (6-12 weeks)',
      'Nuchal translucency screening',
      'Anatomy scan (18-22 weeks)',
      '3D and 4D ultrasound imaging',
      'Doppler blood flow studies',
      'Fetal growth and wellbeing scans',
      'Cervical length measurement',
      'Placenta location assessment',
    ],
    process: [
      { step: '01', title: 'Booking', desc: 'Schedule your scan at the appropriate gestational age for the most accurate results.' },
      { step: '02', title: 'The Scan', desc: 'Comfortable, non-invasive ultrasound performed by certified sonographers using advanced equipment.' },
      { step: '03', title: 'Image Review', desc: 'Detailed review of all images with measurements and assessment of baby\'s development.' },
      { step: '04', title: 'Results & Report', desc: 'Comprehensive report shared with your healthcare provider and full explanation of findings.' },
    ],
    stats: [
      { num: '4D', label: 'Ultra HD Imaging' },
      { num: '8K+', label: 'Scans Performed' },
      { num: '100%', label: 'Safe & Painless' },
    ],
  },
  'fertility-medication': {
    title: 'Fertility Medication',
    emoji: '💊',
    color: 'from-green-50 to-teal-50',
    tagline: 'Advanced Fertility Treatments to Help You Start Your Family',
    intro: 'Our fertility specialists offer comprehensive fertility evaluation and treatment options, including the latest medications and assisted reproductive technologies. We work closely with each patient to develop personalized treatment plans.',
    features: [
      'Ovulation induction therapy',
      'Clomiphene citrate treatment',
      'Gonadotropin injections',
      'Intrauterine insemination (IUI)',
      'IVF medication protocols',
      'Progesterone support therapy',
      'PCOS fertility treatment',
      'Male factor fertility solutions',
    ],
    process: [
      { step: '01', title: 'Fertility Assessment', desc: 'Comprehensive evaluation including blood tests, ultrasounds, and semen analysis to identify underlying causes.' },
      { step: '02', title: 'Treatment Design', desc: 'Customized medication protocol designed based on your specific fertility diagnosis and goals.' },
      { step: '03', title: 'Monitoring', desc: 'Careful monitoring throughout treatment with regular ultrasounds and hormone level checks.' },
      { step: '04', title: 'Pregnancy Support', desc: 'Continued support and medication management through early pregnancy for the best outcomes.' },
    ],
    stats: [
      { num: '75%', label: 'Success Rate' },
      { num: '3K+', label: 'Pregnancies Achieved' },
      { num: '20+', label: 'Treatment Options' },
    ],
  },
  'prenatal-care': {
    title: 'Prenatal Care',
    emoji: '🤰',
    color: 'from-yellow-50 to-orange-50',
    tagline: 'Expert Care for You and Your Baby Throughout Pregnancy',
    intro: 'Our comprehensive prenatal care program provides expectant mothers with all the support and medical care needed for a healthy pregnancy. From your first appointment to delivery, we are with you every step of the way.',
    features: [
      'Monthly prenatal check-ups',
      'Blood pressure and weight monitoring',
      'Nutritional counseling and supplements',
      'Genetic testing and counseling',
      'Childbirth education classes',
      'Labor and delivery preparation',
      'High-risk pregnancy management',
      'Mental health support',
    ],
    process: [
      { step: '01', title: 'First Visit (6-8 weeks)', desc: 'Confirmation of pregnancy, complete health assessment, and development of your personalized care plan.' },
      { step: '02', title: 'Regular Check-ups', desc: 'Monthly visits in first and second trimester, increasing frequency as due date approaches.' },
      { step: '03', title: 'Birth Planning', desc: 'Comprehensive birth plan discussion and preparation for labor and delivery.' },
      { step: '04', title: 'Postpartum Care', desc: 'Follow-up care after delivery to ensure your recovery and transition to parenthood.' },
    ],
    stats: [
      { num: '99%', label: 'Healthy Deliveries' },
      { num: '12K+', label: 'Babies Delivered' },
      { num: '24/7', label: 'Emergency Support' },
    ],
  },
  'well-woman-exam': {
    title: 'Well-Woman Exam',
    emoji: '💉',
    color: 'from-teal-50 to-blue-50',
    tagline: 'Proactive Health Care for Every Woman at Every Age',
    intro: 'Annual well-woman examinations are the cornerstone of preventive women\'s healthcare. These comprehensive visits allow us to monitor your health, catch problems early, and keep you feeling your best year-round.',
    features: [
      'Comprehensive physical examination',
      'Blood pressure and vital signs check',
      'Pelvic examination and Pap smear',
      'Breast examination',
      'STI screening as appropriate',
      'Hormone level assessment',
      'Immunization review and updates',
      'Mental health and wellness screening',
    ],
    process: [
      { step: '01', title: 'Health History', desc: 'Review of your complete medical history, family history, and any current health concerns.' },
      { step: '02', title: 'Physical Exam', desc: 'Comprehensive physical examination including pelvic exam and breast check.' },
      { step: '03', title: 'Lab Work', desc: 'Blood tests, Pap smear, and other appropriate screening tests based on your age and risk factors.' },
      { step: '04', title: 'Health Plan', desc: 'Personalized recommendations for maintaining and improving your overall health and wellness.' },
    ],
    stats: [
      { num: '100%', label: 'Preventive Focus' },
      { num: '20K+', label: 'Women Screened' },
      { num: '1x', label: 'Per Year Recommended' },
    ],
  },
}

const otherServices = [
  { title: 'Family Planning', slug: 'family-planning' },
  { title: 'Gynecology', slug: 'gynecology' },
  { title: 'Prenatal Ultrasound', slug: 'prenatal-ultrasound' },
  { title: 'Fertility Medication', slug: 'fertility-medication' },
  { title: 'Prenatal Care', slug: 'prenatal-care' },
  { title: 'Well-Woman Exam', slug: 'well-woman-exam' },
]

const ServiceDetailPage = () => {
  const { slug } = useParams()
  const data = serviceData[slug] || serviceData['gynecology']

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-72 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${data.color}`}>
          <div className="absolute inset-0 flex items-end justify-end pr-20 pb-10 opacity-20">
            <span className="text-[200px]">{data.emoji}</span>
          </div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl font-extrabold text-secondary mb-4">{data.title}</h1>
            <div className="flex items-center gap-2">
              <Link to="/" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                Home <FiChevronRight size={12} />
              </Link>
              <Link to="/services" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                Services <FiChevronRight size={12} />
              </Link>
              <span className="text-secondary font-semibold text-sm">{data.title}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Services list */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-extrabold text-secondary text-lg mb-4">Our Services</h3>
                <ul className="space-y-2">
                  {otherServices.map(s => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all ${
                          s.slug === slug
                            ? 'bg-primary text-white'
                            : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
                        }`}
                      >
                        {s.title}
                        <FiChevronRight />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact CTA */}
              <div className="bg-secondary rounded-2xl p-6 text-white">
                <MdShield className="text-primary text-3xl mb-3" />
                <h3 className="font-extrabold text-xl mb-2">Need Help?</h3>
                <p className="text-gray-300 text-sm mb-4">Contact us anytime for a consultation or to schedule an appointment.</p>
                <a href="tel:+11234567890" className="flex items-center gap-2 text-primary font-bold">
                  <FiPhone /> +1 123 456 7890
                </a>
              </div>

              {/* Appointment CTA */}
              <Link
                to="/contact"
                className="btn-primary w-full justify-center text-center py-4 shadow-lg shadow-primary/30"
              >
                <FiCalendar /> Book Appointment
              </Link>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Hero image + intro */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className={`h-72 bg-gradient-to-br ${data.color} flex items-center justify-center`}>
                  <span className="text-[120px]">{data.emoji}</span>
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-extrabold text-secondary mb-3">{data.tagline}</h2>
                  <p className="text-gray-500 leading-relaxed">{data.intro}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {data.stats.map(stat => (
                  <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm text-center">
                    <div className="text-3xl font-extrabold text-primary">{stat.num}</div>
                    <div className="text-xs text-gray-500 font-semibold mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-extrabold text-secondary mb-6">What We Offer</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.features.map(feat => (
                    <div key={feat} className="flex items-start gap-3">
                      <BsCheckCircleFill className="text-primary flex-shrink-0 mt-0.5 text-lg" />
                      <span className="text-gray-700 font-medium text-sm">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-extrabold text-secondary mb-8">How It Works</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.process.map(step => (
                    <div key={step.step} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="font-extrabold text-primary text-sm">{step.step}</span>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-secondary mb-1">{step.title}</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-extrabold mb-3">Ready to Get Started?</h3>
                <p className="text-pink-100 mb-6">Book your appointment today and take the first step towards better health.</p>
                <Link
                  to="/contact"
                  className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition-colors inline-flex items-center gap-2"
                >
                  Schedule Now <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServiceDetailPage
