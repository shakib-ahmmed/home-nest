import React, { useContext } from "react";
import { PropertiesContext } from "../Provider/PropertiesContext";
import PropertyCard from "./PropertyCard";
import Loader from "../Components/Loader";

const AllProperties = () => {
    const { properties, loading } = useContext(PropertiesContext);

    if (loading) return <Loader />;

    return (
        <div className="lg:w-10/12 mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">All Properties</h1>

            {properties.length === 0 ? (
                <p className="text-gray-500 text-center">No properties available.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {properties.map((property) => (
                        <PropertyCard key={property._id} property={property} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllProperties;
