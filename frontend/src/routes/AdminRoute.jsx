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
}