import React, { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyProperties = () => {
    const { user } = useContext(AuthContext);
    const [properties, setProperties] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.email) return;

        const fetchProperties = async () => {
            try {
                const res = await fetch(`https://home-nest-server-nine.vercel.app/properties?userEmail=${user.email}`);
                if (!res.ok) throw new Error("Failed to fetch properties");
                const data = await res.json();
                setProperties(data);
            } catch (err) {
                console.error(err);
                toast.error("Error fetching properties");
            }
        };

        fetchProperties();
    }, [user?.email]);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this property?")) return;

        try {
            const res = await fetch(`https://home-nest-server-nine.vercel.app/properties/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Failed to delete property");

            setProperties(properties.filter((p) => p._id !== id));
            toast.success("Property deleted successfully!");
        } catch (err) {
            console.error(err);
            toast.error("Error deleting property");
        }
    };

    const handleUpdate = (id) => {
        navigate(`/update-property/${id}`);
    };

    if (!user) return <h2 className="text-center mt-10">Please login to see your properties</h2>;

    return (
        <div className="lg:w-10/12 mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">My Properties</h1>
            {properties.length === 0 ? (
                <p className="text-gray-500">You haven't added any properties yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <div key={property._id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
                            <img
                                src={property.PropertyImage}
                                alt={property.PropertyName}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4 flex flex-col">
                                <h2 className="text-xl font-bold mb-1">{property.PropertyName}</h2>
                                <p className="text-gray-600 mb-1">{property.Category}</p>
                                <p className="text-gray-500 mb-1">${property.Price?.toLocaleString() || "0"}</p>
                                <p className="text-gray-500 mb-1">{property.Location}</p>
                                <p className="text-gray-400 text-sm">
                                    Posted: {property.PostedDate ? new Date(property.PostedDate).toLocaleDateString() : "N/A"}
                                </p>
                            </div>
                            <div className="flex justify-between p-4">
                                <button
                                    onClick={() => handleUpdate(property._id)}
                                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(property._id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                                <Link
                                    to={`/properties-details/${property._id}`}
                                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                                >
                                    View
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default MyProperties;
