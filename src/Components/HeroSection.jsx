import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const slides = [
    { image: "/banner-2.jpg", title: "Beach House", location: "CoxBazar, Bangladesh", price: "$120,000" },
    { image: "/banner-1.jpg", title: "Modern Apartment", location: "NewYork, USA", price: "$85,000" },
    { image: "/banner-3.jpg", title: "Luxury Villa", location: "Sylhet, Bangladesh", price: "$250,000" },
];

const PropertySlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setIndex((prev) => (prev + 1) % slides.length), 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[80vh] pt-10 overflow-hidden flex justify-center items-center">
            {slides.map((slide, i) => (
                <motion.div
                    key={i}
                    className="absolute inset-0 w-full h-full"
                    style={{ zIndex: i === index ? 2 : 1 }}
                    initial={{ opacity: i === index ? 1 : 0 }}
                    animate={{ opacity: i === index ? 1 : 0 }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <div className="absolute bottom-10 left-10 text-white">
                        <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg">{slide.title}</h2>
                        <p className="text-lg md:text-2xl drop-shadow-md">{slide.location} • {slide.price}</p>
                    </div>
                </motion.div>
            ))}

            {/* Navigation Dots */}
            <div className="absolute bottom-5 flex gap-3 justify-center w-full">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === index ? "bg-[#075a12]" : "bg-gray-300"}`}
                        onClick={() => setIndex(i)}
                    />
                ))}
            </div>
        </section>
    );
};

export default PropertySlider;
