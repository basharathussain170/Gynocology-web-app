import { FiArrowUpRight } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import { MdShield } from 'react-icons/md'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    title: 'Best Treatment',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.',
    emoji: '👩',
  },
  {
    id: 2,
    name: 'Emily Davis',
    rating: 5,
    title: 'Best Treatment',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.',
    emoji: '👩‍🍼',
  },
]

const avatars = ['👩', '👩‍🦰', '👨', '🧑']

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="section-tag">
              <MdShield className="text-primary text-xl" />
              LATEST NEWS
            </p>
            <h2 className="section-title">
              What our patient<br />say about us
            </h2>
          </div>

          {/* Doctor badge */}
          <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-3 shadow-sm self-start md:self-auto">
            <div className="flex -space-x-2">
              {avatars.map((a, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 border-2 border-white flex items-center justify-center text-sm">
                  {a}
                </div>
              ))}
            </div>
            <span className="font-semibold text-secondary text-sm">Talk to over 215 doctor</span>
            <button className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors">
              <FiArrowUpRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="flex gap-6 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="w-32 flex-shrink-0 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center relative">
                <span className="text-5xl">{t.emoji}</span>
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm">▶</span>
                  </div>
                </button>
              </div>
              {/* Content */}
              <div className="p-5 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[...Array(t.rating)].map((_, i) => (
                      <AiFillStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <span className="font-bold text-secondary text-sm">{t.title}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{t.text}</p>
                <p className="mt-3 font-bold text-primary text-sm">— {t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
