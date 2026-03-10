import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiCalendar, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "/image/gyno_logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAboutUs = () => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      document
        .getElementById("about-us")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("about-us")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const serviceItems = [
    { label: "Family Planning", slug: "family-planning" },
    { label: "Gynecology", slug: "gynecology" },
    { label: "Prenatal Ultrasound", slug: "prenatal-ultrasound" },
    { label: "Fertility Medication", slug: "fertility-medication" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-3"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Gynecology ClinicMaster"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-lg font-semibold text-secondary hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Home
            </Link>

            <button
              onClick={handleAboutUs}
              className="text-lg font-semibold text-secondary hover:text-primary transition-colors"
            >
              About Us
            </button>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesTimeoutRef.current)
                  clearTimeout(servicesTimeoutRef.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(
                  () => setServicesOpen(false),
                  150,
                );
              }}
            >
              <Link
                to="/services"
                className="text-lg font-semibold text-secondary hover:text-primary transition-colors flex items-center gap-1"
                onClick={scrollToTop}
              >
                Services{" "}
                <FiChevronDown
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </Link>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl py-2 border border-gray-100">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-primary-light transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-lg font-semibold text-secondary hover:text-primary transition-colors"
              onClick={scrollToTop}
            >
              Contact Us
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-2 bg-[#db479d] text-white px-5 py-2.5 rounded-full font-bold hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/30"
            >
              <FiCalendar />
              APPOINTMENT
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-secondary"
            >
              {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4 space-y-2">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-semibold text-secondary hover:text-primary"
            >
              Home
            </Link>
            <button
              onClick={handleAboutUs}
              className="block py-2 font-semibold text-secondary hover:text-primary w-full text-left"
            >
              About Us
            </button>
            <Link
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-semibold text-secondary hover:text-primary"
            >
              Services
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 font-semibold text-secondary hover:text-primary"
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full font-bold w-fit mt-2"
            >
              <FiCalendar />
              APPOINTMENT
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
