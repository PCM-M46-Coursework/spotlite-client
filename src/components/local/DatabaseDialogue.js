

export const getUserId = () => {
  return 1;
};

export const addPlaylist = async (name) => {
  try {
    const dbURL = new URL("http://localhost:5001");
    const UserId = getUserId();
    dbURL.pathname = "/playlists/addPlaylist";
    const response = await fetch(dbURL.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        UserId: UserId,
      }),
    });
    if (!response.status === 201 ) throw new Error("Playlist creation error");
    const data = await response.json();
    if (!data) throw new Error("Playlist creation error");
    return data;
  } catch (error) {
    console.log("addPlaylist error: " + error);
  }
};

export const getTracks = async () => {
  try {
    const dbURL = new URL("http://localhost:5001");
    const UserId = getUserId();
    dbURL.pathname = "/tracks/getTracks";
    dbURL.searchParams.append("UserId", UserId);
    const response = await fetch(dbURL.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.status === 201 ) throw new Error("getTracks error");
    const data = await response.json();
    if (!data) throw new Error("getTracks error");
    return data;
  } catch (error) {
    console.log("addPlaylist error: " + error);
  }
};

export const getPlaylistsByUserId = async () => {
  try {
    const dbURL = new URL("http://localhost:5001");
    const UserId = getUserId();
    dbURL.pathname = "/playlists/getPlaylistsByUserId";
    dbURL.searchParams.append("UserId", UserId);
    const response = await fetch(dbURL.href, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.status === 201 ) throw new Error("getTracks error");
    const data = await response.json();
    if (!data) throw new Error("get playlists error");
    return data;
  } catch (error) {
    console.log("getplaylistbyuserid error: " + error);
  }
};

export const getTracksByPlaylist = async (playlistId) => {
  try {
    const dbURL = new URL("http://localhost:5001");
    dbURL.pathname = "/playlists/getTracksByPlaylist";
    console.log("actually searching for playlist: " + playlistId);    
    dbURL.searchParams.append("playlistId", playlistId);
    const response = await fetch(dbURL.href, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.status === 201 ) throw new Error("getTracks error");
      const tracks = await response.json();
    return tracks;
  } catch (error) {
    console.log("getTracksByPlaylist error: " + error);
  }
};

export const addTrackToPlaylist = async (path, filename, playlistId) => {
  try {
    console.log("addTrackToPlaylist");
    const dbURL = new URL("http://localhost:5001");
    dbURL.pathname = "/tracks/addTrackToPlaylist";
    const response = await fetch(dbURL.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: path,
        filename: filename,
        playlistId: playlistId,
      }),
    });
    if (!response.status === 201 ) throw new Error("Playlist creation error");
    const data = await response.json();
    if (!data) throw new Error("Playlist creation error");
    return data;
  } catch (error) {
    console.log("addTrackToPlaylist error: " + error);
  }
};

export const removeTrackFromPlaylist = async (trackId, playlistId) => {
  try {
    const dbURL = new URL("http://localhost:5001");
    dbURL.pathname = "/tracks/removeTrackFromPlaylist";
    const response = await fetch(dbURL.href, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trackId:trackId,
        playlistId: playlistId,
      }),
    });
    if (!response.status === 201 ) throw new Error("Playlist creation error");
    const deleted = await response.json();
    if (deleted === 0) throw new Error("Playlist creation error");
    return deleted;
  } catch (error) {
    console.log("removeTrackFromPlaylist error: " + error);
  }
};
