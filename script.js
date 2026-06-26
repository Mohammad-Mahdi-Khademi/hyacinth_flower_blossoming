const sparkles = document.querySelector(".sparkles");
const container = document.querySelector(".container");

function createSparkle() {

    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";
    const size = Math.random() * 6 + 3;
    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";
    sparkle.style.animationDuration =
        (Math.random() * 2 + 2) + "s";
    sparkle.style.animationDelay =
        Math.random() * 2 + "s";
    sparkles.appendChild(sparkle);
    setTimeout(() => {
        sparkle.remove();
    }, 5000);

}

setInterval(createSparkle, 180);

function createPetal() {
    const petal = document.createElement("div");
    petal.className = "falling-petal";
    petal.style.left =
        Math.random() * window.innerWidth + "px";
    petal.style.top = "-40px";
    const size =
        Math.random() * 14 + 14;
    petal.style.width = size + "px";
    petal.style.height = size + "px";
    petal.style.animationDuration =
        (Math.random() * 5 + 6) + "s";
    petal.style.animationDelay =
        Math.random() * 2 + "s";
    petal.style.transform =
        `rotate(${Math.random()*360}deg)`;
    document.body.appendChild(petal);
    setTimeout(() => {
        petal.remove();
    }, 12000);
}

setInterval(createPetal, 700);

window.addEventListener("load", () => {
    const message = document.querySelector(".message");
    setTimeout(() => {
        message.classList.add("show");
    }, 6500);
});



document.addEventListener("mousemove", e => {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
    document.body.appendChild(glow);

    setTimeout(() => {
        glow.remove();
    }, 800);

});

setInterval(() => {
    const flower = document.querySelector(".flower");

    flower.animate(
        [
            { transform: "translateY(0px) rotate(0deg)" },
            { transform: "translateY(-1.5px) rotate(-0.4deg)" },
            { transform: "translateY(0px) rotate(0.4deg)" },
            { transform: "translateY(-1px) rotate(0deg)" }
        ],
        {
            duration: 5000,
            iterations: 1,
            easing: "ease-in-out"
        }
    );
}, 5000);

window.addEventListener('click', () => {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
    }
}, { once: true });
