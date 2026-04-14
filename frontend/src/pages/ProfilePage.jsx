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

    const [birthForm, setBirthForm] = useState({
        dateofBith: "",
        timeofBirth: "",
        placeofBirth: "",
    })

    const [loading, setLoading] = useState(true);
    const [profileSaving, setProfileSaving] = useState(false);
    const [birthSaving, setBirthSaving] = useState(false);
    const [profileMessage, setProfileMessage] = useState("");
    const [birthMessage, setBirthMessage] = useState("");
    const [profileError, setProfileError] = useState("");
    const [birthError, setBirthError] = useState("");
}