import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/styles/index.css";
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();


createRoot(document.getElementById('root')).render(
  
    <App />
 
)
