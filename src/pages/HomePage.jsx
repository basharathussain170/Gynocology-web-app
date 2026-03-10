import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import PregnancyTimeline from '../components/PregnancyTimeline'
import AppointmentSection from '../components/AppointmentSection'
import NutritionSection from '../components/NutritionSection'
import WhoWeHelp from '../components/WhoWeHelp'
import FAQSection from '../components/FAQSection'
import TestimonialsSection from '../components/TestimonialsSection'

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PregnancyTimeline />
      <AppointmentSection />
      <NutritionSection />
      <WhoWeHelp />
      <FAQSection />
      <TestimonialsSection />
    </main>
  )
}

export default HomePage
