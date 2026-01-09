const getRecommendations = require("../services/recommend.service");

exports.recommend = (req, res) => {
  const { mood, bpm } = req.body;

  if (!mood || !bpm) {
    return res.status(400).json({
      error: "Mood and BPM are required"
    });
  }

  const recommendations = getRecommendations(mood, bpm);

  res.json({
    input: { mood, bpm },
    recommendations
  });
};
