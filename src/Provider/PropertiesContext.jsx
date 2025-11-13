import React, { createContext, useState, useEffect } from "react";


export const PropertiesContext = createContext();
export const PropertiesProvider = ({ children }) => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const userEmail = localStorage.getItem("user-email");
                let url = "https://home-nest-server-nine.vercel.app/properties";
                if (userEmail) url += `?userEmail=${userEmail}`;

                const res = await fetch(url);
                const data = await res.json();
                setProperties(data);
            } catch (err) {
                console.error("Failed to fetch properties:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);


    return (
        <PropertiesContext.Provider value={{ properties, loading }}>
            {children}
        </PropertiesContext.Provider>
    );
};
