import AboutMeSection from '../sections/aboutmesection';
import ProjectSection from '../sections/projectsection';
import HeroSection from '../sections/herosection';
import QuoteSection from '../sections/quotesection';
import Navbar from '../sections/navbar';
import Footer from '../sections/footer';

export const metadata = {
  title: 'Ario Waskita | Frontend Developer',
  description: 'Ario Waskita merupakan Frontend Developer Profesional dari Indonesia, Jakarta.',
  keywords: ['Ario Waskita', 'Front End Developer', 'Front End Engineer', 'Software Engineer', 'Next.js', 'React', 'JavaScript'],
  metadataBase: new URL('https://ariowaskita.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ario Waskita | Frontend Developer',
    description: 'Ario Waskita merupakan Frontend Developer Profesional dari Indonesia, Jakarta.',
  },
}

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
