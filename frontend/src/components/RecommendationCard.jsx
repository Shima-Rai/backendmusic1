import React from "react";

function RecommendationCard({ song }) {
  return (
    <div className="rec-card">
      <img src={song.cover} alt={song.title} />
      <h4>{song.title}</h4>
      <p>{song.artist}</p>
    </div>
  );
}

export default RecommendationCard;
