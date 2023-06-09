import React, { useRef, useState } from "react";
import Visual from "./Visual";
import "./AV.css"

const AudioVisual = () => {  const [trackName, setTrackName] = useState();

  const [audioAnalyserData, setAudioAnalyserData] = useState(null);
  const [sourceCreated, setSourceCreated] = useState(false);
  const audioPlayer = useRef(null);
  const audio2 = new Audio();
  let visualStreamSourceType = "FILE";

  const setupAudio = async () => {
    console.log("Setup Audio");
    const audioContext = new AudioContext();
    const audioAnalyser = audioContext.createAnalyser();

    console.log("setup analyser", audioAnalyser);
    audioAnalyser.fftSize = 4096;
    const bufferLength = audioAnalyser.frequencyBinCount;
    const audioData = new Uint8Array(bufferLength);
    let audioSource;
    let medSourceNO;
    try {
      if (!sourceCreated) {
        if (visualStreamSourceType === "FILE") {
          audioSource = audioContext.createMediaElementSource(
            audioPlayer.current
          );
          audioSource.connect(audioAnalyser);
          audioSource.connect(audioContext.destination);
          audioSource.onended = () => {
            audioSource.disconnect();
          };
          console.log(audioSource);
        } else {
          const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
          });
          console.log("stream", stream);
          medSourceNO = audioContext.createMediaStreamSource(stream);
          audio2.src = medSourceNO;
          console.log("medSourceNO", medSourceNO);
          medSourceNO.connect(audioAnalyser);
          medSourceNO.onended = () => {
            medSourceNO.disconnect();
          };
        }
        setSourceCreated(true);
      }
    } catch (error) {
      console.error("setUpAudio", error);
    }
    setAudioAnalyserData({ audioData, audioAnalyser, bufferLength });
  };

  const onFileChange = (e) => {
    console.log("input", e.target.files);
    const inputFile = e.target.files?.[0];
    if (!inputFile) return;
    console.log("input file", inputFile);
    const inputURL = URL.createObjectURL(inputFile);
    console.log("inputurl", inputURL);
    setTrackName(inputFile.name);
    audioPlayer.current.src = inputURL;
    if (!sourceCreated) setupAudio();
  };

  return (
    <div className="AudioVisualContainer">
      {trackName && (<h3>Now playing {trackName}</h3>)}
      <div className="canvasContainer">
      {audioAnalyserData ? (
        <Visual audioAnalyserData={audioAnalyserData} />
      ) : (
        <canvas className="canvas" />
      )}
      </div>
      <br />
      <div className="audioControls">        
      {trackName? (<audio controls className="audioPlayer" ref={audioPlayer}></audio>):(<audio controls className="audioPlayerHidden" ref={audioPlayer}></audio>)}
      </div>
      <div className="fileInput">        
        <button class="uploadButton">Choose file</button>
        <input type="file" accept="audio/*" onChange={onFileChange} className="uploadButton"/>
      </div>
    </div>
  );
};

export default AudioVisual;
