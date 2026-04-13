import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

function RegisterPage() { 

    const navigate = useNavigate();
    const {register} = useAuth();


    const [formData, setFormDate] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",

    });

    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    
}