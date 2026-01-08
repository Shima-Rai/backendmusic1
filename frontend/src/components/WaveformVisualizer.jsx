import { useEffect, useRef } from "react";

export default function WaveformVisualizer({ audioFile }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!audioFile) return;

    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;

    const reader = new FileReader();
    reader.readAsArrayBuffer(audioFile);

    reader.onload = () => {
      audioContext.decodeAudioData(reader.result, (buffer) => {
        const source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        source.start();
        draw(analyser);
      });
    };

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function draw(analyser) {
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      const render = () => {
        requestAnimationFrame(render);
        analyser.getByteFrequencyData(dataArray);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const barWidth = canvas.width / bufferLength;
        let x = 0;

        dataArray.forEach((value) => {
          const barHeight = value / 2;

          ctx.fillStyle = `rgb(${value + 80}, 120, 255)`;
          ctx.fillRect(x, canvas.height - barHeight, barWidth - 1, barHeight);
          x += barWidth;
        });
      };

      render();
    }
  }, [audioFile]);

  return <canvas ref={canvasRef} width="360" height="120" />;
}
