import axios from "axios";

const meenGaddhaAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const sendMessage = async (data) => {
  try {
    const response = await meenGaddhaAPI.post("CreateContact", data);
    return response.data;
  } catch (error) {
    console.error("Error sending contact message:", error);
    throw error;
  }
};
