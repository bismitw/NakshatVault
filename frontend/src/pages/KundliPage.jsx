import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { generateKundli, getKundlis } from "../services/kundli.js";

function kundliPage() {
    const [kundlis, setKundlis] = useState([]);  
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
}