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
import ErrorPage from "../Pages/ErrorPage.jsx";
import MyRatings from "../Pages/MyRating.jsx";



const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "all-properties",
                element: <AllProperties />,
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
                path: "/my-ratings",
                element: <MyRatings />,
                loader: () => {
                    const email = localStorage.getItem("user-email");
                    return fetch(`http://localhost:5000/ratings?email=${email}`);
                }
            },
            {
                path: "/properties-details/:id",
                element: <PropertiesDetails />,
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
        element: <ErrorPage />,
    }
]);

export default router;