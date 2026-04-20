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
}