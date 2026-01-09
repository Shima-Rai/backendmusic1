const songs = require("../data/tracks.json");
const scoreTrack = require("./scoreTrack");

function getRecommendations(inputMood, inputBpm) {
  return songs
    .map(song => ({
      ...song,
      score: scoreTrack(song, inputMood, inputBpm)
    }))
    .sort((a, b) => b.score - a.score);
}

module.exports = getRecommendations;
