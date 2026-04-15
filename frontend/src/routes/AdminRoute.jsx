import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function AdminRoute({children}) {
    const {user, authLoading} = useAuth();

    if (authLoading){
        return (
            <div className="flex min-h-screen items-center justify-center text-stone-200">
            Checking admin session...
            </div>
        );
    }

    if(!user){
        return <Navigate to="/login" replace />
    }

    if(user.role !== "admin"){
        return <Navigate to="/" replace />
    }
    return children;
}

export default AdminRoute;