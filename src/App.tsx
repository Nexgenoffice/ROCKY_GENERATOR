import "./App.css";
import Creator from "./pages/creator";
import MigrationModal from "./components/ui/MigrationModal";
import { useState } from "react";

function App() {
  const [showMigrationModal, setShowMigrationModal] = useState(true);

  return (
    <div
      className="lg:fixed relative"
      style={{
        top: 0,
        left: 0,
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        backgroundImage: "url(/background.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MigrationModal open={showMigrationModal} onClose={() => setShowMigrationModal(false)} />
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
        className={`min-h-screen ${showMigrationModal ? "blur-sm" : ""}`}
      >
        <Creator />
      </div>
    </div>
  );
}

export default App;
