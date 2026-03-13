import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { BsPlayCircle } from 'react-icons/bs'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/Home-img/banner-1.webp')",
          backgroundPosition: 'right center',
        }}
      />

      {/* ── Mobile (< lg): strong white gradient from left+top so text area is clean white,
              image only shows through on the right/bottom ── */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background: `
            linear-gradient(
              to bottom right,
              rgba(255,255,255,1)   0%,
              rgba(255,255,255,1)   40%,
              rgba(255,255,255,0.85) 58%,
              rgba(255,255,255,0.3)  75%,
              rgba(255,255,255,0)   100%
            )
          `,
        }}
      />

      {/* ── Desktop (lg+): white left → transparent right ── */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 32%, rgba(255,255,255,0.7) 58%, rgba(255,255,255,0) 78%)',
        }}
      />

      {/* 24/7 EMERGENCY SERVICE — desktop only */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden xl:flex items-center gap-2 pl-2">
        <span
          className="text-xs font-bold tracking-widest uppercase"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            color: '#4a2060',
            letterSpacing: '0.18em',
          }}
        >
          24/7 EMERGENCY SERVICE
        </span>
        <div className="w-px h-16 bg-gray-300" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-20 min-h-screen flex items-center">
        <div className="w-full lg:max-w-xl pt-24 pb-16 sm:pt-32 sm:pb-20 lg:py-24">

          {/* Tag */}
          <p
            className="font-extrabold tracking-widest uppercase mb-3"
            style={{ color: '#d63384', letterSpacing: '0.2em', fontSize: '0.82rem' }}
          >
            GYNECOLOGY
          </p>

          {/* Heading */}
          <h1
            className="font-extrabold leading-tight mb-4"
            style={{
              fontSize: 'clamp(1.65rem, 5vw, 3.4rem)',
              color: '#2d1050',
              lineHeight: 1.18,
            }}
          >
            We want you to experience
            birthing with lots of love!
          </h1>

          {/* Subtitle */}
          <p
            className="leading-relaxed mb-8"
            style={{
              fontSize: 'clamp(0.875rem, 1.4vw, 1rem)',
              color: '#555',
              maxWidth: '480px',
            }}
          >
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              to="/about"
              className="flex items-center gap-2 font-bold text-white rounded-full transition-all hover:opacity-90 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #d63384 0%, #c0267a 100%)',
                boxShadow: '0 8px 24px rgba(214,51,132,0.35)',
                fontSize: 'clamp(0.85rem, 1.3vw, 1rem)',
                padding: '0.85rem 1.8rem',
              }}
            >
              Read More <FiArrowRight />
            </Link>

            <button
              className="flex items-center gap-2 font-semibold transition-opacity hover:opacity-70"
              style={{ color: '#2d1050', fontSize: 'clamp(0.85rem, 1.3vw, 1rem)' }}
            >
              <BsPlayCircle size={20} style={{ color: '#d63384' }} />
              Watch Highlight
            </button>
          </div>
        </div>
      </div>

      {/* Social links — desktop only */}
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden xl:flex flex-col items-center gap-5 pr-4">
        {['INSTAGRAM', 'FACEBOOK', 'TWITTER'].map((social) => (
          <span
            key={social}
            className="text-xs font-bold tracking-widest uppercase cursor-pointer hover:opacity-60 transition-opacity"
            style={{ writingMode: 'vertical-rl', color: '#2d1050', letterSpacing: '0.18em' }}
          >
            {social}
          </span>
        ))}
      </div> */}

      {/* Floating chat + cart */}
      <div className="absolute bottom-6 left-3 z-20 flex flex-col gap-3">
        {[{ icon: '💬', label: 'chat' }, { icon: '🛒', label: 'cart' }].map(({ icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-base shadow-md transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #d63384, #a0206e)', color: 'white' }}
          >
            {icon}
          </button>
        ))}
      </div>

      {/* LET'S TALK pill — desktop only */}
      <div className="absolute bottom-12 right-0 z-20 hidden xl:flex">
        <button
          className="font-extrabold text-xs tracking-widest uppercase text-white px-3 py-5 rounded-l-full shadow-xl"
          style={{ writingMode: 'vertical-rl', background: '#2d1050', letterSpacing: '0.2em' }}
        >
          LET&apos;S TALK
        </button>
      </div>
    </section>
  );
};

export default HeroSection
