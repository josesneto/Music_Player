function changeCurrentTime() {
    player = document.getElementById("player");
    musicTime = document.getElementById("music-time");
    player.currentTime = musicTime.value;
    console.log("music time changed");
}

function handleMusicTime() {
    player = document.getElementById("player");
    musicTime = document.getElementById("music-time");
    currentTimeDisplay = document.getElementById("current-time");
    durationDisplay = document.getElementById("duration");
    currentTimeMinSecs = "0:00";
    durationMinSecs = "0:00";
    duration = Math.floor(player.duration);
    minutes = duration / 60;
    seconds = (duration % 60).toFixed(0);
    if (seconds == "0") {
        seconds = "00";
    }
    currentTimeMins = Math.floor((player.currentTime / 60)).toFixed(0);
    currentTimeSecs = Math.floor((player.currentTime % 60)).toFixed(0);
    if (currentTimeSecs < 10) {
        currentTimeSecs = "0" + currentTimeSecs;
    }
    currentTimeMinSecs = currentTimeMins + ":" + currentTimeSecs;
    durationMinSecs = Math.floor(minutes) + ":" + seconds;
    // console.log(currentTime, durationMinSecs);

    musicTime.min = 0;
    musicTime.max = duration;
    musicTime.value = player.currentTime;
    currentTimeDisplay.innerHTML = currentTimeMinSecs;
    durationDisplay.innerHTML = durationMinSecs;
    if (currentTimeMinSecs == durationMinSecs) {
        nextMusic();
    }
}

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
    chooseMusic(music);
}

function chooseMusic(music) {
    musicPath = music["file"];
    var autoplay = 'autoplay';
    if (!isPlaying) {
        autoplay = '';
    }
    updateMusicInfo(music);
    playerBox = document.getElementById("player-box");
    newPlayerBoxContent = "<audio id='player' src='musics/" + musicPath + "' " + autoplay + "></audio>";
    console.log(newPlayerBoxContent);
    playerBox.innerHTML = newPlayerBoxContent;
}

function listMusics() {
    var element = document.getElementById("musicsList");
    content = " ";
    for (let i = 0; i < musicArray.length; i++) {
        music = musicArray[i]["file"];
        content = content + '<li>' + music + '</li>';
        console.log(music);
    }
    element.innerHTML = '<ul>' + content + '</ul>';
}

function updateMusicInfo(musicObj) {
    albumImgElement = document.getElementById("album-image");
    musicNameElement = document.getElementById("music-name");
    artistNameElement = document.getElementById("artist-name");
    albumNameElement = document.getElementById("album-name");
    albumImgPath = musicObj["album-image"];
    musicName = musicObj["name"];
    artistName = musicObj["artist"];
    albumName = musicObj["album-name"];
    albumImgElement.innerHTML = "<img src='" + albumImgPath + "' />";
    musicNameElement.innerHTML = "<h1>" + musicName + "</h1>";
    artistNameElement.innerHTML = "<h2>" + artistName + "</h2>";
    albumNameElement.innerHTML = "<h3>" + albumName + "</h3>";
}

var isSleeping = true;
var isPlaying = false;
musicArray = musicsDataJSON['musics'];

// var musicArray = [
//     'no-sleep.mp3',
//     'sunset-jesus.mp3',
//     'face-to-face.mp3',
// ];
var i = 0;

setInterval(handleMusicTime, 500);

chooseMusic(musicArray[0]);
listMusics();

// console.log(musics[0]['album-image']);
// updateMusicInfo(musics[0]);