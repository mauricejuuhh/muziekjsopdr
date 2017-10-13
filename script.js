var MusicPlayer = document.getElementById("MusicPlayer");

function play() {
MusicPlayer.play();
}

function stop() {
MusicPlayer.pause();
MusicPlayer.currentTime = 0;
}
