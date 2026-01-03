import React, { useContext } from "react";
import HeroSection from "../Components/HeroSection";
import PropertyCard from "./PropertyCard";
import { PropertiesContext } from "../Provider/PropertiesContext";
import { Link } from "react-router-dom";
import Loader from "../Components/Loader";

const Home = () => {
    const { properties, loading } = useContext(PropertiesContext);

    if (loading) return <Loader />;

    const featuredProperties = properties.slice(0, 6);

    return (
        <div className="text-base-content">

            {/* Hero Section */}
            <HeroSection />

            {/* Featured Properties */}
            <section className="bg-base-200 py-12">
                <h1 className="text-4xl md:text-5xl font-bold text-center">
                    Featured Properties
                </h1>
                <p className="text-base-content/70 text-center text-lg mt-2">
                    Explore our most loved real estate listings
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-10 px-4 lg:px-20">
                    {featuredProperties.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                    ))}
                </div>

                <div className="flex justify-center pt-10">
                    <Link
                        to="/all-properties"
                        className="btn bg-[#075a12] hover:bg-green-950 text-white w-[145px]"
                    >
                        See All
                    </Link>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-[#075a12] py-16 px-6 md:px-20 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
                    Why Choose Us
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            title: "Trusted Experts",
                            desc: "We have a team of professionals with years of experience.",
                        },
                        {
                            title: "Wide Selection",
                            desc: "Choose from hundreds of properties across different locations.",
                        },
                        {
                            title: "Best Prices",
                            desc: "We provide the most competitive prices and transparent deals.",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                        >
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-white/90">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-base-100 px-4 md:px-16 py-16">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
                    Our Happy Clients
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        {
                            text: "Amazing service! Found my dream home in no time.",
                            name: "John Doe",
                        },
                        {
                            text: "Professional team and excellent property listings.",
                            name: "Sarah Smith",
                        },
                        {
                            text: "Highly recommend them for anyone looking to buy real estate.",
                            name: "Michael Lee",
                        },
                    ].map((c, i) => (
                        <div
                            key={i}
                            className="bg-base-200 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
                        >
                            <p className="italic text-base-content/80">"{c.text}"</p>
                            <p className="mt-4 font-semibold">- {c.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="pt-8 pb-12 px-4 md:px-16">
                <div className="bg-[#075a12] text-white py-16 rounded-xl flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Looking for Your Dream Property?
                    </h2>
                    <p className="mb-8 max-w-xl">
                        Contact us today and find the perfect home for you and your family.
                    </p>

                    <Link
                        to="/all-properties"
                        className="bg-white text-[#075a12] font-semibold rounded-lg w-[145px] h-[45px] flex items-center justify-center hover:scale-105 transition"
                    >
                        Get Started
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
