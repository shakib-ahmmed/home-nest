import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import Loader from "../Components/Loader";

const AllProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("price");
    const [order, setOrder] = useState("asc");

    useEffect(() => {
        fetchProperties();
    }, [sortBy, order, searchQuery]);

    const fetchProperties = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://home-nest-server-nine.vercel.app/properties?sortBy=${sortBy}&order=${order}&search=${searchQuery}`
            );
            const data = await res.json();
            setProperties(data);
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    if (loading) return <Loader />;

    return (
        <div className="lg:w-10/12 mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">All Properties</h1>
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">


                {/* search and sort section */}



                <div className="flex items-center w-12 md:w-1/2 gap-2">
                    <input
                        type="text"
                        placeholder="Search by property name..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 w-full text-sm"
                    />
                    <button
                        onClick={() => setSearchQuery(search)}
                        className="btn bg-[#075a12] text-white font-semibold px-4 hover:scale-105 transition ease-in-out flex items-center justify-center py-1.5 rounded-lg "
                    >
                        Search
                    </button>
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-gray-600 text-sm font-medium">Sort by:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm"
                    >
                        <option value="price">Price</option>
                        <option value="postedDate">Posted Date</option>
                    </select>

                    <button
                        onClick={() => setOrder(order === "asc" ? "desc" : "asc")}
                        className="bg-gray-200 hover:bg-gray-300 text-sm px-3 py-1.5 rounded-lg"
                    >
                        {order === "asc" ? "↑ Asc" : "↓ Desc"}
                    </button>
                </div>
            </div>
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
