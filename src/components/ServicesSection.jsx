import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { LuShieldPlus } from "react-icons/lu";

const services = [
  {
    id: 1,
    title: "Family Planning",
    slug: "family-planning",
    description:
      "Comprehensive family planning services to help you make informed decisions about your reproductive health.",
    emoji: "👨‍👩‍👧",
    bg: "from-pink-50 to-rose-50",
  },
  {
    id: 2,
    title: "Gynecology",
    slug: "gynecology",
    description:
      "Expert gynecological care with state-of-the-art equipment for all your women's health needs.",
    emoji: "🩺",
    bg: "from-purple-50 to-pink-50",
    featured: true,
  },
  {
    id: 3,
    title: "Prenatal Ultrasound",
    slug: "prenatal-ultrasound",
    description:
      "Advanced prenatal ultrasound services to monitor your baby's development throughout pregnancy.",
    emoji: "🔬",
    bg: "from-blue-50 to-purple-50",
  },
  {
    id: 4,
    title: "Fertility Medication",
    slug: "fertility-medication",
    description:
      "Specialized fertility treatment and medication services to help you on your journey to parenthood.",
    emoji: "💊",
    bg: "from-green-50 to-teal-50",
  },
];

const ServicesSection = () => {
  const [activeCard, setActiveCard] = useState(1);

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-tag justify-center text-lg">
            <LuShieldPlus className="text-[#db479d]" size={22} />
            OUR SERVICES
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary font-sans">
            <span className="block md:mb-3">The Best Quality Service</span>
            <span className="block md:mb-3 text-secondary">You Can Get</span>
          </h1>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl overflow-hidden transition-colors duration-300 cursor-pointer ${
                activeCard === service.id
                  ? "bg-[#3d203f] text-white shadow-lg"
                  : "bg-white text-[#3d203f] shadow-sm"
              }`}
              onMouseEnter={() => setActiveCard(service.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Card Image */}
              <div
                className={`h-48 bg-gradient-to-br ${service.bg} flex items-center justify-center relative overflow-hidden`}
              >
                <span className="text-7xl">{service.emoji}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Card Content */}
              <div
                className={`p-6 transition-colors duration-300 ${activeCard === service.id ? "bg-[#3d203f]" : "bg-white"}`}
              >
                <h3
                  className={`font-extrabold text-lg mb-3 transition-colors duration-300 ${activeCard === service.id ? "text-white" : "text-[#3d203f]"}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${activeCard === service.id ? "text-gray-300" : "text-gray-500"}`}
                >
                  {service.description}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className={`flex items-center gap-2 font-bold text-sm transition-colors duration-300 ${
                    activeCard === service.id
                      ? "text-white hover:text-pink-300"
                      : "text-primary hover:text-primary-dark"
                  }`}
                >
                  View All Details <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl px-8 py-5 shadow-sm">
          <p className="text-[#3d203f] font-medium mb-4 sm:mb-0">
            We help you live your life in full motion.
          </p>
          <Link
            to="/services"
            className="bg-[#3d203f] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5a2d5e] transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
