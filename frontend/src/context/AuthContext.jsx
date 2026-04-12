import { createContext, use, useContext, useEffect, useState } from "react";
import { apiRequest } from "../services/api.js";

const AuthContext = createContext(null);

function AuthProvider  ({ children }) {

    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try {
                const response = await apiRequest("/auth/me/", {
                    method: "GET",
                });
                setUser(response.data);
            } catch (error) {
                setUser(null);
            }finally {
                setAuthLoading(false);
            }
        }
        fetchCurrentUser();
    }, []);

    const login = async (payload) => {

        const response = await apiRequest("/auth/login", {
            method: "POST",
            body: JSON.stringify(payload),
        });
        setUser(response.data.user);
        return response;
    }

    const register = async (payload) => {

        const response = await apiRequest("/auth/register", {
            method: "POST",
            body: JSON.stringify(payload),
        });
        return response;
    }

    const logout = async () => {
        const response = await apiRequest("/auth/logout", {
            method: "POST",
        });
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value = {{
                user, 
                setUser,
                authLoading,
                login,
                register,
                logout,
            }}
        >{children}</AuthContext.Provider>
    );
}


function useAuth(){
    return  useContext(AuthContext);
}

export { AuthProvider, useAuth };


