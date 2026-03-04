import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import SlidingBanner from '@/components/SlidingBanner'
import ServicesSection from '@/components/ServicesSection'
import ReviewsSection from '@/components/ReviewsSection'
import CoursesSection from '@/components/CoursesSection'
import LocationSection from '@/components/LocationSection'
import InfoSection from '@/components/InfoSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SlidingBanner />
        <ServicesSection />
        <ReviewsSection />
        <CoursesSection />
        <LocationSection />
        <InfoSection />
      </main>
      <Footer />
    </>
  )
}
