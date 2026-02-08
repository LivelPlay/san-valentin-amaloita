const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

function moveNoButton() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 150 - 75;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    let size = parseFloat(getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (size + 3) + "px";
}

/* Se mueve al pasar el mouse */
noBtn.addEventListener("mouseenter", moveNoButton);

/* Se mueve también si intentan tocarlo en celular */
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener("click", () => {
    window.location.href = "si.html";
});
