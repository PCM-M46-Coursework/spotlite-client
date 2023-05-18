import React, { useEffect, useRef, useState } from "react";
import {
  getPlaylistsByUserId,
  getUserId,
  addPlaylist,
} from "./DatabaseDialogue";

const Playlists = ({ setLocalPlaylist }) => {
  const [playlists, setPlaylists] = useState();
  const [playlist, setPlaylist] = useState(null);
  const newPlaylist = useRef(null);

  const getPlaylists = async () => {
    await getPlaylistsByUserId(getUserId()).then((playlists) => {
      setPlaylists(playlists);
    });
  };

  useEffect(() => {
    console.log("useEffect");
    getPlaylists();
  }, []);

  useEffect(() => {
    setLocalPlaylist(playlist);
  }, [playlist]);

  const addNewPlaylist = async (newPlaylistdetails) => {
    console.log("newPlaylist", newPlaylistdetails.current.value);
    const newItem = await addPlaylist(newPlaylistdetails.current.value);
    console.log("new item", newItem);
    let newArray = playlists;
    newArray.push({ id: newItem.id, name: newItem.name });
    setPlaylist(newItem.id);
    //getPlaylists();
  };

  return (
    <div>
      <h4>Playlists</h4>
      {playlists && (
        <ul>
          {playlists.map((playlist) => {
            return (
              <li
                className="userListItem"
                key={playlist.id}
                onClick={() => {
                  setPlaylist(playlist.id);
                }}
              >
                {playlist.name || "Unknown"}
              </li>
            );
          })}
          <li>
            <input type="text" className="playlistNameInput" placeholder="Add playlist" ref={newPlaylist} />
            <button
              type="button"
              className="playlistInputButton"
              onClick={() => {
                addNewPlaylist(newPlaylist);
              }}
            >
              Add
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Playlists;
