import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-green-700 bg-opacity-50 text-white">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h1 className="text-4xl">Destinova Eksplore</h1>
            <p className="mt-4 max-w-xs text-white">
              Welcome to Destinova Eksplore! Discover amazing destinations and plan your next adventure with us.
            </p>
            <ul className="mt-8 flex gap-6">
              <li>
                <a href="#" rel="noreferrer" target="_blank" className="text-white transition hover:opacity-75">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {/* Icon for Facebook */}
                  </svg>
                  <span className="sr-only">Facebook</span>
                </a>
              </li>
              {/* Add more social media icons here if needed */}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">Services</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-white transition hover:opacity-75">Flight Booking</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Hotel Reservations</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Car Rentals</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Vacation Packages</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Travel Insurance</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Destinations</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-white transition hover:opacity-75">Europe</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Asia</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">North America</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">South America</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Africa</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-white transition hover:opacity-75">Contact Us</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">FAQs</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Terms and Conditions</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-900">Legal</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="#" className="text-white transition hover:opacity-75">Accessibility</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Returns Policy</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Refund Policy</a></li>
                <li><a href="#" className="text-white transition hover:opacity-75">Hiring Statistics</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-xs text-white">&copy; 2024. Destinova Eksplore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
