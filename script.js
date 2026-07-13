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

document.querySelectorAll(".flame").forEach(f=>{

f.style.opacity="0";

});

// Smoke

document.querySelectorAll(".flame").forEach(f=>{

const smoke=document.createElement("div");

smoke.className="smoke";

smoke.style.left=(f.getBoundingClientRect().left)+"px";

smoke.style.top=(f.getBoundingClientRect().top)+"px";

document.body.appendChild(smoke);

setTimeout(()=>{

smoke.remove();

},2000);

});

// Cake Confetti

confetti({

particleCount:250,

spread:180,

origin:{y:.65}

});

// Hero Page

setTimeout(()=>{

hideAll();

heroScreen.style.display="flex";

// Hero Confetti

const end=Date.now()+5000;

(function frame(){

confetti({

particleCount:8,

angle:60,

spread:80,

origin:{x:0}

});

confetti({

particleCount:8,

angle:120,

spread:80,

origin:{x:1}

});

if(Date.now()<end){

requestAnimationFrame(frame);

}

})();

},2500);

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
