import { Link } from 'react-router-dom'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { LuShieldPlus } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";

const AboutSection = () => {
  const features = [
    'Well-Woman Examination',
    'Contraceptive Counseling',
    'Pap Smear and HPV Testing',
    'Prenatal Care',
    'Breast Examination',
    'Obstetric Ultrasound',
  ]

  return (
    <section id="about-us" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden h-[480px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-xl">
              <div className="text-center text-gray-400 p-8">
                <div className="text-8xl mb-4">🏥</div>
                <p className="text-lg font-semibold">About Us Image</p>
                <p className="text-sm">Replace with doctor-patient photo</p>
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#db479d] text-white rounded-2xl p-5 shadow-xl text-center">
              <div className="text-3xl font-extrabold">15+</div>
              <div className="text-xs font-semibold opacity-90">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="section-tag text-lg">
              <LuShieldPlus className="text-[#db479d]" size={22}/>
              ABOUT US
            </p>
           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary font-sans">
              <span className="block md:mb-3">Your Trusted Partner</span>
              <span className="block md:mb-3 text-secondary">
                in Gynecological Care
              </span>
            </h1>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Experience the future of healthcare. Our state-of-the-art facilities are equipped with the latest technology, ensuring you receive the world's best quality treatment.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feat) => (
                <div key={feat} className="check-item">
                  <GiCheckMark className="text-[#db479d] flex-shrink-0" />
                  <span className="text-lg">{feat}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={() =>
                  document
                    .getElementById("about-us")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 bg-[#db479d] text-white shadow-lg text-lg px-8 py-3 rounded-full hover:bg-[#c63f8e] transition"
              >
                About Us <FiArrowRight />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FiPhone className="text-[#db479d] text-xl" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Contact us</p>
                  <p className="font-bold text-secondary">+1 123 456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
