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

    const handleProfileChange = (event) => {
        const {name, value} = event.target;
        setProfileForm((current) => ({
            ...current,
            [name]: value,
        }))
    };

    const handleBirthChange = (event) => {
        const {name, value} = event.target;
        setBirthForm((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleProfileSubmit = async (event) => {
        event.preventDefault();
        setProfileSaving(true);
        setProfileMessage("");
        setProfileError("");

        try {
            const response = await updateUserProfile(profileForm);
            setUser(response.data);
            setProfileMessage("Profile updated successfully");
        } catch (error) {
            setErrorMessage(error.message)
        }finally {
            setProfileSaving(false);
        }
    }

    const handleBirthSubmit = async (event) => {
        event.preventDefault();
        setBirthSaving(true);
        setBirthMessage("");
        setBirthError("");

        try {
            const response = await updateBirthDetails(birthForm);
            setUser(response.data);
            setBirthMessage("Birth details updated successfully");
        } catch (error) {
            setErrorMessage(error.message)
        }finally {
            setBirthSaving(false);
        }
    }

    if(loading) {
        return (
            <main className="flex min-h-screen items-center justify-center text-stone-200">
                Loading profile...
            </main>
        );
    }
}