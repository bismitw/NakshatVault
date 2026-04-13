import {Navigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function ProtectedRoute({ children }) {

    const {user, authLoading} = useAuth();

    if(authLoading){
        return (
            <div className="flex min-h-screen items-center justify-center text-stone-200">
                Checking Session
            </div>
        )
    }

    if(!user){
        return <Navigate to= "/login" replace />;
    }

    return children;
}

export default ProtectedRoute;