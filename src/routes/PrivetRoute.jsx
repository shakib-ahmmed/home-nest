import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider.jsx";
import { Loader } from "lucide-react";

export default function PrivetRoute({ children }) {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader className="w-12 h-12 animate-spin" />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/auth/login" replace />;
    }

    return children ? children : <Outlet />;
}
