var video=document.getElementById("video");
var progress=document.getElementById("progress");
var ran=document.getElementById("ran");
var all=document.getElementById("all");

all.onclick=function () {
    video.webkitRequestFullScreen();
}

//play
function play() {
    video.play();
    timer=setInterval("pro()", 100);
}

function pro() {
    //Refresh the progress bar
    progress.max=video.duration;
    progress.value=video.currentTime;
}

//stop
function pause() {
    //Make video pause
    video.pause();
    clearInterval(timer);
}

function forward() {
  video.currentTime += 2; // Press the button to increase the speed by 2s
}

function rewind() {
  video.currentTime -= 2; // Press the button and back off for 2s
}

//Original volume of stored video
var vol;
function mute() {
    if(video.muted==false){
        vol=ran.value;   //Current volume and save
        ran.value=0;     //The volume progress bar is set to 0
        video.muted=true;   //Set the video volume to 0
        document.getElementById('unmute').style.display = 'none'   //Hide the mute icon
        document.getElementById('mute').style.display = 'block'    //The volume icon displays
    }
    else{
        //If start explaining the muted state, restore the range value directly
        video.muted=false;   //Mute the video
        ran.value=vol;       //The volume progress bar is restored
        document.getElementById('unmute').style.display = 'block'
        document.getElementById('mute').style.display = 'none'
    }
}

//The progress bar is 100 full, but the video value ranges from 0 to 1
function setVolume() {
    video.volume=ran.value/100;  // Assign the volume bar value to the video volume by dividing it by 100
    if(ran.value == 0) {
      document.getElementById('unmute').style.display = 'none'
      document.getElementById('mute').style.display = 'block'
    }else {
      document.getElementById('unmute').style.display = 'block'
      document.getElementById('mute').style.display = 'none' //Volume icons conversion
    }
}