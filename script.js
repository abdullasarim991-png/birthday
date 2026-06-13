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
function showHero() {

    hideAll();

    heroScreen.style.display = "flex";

    const duration = 5000;

    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 5,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 5,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    }());

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

dateScreen.style.display = "flex";
setInterval(() => {

const firework = document.createElement("div");

firework.innerHTML = "✨";

firework.style.position = "fixed";
firework.style.left = Math.random()*100 + "vw";
firework.style.top = Math.random()*100 + "vh";
firework.style.fontSize = (20 + Math.random()*30) + "px";
firework.style.zIndex = "999";

document.body.appendChild(firework);

firework.animate([
{
transform:"scale(0)",
opacity:1
},
{
transform:"scale(3)",
opacity:0
}
],
{
duration:1200
});

setTimeout(()=>{
firework.remove();
},1200);

},300);