var mytrack = document.getElementById('mytrack'),
    playButton = document.getElementById('playButton'),
    muteButton = document.getElementById('muteButton'),
    duration = document.getElementById('fullDuration'),
    currentTime = document.getElementById('currentTime');

var barSize = 640;
var bar = document.getElementById('defaultBar');
var progressBar = document.getElementById('progressBar');

var audioBarSize = 100;
var audioBar = document.getElementById('audioBar');
var audioProgressBar = document.getElementById('currentVolume');


playButton.addEventListener('click', playOrPause, false);
muteButton.addEventListener('click', muteOrUnmute, false);
bar.addEventListener('click', clickedBarCondition, false);
audioBar.addEventListener('click', clickedAudioBar, false);


function playOrPause() {
    if(!mytrack.paused && !mytrack.ended) {
        pauseTrack();
    }else {
        playTrack();
    }
}
function playTrack() {
    mytrack.play();
    playButton.style.backgroundImage = 'url(img/pause.svg)';
    updateTime = setInterval(update, 500);
}
function pauseTrack() {
    mytrack.pause();
    playButton.style.backgroundImage = 'url(img/play.svg)';
    window.clearInterval(updateTime);
}

function muteOrUnmute() {
    if(mytrack.muted) {
        mytrack.muted = false;
        this.style.backgroundImage = 'url(img/volume.svg)';
    }else {
        mytrack.muted = true;
        this.style.backgroundImage = 'url(img/mute.svg)';

    }
}

var minutes = parseInt(mytrack.duration / 60);
var seconds = parseInt(mytrack.duration % 60);

duration.innerHTML = minutes + ':' + seconds;

function update() {
    if(!mytrack.ended) {
        var playedMinutes = parseInt(mytrack.currentTime / 60);
        var playdSeconds = parseInt(mytrack.currentTime % 60);
        if(playdSeconds < 10) {
            currentTime.innerHTML = playedMinutes + ':'+ '0' + playdSeconds;
        }else {
            currentTime.innerHTML = playedMinutes + ':' + playdSeconds;
        }
        var size = parseInt(mytrack.currentTime * barSize / mytrack.duration);
        progressBar.style.width = size + "px";
    }else {
        playButton.style.backgroundImage = 'url(img/play.svg)';
        window.clearInterval(updateTime);
    }
}
function clickedBar(e) {
    var mouseX = e.pageX - bar.offsetLeft;
    var newTime = mouseX * mytrack.duration / barSize;
    mytrack.currentTime = newTime;
    progressBar.style.width = mouseX + 'px';
}

function clickedBarCondition(e) {
    if(!mytrack.ended) {
        clickedBar(e);
        update(); 
    }else {
        clickedBar(e);
        playTrack();
    }   
}

function clickedAudioBar(e){
    var mouseX = e.pageX - audioBar.offsetLeft;
    audioProgressBar.style.width = mouseX + 'px';
    var newVolume = mouseX / 100 ;
    mytrack.volume = newVolume;
}