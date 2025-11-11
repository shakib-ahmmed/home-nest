import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Star } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PropertiesDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const property = data; // assuming loader returns single property object

    const [reviewForm, setReviewForm] = useState({ name: "", rating: 5, comment: "" });
    const [reviews, setReviews] = useState([]);

    if (!property) return <h2 className="text-center mt-10">Property not found</h2>;

    const handleInputChange = (e) => {
        setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();
        setReviews([...reviews, reviewForm]);
        toast.success("Review submitted successfully!");
        setReviewForm({ name: "", rating: 5, comment: "" });
    };

    const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();

    return (
        <div className="lg:w-10/12 mx-auto py-5 p-6 space-y-8">

            {/* Property Details */}
            <div className="bg-gray-100 p-6 rounded-lg shadow flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2 flex justify-center items-center">
                    <img
                        src={property.PropertyImage}
                        alt={property.PropertyName}
                        className="h-auto w-full max-h-96 rounded-lg"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-between space-y-4">
                    <h1 className="text-4xl font-bold">{property.PropertyName}</h1>
                    <p className="text-gray-700 text-lg">{property.Description}</p>
                    <div className="flex flex-wrap gap-6 mt-4 items-center">
                        <div className="flex items-center gap-2">
                            <Star className="text-yellow-400 fill-yellow-400" />
                            <span className="font-semibold text-lg">{property.Rating || 0}</span>
                        </div>
                        <div>
                            <span className="font-semibold text-lg">Price:</span> ${property.Price?.toLocaleString()}
                        </div>
                        <div>
                            <span className="font-semibold text-lg">Category:</span> {property.Category}
                        </div>
                        <div>
                            <span className="font-semibold text-lg">Location:</span> {property.Location}
                        </div>
                        <div>
                            <span className="font-semibold text-lg">Posted on:</span> {formatDate(property.PostedDate)}
                        </div>
                        <div className="flex items-center gap-2">
                            <img
                                src={property.PostedBy.ProfilePhoto}
                                alt={property.PostedBy.Name}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">{property.PostedBy.Name}</p>
                                <p className="text-sm text-gray-600">{property.PostedBy.Email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-gray-100 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4">Ratings & Reviews</h2>
                {reviews.length === 0 ? (
                    <p className="text-gray-500">No reviews yet.</p>
                ) : (
                    reviews.map((r, i) => (
                        <div key={i} className="border-b border-gray-300 pb-2 mb-2">
                            <div className="flex items-center gap-2">
                                {[...Array(Number(r.rating))].map((_, idx) => (
                                    <Star key={idx} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700">{r.comment}</p>
                            <p className="text-sm text-gray-500">- {r.name}</p>
                        </div>
                    ))
                )}

                {/* Submit review form */}
                <form onSubmit={handleSubmitReview} className="space-y-4 max-w-md mt-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={reviewForm.name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            min={1}
                            max={5}
                            value={reviewForm.rating}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Comment</label>
                        <textarea
                            name="comment"
                            value={reviewForm.comment}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-md p-2"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
                    >
                        Submit Review
                    </button>
                </form>
            </div>

            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default PropertiesDetails;
