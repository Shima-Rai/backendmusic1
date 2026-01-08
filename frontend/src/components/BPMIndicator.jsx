import React from "react";

function BPMIndicator({ bpm }) {
  return (
    <div className="bpm-indicator">
      <h4>BPM: {bpm}</h4>
      <div className="bpm-bar">
        <div className="bpm-fill" style={{ width: `${bpm}%` }}></div>
      </div>
    </div>
  );
}

export default BPMIndicator;
