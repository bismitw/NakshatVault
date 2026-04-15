import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext.jsx";

function AdminDashboardPage() {
    const {user, authLoading} = useAuth();
    const navigate = useNavigate();
}