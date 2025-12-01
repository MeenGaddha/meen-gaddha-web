import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./modules/home/pages/HomePage";
import CategoriesPage from "./modules/categories/pages/CategoriesPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />

          <Route path="categories" element={<CategoriesPage/>}/>

      </Routes>
    </BrowserRouter>
  );
}

