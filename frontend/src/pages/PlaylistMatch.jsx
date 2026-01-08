import React from "react";
import RecommendationCard from "../components/RecommendationCard";
import MoodTuningDial from "../components/MoodTuningDial";

// Example playlist recommendations
const songs = [
  { title: "Song A", cover: "https://via.placeholder.com/200", artist: "Artist 1" },
  { title: "Song B", cover: "https://via.placeholder.com/200", artist: "Artist 2" },
  { title: "Song C", cover: "https://via.placeholder.com/200", artist: "Artist 3" },
];

function PlaylistMatch() {
  return (
    <div>
      <h1 style={{ color: "#6c63ff", marginBottom: "20px" }}>Playlist Match</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {songs.map((song, idx) => (
          <RecommendationCard key={idx} song={song} />
        ))}
      </div>

      <h2 style={{ color: "#6c63ff", marginTop: "40px", marginBottom: "20px" }}>Mood Tuning</h2>
      <MoodTuningDial />
    </div>
  );
}

export default PlaylistMatch;
