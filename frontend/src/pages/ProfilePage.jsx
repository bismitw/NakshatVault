import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    getUserProfile,
    updateBirthDetails,
    updateUserProfile,
} from "../services/user.js";
import { useAuth } from "../context/AuthContext.jsx";


function ProfilePage(){
    const {user, setUser} = useAuth();

    const [profileForm, setProfileForm] = useState({
        fullName: "",
        phone: "",
        avatar: "",
    });

    
}