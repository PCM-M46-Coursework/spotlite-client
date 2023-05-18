import React, { useEffect, useState } from 'react'
import AudioVisual from './AudioVisual'
import Playlists from './Playlists'
import FileList from './FileList'
import "./AV.css"

const Localfiles = () => {
    const [playlist, setPlayList] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);
    const [trackName, setTrackName] = useState(null);

useEffect(() => {
  console.log("LocalPlaylistChanged", playlist)
}, [playlist])

  return (
    <div>
        <AudioVisual selectedTrack={selectedTrack} trackName={trackName}/>
        <div className="playlistContainer">
            <div className="playlist">
                <Playlists setLocalPlaylist={setPlayList}/>
            </div>
            <div className="tracklist">
                <FileList playlist={playlist} setTrack={setSelectedTrack} setTrackName={setTrackName}/>
            </div>
        </div>
    </div>
  )
}

export default Localfiles