import React, { useEffect, useRef, useState } from "react";

const animateBars = (
  analyser,
  canvas,
  canvasContext,
  audioData,
  bufferLength,
  mirror
) => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const fftSizes = [32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768];
  const barWidth = 5;
  const barGap = 1;
  let analyserWidth;
  if (mirror) {
    analyserWidth = Math.floor(canvas.width / 2);
  } else {
    analyserWidth = Math.floor(canvas.width);
  }

  //console.log("Analyser Width: ", analyserWidth, mirror);

  const numBars = Math.floor(analyserWidth / (barWidth + barGap));
  for (let i = 0; i < fftSizes.length; i++) {
    if (fftSizes[i] > numBars * 2 * 0.8) {
      analyser.fftSize = fftSizes[i];
      break;
    }
  }
  //console.log("numBars: ", numBars, "fftSize: ", analyser.fftSize);

  bufferLength = analyser.frequencyBinCount;
  analyser.getByteFrequencyData(audioData);
  canvasContext.fillStyle = "black";
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  let barHeight;
  let grd = canvasContext.createLinearGradient(
    canvas.width / 2,
    0,
    canvas.width / 2,
    canvas.height
  );
  grd.addColorStop(0, "red");
  grd.addColorStop(0.2, "yellow");
  //grd.addColorStop(0.2, "yellow");
  grd.addColorStop(0.6, "green");
  grd.addColorStop(1, "blue");
  canvasContext.fillStyle = grd;
  let x = 0;
  if (mirror) {
    for (let i = numBars; i > 0; i--) {
      //map i onto fftbin
      let index = Math.floor((i / numBars) * (bufferLength * 0.65));
      barHeight = (audioData[index] / 255) * canvas.height;
      canvasContext.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth + barGap;
    }
  }
  for (let i = 0; i < numBars; i++) {
    //map i onto fftbin
    let index = Math.floor((i / numBars) * (bufferLength * 0.65));
    barHeight = (audioData[index] / 255) * canvas.height;
    canvasContext.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
    x += barWidth + barGap;
  }
};

const Visual = ({ audioAnalyserData }) => {
  const [visualiserType, setVisualiserType] = useState();
  const mirror = useRef();
  const canvasRef = useRef(null);
  console.log("Visual", audioAnalyserData);
  const { audioAnalyser, bufferLength, audioData } = audioAnalyserData;

  const runVisualiser = (audioData, audioAnalyser, bufferLength) => {
    console.log("runVisualiser");
    const canvas = canvasRef.current;

    console.log("width", canvas.width, canvas.offsetWidth);
    if (!canvas || !audioAnalyser) return;
    const canvasContext = canvas.getContext("2d");
    const animationLoop = () => {
      audioAnalyser.minDecibels = -80;
      audioAnalyser.maxDecibels = -35;
      switch (visualiserType) {
        case 0:
          animateBars(
            audioAnalyser,
            canvas,
            canvasContext,
            audioData,
            bufferLength,
            mirror.current
          );
          break;
        case 1:
          break;
        default:
          animateBars(
            audioAnalyser,
            canvas,
            canvasContext,
            audioData,
            bufferLength,
            mirror.current
          );
          break;
      }
      requestAnimationFrame(animationLoop);
    };
    animationLoop();
  };

  useEffect(() => {
    runVisualiser(audioData, audioAnalyser, bufferLength);
  }, []);

  return (
    <>
      <canvas height="100px" width="900px" className="canvas" ref={canvasRef} />
      <div className="visualiserButtons">
      <button
          onClick={() => {
            mirror.current = !mirror.current;
            console.log(mirror);
          }}
          type="button"
        >
          Mirror
        </button>
      </div>
    </>
  );
};
export default Visual;
