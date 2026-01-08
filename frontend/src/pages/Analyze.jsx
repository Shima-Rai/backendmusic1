import React, { useState } from "react";
import AudioUploader from "../components/AudioUploader";
import WaveformVisualizer from "../components/WaveformVisualizer";

function Analyze() {
  const [audioFile, setAudioFile] = useState(null);

  return (
    <div>

      <h1 style={{ color: "#6c63ff", marginBottom: "20px" }}>Analyze Audio</h1>
      <AudioUploader onUpload={setAudioFile} />
      {audioFile && (
        <div style={{ marginTop: "30px" }}>
          <WaveformVisualizer audioFile={audioFile} />
        </div>
        
      )}
    </div>
  );
}

export default Analyze;
