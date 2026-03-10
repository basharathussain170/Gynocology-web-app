import { useState } from 'react'
import { FiUser, FiMail, FiPhone, FiCalendar, FiChevronDown, FiArrowRight } from 'react-icons/fi'
import { MdShield } from 'react-icons/md'

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', datetime: '', doctor: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment booked successfully!')
  }

  return (
    <section id="appointment" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-end overflow-hidden">
          <div className="w-full h-full bg-gradient-to-l from-gray-200 to-gray-100 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-8xl mb-4">👶</div>
              <p className="text-lg font-semibold">Appointment Image</p>
              <p className="text-sm">Replace with mother-baby photo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <p className="section-tag">
            <MdShield className="text-primary text-xl" />
            MAKE APPOINTMENT
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            <span className="text-secondary">Make An </span>
            <span className="text-primary">Appointment</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full pl-4 pr-10 py-3.5 rounded-full border border-gray-200 bg-white/80 focus:outline-none focus:border-primary text-sm font-medium placeholder-gray-400"
                />
                <FiUser className="absolute right-4 top-1/2 -translate-y-1/2 text-primary" />
              </div>
              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-4 pr-10 py-3.5 rounded-full border border-gray-200 bg-white/80 focus:outline-none focus:border-primary text-sm font-medium placeholder-gray-400"
                />
                <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-primary" />
              </div>
              {/* Phone */}
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full pl-4 pr-10 py-3.5 rounded-full border border-gray-200 bg-white/80 focus:outline-none focus:border-primary text-sm font-medium placeholder-gray-400"
                />
                <FiPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-primary" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* DateTime */}
              <div className="relative">
                <input
                  type="datetime-local"
                  value={formData.datetime}
                  onChange={e => setFormData({...formData, datetime: e.target.value})}
                  className="w-full pl-4 pr-10 py-3.5 rounded-full border border-gray-200 bg-white/80 focus:outline-none focus:border-primary text-sm font-medium text-gray-500"
                />
                <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
              </div>
              {/* Doctor */}
              <div className="relative">
                <select
                  value={formData.doctor}
                  onChange={e => setFormData({...formData, doctor: e.target.value})}
                  className="w-full pl-4 pr-10 py-3.5 rounded-full border border-gray-200 bg-white/80 focus:outline-none focus:border-primary text-sm font-medium text-gray-400 appearance-none"
                >
                  <option value="">Doctor Name</option>
                  <option value="dr-smith">Dr. Sarah Smith</option>
                  <option value="dr-johnson">Dr. Emily Johnson</option>
                  <option value="dr-williams">Dr. Lisa Williams</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" />
              </div>
              {/* Submit */}
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-primary/30"
              >
                Appointment <FiArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AppointmentSection
