const nutritionItems = [
  'Fruits and Vegetables',
  'Iron-Rich Foods',
  'Whole Grains',
  'Folic Acid-Rich Foods',
  'Protein-Rich Foods',
  'Hydration',
  'Dairy Products',
  'Healthy Fats',
]

// All 4 bubbles positioned at the TOP edge of the circle, overlapping it
const bubbles = [
  {
    img: '/Home-img/item1.png',
    label: 'more fruits',
    pos: { top: '20%', left: '-2%' },         // top-left, half outside circle
  },
  {
    img: '/Home-img/item2.png',
    label: 'vitamins',
    pos: { top: '-2%', left: '20%' },         // top, overlapping left of center
  },
  {
    img: '/Home-img/item3.png',
    label: 'more vegetables',
    pos: { top: '-6%', left: '48%' },         // top, overlapping right of center
  },
  {
    img: '/Home-img/item4.png',
    label: 'clean water',
    pos: { top: '4%', left: '73%' },         // top-right, half outside circle
  },
]

const NutritionSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: circle + overlapping bubbles ── */}
          <div
            className="relative mx-auto w-full"
            style={{ maxWidth: '480px' }}
          >
            {/* Extra top padding so bubbles that go above circle aren't clipped */}
            <div style={{ paddingTop: '18%' }}>

              {/* Circle with illustration as background */}
              <div
                className="relative w-full rounded-full"
                style={{
                  paddingBottom: '100%',
                  backgroundImage: "url('/Home-img/main.webp')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center bottom',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                {/* Decorative + signs */}
                {[
                  { top: '18%', left: '8%'  },
                  { top: '42%', left: '4%'  },
                  { top: '58%', right: '6%' },
                  { top: '24%', right: '8%' },
                  { top: '65%', left: '40%' },
                  { top: '35%', left: '52%' },
                ].map((pos, i) => (
                  <span
                    key={i}
                    className="absolute font-bold select-none"
                    style={{ ...pos, fontSize: '0.9rem', color: '#e8a0cc', zIndex: 2 }}
                  >
                    +
                  </span>
                ))}

                {/* Heart icon */}
                <div
                  className="absolute"
                  style={{ top: '28%', left: '28%', opacity: 0.22, fontSize: '1.5rem', zIndex: 2 }}
                >
                  ❤️
                </div>

                {/* ── 4 fruit bubbles overlapping circle edge ── */}
                {bubbles.map((b) => (
                  <div
                    key={b.label}
                    className="absolute flex flex-col items-center z-20"
                    style={b.pos}
                  >
                    <div
                      className="rounded-full bg-white shadow-lg border border-gray-100 overflow-hidden"
                      style={{ width: '72px', height: '72px' }}
                    >
                      <img
                        src={b.img}
                        alt={b.label}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <span
                      className="mt-1 text-center font-semibold text-gray-600 leading-tight"
                      style={{
                        fontSize: '0.66rem',
                        maxWidth: '76px',
                        textShadow: '0 0 4px white',
                      }}
                    >
                      {b.label}
                    </span>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* ── Right content ── */}
          <div className="mt-8 lg:mt-0">
            <h2
              className="font-extrabold leading-tight mb-5"
              style={{ fontSize: 'clamp(1.7rem, 2.8vw, 2.8rem)', color: '#2d1050', lineHeight: 1.2 }}
            >
              Essential Nutrition Tips for a Healthy Pregnancy
            </h2>

            <p className="text-gray-500 leading-relaxed mb-8" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 0.95rem)' }}>
              Maintaining a balanced diet during pregnancy supports your baby's development.
              Include fruits, vegetables, proteins, and whole grains while avoiding harmful substances.
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {nutritionItems.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                    <path
                      d="M3 8.5L6.5 12L13 5"
                      stroke="#d63384"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-sm font-semibold" style={{ color: '#2d1050' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default NutritionSection