import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import PrivetRoute from "./PrivetRoute.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import AddProperty from "../Pages/AddProperty.jsx";
import AllProperties from "../Pages/AllProperties.jsx";
import MyRating from "../Pages/MyRating.jsx";
import MyProperties from "../Pages/MyProperties.jsx";
import PropertiesDetails from "../Pages/PropertiesDetails.jsx";



const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "all-properties",
                element: <AllProperties />,
                loader: () => fetch('http://localhost:5000/properties')
            }
        ],
    },

    {
        path: '/',
        element: <PrivetRoute />,
        children: [
            {
                path: "/add-property",
                element: <AddProperty />
            },
            {
                path: "/all-properties",
                element: <AllProperties />
            },
            {
                path: "/My-Properties",
                element: <MyProperties />
            },
            {
                path: "/rating",
                element: <MyRating />
            },
            {
                path: "/properties-details/:id",
                element: <PropertiesDetails />,
                loader: async ({ params }) => {
                    const res = await fetch(`http://localhost:5000/properties/${params.id}`);
                    if (!res.ok) throw new Error("Failed to load property");
                    return res.json();
                }
            }


        ]
    },

    {
        path: '/auth',
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "registration",
                element: <Register />
            }
        ],
    },

    {
        path: '*',
        element: <h2>Error 404 - Page Not Found</h2>
    }
]);

export default router;