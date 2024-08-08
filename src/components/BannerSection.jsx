import React from 'react';

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

export default BannerSection;