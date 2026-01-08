import React from "react";
import MoodRadar from "../components/MoodRadar";
import BPMIndicator from "../components/BPMIndicator";

function MoodInsights() {
  // Example data
  const moodData = [0.8, 0.6, 0.9, 0.5, 0.7]; // values 0-1
  const bpm = 72;

  return (
    <div>
      <h1 style={{ color: "#6c63ff", marginBottom: "20px" }}>Mood Insights</h1>
      <div style={{ display: "flex", gap: "50px", alignItems: "center", flexWrap: "wrap" }}>
        <MoodRadar moodData={moodData} />
        <BPMIndicator bpm={bpm} />
      </div>
    </div>
  );
}

export default MoodInsights;
