import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";

function LoginPage(){
    const navigate = useNavigate();
    const {Login} = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [submitting, setSubmitting] = useState(false);
}