import { BrowserRouter, Routes, Route } from "react-router-dom";
// SelectedCategoriesPage from "./modules/game/pages/SelectedCategoriesPage";
import { Toaster } from "react-hot-toast";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./modules/home/pages/HomePage";
import CategoriesPage from "./modules/categories/pages/CategoriesPage";
import { LogIn } from "lucide-react";
import Login from "./modules/auth/pages/Login";
import Register from "./modules/auth/pages/Register";



export default function App() {
  return (
     <>
      <Toaster position="top-center" reverseOrder={false} />
    
    <BrowserRouter>
      <Routes>

          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register />} />

          <Route path="/categories" element={<CategoriesPage/>}/>


      </Routes>
    </BrowserRouter>
    </>
  );
}

