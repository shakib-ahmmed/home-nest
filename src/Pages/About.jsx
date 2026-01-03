import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="bg-base-100 text-base-content min-h-screen">
            {/* Hero Section */}
            <section className="py-20 px-4 lg:px-[80px] text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                    About <span className="text-[#075a12]">Home Nest</span>
                </h1>
                <p className="max-w-3xl mx-auto text-lg opacity-80">
                    Home Nest is a modern property listing platform designed to help people
                    discover, list, and manage properties with confidence and simplicity.
                </p>
            </section>

            {/* Mission Section */}
            <section className="py-16 px-4 lg:px-[80px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
                        Our Mission
                    </h2>
                    <p className="opacity-80 leading-relaxed">
                        Our mission is to create a reliable and user-friendly platform where
                        property owners and buyers can connect effortlessly. We focus on
                        transparency, ease of use, and modern design to ensure the best user
                        experience.
                    </p>
                </div>

                <div className="bg-base-200 rounded-xl p-8 shadow-sm">
                    <h3 className="text-xl font-semibold mb-3">Why Choose Us?</h3>
                    <ul className="space-y-2 opacity-80">
                        <li>✔ Verified property listings</li>
                        <li>✔ Secure user authentication</li>
                        <li>✔ Modern dashboard & analytics</li>
                        <li>✔ Mobile-friendly design</li>
                    </ul>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-16 px-4 lg:px-[80px] bg-base-200">
                <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-10">
                    Our Core Values
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow-sm p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2">Trust</h3>
                        <p className="opacity-80">
                            We ensure reliable and authentic property information.
                        </p>
                    </div>

                    <div className="card bg-base-100 shadow-sm p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                        <p className="opacity-80">
                            We use modern technologies to improve user experience.
                        </p>
                    </div>

                    <div className="card bg-base-100 shadow-sm p-6 text-center">
                        <h3 className="text-xl font-semibold mb-2">Simplicity</h3>
                        <p className="opacity-80">
                            Clean UI and easy navigation for everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-4 lg:px-[80px] text-center">
                <h2 className="text-2xl lg:text-3xl font-semibold mb-6">
                    Ready to explore properties?
                </h2>
                <Link
                    to="/all-properties"
                    className="btn bg-[#075a12] text-white font-semibold w-[180px] h-[48px] hover:scale-105 transition"
                >
                    Explore Now
                </Link>
            </section>
        </div>
    );
};

export default About;
