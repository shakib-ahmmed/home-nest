import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout.jsx";
import AuthLayout from "../Layouts/AuthLayout.jsx";
import PrivetRoute from "./PrivetRoute.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";
import AddProperty from "../Pages/AddProperty.jsx";
import AllProperties from "../Pages/AllProperties.jsx";

import MyProperties from "../Pages/MyProperties.jsx";
import PropertiesDetails from "../Pages/PropertiesDetails.jsx";
import ErrorPage from "../Pages/ErrorPage.jsx";
import MyRating from "../Pages/MyRating.jsx";
import UpdateProperty from "../Pages/UpdateProperty.jsx";
import About from "../Pages/About.jsx";
import Contact from "../Pages/Contact.jsx";
import DashboardLayout from "../Layouts/DashboardLayout.jsx";



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
            },
            {
                path: "About",
                element: <About />
            },
            {
                path: "Contact",
                element: <Contact />
            },
        ],
    },

    {
        path: "/dashboard",
        element:
            <PrivetRoute>
                <DashboardLayout />
            </PrivetRoute>,
        children: [
            {
                path: "add-property",
                element: <AddProperty />
            },
            {
                path: "all-properties",
                element: <AllProperties />
            },
            {
                path: "my-properties",
                element: <MyProperties />
            },
            {
                path: "update-property/:id",
                element: <UpdateProperty />
            },
            {
                path: "my-rating",
                element: <MyRating />,
                loader: () => {
                    const email = localStorage.getItem("user-email");
                    return fetch(`https://home-nest-server-nine.vercel.app/ratings?email=${email}`);
                }
            },
            {
                path: "properties-details/:id",
                element: <PropertiesDetails />
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