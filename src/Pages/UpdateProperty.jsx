import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";

const UpdateProperty = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [property, setProperty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    // Load property data
    useEffect(() => {
        const fetchProperty = async () => {
            try {
                const res = await fetch(`https://home-nest-server-nine.vercel.app/properties/${id}`);
                if (!res.ok) throw new Error("Failed to fetch property");
                const data = await res.json();
                setProperty(data);
            } catch (err) {
                console.error(err);
                toast.error("Failed to load property data");
            } finally {
                setLoading(false);
            }
        };

        fetchProperty();
    }, [id]);

    if (loading) return <Loader />;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty({ ...property, [name]: value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setUpdating(true);

        try {
            const { _id, PostedBy, ...updateData } = property;
            updateData.Price = Number(updateData.Price);

            const res = await fetch(`https://home-nest-server-nine.vercel.app/properties/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updateData),
            });

            if (!res.ok) throw new Error("Failed to update property");

            toast.success("Property updated successfully!");
            navigate(`/properties-details/${id}`);
        } catch (err) {
            console.error(err);
            toast.error("Failed to update property");
        } finally {
            setUpdating(false);
        }
    };

    return (
        <div className="lg:w-8/12 mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-base-content">Update Property</h1>
            <form onSubmit={handleUpdate} className="bg-base-100 shadow-md p-6 rounded-lg">
                <div className="mb-4">
                    <label className="block font-semibold mb-1 text-base-content">Property Name</label>
                    <input
                        type="text"
                        name="PropertyName"
                        value={property.PropertyName || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-base-200 text-base-content"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1 text-base-content">Description</label>
                    <textarea
                        name="Description"
                        value={property.Description || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-base-200 text-base-content"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1 text-base-content">Category</label>
                    <input
                        type="text"
                        name="Category"
                        value={property.Category || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-base-200 text-base-content"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1 text-base-content">Price</label>
                    <input
                        type="number"
                        name="Price"
                        value={property.Price || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-base-200 text-base-content"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1 text-base-content">Location</label>
                    <input
                        type="text"
                        name="Location"
                        value={property.Location || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-base-200 text-base-content"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1 text-base-content">Image Link</label>
                    <input
                        type="text"
                        name="PropertyImage"
                        value={property.PropertyImage || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-base-200 text-base-content"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1 text-base-content">User Name</label>
                    <input
                        type="text"
                        value={user?.displayName || ""}
                        readOnly
                        className="w-full border border-gray-900 rounded px-3 py-2  text-gray-900 dark:text-gray-100"
                    />
                </div>

                <div className="mb-4">
                    <label className="block font-semibold mb-1 text-base-content">User Email</label>
                    <input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        className="w-full border border-gray-900 rounded px-3 py-2  text-gray-900 dark:text-gray-100 "
                    />
                </div>

                <button
                    type="submit"
                    disabled={updating}
                    className="btn bg-[#075a12] hover:bg-green-950 text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out flex items-center justify-center"
                >
                    {updating ? "Updating..." : "Update Property"}
                </button>
            </form>
        </div>
    );
};

export default UpdateProperty;
