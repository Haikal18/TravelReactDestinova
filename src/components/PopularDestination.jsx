import React from 'react';

const PopularDestination = () => {
    return (
      <div className="mt-8 mx-5 mb-5">
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

export default PopularDestination;