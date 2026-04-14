import { use, useEffect, useState } from "react";
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

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const response = await getUserProfile();
                const profile = response.data;

                setUser(profile);
                setProfileForm({
                    fullName: profile.fullName || "",
                    phone: profile.phone || "",
                    avatar: profile.avatar || "",
                });
                setBirthForm({
                    dateofBith: profile.dateofBirth? new Date(profile.dateofBirth).toISOString().split("T")[0]: "",
                    timeofBirth: profile.timeofBirth || "",
                    placeofBirth: profile.placeofBirth || "",
                });

            } catch (error) {
                setErrorMessage(error.message);
            }finally {
                setLoading(false);
            }
        };
        loadProfile();
    }, [setUser]);
}