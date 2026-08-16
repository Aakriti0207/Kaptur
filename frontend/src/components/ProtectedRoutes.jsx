import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }){
    const isAuthenticated = useAuth();
    
    if(isAuthenticated === null){
        return <div className="min-h-screen flex items-center justify-center bg-espresso-canvas text-espresso-textSecondary text-sm">Loading…</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
}