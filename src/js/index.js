const chapter = document.getElementById("chapter");
const playBtn = document.getElementById("play-pause");
const audio = document.getElementById("audio");
const returnBtn = document.getElementById("return");
const forwardBtn = document.getElementById("forward");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const btn05 = document.getElementById("btn05");
const btn1 = document.getElementById("btn1");
const btn15 = document.getElementById("btn15");
const btnVelocity = document.querySelectorAll("btn");

const chaptersNumber = 10;
let currentChapter = 1;

nextBtn.addEventListener("click", nextAudio);
prevBtn.addEventListener("click", prevAudio);

returnBtn.addEventListener("click", returnAudio);
playBtn.addEventListener("click", playOrPauseAudio);
forwardBtn.addEventListener("click", forwardAudio);

btn05.addEventListener("click", slowDownAudio);
btn1.addEventListener("click", normalAudio);
btn15.addEventListener("click", accelerateAudio);

function playOrPauseAudio() {
    audio.play();
    playBtn.classList.toggle("fa-circle-pause");
    if (playBtn.classList.contains("fa-circle-pause")) {
        audio.play();
    } else {
        audio.pause();
    }
}

function returnAudio() {
    audio.currentTime -= 10;
}

function forwardAudio() {
    audio.currentTime += 10;
}

function slowDownAudio() {
    audio.playbackRate = 0.5;
}

function normalAudio() {
    audio.playbackRate = 1;
}

function accelerateAudio() {
    audio.playbackRate = 1.5;
}

function nextAudio() {
    if (currentChapter === chaptersNumber) {
        currentChapter = 1;
    } else {
        currentChapter++;
    }

    chapter.innerHTML = `Capítulo ${currentChapter}`;
    audio.src = `./src/books/dom-casmurro/${currentChapter}.mp3`;
    playOrPauseAudio();
}

function prevAudio() {
    if (currentChapter === chaptersNumber - (chaptersNumber - 1)) {
        currentChapter = chaptersNumber;
    } else {
        currentChapter--;
    }

    chapter.innerHTML = `Capítulo ${currentChapter}`;
    audio.src = `./src/books/dom-casmurro/${currentChapter}.mp3`;
    playOrPauseAudio();
}
