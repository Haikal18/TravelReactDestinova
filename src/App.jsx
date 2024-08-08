import React from 'react';
import Navbar from './Navbar';

const BannerSection = () => { 
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('AlamFoto.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/50 lg:bg-black/30 lg:from-black/70 lg:to-black/30 lg:bg-gradient-to-r"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Temukan Keindahan <strong className="block font-extrabold text-green-400"> Seperti Rumah Kedua </strong>
          </h1>
          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Nikmati ketenangan dan kedamaian di alam terbuka. Temukan destinasi terbaik untuk melarikan diri dari rutinitas harian.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-green-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get Started
            </a>
            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-gre shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const PopularDestination = () => {
  return (
    <div className="mt-8 mx-5">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">Popular Categories</h2>
      <h1 className="text-center text-gray-700 mt-2 text-base sm:text-lg lg:text-xl">Explore our popular categories that are loved by many people</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-4">
        {/* Populer 1 */}
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Pantai Suluban"
            src="/kedua.jpg"
            className="h-40 sm:h-56 w-full object-cover"
          />
          <div className="bg-white p-4 sm:p-6">
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-map-marker-alt text-red-500"></i>
              <span className="text-lg sm:text-xl font-bold">Pantai Suluban, Bali</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-star text-yellow-500"></i>
              <span>(4.8k)</span>
            </div>
          </div>
        </article>
        {/* Populer 2 */}
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Pantai pink"
            src="/PantaiPink.jpg"
            className="h-40 sm:h-56 w-full object-cover"
          />
          <div className="bg-white p-4 sm:p-6">
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-map-marker-alt text-red-500"></i>
              <span className="text-lg sm:text-xl font-bold">Pantai Pink, NTT</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-star text-yellow-500"></i>
              <span>(4.7k)</span>
            </div>
          </div>
        </article>
        {/* Populer 3 */}
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt="Pantai Suluban"
            src="/kedua.jpg"
            className="h-40 sm:h-56 w-full object-cover"
          />
          <div className="bg-white p-4 sm:p-6">
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-map-marker-alt text-red-500"></i>
              <span className="text-lg sm:text-xl font-bold">Pantai Suluban, Bali</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="fas fa-star text-yellow-500"></i>
              <span>(4.8k)</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar/>
      <BannerSection />
      <PopularDestination />
      
    </div>
  );
};

export default App;
