const express = require("express");
const app = express();

app.use(express.json());

const recommendRoutes = require("./routes/recommend.routes");
app.use("/api", recommendRoutes);

app.get("/", (req, res) => {
  res.send("🎵 Smart Playlist Matcher API is running");
});

app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
