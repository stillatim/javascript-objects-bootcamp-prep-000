var playlist = {
  fugazi: "repeater"
  }
  
  function updatePlaylist(playlist, a, b) {
    playlist[a] = b; 
    return playlist
  }
  
  function removeFromPlaylist(playlist, a) {
    return delete playlist.a; 
      }
  