import './App.css'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Faq from './components/Faq'
import Home from './components/Home'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import WhyChooseUs from './components/WhyChooseUs'
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
