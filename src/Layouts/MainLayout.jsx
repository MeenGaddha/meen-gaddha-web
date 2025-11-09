import Navbar from "../modules/navbar/layouts/Navbar";
import Footer from "../modules/footer/layouts/Footer";
import { Outlet } from "react-router-dom";
import LoadingScreen from "../layouts/LoadingScreen";
import NoInternetScreen from "../layouts/NoInternetScreen";
import { useEffect, useState } from "react";


export default function MainLayout() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

     window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

     const timer = setTimeout(() => setIsLoading(false), 1200);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []); //handel loading
  if (isLoading) return <LoadingScreen />;
  if (!isOnline) return <NoInternetScreen />;

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
