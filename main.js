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
        console.log('toggled to isPlaying = ' + isPlaying);
    }
    
}

function nextMusic() {
    
    console.log('index' + i)
    if (isSleeping) {
        isSleeping = false;
        i++;
    }
    music = musicArray[i];
    if (i < musicArray.length-1) {
        i++;
    }
    else {
        i = 0;
    }
    console.log('choosen ' + music + i);
    chooseMusic(music);
}

function chooseMusic(musicname) {
    var autoplay = 'autoplay';
    if (!isPlaying) {
        autoplay = '';
    }
    playerBox = document.getElementById("playerBox");
    newPlayerBoxContent = "<audio id='player' src='musics/" + musicname + "' " + autoplay + "></audio>";
    console.log(newPlayerBoxContent);
    playerBox.innerHTML = newPlayerBoxContent;
}

function listMusics() {
    var element = document.getElementById("musicsList");
    content = " ";
    for (let i = 0; i < musicArray.length; i++) {
        music = musicArray[i];
        content = content + '<li>' + music + '</li>';
        console.log(music);
    }
    element.innerHTML = '<ul>' + content + '</ul>';
}

listMusics();