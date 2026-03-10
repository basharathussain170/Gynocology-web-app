import { BsCheckCircleFill } from 'react-icons/bs'

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

const NutritionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Illustration */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Main illustration circle */}
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-6xl mb-2">🥗</div>
                  <p className="text-sm font-semibold text-gray-500">Nutrition Guide</p>
                  <p className="text-xs text-gray-400">Replace with illustration</p>
                </div>
                
                {/* Floating food icons */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
                  <span className="text-3xl">🍌</span>
                  <span className="text-xs text-gray-500 font-semibold mt-1">more fruits</span>
                </div>
                <div className="absolute -top-8 left-1/3 w-20 h-20 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
                  <span className="text-3xl">💊</span>
                  <span className="text-xs text-gray-500 font-semibold mt-1">vitamins</span>
                </div>
                <div className="absolute -top-4 right-0 w-20 h-20 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
                  <span className="text-3xl">🥦</span>
                  <span className="text-xs text-gray-500 font-semibold mt-1">more<br />vegetables</span>
                </div>
                <div className="absolute top-1/3 -right-8 w-20 h-20 bg-white rounded-full shadow-lg flex flex-col items-center justify-center">
                  <span className="text-3xl">💧</span>
                  <span className="text-xs text-gray-500 font-semibold mt-1">clean water</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="section-title mb-4">
              Essential Nutrition Tips for a Healthy Pregnancy
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Maintaining a balanced diet during pregnancy supports your baby's development. Include fruits, vegetables, proteins, and whole grains while avoiding harmful substances.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {nutritionItems.map((item) => (
                <div key={item} className="check-item">
                  <BsCheckCircleFill className="text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
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
