import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { generateKundli, getKundlis } from "../services/kundli.js";
import { set } from "mongoose";

function kundliPage() {
    const [kundlis, setKundlis] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        dateOfBirth: "",
        timeOfBirth: "",
        placeOfBirth: "",
        latitude: "",
        longitude: "",
        timezone: "Asia/Kolkata",
    });

    useEffect(() => {
        const loadKundlis = async () => {
            try {
                const response = await getKundlis();
                setKundlis(response.data || []);
            } catch (error) {
                toast.error(error.message || "Failed to load kundlis");
            }finally {
                setLoading(false);
            }
        }
        loadKundlis();
    }, []);

    const handleChange = async(event) => {

        const {name, value} = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }))
    }
}