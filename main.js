var isSleeping = true;
var isPlaying = false;
var musicArray = [
    'no-sleep.mp3',
    'sunset-jesus.mp3',
    'face-to-face.mp3',
];
var i = 0;

function togglePlayPauseState() {
    if (isSleeping) {
        isSleeping = false;
        nextMusic();
        togglePlayPauseState();
    }
    else {
        button = document.getElementById("playPauseButton");
        player = document.getElementById("player");
        if (button.innerHTML == "PLAY") {
            button.innerHTML = "PAUSE";
            isPlaying = true;
            player.play();
        }
        else {
            button.innerHTML = "PLAY";
            isPlaying = false;
            player.pause();
        }
        console.log('toggled to isPlaying =' + isPlaying);
    }
    
}

function nextMusic() {
    var autoplay = 'autoplay';
    if (isSleeping) {
        isSleeping = false;
        i++;
    }
    if (!isPlaying) {
        autoplay = ''
    }
    playerBox = document.getElementById("playerBox");
    music = 'musics/' + musicArray[i];
    if (i < musicArray.length-1) {
        i++;
    }
    else {
        i = 0;
    }
    newPlayerBoxContent = "<audio id='player' src='" + music + "' " + autoplay + "></audio>";
    console.log(music);
    playerBox.innerHTML = newPlayerBoxContent;
}