var playlist = {
  fugazi: "repeater"
  }
  
  function updatePlaylist(playlist, a, b) {
    playlist[a] = b; 
    return playlist
  }
  
  function removeFromPlaylist(playlist, artistName) {
    delete playlist.artistName; 
    return playlist; 
  }
  