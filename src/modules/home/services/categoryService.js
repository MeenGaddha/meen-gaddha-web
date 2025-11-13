import axios from "axios";

const meenGaddhaAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});


export const getMostPlayedCategories = async () => {
  try {
    const response = await meenGaddhaAPI.get("categoryGames/most-selected-category");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching most played:", error);
    throw error;
  }
};


export const getExclusiveCategories = async () => {
  try {
    const response = await meenGaddhaAPI.get("category/exclusive-category");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching exclusive:", error);
    throw error;
  }
};

