const audioTrack = document.querySelector("audio");
const diskImg = document.querySelector("img");
const progerssFill = document.querySelector(".progerssFill");
const progerssContainer = document.querySelector(".progerssContainer");

const audios = [
    { index: 1, name: "Aradhyaa" },
    { index: 2, name: "BadAss" },
    {index: 3, name: "Bloody Sweet"},
    { index: 4, name: "En Roja neeya" },
    { index: 5, name: "Hayyodaa" },
    { index: 6, name: "Im Scared" },
    { index: 7, name: "Kangal yetho" },
    { index: 8, name: "Ramaiya Vasatavaiya" },
    { index: 9, name: "Unaku thaan" },
    { index: 10, name: "World of Mark antony" },
    { index: 11, name: "Yaarum Kaanatha" }
];
const playBtn = document.querySelector(".playBtn");
const ContainerplayBtn = document.querySelector(".audioControllers");
const audioContainer = document.querySelector(".audioContainer");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const title = document.querySelector(".title");
let indexLength = 0;
// audioTrack.play();

ContainerplayBtn.addEventListener("click", (e) => {
    if (e.target.classList.contains("playBtn")) {
        audioTrack.play();
        e.target.innerHTML = `<i class="fa fa-pause" aria-hidden="true"></i>`;
        console.log("Play");
        audioContainer.className = "audioContainer songPlay";
        e.target.className = "pauseBtn";
    } else if (e.target.classList.contains("pauseBtn")) {
        audioTrack.pause();
        e.target.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;
        console.log("pause");
        e.target.className = "playBtn";
        audioContainer.className = "audioContainer songPlay pause";
    }
});
const nextSong = () => {
    if (indexLength >= audios.length - 1) {
        indexLength = 0;
    } else {
        indexLength++;
    }
    Play();
};
const prevSong = () => {
    if (indexLength <= 0) {
        indexLength = audios.length - 1;
    } else {
        indexLength--;
    }
    Play();
};

function Play() {
    diskImg.src = "./img/" + audios[indexLength].index + ".jpg";
    audioTrack.src = "./audios/" + (indexLength + 1) + ".mp3";
    title.innerHTML = audios[indexLength].name;
    if (playBtn.classList.contains("playBtn")) {
        audioTrack.pause();
        playBtn.innerHTML = `<i class="fa fa-play" aria-hidden="true"></i>`;

        playBtn.className = "playBtn";
        audioContainer.className = "audioContainer";
        audioContainer.className = "audioContainer songPlay roate";
        setTimeout(() => {
            audioContainer.className = "audioContainer";
        }, 2000);
    } else {
        audioTrack.play();
        audioContainer.className = "audioContainer songPlay roate";
        setTimeout(() => {
            audioContainer.className = "audioContainer songPlay";
        }, 2000);
    }
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;

    const duration = audioTrack.duration;

    audioTrack.currentTime = (clickX / width) * duration;
}
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);
progerssContainer.addEventListener("click", setProgress);
audioTrack.addEventListener("ended", nextSong);
audioTrack.addEventListener("timeupdate", (e) => {
    const widthProgress = (e.target.currentTime * 100) / e.target.duration;
    progerssFill.style.width = widthProgress + "%";
});