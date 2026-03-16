import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { BsPlayCircle } from 'react-icons/bs'
import useScrollAnimation from '../hooks/useScrollAnimation'

const HeroSection = () => {
  const [contentRef, contentVisible] = useScrollAnimation(0.1);
  const [tagRef, tagVisible] = useScrollAnimation(0.1);
  const [headingRef, headingVisible] = useScrollAnimation(0.1);
  const [subtitleRef, subtitleVisible] = useScrollAnimation(0.1);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen overflow-hidden bg-white m-0 p-0">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat m-0 p-0"
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
      <div ref={contentRef} className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-20 min-h-screen flex items-center ${contentVisible ? 'scroll-animate visible' : 'scroll-animate'}`}>
        <div className="w-full lg:max-w-xl xl:max-w-2xl pt-20 pb-12 sm:pt-24 sm:pb-16 lg:py-20 xl:py-24">

          {/* Tag */}
          <div ref={tagRef} className={tagVisible ? 'scroll-animate-left visible' : 'scroll-animate-left'}>
            <p
              className="font-extrabold tracking-widest uppercase mb-3 text-[#db479d]"
            >
              GYNECOLOGY
            </p>
          </div>

          {/* Heading */}
          <div ref={headingRef} className={headingVisible ? 'scroll-animate-left visible scroll-animate-stagger-1' : 'scroll-animate-left scroll-animate-stagger-1'}>
            <h1
              className="font-bold leading-tight mb-4 font-sans"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 3.4rem)',
                color: '#3d203f',
                lineHeight: 1.18,
              }}
            >
              We want you to experience
              birthing with lots of love!
            </h1>
          </div>

          {/* Subtitle */}
          <div ref={subtitleRef} className={subtitleVisible ? 'scroll-animate-left visible scroll-animate-stagger-2' : 'scroll-animate-left scroll-animate-stagger-2'}>
            <p
              className="leading-relaxed mb-6 sm:mb-8"
              style={{
                fontSize: 'clamp(0.8rem, 1.2vw, 1rem)',
                color: '#555',
                maxWidth: '100%',
                sm: { maxWidth: '480px' }
              }}
            >
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className={`cta-container ${ctaVisible ? 'scroll-animate visible scroll-animate-stagger-3' : 'scroll-animate scroll-animate-stagger-3'}`}>
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
              <Link
                to="/about"
                className="flex items-center gap-2  text-white rounded-full transition-all hover:opacity-90 hover:shadow-lg w-full sm:w-auto justify-center sm:justify-start bg-[#db479d] px-6 py-4 font-normal"
              
              >
                Read More <FiArrowRight />
              </Link>

              <button
                className="flex items-center gap-2 font-semibold transition-opacity hover:opacity-70 w-full sm:w-auto justify-center sm:justify-start"
                style={{ color: '#2d1050', fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}
              >
                <BsPlayCircle size={20} style={{ color: '#d63384' }} />
                Watch Highlight
              </button>
            </div>
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
      <div className="absolute bottom-4 sm:bottom-6 left-3 sm:left-6 z-20 flex flex-col gap-3">
        {[{ icon: '💬', label: 'chat' }, { icon: '🛒', label: 'cart' }].map(({ icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-base sm:text-lg shadow-md transition-transform hover:scale-105"
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
