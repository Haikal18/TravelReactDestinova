import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    name: 'Sarah Clarissa',
    image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `My trip to Bali with this travel agency was nothing short of amazing! The itinerary was
    perfectly planned, allowing us to experience both the vibrant culture and the serene beauty of the island. Highly recommended!`,
  },
  {
    name: 'Jessica Katteri',
    image: 'https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `My experience with this travel agency was phenomenal! From booking to accommodation,
    everything was seamless and enjoyable. I highly recommend their services for your next adventure.`,
  },
  {
    name: 'James Gerald',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `I cannot praise this travel agency enough for their exceptional service. Every step of the
    way, from the initial booking to the final accommodation arrangements, was handled with utmost professionalism and care.`,
  },
  {
    name: 'David Fario',
    image: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `My recent experience with this travel agency exceeded all expectations. Their attention to
    detail and commitment to customer satisfaction made every aspect of my trip truly unforgettable.`,
  },
  {
    name: 'Andre Lora',
    image: 'https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `From the moment I booked my trip with this agency, I knew I was in good hands. Their
    knowledgeable staff and seamless booking process set the stage for an incredible adventure.`,
  },
  {
    name: 'Mario Gani',
    image: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=600',
    review: `I recently had the pleasure of traveling with this agency, and I must say, it was a truly
    phenomenal experience. Everything was meticulously planned, allowing me to relax and enjoy every moment of my trip.`,
  },
];

const TestimonialCard = ({ name, image, review }) => (
  <div className="mb-8 sm:break-inside-avoid">
    <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-4">
        <img alt={`${name}'s profile picture`} src={image} className="w-14 h-14 rounded-full object-cover" />
        <div>
          <p className="mt-0.5 text-lg font-medium text-gray-900">{name}</p>
          <div className="flex justify-center gap-0.5 text-green-500">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="h-5 w-5" />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-700">{review}</p>
    </blockquote>
  </div>
);

const TestimonialSection = () => {
  return (
    <section id="testimony" className="bg-white mt-8">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Testimonials From Our Delighted Travelers
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
