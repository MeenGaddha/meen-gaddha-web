import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./modules/home/layouts/Home";
import SelectedCategoriesPage from "./modules/game/pages/SelectedCategoriesPage";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
         <Route
          path="/game/categories"
          element={<SelectedCategoriesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

