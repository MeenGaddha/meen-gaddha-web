import Hero from "../components/Hero";
import AboutGame from "../components/AboutGame";
import HowToPlay from "../components/HowToPlay";
import HelpTools from "../components/HelpTools";
import CategoriesSection from "../components/CategoriesSection";
import SubscriptionInfo from "../components/SubscriptionInfo";
import ContactForm from "../components/ContactForm";
import MainLayout from "../../../layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>

    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <Hero showButtons={true} compact={false} />

      <AboutGame />
      <HowToPlay />
      <HelpTools />
      <CategoriesSection />
      <SubscriptionInfo />
       <div className="w-full m-0 p-0">
      <ContactForm />
      </div>
    </div>
    </MainLayout>
    
  );
}
