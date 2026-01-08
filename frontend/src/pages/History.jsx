import React from "react";

const historyItems = [
  "Analyzed 'Song A'",
  "Analyzed 'Song B'",
  "Matched playlist for 'Song C'",
  "Mood insights for 'Song D'",
];

function History() {
  return (
    <div>
      <h1 style={{ color: "#6c63ff", marginBottom: "20px" }}>History</h1>
      <ul className="history-list">
        {historyItems.map((item, idx) => (
          <li key={idx} className="history-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
