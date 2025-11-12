import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { PropertiesProvider } from "./Provider/PropertiesContext.jsx"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "./routes/router.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <PropertiesProvider>  
        
        <RouterProvider router={router} />
        <ToastContainer position="top-center" />
      </PropertiesProvider>
    </AuthProvider>
  </StrictMode>
);
