import axios from "axios";

const meenGaddhaAPI = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const loginUser = (values) =>
  meenGaddhaAPI.post(`${import.meta.env.VITE_BASE_URL}/login`, values);


export const registerUser = (data) => meenGaddhaAPI.post("/register", data);
