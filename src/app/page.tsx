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
    <div className="relative min-h-screen bg-[#0d0312] overflow-x-hidden">
      {/* Ambient background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-pulse-glow absolute -top-[20%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[#d8429d]/15 blur-[120px]" />
        <div className="animate-pulse-glow absolute top-[35%] -right-[15%] w-[600px] h-[600px] rounded-full bg-[#7e1b60]/20 blur-[100px]" style={{ animationDelay: '2s' }} />
        <div className="animate-pulse-glow absolute bottom-[5%] left-[25%] w-[550px] h-[550px] rounded-full bg-[#d8429d]/10 blur-[120px]" style={{ animationDelay: '4s' }} />
      </div>

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
    </div>
  )
}
