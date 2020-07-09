var isPlaying = false;
var musicArray = [
    'medicine-remix.mp3',
    'no-sleep.mp3'
];
var i = 0;
function togglePlayPause() {
    player = document.getElementById("player");
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
        isPlaying = false;
        toggleButtonText();
    }
    else {
        player.play();
        console.log('play');
        isPlaying = true;
        toggleButtonText();
    }
}

function toggleButtonText() {
    button = document.getElementById("playPauseButton");
    if (button.innerHTML == "PLAY") {
        button.innerHTML = "PAUSE";
    }
    else {
        button.innerHTML = "PLAY";
    }
}

function nextMusic() {
    playerBox = document.getElementById("playerBox");
    music = 'musics/' + musicArray[i];
    if (i < musicArray.length-1) {
        i++;
    }
    else {
        i = 0;
    }
    newPlayerBox = "<audio id='player' src='" + music + "' autoplay></audio>";
    console.log(music);
    playerBox.innerHTML = newPlayerBox;
}