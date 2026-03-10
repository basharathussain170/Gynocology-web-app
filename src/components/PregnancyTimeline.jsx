import { useState } from 'react'
import one from "../../public/image/1.png"
import two from "../../public/image/2.png"
import three from "../../public/image/3.png"
import four from "../../public/image/4.png"
import five from "../../public/image/5.png"
import six from "../../public/image/6.png"
import seven from "../../public/image/7.png"
import eight from "../../public/image/8.png"
import nine from "../../public/image/9.png"

const months = [
  { month: 1, label: '1 Month', img: one },
  { month: 2, label: '2 Month', img: two },
  { month: 3, label: '3 Month', img: three },
  { month: 4, label: '4 Month', img: four },
  { month: 5, label: '5 Month', img: five },
  { month: 6, label: '6 Month', img: six },
  { month: 7, label: '7 Month', img: seven },
  { month: 8, label: '8 Month', img: eight },
  { month: 9, label: '9 Month', img: nine },
]

const PregnancyTimeline = () => {
  const [activeMonth, setActiveMonth] = useState(null)
  const [paused, setPaused] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary text-center mb-16">
          Taking Care of You and Your<br />Baby Pregnancy Timeline
        </h2>
      </div>

      {/* Large screens: show all 9 static */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-2">
          {months.map((m) => (
            <div
              key={m.month}
              className="flex flex-col items-center gap-3 cursor-pointer group"
              onMouseEnter={() => setActiveMonth(m.month)}
              onMouseLeave={() => setActiveMonth(null)}
            >
              <div className={`transition-transform duration-300 ${activeMonth === m.month ? 'scale-110' : ''}`}>
                <img
                  src={m.img}
                  alt={m.label}
                  className="w-24 xl:w-28 h-72 object-contain"
                />
              </div>
              {/* connector line + label */}
              <div className="flex flex-col items-center gap-1 w-full mt-2">
                <div className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all duration-300 whitespace-nowrap ${
                  activeMonth === m.month
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-secondary border-gray-200'
                }`}>
                  {m.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom connector line */}
        <div className="flex items-center justify-between mt-2 px-12">
          {months.map((m, i) => (
            <div key={m.month} className="flex items-center flex-1">
              <div className="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0"></div>
              {i < months.length - 1 && <div className="flex-1 h-px bg-gray-200"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Small/medium screens: auto-scroll right to left, only 9 images */}
      <div className="lg:hidden overflow-hidden w-full">
        <div
          className="flex items-end gap-8 px-6"
          style={{
            animation: paused ? 'none' : 'slideLeft 20s linear infinite',
            width: 'max-content',
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Tripled so scroll never runs out before looping */}
          {[...months, ...months, ...months].map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 cursor-pointer flex-shrink-0"
            >
              <img
                src={m.img}
                alt={m.label}
                className="w-20 sm:w-24 h-52 object-contain"
              />
              <div className="px-3 py-1.5 rounded-xl text-xs font-bold border-2 border-gray-200 bg-white text-secondary whitespace-nowrap">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </section>
  )
}

export default PregnancyTimeline