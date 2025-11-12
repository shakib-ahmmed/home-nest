import React, { useContext } from 'react';
import HeroSection from '../Components/HeroSection';
import PropertyCard from './PropertyCard';
import { PropertiesContext } from '../Provider/PropertiesContext';
import { Link, Links } from 'react-router-dom';
import Loader from "../Components/Loader";

const Home = () => {
    const { properties, loading } = useContext(PropertiesContext);

    if (loading) return <Loader />

    const featuredProperties = properties.slice(0, 6);

    return (
        <div>

            {/* hero section */}
            <HeroSection />

            {/* Featured Properties */}
            <div className="flex bg-gray-50 flex-col justify-center  pb-10">
                <h1 className="text-[48px] font-bold text-center mt-10">Featured Properties</h1>
                <p className="text-gray-500 text-center text-[20px] mb-6">
                    Explore our most loved real estate listings
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 pt-10 px-4 lg:px-20">
                    {featuredProperties.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                    ))}
                </div>
                <div className="flex justify-center py-10">
                    <Link
                        to={`/all-properties`}
                        className="btn bg-[#075a12] hover:bg-green-950 text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out flex items-center justify-center"
                    >
                        See All
                    </Link>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#075a12] pt-12 pb-16 px-6 md:px-20 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { title: "Trusted Experts", desc: "We have a team of professionals with years of experience." },
                        { title: "Wide Selection", desc: "Choose from hundreds of properties across different locations." },
                        { title: "Best Prices", desc: "We provide the most competitive prices and transparent deals." },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                        >
                            <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                            <p className="text-white/90">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/*Section 1 */}

            <section className="px-4 md:px-16 py-16 bg-gray-100 text-gray-900">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">Our Happy Clients</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { text: `"Amazing service! Found my dream home in no time."`, name: "John Doe" },
                        { text: `"Professional team and excellent property listings."`, name: "Sarah Smith" },
                        { text: `"Highly recommend them for anyone looking to buy real estate."`, name: "Michael Lee" },
                    ].map((c, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                        >
                            <p className="text-gray-800 italic">{c.text}</p>
                            <p className="mt-4 font-semibold text-gray-900">- {c.name}</p>
                        </div>
                    ))}
                </div>
            </section>


            {/* Section 2 */}

            <section className="pt-8 pb-5">
                <div className='bg-[#075a12] text-white py-16 px-4 md:px-16 text-center rounded-lg flex flex-col items-center'>
                    <h2 className="text-3xl font-bold mb-4">Looking for Your Dream Property?</h2>
                    <p className="mb-8 max-w-xl">Contact us today and find the perfect home for you and your family.</p>
                    <Link className="bg-white text-green-600 font-semibold rounded-lg w-[145px] h-[45px] hover:scale-105 transition ease-in-out flex items-center justify-center"
                        to={`/all-properties`}>
                        Get Started
                    </Link>
                </div>
            </section>
        </div >

    );
};

export default Home;