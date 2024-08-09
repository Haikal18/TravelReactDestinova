import React from 'react';

const GallerySection = () => {
    const images = [
        'https://picsum.photos/1000/600?random=1',
        'https://picsum.photos/500/300?random=2',
        'https://picsum.photos/500/300?random=3',
        'https://picsum.photos/500/300?random=4',
        'https://picsum.photos/500/300?random=5',
        'https://picsum.photos/500/300?random=6',
    ];

    return (
        <section id="gallery" className="bg-white mt-8">
            <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Gallery
                </h2>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="col-span-1 lg:col-span-2 lg:row-span-2">
                            <img
                                src={images[0]}
                                alt="Destination 1"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                        {images.slice(1).map((image, index) => (
                            <div className="col-span-1" key={index}>
                                <img
                                    src={image}
                                    alt={`Destination ${index + 2}`}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
