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
          className="fixed bottom-6 right-6 z-50 bg-[#3d203f] hover:bg-[#5a2d5e] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </>
  )
}

export default FloatingButtons
