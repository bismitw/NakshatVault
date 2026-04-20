import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
    deleteKundli,
    getKundliById,
    updateKundli,
} from "../services/kundli.js";

function KundliDetailPage() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [kundli, setKundli] = useState(null);
    const [loading,  setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);

    const [formData, setFormDate] = useState({
        title: "",
        description: "",
        dateOfBirth: "",
        timeOfBirth: "",
        placeOfBirth: "",
    });

    useEffect(  () => {

        const loadKundli = async () => {
        try {
            const response = await getKundliById(id);
            const record = response.data
            setKundli(record);
            setFormData({
                title: record.title || "",
                description: record.description || "",
                dateOfBirth: record.dateOfBirth? new Date(record.dateOfBirth).toISOString().split("T")[0] : "",
                timeOfBirth: record.timeOfBirth || "",
                placeOfBirth: record.placeOfBirth || "",
            });
        } catch (error) {
            toast.error("failed to Load kundli details" || error.message);
        }finally{
            setLoading(false);
        }
    };
        loadKundli();
    }, [id]);


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((current) => ({
            ...current,
            [name]: value,
        }))
    }
}