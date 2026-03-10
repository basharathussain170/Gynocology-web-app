import { useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'

const faqs = [
  {
    q: 'How much do you charge for pedicure?',
    a: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
  },
  {
    q: 'What types of treatments do you offer?',
    a: 'We offer comprehensive gynecological services including prenatal care, fertility treatments, well-woman examinations, contraceptive counseling, and much more. Our experienced team is here to support you.',
  },
  {
    q: 'How do I book my appointment?',
    a: 'You can book an appointment through our website using the appointment form, by calling our office, or by visiting us in person. We offer flexible scheduling to accommodate your needs.',
  },
  {
    q: 'Can I cancel my appointment',
    a: 'Yes, you can cancel or reschedule your appointment with at least 24 hours notice. Please contact our office by phone or email to make any changes to your booking.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden h-96 bg-gradient-to-br from-gray-100 to-pink-50 flex items-center justify-center shadow-xl">
              <div className="text-center text-gray-400">
                <div className="text-8xl mb-4">👩</div>
                <p className="text-lg font-semibold">FAQ Image</p>
                <p className="text-sm">Replace with actual photo</p>
              </div>
            </div>
          </div>

          {/* Right FAQs */}
          <div>
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </p>

            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item">
                  <button
                    className="w-full flex items-center justify-between py-4 text-left group"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className={`font-semibold text-base transition-colors ${openIndex === i ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
                      {faq.q}
                    </span>
                    <FiChevronRight
                      className={`flex-shrink-0 ml-4 text-primary transition-transform duration-300 ${openIndex === i ? 'rotate-90' : ''}`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="pb-4 text-gray-500 text-sm leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
