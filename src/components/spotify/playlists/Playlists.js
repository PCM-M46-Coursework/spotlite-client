import React, { useContext, useEffect, useState } from "react";
import { TrackSearchContext } from "../../../context/trackSearchContext/TrackSearchContext";
import { SpotifyAuthContext } from "../../../context/spotifyAuthContext/SpotifyAuthContext";
import SpotifyWebApi from "spotify-web-api-node";
import PlaylistResultsMap from "./parts/playlistResultsMap/PlaylistResultsMap";
import { SpotifyPlaylistProvider } from "./context/SpotifyPlaylistContext";
import TrackResultsMap from "./parts/trackResultsMap/TrackResultsMap";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
});

export default function Playlists() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistResults, setPlaylistResults] = useState([]);
  const { trackSearchTerm, setCurrentTrack } = useContext(TrackSearchContext);
  const { accessToken } = useContext(SpotifyAuthContext);

  useEffect(() => {
    try {
      if (!accessToken) return;
      spotifyApi.setAccessToken(accessToken);
      // Magic happens here, to get playlist data.
      (async function getPlaylists() {
        const response = await spotifyApi.getUserPlaylists();
        const playlists = response.body.items.map((playlist) => {
          return {
            id: playlist.id,
            title: playlist.name,
            description: playlist.description,
            imageUrl: playlist.images[0]?.url, // (Needs default image)
            totalTracks: playlist.tracks.total,
          };
        });
        setPlaylistResults(playlists);
        console.log("Playlists", playlists);
      })();
    } catch (err) {
      console.log(err);
      setPlaylistResults([]);
    }
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken || !trackSearchTerm) {
      setSearchResults([]);
      return;
    }
    // Magic happens here, to filter playlists.
  }, [accessToken, trackSearchTerm]);

  return (
    <div>
      <SpotifyPlaylistProvider>
        <PlaylistResultsMap
          spotifyApi={spotifyApi}
          playlistResults={playlistResults}
        />
        <TrackResultsMap />
      </SpotifyPlaylistProvider>
    </div>
  );
}
