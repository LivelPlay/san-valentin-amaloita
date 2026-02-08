document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".hearts");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heart.style.animationDuration = Math.random() * 3 + 4 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 7000);
    }

    setInterval(createHeart, 300);
});
