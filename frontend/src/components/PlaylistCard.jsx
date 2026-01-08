import React from "react";

export default function PlaylistCard({ song }) {
  const renderBar = (value) => "█".repeat(value) + "░".repeat(10 - value);

  return (
    <div className="card">
      <h3>🎵 {song.name}</h3>
      <p>Mood Match: {renderBar(song.mood)} {song.mood * 10}%</p>
      <p>Tempo Match: {renderBar(song.tempo)} {song.tempo * 10}%</p>
      <p>Feature Similarity: {renderBar(song.feature)} {song.feature * 10}%</p>
      <p>Final Score: {song.score}</p>
      <button>Play Preview</button>
    </div>
  );
}
