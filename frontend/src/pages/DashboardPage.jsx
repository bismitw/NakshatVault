import { useAuth } from "../context/AuthContext.jsx";

function DashBoardPage() { 
    const {user, logout} = useAuth();

    const handleLogout = async () => {
        await logout();
    }
}