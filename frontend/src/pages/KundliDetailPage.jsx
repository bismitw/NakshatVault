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

    const handleUpdate = async () => {
        event.preventDefault();
        setSaving(true);

        try {
            const response = await updateKundli(id, formData);
            setKundli(response.data);
            toast.success("Kundli updated successfully");
        } catch (error) {
            toast.error("Failed to update kundli" || error.message);
        }finally{
            setSaving(false);
        }
    }

    const handleDelete = async () => {
        const confirmed = Window.confirm("Are you sure you want to delete this kundli?");
        if(!confirmed){
            return;
        }

        setDeleting(true);

        try {
            await deleteKundli(id);
            toast.success("kundli deleted Successfully");
            navigate("/kundli");
        } catch (error) {
            toast.error("Failed to delete kundli" || error.message);
        }finally{
            setDeleting(false);
        }
    }

    if(loading) {
        return (
            <main className="flex min-h-screen items-center justify-center text-stone-200">
                Loading kundli...
            </main>
        )
    }

    if(!kundli) { 
        return (
            <main className="flex min-h-screen items-center justify-center text-stone-200">
                Kundli not found.
            </main>
        );
    }
}