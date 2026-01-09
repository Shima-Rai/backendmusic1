function scoreTrack(track, inputMood, inputBpm) {
  let score = 0;

  // Mood match bonus
  if (track.mood === inputMood) {
    score += 50;
  }

  // BPM difference
  const bpmDiff = Math.abs(track.bpm - inputBpm);

  // Close BPM bonus (within 8%)
  if (bpmDiff <= inputBpm * 0.08) {
    score += 30;
  }

  // Penalize BPM difference
  score -= bpmDiff;

  return score;
}

module.exports = scoreTrack;
