import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Analyze from "./pages/Analyze";
import MoodInsights from "./pages/MoodSights";
import PlaylistMatch from "./pages/PlaylistMatch";
import History from "./pages/History";
import "./styles.css";

function App() {
  const [activePage, setActivePage] = useState("Analyze");

  const renderPage = () => {
    switch (activePage) {
      case "Analyze":
        return <Analyze />;
      case "Mood Insights":
        return <MoodInsights />;
      case "Playlist Match":
        return <PlaylistMatch />;
      case "History":
        return <History />;
      default:
        return <Analyze />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
