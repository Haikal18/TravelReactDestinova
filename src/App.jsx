import React from 'react';
import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import PopularDestination from './components/PopularDestination';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer'; 

const App = () => {
  return (
    <div>
      <Navbar/>
      <BannerSection />
      <PopularDestination />
      <TestimonialSection/>
      <Footer/>
    </div>
  );
};

export default App;
