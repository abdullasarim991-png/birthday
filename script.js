// =====================
// ELEMENTS
// =====================

const dateScreen = document.getElementById("dateScreen");
const passcodeScreen = document.getElementById("passcodeScreen");
const loadingScreen = document.getElementById("loadingScreen");
const envelopeScreen = document.getElementById("envelopeScreen");
const cakeScreen = document.getElementById("cakeScreen");
const heroScreen = document.getElementById("heroScreen");
const letterScreen = document.getElementById("letterScreen");
const galleryScreen = document.getElementById("galleryScreen");

const music = document.getElementById("bgMusic");
const display = document.getElementById("display");
const error = document.getElementById("error");

// =====================
// PASSCODE
// =====================

let enteredPass = "";
const correctPass = "2608";

// =====================
// SHOW PASSCODE
// =====================

function showPasscode() {
    hideAll();
    passcodeScreen.style.display = "flex";
}

// =====================
// DIGITS
// =====================

function addDigit(num) {

    if (enteredPass.length >= 4) return;

    enteredPass += num;

    let dots = "";

    for (let i = 0; i < enteredPass.length; i++) {
        dots += "● ";
    }

    display.innerHTML = dots;
}

function clearPass() {

    enteredPass = enteredPass.slice(0, -1);

    let dots = "";

    for (let i = 0; i < enteredPass.length; i++) {
        dots += "● ";
    }

    display.innerHTML = dots || "● ● ● ●";
}

// =====================
// CHECK PASS
// =====================

function checkPass() {

    if (enteredPass === correctPass) {

        error.innerHTML = "";

        hideAll();

        loadingScreen.style.display = "flex";

        if (music) {
            music.play().catch(() => {});
        }

        setTimeout(() => {

            hideAll();

            envelopeScreen.style.display = "flex";

        }, 4000);

    } else {

        error.innerHTML = "Wrong Passcode 😒";

        enteredPass = "";

        display.innerHTML = "● ● ● ●";
    }
}

// =====================
// ENVELOPE
// =====================

function openEnvelope() {

    hideAll();

    cakeScreen.style.display = "flex";
}

// =====================
// HERO
// =====================
function blowCandles(){

    document.querySelectorAll(".flame").forEach(flame=>{

        flame.style.transition=".8s";
        flame.style.opacity="0";
        flame.style.transform="scale(0)";

    });

    setTimeout(()=>{

        showHero();

    },1200);

}
function showHero() {

   function showHero() {

    hideAll();

    heroScreen.style.display = "flex";
    heroScreen.style.visibility = "visible";
    heroScreen.style.opacity = "1";

    // Confetti
    const duration = 7000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 20,
            angle: 120,
            spread: 120,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 20,
            angle: 60,
            spread: 120,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();
}
}
// =====================
// LETTER
// =====================

function showLetter() {

    hideAll();

    letterScreen.style.display = "block";

    window.scrollTo(0, 0);
}

// =====================
// GALLERY
// =====================

function showGallery() {

    hideAll();

    galleryScreen.style.display = "block";

    window.scrollTo(0, 0);
}

// =====================
// HIDE ALL
// =====================

function hideAll() {

    dateScreen.style.display = "none";
    passcodeScreen.style.display = "none";
    loadingScreen.style.display = "none";
    envelopeScreen.style.display = "none";
    cakeScreen.style.display = "none";
    heroScreen.style.display = "none";
    letterScreen.style.display = "none";
    galleryScreen.style.display = "none";
}

// =====================
// HEARTS
// =====================

setInterval(() => {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.zIndex = "999";
    heart.style.pointerEvents = "none";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 1
            },
            {
                transform: "translateY(-120vh)",
                opacity: 0
            }
        ],
        {
            duration: 7000
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 7000);

}, 800);

// =====================
// START
// =====================
function launchFireworks() {
    const colors = [
        "#ff4d6d",
        "#ff85a2",
        "#ffd166",
        "#ffffff",
        "#ff99cc"
    ];

    for (let i = 0; i < 18; i++) {
        const firework = document.createElement("div");
        firework.className = "firework";

        firework.style.left = Math.random() * window.innerWidth + "px";
        firework.style.top = Math.random() * (window.innerHeight * 0.6) + "px";

        firework.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);

        document.body.appendChild(firework);

        setTimeout(() => firework.remove(), 1200);
    }
}

function startCelebration() {
    launchFireworks();

    let interval = setInterval(launchFireworks, 900);

    setTimeout(() => clearInterval(interval), 7000);
}
