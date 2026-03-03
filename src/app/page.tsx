import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PricelistSection from '@/components/PricelistSection'
import GallerySection from '@/components/GallerySection'
import ReviewsSection from '@/components/ReviewsSection'
import CoursesSection from '@/components/CoursesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PricelistSection />
        <GallerySection />
        <ReviewsSection />
        <CoursesSection />
      </main>
      <Footer />
    </>
  )
}
