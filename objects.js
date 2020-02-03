var playlist = {
  fugazi: "repeater",
  slowdive: "orange"
  }
  
  function updatePlaylist(playlist, a, b) {
    playlist[a] = b; 
    return playlist
  }
  
  
var playlist = {
  fugazi: "repeater",
  slowdive: "orange"
}

  function removeFromPlaylist(playlist, artistName) {
    delete playlist.artistName; 
    return playlist
  }
  