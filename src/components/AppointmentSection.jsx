import { useState } from 'react'
import { FiUser, FiMail, FiPhone, FiCalendar, FiChevronDown, FiArrowRight } from 'react-icons/fi'
import { MdOutlineHealthAndSafety } from 'react-icons/md'

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', datetime: '', doctor: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Appointment booked successfully!')
  }

  const inputClass =
    'w-full pl-5 pr-11 py-4 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-pink-400 text-sm font-medium placeholder-gray-400 text-gray-700'

  return (
    <section
      id="appointment"
      className="relative overflow-hidden"
      style={{ background: '#f5f5f7', minHeight: '420px' }}
    >
      {/* Right-side B&W photo */}
      <div
        className="absolute top-0 right-0 bottom-0 hidden lg:block"
        style={{ width: '48%' }}
      >
        <img
          src="/Home-img/aa.png"
          alt="Mother with baby"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'grayscale(100%)' }}
        />
        {/* left-fade blend */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #f5f5f7 0%, transparent 18%)' }}
        />
      </div>

      {/* Left content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">
        <div style={{ maxWidth: '580px' }}>

          {/* Tag */}
          <p
            className="flex items-center gap-2 font-extrabold text-xs tracking-widest uppercase mb-4"
            style={{ color: '#d63384', letterSpacing: '0.18em' }}
          >
            <MdOutlineHealthAndSafety size={17} />
            MAKE APPOINTMENT
          </p>

          {/* Heading */}
          <h2
            className="font-extrabold mb-10"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', lineHeight: 1.15 }}
          >
            <span style={{ color: '#2d1050' }}>Make An </span>
            <span style={{ color: '#d63384' }}>Appointment</span>
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                />
                <FiUser className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#d63384' }} />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                />
                <FiMail className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#d63384' }} />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClass}
                />
                <FiPhone className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: '#d63384' }} />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Date Time"
                  onFocus={e => (e.target.type = 'datetime-local')}
                  onBlur={e => { if (!e.target.value) e.target.type = 'text' }}
                  value={formData.datetime}
                  onChange={e => setFormData({ ...formData, datetime: e.target.value })}
                  className={inputClass}
                />
                <FiCalendar className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#d63384' }} />
              </div>
              <div className="relative">
                <select
                  value={formData.doctor}
                  onChange={e => setFormData({ ...formData, doctor: e.target.value })}
                  className={inputClass + ' appearance-none cursor-pointer'}
                  style={{ paddingRight: '2.5rem' }}
                >
                  <option value="">Doctor Name</option>
                  <option value="dr-smith">Dr. Sarah Smith</option>
                  <option value="dr-johnson">Dr. Emily Johnson</option>
                  <option value="dr-williams">Dr. Lisa Williams</option>
                </select>
                <FiChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: '#d63384' }} />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 font-bold text-white rounded-full py-4 transition-all hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #d63384 0%, #c0267a 100%)',
                  boxShadow: '0 8px 24px rgba(214,51,132,0.35)',
                  fontSize: '0.95rem',
                }}
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