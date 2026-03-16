import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { BsChatQuote } from 'react-icons/bs'
import useScrollAnimation from '../hooks/useScrollAnimation'

const testimonials = [
  {
    id: 1,
    name: 'Kenneth Fong',
    role: 'Postgraduate Student',
    rating: 5,
    title: 'Best Treatment',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.',
    image: '/Home-img/img1 (3).webp',
    avatar: '/Home-img/img1 (3).webp',
  },
  {
    id: 2,
    name: 'Kenneth Fong',
    role: 'Postgraduate Student',
    rating: 5,
    title: 'Best Treatment',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.',
    image: '/Home-img/image.webp',
    avatar: '/Home-img/image.webp',
  },
]

const total = 6

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(1)
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);
  const [headerRef, headerVisible] = useScrollAnimation(0.1);
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation(0.1);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20" style={{ background: '#f5f5f7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header row ── */}
        <div ref={headerRef} className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 ${headerVisible ? 'scroll-animate visible' : 'scroll-animate'}`}>
          <div>
            <p
              className="flex items-center gap-2 font-extrabold text-xs tracking-widest uppercase mb-3"
              style={{ color: '#d63384', letterSpacing: '0.18em' }}
            >
              <MdOutlineHealthAndSafety size={16} />
              LATEST NEWS
            </p>
            <h2
              className="font-extrabold leading-tight"
              style={{ fontSize: 'clamp(1.7rem, 3vw, 2.6rem)', color: '#2d1050', lineHeight: 1.2 }}
            >
              What our patient<br />say about us
            </h2>
          </div>

          {/* "Talk to over 215 doctor" badge */}
          <div
            className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-sm self-start md:self-auto"
            style={{ minWidth: '260px' }}
          >
            {/* Overlapping avatars */}
            <div className="flex -space-x-2 flex-shrink-0">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white overflow-hidden bg-pink-100"
                  style={{ zIndex: 4 - i }}
                >
                  <img
                    src={i % 2 === 0 ? '/Home-img/img1 (3).webp' : '/Home-img/image.webp'}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="font-semibold text-sm" style={{ color: '#2d1050' }}>
              Talk to over 215 doctor
            </span>
            <button
              className="w-9 h-9 rounded-full flex items-center justify-center text-white flex-shrink-0 ml-auto transition-opacity hover:opacity-80"
              style={{ background: 'linear-gradient(135deg, #d63384, #c0267a)' }}
            >
              <FiArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* ── Testimonial cards ── */}
        <div ref={testimonialsRef} className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 ${testimonialsVisible ? 'scroll-animate visible' : 'scroll-animate'}`}>
          {testimonials.map((t, index) => (
            <div
              key={t.id}
              className={`flex bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow scroll-animate-scale ${testimonialsVisible ? 'visible' : ''} scroll-animate-stagger-${index + 1}`}
              style={{ minHeight: '280px' }}
            >
              {/* Left: photo with play button overlay */}
              <div className="relative flex-shrink-0" style={{ width: '42%' }}>
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover object-center"
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl transition-transform hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, #d63384, #c0267a)' }}
                  >
                    <span style={{ fontSize: '1rem', marginLeft: '2px' }}>▶</span>
                  </button>
                </div>
              </div>

              {/* Right: review content */}
              <div className="flex flex-col justify-between p-5 flex-1">
                <div>
                  {/* Stars + title */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <AiFillStar key={i} size={14} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-sm" style={{ color: '#2d1050' }}>
                      {t.title}
                    </span>
                  </div>

                  {/* Review text */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {t.text}
                  </p>
                </div>

                {/* Author row */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-pink-100 flex-shrink-0">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-sm" style={{ color: '#2d1050' }}>{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                  {/* Quote icon */}
                  <BsChatQuote size={28} style={{ color: '#d63384', opacity: 0.5 }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Progress / pagination bar ── */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold" style={{ color: '#2d1050', minWidth: '24px' }}>
            {String(current).padStart(2, '0')}
          </span>

          {/* Track */}
          <div
            className="flex-1 rounded-full overflow-hidden cursor-pointer"
            style={{ height: '4px', background: '#e5e7eb', maxWidth: '160px' }}
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const pct = (e.clientX - rect.left) / rect.width
              setCurrent(Math.max(1, Math.min(total, Math.round(pct * total))))
            }}
          >
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${(current / total) * 100}%`,
                background: 'linear-gradient(to right, #d63384, #c0267a)',
              }}
            />
          </div>

          <span className="text-sm font-bold text-gray-400" style={{ minWidth: '24px' }}>
            {String(total).padStart(2, '0')}
          </span>
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection