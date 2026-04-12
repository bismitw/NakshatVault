import {Navigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function ProtectedRoute({ children }) {

    const {user, authloading} = useAuth();

    if(authloading){
        return (
            <div className="flex min-h-screen items-center justify-center text-stone-200">
                Checking Session
            </div>
        )
    }
}