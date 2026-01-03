import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
    return (
        <div className="bg-base-200 shadow-md dark:shadow-lg rounded-xl border border-base-content/10 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl">
            {/* Property Image */}
            <img
                src={property.PropertyImage}
                alt={property.PropertyName}
                className="h-48 w-full object-cover"
            />

            {/* Property Info */}
            <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-1 text-base-content">{property.PropertyName}</h2>
                <p className="text-sm font-semibold text-base-content/70 mb-2">{property.Category}</p>
                <p className="text-base-content/80 mb-2">{property.Description}</p>
                <p className="text-base-content/60 text-sm font-bold mb-2">{property.Location}</p>
                <p className="text-primary font-semibold text-lg mb-4">
                    ${property.Price.toLocaleString()}
                </p>
            </div>

            {/* View Details Button */}
            <Link
                to={`/properties-details/${property._id}`}
                className="text-center bg-[#075a12] dark:bg-green-700 hover:bg-green-950 dark:hover:bg-green-600 text-white font-semibold hover:scale-105 transition ease-in-out py-2 px-4 rounded"
            >
                View Details
            </Link>
        </div>

    );
};

export default PropertyCard;
