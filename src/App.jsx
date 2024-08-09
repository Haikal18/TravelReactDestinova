import React from 'react';
import Navbar from './components/Navbar';
import BannerSection from './components/BannerSection';
import PopularDestination from './components/PopularDestination';
import TestimonialSection from './components/TestimonialSection';
import TourPackages from './components/TourPackages';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer'; 

const App = () => {
  return (
    <div>
      <Navbar/>
      <BannerSection />
      <PopularDestination />
      <TestimonialSection/>
      <TourPackages/>
      <GallerySection/>
      <Footer/>
    </div>
  );
};

export default App;
