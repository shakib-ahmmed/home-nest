
import React, { useContext } from 'react';
import HeroSection from '../Components/HeroSection';
import AllProperties from '../Pages/AllProperties'
import { PropertiesContext } from '../Provider/PropertiesContext';
import { Loader } from 'lucide-react';
import PropertyCard from './PropertyCard';
import { Link } from 'react-router-dom';

const Home = () => {

    const { properties, loading } = useContext(PropertiesContext);


    if (loading) return <Loader />

    const featuredProperties = properties.slice(0, 4);

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-10 px-4 lg:px-20">
                    {featuredProperties.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                    ))}
                </div>
                <div className="flex justify-center py-10">
                    <Link
                        to="/all-properties"
                        className="btn bg-[#075a12] hover:bg-green-950 text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out flex items-center justify-center"
                    >
                        See All
                    </Link>
                </div>
            </div>

            {/* Why Choose Us */}

            <div className="bg-gray-100 pb-8 py-16 px-4 md:px-16 text-center">
                <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Trusted Experts", desc: "We have a team of professionals with years of experience." },
                        { title: "Wide Selection", desc: "Choose from hundreds of properties across different locations." },
                        { title: "Best Prices", desc: "We provide the most competitive prices and transparent deals." },
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-300 p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/*Section 1 */}

            {/* <section className="px-4 md:px-16">
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
            </section> */}

            {/* Section 2 */}

            {/* <section className="bg-blue-600 text-white py-16 px-4 md:px-16 text-center rounded-lg flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-4">Looking for Your Dream Property?</h2>
                <p className="mb-8 max-w-xl">Contact us today and find the perfect home for you and your family.</p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Get Started
                </button>
            </section> */}
        </div >

    );
};

export default Home;