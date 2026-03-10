import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiUser, FiMail, FiPhone, FiChevronRight, FiMapPin, FiClock, FiArrowRight } from 'react-icons/fi'
import { MdShield } from 'react-icons/md'

const locations = [
  {
    country: 'United States',
    flag: '🇺🇸',
    address: '123 Health Way, Suite 456',
    city: 'Goodland, 78910 United States',
    phone: '+0 123-456-7890',
    hours: 'Mon-Thu: 8:00am-5:00pm',
    hours2: 'Fri: 8:00am-1:00pm',
  },
  {
    country: 'Canada',
    flag: '🇨🇦',
    address: '123 Health Way, Suite 456',
    city: 'Goodland, 78910 United States',
    phone: '+0 123-456-7890',
    hours: 'Mon-Thu: 8:00am-5:00pm',
    hours2: 'Fri: 8:00am-1:00pm',
  },
]

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent successfully!')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 flex items-center justify-center text-[200px]">👶</div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-secondary mb-4">Contact Us</h1>
            <div className="flex items-center gap-2">
              <Link to="/" className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                Home <FiChevronRight size={14} /> Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left image */}
            <div className="rounded-3xl overflow-hidden h-[500px] bg-gradient-to-br from-gray-100 to-pink-50 flex items-center justify-center shadow-xl">
              <div className="text-center text-gray-400">
                <div className="text-9xl mb-4">🏥</div>
                <p className="text-lg font-semibold">Contact Image</p>
                <p className="text-sm">Replace with clinic photo</p>
              </div>
            </div>

            {/* Right form */}
            <div>
              <h2 className="text-4xl font-extrabold text-secondary mb-2">Get In Touch</h2>
              <p className="text-gray-400 mb-8">You Can Reach Us Anytime</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative border-b border-gray-200 pb-1">
                  <FiUser className="absolute left-0 top-3 text-primary" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full pl-7 py-3 text-sm font-medium focus:outline-none placeholder-gray-400 bg-transparent"
                  />
                </div>
                <div className="relative border-b border-gray-200 pb-1">
                  <FiMail className="absolute left-0 top-3 text-primary" />
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full pl-7 py-3 text-sm font-medium focus:outline-none placeholder-gray-400 bg-transparent"
                  />
                </div>
                <div className="relative border-b border-gray-200 pb-1">
                  <FiPhone className="absolute left-0 top-3 text-primary" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={e => setForm({...form, phone: e.target.value})}
                    className="w-full pl-7 py-3 text-sm font-medium focus:outline-none placeholder-gray-400 bg-transparent"
                  />
                </div>
                <div className="border-b border-gray-200 pb-1">
                  <textarea
                    placeholder="Write Message"
                    rows="4"
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full py-3 text-sm font-medium focus:outline-none placeholder-gray-400 bg-transparent resize-none"
                  />
                </div>

                {/* reCAPTCHA placeholder */}
                <div className="border border-gray-200 rounded-lg p-3 flex items-center gap-3 bg-gray-50 w-fit">
                  <input type="checkbox" className="w-5 h-5" />
                  <span className="text-sm text-gray-600">I'm not a robot</span>
                  <div className="ml-4 text-right">
                    <div className="text-xs text-gray-400">reCAPTCHA</div>
                    <div className="text-xs text-gray-300">Privacy · Terms</div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center py-4 text-base shadow-lg shadow-primary/30"
                >
                  Send Message <FiArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Locations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-80 bg-gradient-to-br from-green-100 to-blue-100 shadow-md flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-3">🗺️</div>
                <p className="font-semibold">Interactive Map</p>
                <p className="text-sm">Replace with Google Maps embed</p>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h2 className="section-title mb-2">All Locations</h2>
              <p className="text-gray-500 text-sm mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="space-y-4">
                {locations.map((loc) => (
                  <div key={loc.country} className="bg-white border border-pink-100 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">{loc.flag}</span>
                          <span className="font-extrabold text-secondary">{loc.country}</span>
                        </div>
                        <div className="space-y-1.5 text-sm text-gray-600">
                          <div className="flex items-start gap-2">
                            <FiMapPin className="text-primary flex-shrink-0 mt-0.5" />
                            <span>{loc.address}<br />{loc.city}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiPhone className="text-primary" />
                            <span>{loc.phone}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <FiClock className="text-primary flex-shrink-0 mt-0.5" />
                            <span>{loc.hours}<br />{loc.hours2}</span>
                          </div>
                        </div>
                        <a href="#" className="text-primary font-bold text-sm mt-3 inline-flex items-center gap-1 hover:underline">
                          Get Directions ↗
                        </a>
                      </div>
                      {/* Mini map thumbnail */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center flex-shrink-0 ml-4">
                        <span className="text-3xl">📍</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage
