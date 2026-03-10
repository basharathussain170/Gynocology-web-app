import { useState, useEffect } from 'react'
import { FiHeadphones, FiShoppingCart, FiArrowUp } from 'react-icons/fi'
import { BsInstagram, BsFacebook, BsTwitterX } from 'react-icons/bs'

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Left Social sidebar */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-0">
        <div className="bg-gray-100 px-2 py-6 flex flex-col items-center gap-4">
          <span className="side-social text-xs font-bold text-gray-500 tracking-widest">4/7 EMERGENCY SERVICE</span>
        </div>
        <button className="bg-teal-500 hover:bg-teal-600 text-white w-10 h-10 flex items-center justify-center transition-colors">
          <FiHeadphones size={18} />
        </button>
        <button className="bg-primary hover:bg-primary-dark text-white w-10 h-10 flex items-center justify-center transition-colors">
          <FiShoppingCart size={18} />
        </button>
      </div>

      {/* Right Social links */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 pr-2">
        <a href="#" className="side-social text-xs font-bold text-gray-400 hover:text-primary tracking-widest transition-colors">INSTAGRAM</a>
        <a href="#" className="side-social text-xs font-bold text-gray-400 hover:text-primary tracking-widest transition-colors">FACEBOOK</a>
        <a href="#" className="side-social text-xs font-bold text-gray-400 hover:text-primary tracking-widest transition-colors">TWITTER</a>
      </div>

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary-light text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </>
  )
}

export default FloatingButtons
