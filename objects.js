var playlist = {
  fugazi: "repeater"
  }
  
  function updatePlaylist(playlist, a, b) {
    playlist[a] = b; 
    return playlist
  }
  
  
var playlist = {
  fugazi: "repeater"
}

  function removeFromPlaylist(playlist, artistName) {
    delete playlist.artistName; 
  }
  