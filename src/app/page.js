import AboutMeSection from '../sections/aboutmesection';
import ProjectSection from '../sections/projectsection';
import HeroSection from '../sections/herosection';
import QuoteSection from '../sections/quotesection';

export default function Home() {
  return (
    <main className='bg-black'>
      <HeroSection />
      <QuoteSection />
      <AboutMeSection />
      <ProjectSection />
    </main>
  )
}
