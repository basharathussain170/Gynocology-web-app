import { Link } from 'react-router-dom'
import { MdLocalHospital } from 'react-icons/md'
import { BsFacebook, BsTwitterX, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-4 pb-0">
      {/* Newsletter bar */}
      <div className="bg-secondary py-8 px-4 mb-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-extrabold text-xl mb-1">Subscribe for the latest updates for</h3>
            <p className="text-gray-300 text-sm">Stay informed about women's health tips, news and clinic updates.</p>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 md:w-72 px-5 py-3 rounded-full text-sm font-medium focus:outline-none"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary-dark transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-white mx-4 sm:mx-8 lg:mx-16 rounded-3xl shadow-xl mt-8 mb-0 overflow-hidden">
        <div className="p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <MdLocalHospital className="text-primary text-3xl" />
                <div>
                  <span className="font-extrabold text-xl text-secondary">Gynecology</span>
                  <p className="text-xs text-gray-400 leading-none font-medium">ClinicMaster</p>
                </div>
              </Link>

              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-6xl">👩‍👧</span>
              </div>

              <div className="flex gap-3">
                {[BsFacebook, BsTwitterX, BsInstagram].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white text-gray-500 flex items-center justify-center transition-all duration-300">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-extrabold text-primary uppercase tracking-widest text-xs mb-6">USEFUL LINKS</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms & Conditions', 'Contact Us', 'Latest News', 'Our Sitemap'].map(link => (
                  <li key={link}>
                    <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Stores */}
            <div>
              <h4 className="font-extrabold text-primary uppercase tracking-widest text-xs mb-6">OUR STORES</h4>
              <ul className="space-y-3">
                {['New York', 'London SF', 'Edinburgh', 'Los Angeles', 'Las Vegas'].map(city => (
                  <li key={city}>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">
                      {city}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-extrabold text-primary uppercase tracking-widest text-xs mb-6">QUICK LINKS</h4>
              <ul className="space-y-3">
                {[
                  { label: 'About Us', path: '/#about-us' },
                  { label: 'Our Services', path: '/services' },
                  { label: 'Our Team', path: '/' },
                  { label: 'Appointments', path: '/contact' },
                  { label: 'Contact Us', path: '/contact' },
                ].map(item => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-gray-600 hover:text-primary transition-colors font-medium text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 px-8 lg:px-12 py-5">
          <p className="text-center text-sm text-gray-500">
            © Copyright By 2026{' '}
            <span className="text-primary font-bold">DexignZone</span>{' '}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
