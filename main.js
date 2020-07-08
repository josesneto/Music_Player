function pauseMusic() {
    player = document.getElementById("player");
    isPlaying = false;
    player.onplaying = function () {
        isPlaying = true;
        console.log('playing');
    }
    player.onpause = function () {
        isPlaying = false;
        console.log('not playing');
    }
    if (isPlaying) {
        player.pause();
        console.log('pause');
    }
    else {
        player.play();
        console.log('play');
    }
}