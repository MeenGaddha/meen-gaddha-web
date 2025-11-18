import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import LoadingScreen from "../layouts/LoadingScreen";
import NoInternetScreen from "../layouts/NoInternetScreen";
import { useEffect, useState } from "react";


export default function MainLayout({children}) {
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
    <div className="flex flex-col">
      <Navbar />
      
      {/* <div className="h-[30px]" />  */}

      <main className="flex-grow min-h-screen overflow-y-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
