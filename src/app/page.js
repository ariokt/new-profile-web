import AboutMeSection from '../sections/aboutmesection';
import ProjectSection from '../sections/projectsection';
import HeroSection from '../sections/herosection';
import QuoteSection from '../sections/quotesection';
import Navbar from '../sections/navbar';
import Footer from '../sections/footer';

export default function Home() {
  return (
    <main className='bg-black'>
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <AboutMeSection />
      <ProjectSection />
      <Footer />
    </main>
  )
}
