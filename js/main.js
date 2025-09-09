const phrases = [
    " At Hammer Tech, we turn your vision into powerful digital solutions.",
    "Whether you're a startup, agency, or enterprise",
    "we craft websites, mobile apps, and design experiences that elevate your brand and drive results."
];

let i = 0;
let j = 0;
let isDeleting = false;
let speed = 100;

function typeLoop() {
    const currentPhrase = phrases[i];
    const display = document.getElementById("typing");

    if (isDeleting) {
        display.innerHTML = currentPhrase.substring(0, j--);
    } else {
        display.innerHTML = currentPhrase.substring(0, j++);
    }

    if (!isDeleting && j === currentPhrase.length + 1) {
        isDeleting = true;
        speed = 50;
        setTimeout(typeLoop, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % phrases.length;
        speed = 100;
    }

    setTimeout(typeLoop, speed);
}

window.onload = typeLoop;



