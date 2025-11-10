
import React from 'react';
import HeroSection from '../Components/HeroSection';

const Home = () => {
    return (
        <div>

            {/* hero section */}

            <HeroSection />

            {/* Featured Properties */}


            {/* <section className="px-4 flex flex-col md:px-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Featured Properties</h2>
                <Slider {...propertySliderSettings}>
                    {featuredProperties.map((property) => (
                        <div key={property.id} className="p-2">
                            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img src={property.image} alt={property.title} className="w-full h-60 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{property.title}</h3>
                                    <p className="text-gray-600">{property.location}</p>
                                    <p className="mt-2 font-bold">${property.price}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section> */}

            {/* Why Choose Us */}

            <section className="bg-gray-100 py-16 px-4 md:px-16 text-center">
                <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Trusted Experts", desc: "We have a team of professionals with years of experience." },
                        { title: "Wide Selection", desc: "Choose from hundreds of properties across different locations." },
                        { title: "Best Prices", desc: "We provide the most competitive prices and transparent deals." },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/*Section 1 */}

            <section className="px-4 md:px-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Happy Clients</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { text: `"Amazing service! Found my dream home in no time."`, name: "John Doe" },
                        { text: `"Professional team and excellent property listings."`, name: "Sarah Smith" },
                        { text: `"Highly recommend them for anyone looking to buy real estate."`, name: "Michael Lee" },
                    ].map((c, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg shadow">
                            <p>{c.text}</p>
                            <p className="mt-2 font-semibold">- {c.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 2 */}

            <section className="bg-blue-600 text-white py-16 px-4 md:px-16 text-center rounded-lg flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-4">Looking for Your Dream Property?</h2>
                <p className="mb-8 max-w-xl">Contact us today and find the perfect home for you and your family.</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Get Started
                </button>
            </section>
        </div >

    );
};

export default Home;