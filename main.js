var isPlaying = false;
var musicArray = musicsDataJSON['musics'];
var i = 0;

function chooseMusic(musicObj) {
    let musicPath = musicObj["file"];
    let autoplay = 'autoplay';
    let playerBox = document.getElementById("player-box");
    if (!isPlaying) {
        autoplay = '';
    }
    updateMusicInfo(musicObj);
    let newPlayerBoxContent = "<audio id='player' src='musics/" + musicPath + "' " + autoplay + "></audio>";
    console.log(newPlayerBoxContent);                   // REM
    playerBox.innerHTML = newPlayerBoxContent;
}

function updateMusicInfo(musicObj) {
    let albumImgElement = document.getElementById("album-image");
    let musicNameElement = document.getElementById("music-name");
    let artistNameElement = document.getElementById("artist-name");
    let albumNameElement = document.getElementById("album-name");
    let albumImgPath = musicObj["album-image"];
    let musicName = musicObj["name"];
    let artistName = musicObj["artist"];
    let albumName = musicObj["album-name"];
    albumImgElement.innerHTML = "<img src='" + albumImgPath + "'/>";
    musicNameElement.innerHTML = "<h2>" + musicName + "</h2>";
    artistNameElement.innerHTML = "<h3>" + artistName + "</h3>";
    albumNameElement.innerHTML = "<h4>" + albumName + "</h4>";
}

function setNewCurrentTime() {
    let playerElement = document.getElementById("player");
    let musicTimePointerElement = document.getElementById("music-time");
    playerElement.currentTime = musicTimePointerElement.value;
    console.log("music time changed");                              // REM
}

function handleMusicTime() {
    let playerElement = document.getElementById("player");
    let musicTimePointerElement = document.getElementById("music-time");
    let currentTimeElement = document.getElementById("current-time");
    let durationElement = document.getElementById("duration");
    let currentTimeMinSecs = "0:00";
    let durationMinSecs = "0:00";
    let duration = Math.floor(playerElement.duration);
    let minutes = duration / 60;
    let seconds = (duration % 60).toFixed(0);
    if (seconds == "0") {
        seconds = "00";
    }
    let currentTimeMins = Math.floor((playerElement.currentTime / 60)).toFixed(0);
    let currentTimeSecs = Math.floor((playerElement.currentTime % 60)).toFixed(0);
    if (currentTimeSecs < 10) {
        currentTimeSecs = "0" + currentTimeSecs;
    }
    currentTimeMinSecs = currentTimeMins + ":" + currentTimeSecs;
    durationMinSecs = Math.floor(minutes) + ":" + seconds;
    musicTimePointerElement.min = 0;
    musicTimePointerElement.max = duration;
    musicTimePointerElement.value = playerElement.currentTime;
    currentTimeElement.innerHTML = currentTimeMinSecs;
    durationElement.innerHTML = durationMinSecs;
    if (currentTimeMinSecs == durationMinSecs && isPlaying) {
        nextMusic();
    }
}

function buttonToggle() {
    let buttonElement = document.getElementById('play-pause-icon');
    buttonElement.classList.toggle('fa-play-circle');
    buttonElement.classList.toggle('fa-pause-circle');
}

function togglePlayPauseState() {    
    buttonToggle();
    let playerElement = document.getElementById("player");
    if (playerElement.paused) {
        isPlaying = true;
        playerElement.play();
    }
    else {
        isPlaying = false;
        playerElement.pause();
    }
    console.log('toggled to isPlaying = ' + isPlaying);             // REM
}

function previousMusic() {
    console.log('index' + i)                                    // REM
    if (i > 0) {
        i--;
    }
    else {
        i = musicArray.length-1;
    }
    var music = musicArray[i];
    chooseMusic(music);
}

function nextMusic() {  
    console.log('index' + i)                                    // REM
    if (i < musicArray.length-1) {
        i++;
    }
    else {
        i = 0;
    }
    var music = musicArray[i];
    chooseMusic(music);
}

function listMusics() {
    var listElement = document.getElementById("musicsList");
    content = " ";
    for (let i = 0; i < musicArray.length; i++) {
        var music = musicArray[i]["file"];
        content = content + '<li>' + music + '</li>';
        console.log(music);                                         // REM !!!!!!!!!!!
    }
    listElement.innerHTML = '<ul>' + content + '</ul>';
}

setInterval(handleMusicTime, 500);

chooseMusic(musicArray[0]);

//listMusics();
