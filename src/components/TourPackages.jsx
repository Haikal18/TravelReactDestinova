import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking, faBath, faBed } from '@fortawesome/free-solid-svg-icons';

const TourPackages = () => {
    return (
        <section id="tour-packages" className="mt-8 mx-4 sm:mx-6">
            <h3 className="text-center text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 mt-4 mb-4">
                Tour Packages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Tour Package 1 */}
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Verdon Canyon"
                        src="/image (7).jpg"
                        className="h-56 w-full object-cover"
                    />
                    <div className="bg-white p-4 sm:p-6">
                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">Price</dt>
                                    <dd className="text-sm text-gray-500">$230,000</dd>
                                </div>
                                <div>
                                    <dt className="sr-only">Address</dt>
                                    <dd className="font-medium">Lake Verdon Canyon, France</dd>
                                </div>
                            </dl>
                            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-xs">
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    {/* Icon Parking */}
                                    <FontAwesomeIcon icon={faParking} size="lg" className="text-indigo-700" />
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Parking</p>
                                        <p className="font-medium">2 Spaces</p>
                                    </div>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    {/* Icon Bathroom */}
                                    <FontAwesomeIcon icon={faBath} size="lg" className="text-indigo-700" />
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Bathroom</p>
                                        <p className="font-medium">2 Rooms</p>
                                    </div>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    {/* Icon Bedroom */}
                                    <FontAwesomeIcon icon={faBed} size="lg" className="text-indigo-700" />
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Bedroom</p>
                                        <p className="font-medium">4 Rooms</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Tour Package 2 */}
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Suluban Beaches"
                        src="/image (1).jpg"
                        className="h-56 w-full object-cover"
                    />
                    <div className="bg-white p-4 sm:p-6">
                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">Price</dt>
                                    <dd className="text-sm text-gray-500">$210,000</dd>
                                </div>
                                <div>
                                    <dt className="sr-only">Address</dt>
                                    <dd className="font-medium">Badung, Indonesia</dd>
                                </div>
                            </dl>
                            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-xs">
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    {/* Icon Parking */}
                                    <FontAwesomeIcon icon={faParking} size="lg" className="text-indigo-700" />
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Parking</p>
                                        <p className="font-medium">2 Spaces</p>
                                    </div>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    {/* Icon Bathroom */}
                                    <FontAwesomeIcon icon={faBath} size="lg" className="text-indigo-700" />
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Bathroom</p>
                                        <p className="font-medium">2 Rooms</p>
                                    </div>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    {/* Icon Bedroom */}
                                    <FontAwesomeIcon icon={faBed} size="lg" className="text-indigo-700" />
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Bedroom</p>
                                        <p className="font-medium">3 Rooms</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Tour Package 3 */}
                <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Sunnmore Alps Mountain"
                        src="/image (6).jpg"
                        className="h-56 w-full object-cover"
                    />
                    <div className="bg-white p-4 sm:p-6">
                        <div className="mt-2">
                            <dl>
                                <div>
                                    <dt className="sr-only">Price</dt>
                                    <dd className="text-sm text-gray-500">$240,000</dd>
                                </div>
                                <div>
                                    <dt className="sr-only">Address</dt>
                                    <dd className="font-medium">Sunnmore Alps Mountain, Norway</dd>
                                </div>
                            </dl>
                            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-xs">
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    {/* Icon Parking */}
                                    <FontAwesomeIcon icon={faParking} size="lg" className="text-indigo-700" />
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Parking</p>
                                        <p className="font-medium">1 Space</p>
                                    </div>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    {/* Icon Bathroom */}
                                    <FontAwesomeIcon icon={faBath} size="lg" className="text-indigo-700" />
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Bathroom</p>
                                        <p className="font-medium">2 Rooms</p>
                                    </div>
                                </div>
                                <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                                    {/* Icon Bedroom */}
                                    <FontAwesomeIcon icon={faBed} size="lg" className="text-indigo-700" />
                                    <div className="mt-1.5 sm:mt-0">
                                        <p className="text-gray-500">Bedroom</p>
                                        <p className="font-medium">2 Rooms</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default TourPackages;
