import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { PropertiesContext } from "../Provider/PropertiesContext";
import { Star } from "lucide-react";
import Loader from "../Components/Loader";

const MyRating = () => {
    const { user } = useContext(AuthContext);
    const { properties, loading: propertiesLoading } = useContext(PropertiesContext);

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) {
            setLoading(false);
            return;
        }

        const fetchReviews = async () => {
            try {
                const res = await fetch(`https://home-nest-server-nine.vercel.app/ratings?email=${user.email}`);
                if (!res.ok) throw new Error("Failed to fetch reviews");
                const data = await res.json();
                setReviews(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        // 

        fetchReviews();
    }, [user?.email]);


    if (!user) return <h2 className="text-center mt-10">Please login to see your reviews</h2>;
    if (loading || propertiesLoading) return <Loader />;

    return (
        <div className="lg:w-10/12 mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-center">My Reviews</h1>

            {reviews.length === 0 ? (
                <p className="text-gray-500 text-center">You haven't submitted any reviews yet.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review) => {
                        const property = properties.find((p) => p._id === review.propertyId);

                       
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MyRating;
