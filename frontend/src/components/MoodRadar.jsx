import React from "react";

function MoodRadar({ moodData }) {
  return (
    <div className="mood-radar">
      <h3>Mood Radar</h3>
      <svg width="200" height="200">
        <polygon
          points={moodData
            .map(
              (d, i) =>
                `${100 + 80 * d * Math.cos((i * 2 * Math.PI) / 5)},${100 + 80 * d * Math.sin((i * 2 * Math.PI) / 5)}`
            )
            .join(" ")}
          fill="rgba(108, 99, 255, 0.4)"
          stroke="#6c63ff"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default MoodRadar;
