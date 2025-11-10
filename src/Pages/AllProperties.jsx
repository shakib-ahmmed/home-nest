import React from "react";
import { useLoaderData } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AllProperties = () => {
    const properties = useLoaderData();
    const { user } = useContext(AuthContext);

    return (
        <div className="p-4 pt-5 flex flex-col justify-center">
            <h1 className="flex justify-center pt-5 pb-5 text-3xl font-bold mb-6">All Properties</h1>
            <div className="grid grid-cols-1 pb-5 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                    <PropertyCard key={property._id} property={property} user={user} />
                ))}
            </div>
        </div>
    );
};

export default AllProperties;
