import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const PropertyCard = ({ property }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleViewDetails = () => {
        if (!user) {
            navigate("/login");
            return;
        }
        navigate(`/properties-details/${property._id}`);
    };

    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden flex flex-col">
            <img
                src={property.PropertyImage}
                alt={property.PropertyName}
                className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-1">{property.PropertyName}</h2>
                <p className="text-m font-semibold text-gray-600 mb-2">{property.Category}</p>
                <p className="text-gray-700 mb-2">{property.Description}</p>
                <p className="text-gray-500 text-m font-bold mb-2">{property.Location}</p>
                <p className="text-[#075a12] font-semibold text-lg mb-4">
                    ${property.Price.toLocaleString()}
                </p>
            </div>
            <button
                onClick={handleViewDetails}
                className="text-center bg-[#075a12] hover:bg-green-950 text-white font-semibold hover:scale-105 transition ease-in-out py-2 px-4 rounded"
            >
                View Details
            </button>
        </div>
    );
};

export default PropertyCard;
