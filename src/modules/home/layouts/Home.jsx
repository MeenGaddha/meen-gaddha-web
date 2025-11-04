import Hero from "../components/Hero";
import AboutGame from "../components/AboutGame";
import HowToPlay from "../components/HowToPlay";
import HelpTools from "../components/HelpTools";
import CategoriesSection from "../components/CategoriesSection";
import SubscriptionInfo from "../components/SubscriptionInfo";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <Hero className= "w-full"/>
      <AboutGame />
      <HowToPlay />
      <HelpTools />
      <CategoriesSection />
      <SubscriptionInfo />
       <div className="w-full m-0 p-0">
      <ContactForm />
      </div>
    </div>
    
  );
}
