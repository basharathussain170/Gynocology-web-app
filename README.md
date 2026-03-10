# Gynecology ClinicMaster — React Website

A fully responsive, production-grade gynecology clinic website built with **React + Vite + Tailwind CSS + React Icons**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
gynecology-clinic/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Sticky navbar with dropdown Services, About Us scrolls to section
│   │   ├── HeroSection.jsx       # Full hero with stats
│   │   ├── AboutSection.jsx      # About us section (id="about-us")
│   │   ├── ServicesSection.jsx   # 4-card services with hover effect
│   │   ├── PregnancyTimeline.jsx # SVG 9-month pregnancy timeline
│   │   ├── AppointmentSection.jsx # Appointment booking form
│   │   ├── NutritionSection.jsx  # Nutrition tips
│   │   ├── WhoWeHelp.jsx         # Tab-based who we help section
│   │   ├── FAQSection.jsx        # Accordion FAQ
│   │   ├── TestimonialsSection.jsx # Patient testimonials
│   │   ├── Footer.jsx            # Footer with newsletter, links
│   │   └── FloatingButtons.jsx   # Fixed side buttons, scroll-to-top
│   ├── pages/
│   │   ├── HomePage.jsx          # Home page composition
│   │   ├── ServicesPage.jsx      # Services listing with slider
│   │   ├── ServiceDetailPage.jsx # Individual service detail
│   │   └── ContactPage.jsx       # Contact form + locations
│   ├── App.jsx                   # Router setup
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Tailwind + custom styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Design System

- **Primary color**: `#e91e8c` (pink/magenta)
- **Secondary color**: `#2d1b4e` (deep purple)
- **Font**: Nunito (Google Fonts)
- **Border radius**: Consistent `rounded-2xl` / `rounded-3xl`

## 📱 Pages & Navigation

| Route | Page |
|-------|------|
| `/` | Home (all sections) |
| `/services` | Services listing |
| `/services/:slug` | Service detail page |
| `/contact` | Contact + appointment |

### Navbar items:
- **Home** → `/`
- **About Us** → Scrolls to `#about-us` on home page
- **Services** → `/services` with dropdown
- **Contact Us** → `/contact`

## 🖼️ Adding Images

Replace emoji/placeholder divs with `<img>` tags. Image suggestions:
- Hero: mother holding newborn
- About: doctor examining pregnant patient
- Appointment: mother lifting baby
- Testimonials: smiling mothers

## 🔧 Customization

- Update clinic name/logo in `Navbar.jsx` and `Footer.jsx`
- Change phone number in `AboutSection.jsx` and `ServiceDetailPage.jsx`
- Update location data in `ContactPage.jsx`
- Add/remove services in `ServicesSection.jsx` and `serviceData` in `ServiceDetailPage.jsx`
