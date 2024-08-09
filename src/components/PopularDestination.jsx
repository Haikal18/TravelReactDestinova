import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const PopularDestination = () => {
  return (
    <section id="popular">
      <div className="mt-8 ml-5">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Popular Categories
        </h2>
        <h1 className="ml-5 font-normal text-center text-gray-700 mt-2">
          Explore our popular categories that people love
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 mr-6 gap-4">
          {/* Populer 1 */}
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Maldives Beaches"
              src="/image (3).jpg"
              className="h-56 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <div className="flex items-center space-x-2 mb-4 ml-0.5">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500" />
                <span className="text-xl font-bold">Maldives Beaches</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <span>(4.8k)</span>
              </div>
            </div>
          </article>

          {/* Populer 2 */}
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Pink Beaches"
              src="/image (2).jpg"
              className="h-56 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <div className="flex items-center space-x-2 mb-4 ml-0.5">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500" />
                <span className="text-xl font-bold">Pink Beaches, NTT</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <span>(4.7k)</span>
              </div>
            </div>
          </article>

          {/* Populer 3 */}
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <img
              alt="Kuta Bali"
              src="/image (4).jpg"
              className="h-56 w-full object-cover"
            />
            <div className="bg-white p-4 sm:p-6">
              <div className="flex items-center space-x-2 mb-4 ml-0.5">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-red-500" />
                <span className="text-xl font-bold">Kuta Bali, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <span>(4.9k)</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
