import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { PropertiesContext } from "../Provider/PropertiesContext";
import { Star } from "lucide-react";
import Loader from "../Components/Loader";

const PropertiesDetails = () => {
    const { id } = useParams();
    const { properties, loading } = useContext(PropertiesContext);

    if (loading) return <Loader />;

    const property = properties.find((p) => p._id === id);

    if (!property) return <h2 className="text-center mt-10">Property not found</h2>;

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
                                src={property.PostedBy?.ProfilePhoto}
                                alt={property.PostedBy?.Name}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <p className="font-semibold">{property.PostedBy?.Name}</p>
                                <p className="text-sm text-gray-600">{property.PostedBy?.Email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-6">
                <Link
                    to={`/all-properties`}
                    className="btn bg-[#075a12] hover:bg-green-950 text-white font-semibold w-[145px] h-[45px] hover:scale-105 transition ease-in-out flex items-center justify-center"
                >
                    All Properties
                </Link>
            </div>
        </div>
    );
};

export default PropertiesDetails;
