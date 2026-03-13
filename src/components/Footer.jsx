import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')

  return (
    <footer style={{ background: '#3b1060' }}>

      {/* ── White card ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div
          className="bg-white rounded-3xl overflow-hidden relative"
          style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">

            {/* Left: logo + overflowing image + social */}
            <div className="relative flex flex-col p-8 pb-0" style={{ minHeight: '280px' }}>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#d63384,#2d1050)' }}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-4-7-8-7z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-extrabold text-base leading-none" style={{ color: '#2d1050' }}>Gynecology</p>
                  <p className="text-xs text-gray-400">ClinicMaster</p>
                </div>
              </div>

              {/* Social icons */}
              <div className="flex items-center gap-3 mb-6">
                {[
                  { icon: <FaFacebookF size={13} />, href: '#' },
                  { icon: <FaXTwitter size={13} />,  href: '#' },
                  { icon: <FaInstagram size={13} />, href: '#' },
                ].map(({ icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center transition-all hover:border-pink-400 hover:text-pink-500"
                    style={{ color: '#555' }}
                  >
                    {icon}
                  </a>
                ))}
              </div>

              {/* Mother + baby image — sits at bottom, overflows card */}
              <div className="flex justify-center mt-auto">
                <img
                  src="/Home-img/footer (1).png"
                  alt="Mother and baby"
                  className="object-contain object-bottom block"
                  style={{ height: '280px', width: 'auto' }}
                />
              </div>
            </div>

            {/* Right: links + divider + copyright */}
            <div className="p-8 flex flex-col justify-between border-l border-gray-100">
              {/* Three columns */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
                {/* Useful Links */}
                <div>
                  <h4 className="font-extrabold text-xs tracking-widest uppercase mb-5" style={{ color: '#d63384', letterSpacing: '0.15em' }}>
                    USEFUL LINKS
                  </h4>
                  <ul className="space-y-3">
                    {['Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Latest News', 'Our Sitemap'].map(item => (
                      <li key={item}>
                        <Link to="#" className="text-sm text-gray-600 hover:text-pink-500 transition-colors">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Our Stores */}
                <div>
                  <h4 className="font-extrabold text-xs tracking-widest uppercase mb-5" style={{ color: '#d63384', letterSpacing: '0.15em' }}>
                    OUR STORES
                  </h4>
                  <ul className="space-y-3">
                    {['New York', 'London SF', 'Edinburgh', 'Los Angeles', 'Las Vegas'].map(item => (
                      <li key={item}>
                        <Link to="#" className="text-sm text-gray-600 hover:text-pink-500 transition-colors">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-extrabold text-xs tracking-widest uppercase mb-5" style={{ color: '#d63384', letterSpacing: '0.15em' }}>
                    QUICK LINKS
                  </h4>
                  <ul className="space-y-3">
                    {['About Us', 'Our Services', 'Our Team', 'Appointments', 'Contact Us'].map(item => (
                      <li key={item}>
                        <Link to="#" className="text-sm text-gray-600 hover:text-pink-500 transition-colors">{item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider + Copyright */}
              <div className="border-t border-gray-200 pt-5">
                <p className="text-sm text-gray-400 text-right">
                  © Copyright By 2026{' '}
                  <span style={{ color: '#d63384', fontWeight: 700 }}>DexignZone</span>{' '}
                  All Rights Reserved.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Newsletter strip — below the card ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: headline */}
          <div>
            <h3
              className="font-extrabold text-white leading-tight mb-2"
              style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)' }}
            >
              Latest news and updates for<br />
              your child's health and care
            </h3>
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Get our latest and best contents right into your inbox
            </p>
          </div>

          {/* Right: subscribe */}
          <div>
            <p className="text-white font-semibold text-sm mb-3">Subscribe Now</p>
            <div
              className="flex items-center rounded-xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-5 py-4 text-sm text-white placeholder-white/40 outline-none"
              />
              <button
                className="px-5 py-4 flex items-center justify-center flex-shrink-0 transition-opacity hover:opacity-80"
                style={{ background: 'rgba(255,255,255,0.12)', borderLeft: '1px solid rgba(255,255,255,0.15)' }}
              >
                <FiArrowRight size={18} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer