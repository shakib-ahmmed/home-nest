import React, { createContext, useState, useEffect } from "react";


export const PropertiesContext = createContext();
export const PropertiesProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/properties")
            .then((res) => res.json())
            .then((data) => {
                setProperties(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch properties:", err);
                setLoading(false);
            });
    }, []);

    return (
        <PropertiesContext.Provider value={{ properties, loading }}>
            {children}
        </PropertiesContext.Provider>
    );
};
