import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PropertiesContext } from "../Provider/PropertiesContext";
import { Star } from "lucide-react";
import Loader from "../Components/Loader";
import { toast } from "react-toastify";

const PropertiesDetails = () => {
    const { id } = useParams();
    const { properties, loading } = useContext(PropertiesContext);

    const [reviews, setReviews] = useState([]);
    const [reviewForm, setReviewForm] = useState({
        name: "",
        rating: 5,
        comment: "",
    });
    const [reviewsLoading, setReviewsLoading] = useState(true);

    if (loading) return <Loader />;

    const property = properties.find((p) => p._id === id);
    if (!property)
        return <h2 className="text-center mt-10 text-base-content">Property not found</h2>;

    const formatDate = (dateStr) => new Date(dateStr).toLocaleDateString();

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                setReviewsLoading(true);
                const res = await fetch(
                    `https://home-nest-server-nine.vercel.app/reviews/${id}`
                );
                const data = await res.json();
                setReviews(data);
            } catch (err) {
                console.error(err);
            } finally {
                setReviewsLoading(false);
            }
        };
        fetchReviews();
    }, [id]);

    const handleInputChange = (e) => {
        setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });
    };

    const handleSubmitReview = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(
                "https://home-nest-server-nine.vercel.app/reviews",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        propertyId: id,
                        ...reviewForm,
                        rating: Number(reviewForm.rating),
                    }),
                }
            );

            if (!res.ok) throw new Error("Failed");

            const updated = await fetch(
                `https://home-nest-server-nine.vercel.app/reviews/${id}`
            ).then((res) => res.json());

            setReviews(updated);
            setReviewForm({ name: "", rating: 5, comment: "" });
            toast.success("Review submitted successfully!");
        } catch {
            toast.error("Error submitting review");
        }
    };

    return (
        <div className="lg:w-10/12 mx-auto py-6 px-4 space-y-10 text-base-content">

            {/* Property Info */}
            <div className="bg-base-200 p-6 rounded-xl shadow flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                    <img
                        src={property.PropertyImage}
                        alt={property.PropertyName}
                        className="w-full max-h-96 object-cover rounded-lg"
                    />
                </div>

                <div className="flex-1 space-y-4">
                    <h1 className="text-3xl font-bold">{property.PropertyName}</h1>

                    <p className="text-base-content/80">
                        {property.Description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <Star className="text-yellow-400 fill-yellow-400" />
                            <span>{property.Rating || 0}</span>
                        </div>

                        <p><span className="font-semibold">Price:</span> ${property.Price}</p>
                        <p><span className="font-semibold">Category:</span> {property.Category}</p>
                        <p><span className="font-semibold">Location:</span> {property.Location}</p>
                        <p><span className="font-semibold">Posted:</span> {formatDate(property.PostedDate)}</p>
                    </div>

                    <div className="flex items-center gap-3 pt-4">
                        <img
                            src={property.PostedBy?.ProfilePhoto}
                            className="w-12 h-12 rounded-full"
                            alt=""
                        />
                        <div>
                            <p className="font-semibold">{property.PostedBy?.Name}</p>
                            <p className="text-base-content/60 text-sm">
                                {property.PostedBy?.Email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reviews */}
            <div className="bg-base-200 p-6 rounded-xl shadow space-y-4">
                <h2 className="text-2xl font-semibold">Ratings & Reviews</h2>

                {reviewsLoading ? (
                    <p className="text-base-content/60">Loading reviews...</p>
                ) : reviews.length === 0 ? (
                    <p className="text-base-content/60">No reviews yet.</p>
                ) : (
                    reviews.map((r, i) => (
                        <div key={i} className="border-b border-base-300 pb-3">
                            <div className="flex gap-1">
                                {[...Array(r.rating)].map((_, idx) => (
                                    <Star
                                        key={idx}
                                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                                    />
                                ))}
                            </div>
                            <p className="text-base-content/80">{r.comment}</p>
                            <p className="text-xs text-base-content/60">— {r.name}</p>
                        </div>
                    ))
                )}

                {/* Review Form */}
                <form onSubmit={handleSubmitReview} className="space-y-4 pt-4 max-w-md">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={reviewForm.name}
                        onChange={handleInputChange}
                        className="input input-bordered w-full bg-base-100"
                        required
                    />

                    <input
                        type="number"
                        min="1"
                        max="5"
                        name="rating"
                        value={reviewForm.rating}
                        onChange={handleInputChange}
                        className="input input-bordered w-full bg-base-100"
                        required
                    />

                    <textarea
                        name="comment"
                        placeholder="Your review"
                        value={reviewForm.comment}
                        onChange={handleInputChange}
                        className="textarea textarea-bordered w-full bg-base-100"
                        required
                    />

                    <button
                        type="submit"
                        className="btn bg-[#075a12] hover:bg-green-950 text-white w-full"
                    >
                        Submit Review
                    </button>
                </form>
            </div>

            <div className="text-center">
                <Link
                    to="/all-properties"
                    className="btn bg-[#075a12] hover:bg-green-950 text-white"
                >
                    All Properties
                </Link>
            </div>
        </div>
    );
};

export default PropertiesDetails;
