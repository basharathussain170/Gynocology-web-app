import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiChevronRight,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiArrowUpRight,
} from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";

const locations = [
  {
    country: "United States",
    code: "US",
    address: "123 Health Way, Suite 456",
    city: "Goodland, 78910 United States",
    phone: "+0 123-456-7890",
    mapImg: "/contact-img/united_states.webp",
  },
  {
    country: "Canada",
    code: "CA",
    address: "123 Health Way, Suite 456",
    city: "Goodland, 78910 United States",
    phone: "+0 123-456-7890",
    mapImg: "/contact-img/canada.webp",
  },
];

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [robot, setRobot] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="pt-20">
      {/* ── Hero Banner ── */}
      <section
        className="relative overflow-hidden"
        style={{
          height: "320px",
          backgroundImage: "url('/About-img/bnr1.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.18)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 h-full flex items-center">
          <div>
            <h1
              className="font-extrabold text-white mb-5"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)" }}
            >
              Contact Us
            </h1>
            <div
              className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold text-white"
              style={{ background: "linear-gradient(135deg,#d63384,#c0267a)" }}
            >
              <Link to="/" className="hover:opacity-80">
                Home
              </Link>
              <FiChevronRight size={13} />
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get In Touch ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: doctor-patient image */}
            <div
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ height: "420px" }}
            >
              <img
                src="/contact-img/2 (1).png"
                alt="Doctor with patient"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Right: form */}
            <div>
              <h2
                className="font-extrabold mb-1"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  color: "#2d1050",
                }}
              >
                Get In Touch
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                You Can Reach Us Anytime
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative border-b border-gray-200 pb-1">
                  <FiUser
                    className="absolute left-0 top-3"
                    style={{ color: "#d63384" }}
                  />
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full pl-7 py-3 text-sm font-medium focus:outline-none placeholder-gray-400 bg-transparent"
                  />
                </div>
                <div className="relative border-b border-gray-200 pb-1">
                  <FiMail
                    className="absolute left-0 top-3"
                    style={{ color: "#d63384" }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full pl-7 py-3 text-sm font-medium focus:outline-none placeholder-gray-400 bg-transparent"
                  />
                </div>
                <div className="relative border-b border-gray-200 pb-1">
                  <FiPhone
                    className="absolute left-0 top-3"
                    style={{ color: "#d63384" }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    className="w-full pl-7 py-3 text-sm font-medium focus:outline-none placeholder-gray-400 bg-transparent"
                  />
                </div>
                <div className="border-b border-gray-200 pb-1">
                  <textarea
                    placeholder="Write Massage"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full py-3 text-sm font-medium focus:outline-none placeholder-gray-400 bg-transparent resize-none"
                  />
                </div>

                {/* reCAPTCHA */}
                <div
                  className="flex items-center gap-3 rounded-lg p-3 w-fit"
                  style={{ border: "1px solid #e5e7eb", background: "#f9fafb" }}
                >
                  <input
                    type="checkbox"
                    id="robot"
                    checked={robot}
                    onChange={(e) => setRobot(e.target.checked)}
                    className="w-5 h-5 accent-pink-500 cursor-pointer"
                  />
                  <label
                    htmlFor="robot"
                    className="text-sm text-gray-600 cursor-pointer select-none"
                  >
                    I'm not a robot
                  </label>
                  <div className="ml-4 text-right">
                    <p className="text-xs font-bold text-gray-500">reCAPTCHA</p>
                    <p className="text-xs text-gray-300">Privacy · Terms</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 font-bold text-white rounded-full py-4 transition-all hover:opacity-90"
                  style={{
                    background: "linear-gradient(135deg,#d63384,#c0267a)",
                    boxShadow: "0 8px 24px rgba(214,51,132,0.3)",
                    fontSize: "0.95rem",
                  }}
                >
                  Send Message <FiArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map + All Locations ── */}
      <section className="py-20" style={{ background: "#f5f5f7" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Google Maps embed */}
            <div
              className="rounded-2xl overflow-hidden shadow-md"
              style={{ height: "340px" }}
            >
              <iframe
                title="Clinic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.573737019392!2d-0.11611!3d51.52865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMxJzQzLjEiTiAwwrAwNicxNy4yIlc!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Locations */}
            <div>
              <h2
                className="font-extrabold mb-2"
                style={{
                  fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
                  color: "#2d1050",
                }}
              >
                All Locations
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="space-y-4">
                {locations.map((loc) => (
                  <div
                    key={loc.country}
                    className="bg-white rounded-2xl p-5 shadow-sm"
                    style={{ border: "1px solid #fce4f0" }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center rounded gap-2 mb-3">
                          <div
                            style={{
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              overflow: "hidden",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <ReactCountryFlag
                              countryCode={loc.code}
                              svg
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                          <span
                            className="font-extrabold text-base"
                            style={{ color: "#2d1050" }}
                          >
                            {loc.country}
                          </span>
                        </div>
                        <div className="space-y-1.5 text-sm text-gray-600 mb-3">
                          <div className="flex items-start gap-2">
                            <FiMapPin
                              size={14}
                              style={{
                                color: "#d63384",
                                flexShrink: 0,
                                marginTop: "2px",
                              }}
                            />
                            <span>
                              {loc.address}
                              <br />
                              {loc.city}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FiPhone size={14} style={{ color: "#d63384" }} />
                            <span>{loc.phone}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <FiClock
                              size={14}
                              style={{
                                color: "#d63384",
                                flexShrink: 0,
                                marginTop: "2px",
                              }}
                            />
                            <span>
                              Mon-Thu: 8:00am-5:00pm
                              <br />
                              Fri: 8:00am-1:00pm
                            </span>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-sm font-bold hover:opacity-70 transition-opacity"
                          style={{ color: "#d63384" }}
                        >
                          Get Directions <FiArrowUpRight size={14} />
                        </a>
                      </div>

                      {/* Real map thumbnail image */}
                      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                        <img
                          src={loc.mapImg}
                          alt={`${loc.country} map`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Want To Schedule An Appointment ── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "320px" }}
      >
        {/* Real appointment background image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/contact-img/1.png')",
            backgroundPosition: "right center",
          }}
        />
        {/* White gradient left side so text is readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 35%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0) 80%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
          <h2
            className="font-extrabold leading-tight mb-8"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              color: "#2d1050",
              maxWidth: "480px",
            }}
          >
            Want To Schedule
            <br />
            An Appointment?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-bold text-white rounded-full px-8 py-4 transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg,#d63384,#c0267a)",
              boxShadow: "0 8px 24px rgba(214,51,132,0.35)",
              fontSize: "0.95rem",
            }}
          >
            Appointment <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
