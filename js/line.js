const line = document.getElementById("line");
let lineWidth = 0;
let direction = 1;

setInterval(() => {
    lineWidth += direction;
    line.style.width = lineWidth + "px";

    if (lineWidth >= window.innerWidth) {
        direction = -1;
    } else if (lineWidth <= 0) {
        direction = 1;
    }
}, 10);

line.addEventListener("click", (event) => {
    const computedStyle = window.getComputedStyle(line);
    const currentColor = computedStyle.backgroundColor;

    if (currentColor === "rgb(255, 0, 0)") {
        event.stopPropagation();
    }
});

setInterval(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    line.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}, 500);