const API_BASE_URL =
    import.meta.VITE_API_BASE_URL || "http://localhost:8001/api/v1";

async function  apiRequest(endpoint, options={}) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    })

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message || "Something went wrong");
    }

    return data;
}

export {apiRequest, API_BASE_URL};