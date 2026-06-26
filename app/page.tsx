// Página principal — importa y renderiza todas las secciones en orden
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import CoreServices from '@/components/CoreServices'
import IndustriesServed from '@/components/IndustriesServed'
import WhyChooseUs from '@/components/WhyChooseUs'
import TrainingPrograms from '@/components/TrainingPrograms'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="flex flex-col w-full" style={{ backgroundColor: '#0F1115' }}>
      <Nav />
      <Hero />
      <About />
      <CoreServices />
      <IndustriesServed />
      <WhyChooseUs />
      <TrainingPrograms />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
