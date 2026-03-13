import { useState } from 'react'
import { FiChevronRight, FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    q: 'How much do you charge for pedicure ?',
    a: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
  },
  {
    q: 'What types of treatments do you offer?',
    a: 'We offer comprehensive gynecological services including prenatal care, fertility treatments, well-woman examinations, contraceptive counseling, and much more. Our experienced team is here to support you.',
  },
  {
    q: 'How do i book my appointment ?',
    a: 'You can book an appointment through our website using the appointment form, by calling our office, or by visiting us in person. We offer flexible scheduling to accommodate your needs.',
  },
  {
    q: 'Can i cancel my appointment',
    a: 'Yes, you can cancel or reschedule your appointment with at least 24 hours notice. Please contact our office by phone or email to make any changes to your booking.',
  },
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — real image */}
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '420px' }}>
            <img
              src="/Home-img/image (1).webp"
              alt="Mother with baby"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Right — FAQs */}
          <div className="pt-0 lg:pt-2">
            <h2
              className="font-extrabold mb-4"
              style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color: '#2d1050', lineHeight: 1.2 }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm sm:text-base">
              It is a long established fact that a reader will be distracted by the readable content of a
              page when looking at its layout.
            </p>

            <div className="divide-y divide-gray-200">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i
                return (
                  <div key={i}>
                    <button
                      className="w-full flex items-center justify-between py-4 text-left group"
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                    >
                      <span
                        className="font-semibold text-sm sm:text-base pr-4"
                        style={{ color: '#2d1050' }}
                      >
                        {faq.q}
                      </span>
                      {isOpen
                        ? <FiChevronDown size={18} style={{ color: '#d63384', flexShrink: 0 }} />
                        : <FiChevronRight size={18} style={{ color: '#2d1050', flexShrink: 0 }} />
                      }
                    </button>

                    {isOpen && (
                      <div className="pb-5 text-gray-500 text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQSection