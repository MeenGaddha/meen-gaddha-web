import axios from "axios";

const meenGaddhaAPI = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

export const getCategoryCollections = async () => {
    try {
        const response = await meenGaddhaAPI.get("/collection");
        return response.data.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        throw error;
    }
};
