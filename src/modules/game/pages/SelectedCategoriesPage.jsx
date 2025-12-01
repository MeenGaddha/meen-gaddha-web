import { useNavigate } from "react-router-dom";
import GameHeader from "../../../layouts/components/GameHeader";

export default function SelectedCategoriesPage() {
  const navigate = useNavigate();

  const handleLeave = () => {
    // later: clear game session, reset scores
    navigate("/"); // send user back to home page
  };

  return (
    <div className="min-h-screen flex flex-col">
      <GameHeader
        sessionName="خميسية تكوين "
        teamLabel="دور الفريق الأول"
        onLeave={handleLeave}
      />

      <main className="flex-1 flex items-center justify-center">
        {/* Your categories grid */}
      </main>
    </div>
  );
}
