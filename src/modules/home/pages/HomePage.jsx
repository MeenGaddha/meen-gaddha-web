import Hero from "../components/Hero";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; //for scrolling to every part in navbar
import AboutGame from "../components/AboutGame";
import HowToPlay from "../components/HowToPlay";
import HelpTools from "../components/HelpTools";
import CategoriesSection from "../components/CategoriesSection";
import SubscriptionInfo from "../components/SubscriptionInfo";
import ContactForm from "../components/ContactForm";
import MainLayout from "../../../layouts/MainLayout";

export default function HomePage() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    <MainLayout>

    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <Hero showButtons={true} compact={false} />

      <div id="about">
          <AboutGame />
        </div>

       <div id="howToPlay">
          <HowToPlay />
        </div>

      <HelpTools />

      <div id="categories">
          <CategoriesSection />
        </div>

      <div id="subscribe">
          <SubscriptionInfo />
        </div>

       <div className="w-full m-0 p-0">

       <div id="contact">
          <ContactForm />

          
        </div>

      </div>
    </div>
    </MainLayout>
    
  );
}
