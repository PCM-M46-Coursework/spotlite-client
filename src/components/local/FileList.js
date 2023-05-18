import React, { useEffect, useState } from "react";
import { getTracksByPlaylist, addTrackToPlaylist } from "./DatabaseDialogue";

const FileList = ({ playlist, setTrack, setTrackName }) => {
  const [trackList, setTrackList] = useState(null);
  const [selectedTrack, setSelectedTrack] = useState(null);

  useEffect(() => {
    console.log("playlistTracks for ", playlist)
    if (playlist) {
      console.log("fetching data", playlist);
      getTracksByPlaylist(playlist).then((tracks) => {
        console.log("tracks", tracks);
        setTrackList(tracks);
      });
    }
  }, [playlist]);

useEffect(() => {
  console.log("changing tracks from tracklist", selectedTrack);
    setTrack(selectedTrack);
}, [selectedTrack])

const onFileChange = async (e) => {
  const inputFile = e.target.files?.[0];
  if (!inputFile) return;
  console.log("Input File 1", inputFile);
  const inputURL = URL.createObjectURL(inputFile);
  setSelectedTrack(inputURL);
  console.log("db input", inputURL, inputFile.name, playlist);
  const result =await addTrackToPlaylist(inputURL, inputFile.name, playlist);
  console.log("result", result);
}

  return (
    <div>
      <h4>Tracks</h4>
      {trackList && (
        <ul>
          {trackList.map((track) => {
            return (
              <li key={track.id}
                onClick={() => {setSelectedTrack(track.path);setTrackName(track.trackName)}}>
                  {track.trackName}                
              </li>
            );
          })}
          <li>
          <div className="fileInput">        
            <button className="uploadButton">Add track</button>
            <input type="file" accept="audio/*" onChange={onFileChange} className="uploadButton"/>
          </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default FileList;
