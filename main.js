var isSleeping = true;
var isPlaying = false;
var musicArray = [
    'no-sleep.mp3',
    'sunset-jesus.mp3',
    'face-to-face.mp3',
];
var i = 0;


function buttonToggle() {
    element = document.getElementById('play-pause-icon');
    element.classList.toggle('fa-play-circle');
    element.classList.toggle('fa-pause-circle');
}

function togglePlayPauseState() {
    if (isSleeping) {
        isSleeping = false;
        nextMusic();
        togglePlayPauseState();
    }
    else {    
        buttonToggle();
        button = document.getElementById("play-pause-button");
        player = document.getElementById("player");
        // if (button.innerHTML == "PLAY") {
            // button.innerHTML = "PAUSE";
        if (player.paused) {
            isPlaying = true;
            player.play();
        }
        else {
            // button.innerHTML = "PLAY";
            isPlaying = false;
            player.pause();
        }
        console.log('toggled to isPlaying = ' + isPlaying);
    }
    
}

function previousMusic() {
    
    console.log('index' + i)
    if (isSleeping) {
        isSleeping = false;
        i--;
    }
    if (i > 0) {
        i--;
    }
    else {
        i = musicArray.length-1;
    }
    music = musicArray[i];
    console.log('choosen ' + music + i);
    chooseMusic(music);
}

function nextMusic() {
    
    console.log('index' + i)
    if (isSleeping) {
        isSleeping = false;
        i++;
    }
    if (i < musicArray.length-1) {
        i++;
    }
    else {
        i = 0;
    }
    music = musicArray[i];
    console.log('choosen ' + music + i);
    chooseMusic(music);
}

function chooseMusic(musicname) {
    var autoplay = 'autoplay';
    if (!isPlaying) {
        autoplay = '';
    }
    playerBox = document.getElementById("player-box");
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