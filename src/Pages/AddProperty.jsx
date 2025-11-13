import React, { useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProperty = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        PropertyName: "",
        Description: "",
        Category: "Rent",
        Price: "",
        Location: "",
        PropertyImage: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            toast.error("You must be logged in to add a property.");
            return;
        }

        const propertyData = {
            ...formData,
            PostedBy: {
                Name: user.displayName || user.name,
                Email: user.email,
                ProfilePhoto: user.photoURL || "",
            },
            PostedDate: new Date().toISOString(),
        };

        try {
            const res = await fetch("https://home-nest-server-nine.vercel.app/properties", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(propertyData),
            });

            if (!res.ok) throw new Error("Failed to add property");

            toast.success("Property added successfully!");
            setFormData({
                PropertyName: "",
                Description: "",
                Category: "Rent",
                Price: "",
                Location: "",
                PropertyImage: "",
            });
        } catch (err) {
            console.error(err);
            toast.error("Error adding property. Try again.");
        }
    };

    return (
        <div className="lg:w-8/12 mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Add New Property</h1>
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">

                <div>
                    <label className="block font-medium mb-1">Property Name</label>
                    <input
                        type="text"
                        name="PropertyName"
                        value={formData.PropertyName}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Description</label>
                    <textarea
                        name="Description"
                        value={formData.Description}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <select
                        name="Category"
                        value={formData.Category}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                    >
                        <option value="Rent">Rent</option>
                        <option value="Sale">Sale</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Land">Land</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Price</label>
                    <input
                        type="number"
                        name="Price"
                        value={formData.Price}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Location</label>
                    <input
                        type="text"
                        name="Location"
                        value={formData.Location}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Image Link</label>
                    <input
                        type="text"
                        name="PropertyImage"
                        value={formData.PropertyImage}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">User Name</label>
                    <input
                        type="text"
                        value={user?.displayName || user?.name || ""}
                        readOnly
                        className="w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">User Email</label>
                    <input
                        type="email"
                        value={user?.email || ""}
                        readOnly
                        className="w-full border border-gray-300 rounded-md p-2 bg-gray-100"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#075a12] hover:bg-green-950 text-white font-semibold py-2 px-4 rounded"
                >
                    Add Property
                </button>
            </form>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default AddProperty;
