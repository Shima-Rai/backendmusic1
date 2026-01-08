import React, { useState } from "react";

function AudioUploader({ onUpload }) {
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      onUpload(file);
    }
  };

  return (
    <div className="audio-uploader">
      <input type="file" accept="audio/*" onChange={handleChange} />
      <p>{fileName ? `Uploaded: ${fileName}` : "No file uploaded"}</p>
    </div>
  );
}

export default AudioUploader;
