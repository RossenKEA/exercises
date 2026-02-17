const nextBtn = document.querySelector("#nextButton");

let progress = 0;
const duration = 5000;
const stepTime = 50;

const interval = setInterval(() => {
    progress += 1;

    nextBtn.style.background = `linear-gradient(
    to right,
    white ${progress}%,
    #c2c3ce ${progress}%
    )`;

if (progress >= 100) {
    clearInterval(interval);

    window.location.href = "next.html";
}
}, stepTime);

document.addEventListener("mousemove", fillButton);

function fillButton() {
    clearInterval(interval);
    nextBtn.style.background = "white";
}