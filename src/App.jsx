import './App.css'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Home from './pages/Home'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import WhyChooseUs from './pages/WhyChooseUs'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: false,
    });
  }, []);

  return (
    <>
    <div className='overflow-x-hidden'>
      <Home />
        <div className='max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto'>
          <Services />
          <WhyChooseUs />
          <Testimonials />
          <Contact />
          <Faq />
        </div>
        <Footer />
    </div>
    </>
  )
}

export default App
