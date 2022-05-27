let songIndex = 0;
var audio = new Audio("../projectImg/music/8BHAJAN _ SACHA RE SANT I JAYESH GANDHI -PRITI SAVLA GANDHI.mp3");
let masterPlay = document.getElementById('masterPlay');
let seekBar = document.getElementById('seekBar');
let gif = document.getElementById('gif');
let songInfo = Array.from(document.getElementsByClassName('song-info'));
let songPlay = Array.from(document.getElementsByClassName('songPlay'));
let title = document.getElementsByClassName('title');


let listSong = [
    { name: "Sacha Re Sant Maliya ...", filePath: "../projectImg/music/8BHAJAN _ SACHA RE SANT I JAYESH GANDHI -PRITI SAVLA GANDHI.mp3", coverPhoto: "../projectImg/2iAmaksharcover2.png", time: "3:15" },
    { name: "Sambandh Tamaro ...", filePath: "../projectImg/music/7Sambandh Taro (feat. Jayesh Gandhi).mp3", coverPhoto: "../projectImg/1iAmaksharcover1.png", time: "5:25" },
    { name: "Bhaji Le Bhagwan ...", filePath: "../projectImg/music/9Bhajan_ Bhaji Le Bhagwan I Singer _ Jayesh Gandhi.mp3", coverPhoto: "../projectImg/3iAmaksharcover3.png", time: "6:20" },
    { name: "Tari Dhun Lagi ...", filePath: "../projectImg/music/10BHAJAN _ TARI DHUNN  LAAGI  I  SINGER _ JAYESH GANDHI.mp3", coverPhoto: "../projectImg/4iAmaksharcover4.png", time: "4:37" },
    { name: "Samarpit Samarpit...", filePath: "../projectImg/music/11Bhajan _ Samarpit Samarpit (unplugged) I Singer _ Jayesh Gandhi.mp3", coverPhoto: "../projectImg/5iAmaksharcover5.png", time: "3:26" },
    { name: "Pachi Prabhuji Boliya...", filePath: "../projectImg/music/12iamAkshar 2022 #5 - Pachhi Prabhuji Boliya - with Lyrics (Watch in 4k).mp3", coverPhoto: "../projectImg/3iAmaksharcover3.png", time: "5:34" },
    { name: "Tane Haiya ma...", filePath: "../projectImg/music/13iamAkshar - Tane Haiya ma Padharavu re _ With Lyrics (Watch in 4K).mp3", coverPhoto: "../projectImg/5iAmaksharcover5.png", time: "5:34" }
]
function yourLib(){
    window.open("https://open.spotify.com/playlist/0HeOBeMjMJRTfVRZCCJsSI");
}
function jayeshGandhi(){
    window.open("https://open.spotify.com/playlist/37i9dQZF1E4oQKR0IxmdGp");
}

function divyangRay(){
    window.open("https://open.spotify.com/artist/7exaRUHjGMdwPUaZkvBJnb?si=vPsrCJqqSWyxEkePnRLW0Q&nd=1")
}

//play song via MasterPlay button;
function playSong() {
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = 1;
    } else {
        audio.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = 0;
    }
}

//Add name, song duration, cover dinamically;
songInfo.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName('img')[0].src = listSong[i].coverPhoto;
    element.getElementsByClassName('name')[0].innerText = listSong[i].name;
    element.getElementsByClassName('time')[0].innerText = listSong[i].time;
});

// seekbar change while playing song;

audio.addEventListener('timeupdate', () => {
    let progress = parseInt((audio.currentTime / audio.duration) * 100);
    seekBar.value = progress;
});

//we can change seekbar randomly and change song duration;

seekBar.addEventListener('change', () => {
    audio.currentTime = seekBar.value * audio.duration / 100;
})

//each songlist play button convert to pause and pause to play;

const makeAllPlay = () => {
    songPlay.forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

songPlay.forEach((element) => {
    element.addEventListener("click", (e) => {
        if (audio.paused || audio.currentTime <= 0) {
            makeAllPlay();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            gif.style.opacity = '1';
            audio.src = listSong[songIndex].filePath;
            audio.currentTime = 0;
            audio.play();
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
        }
        else {
            audio.pause();
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            gif.style.opacity = '0';
            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
        }
    })
})

//masterPrevious song & masterNext song;

previousSong = () => {

    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    gif.style.opacity = '1';
    audio.src = listSong[songIndex].filePath;
    audio.currentTime = 0;
    audio.play();
    songPlay[songIndex].classList.remove("fa-play-circle");
    songPlay[songIndex].classList.add("fa-pause-circle");
    songPlay[songIndex + 1].classList.remove("fa-pause-circle");
    songPlay[songIndex + 1].classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
}

nextSong = () => {
    if (songIndex >= listSong.length) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    gif.style.opacity = '1';
    audio.src = listSong[songIndex].filePath;
    audio.currentTime = 0;
    audio.play();
    songPlay[songIndex].classList.remove("fa-play-circle");
    songPlay[songIndex].classList.add("fa-pause-circle");
    songPlay[songIndex - 1].classList.remove("fa-pause-circle");
    songPlay[songIndex - 1].classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
}
