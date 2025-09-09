// Animate the blue stripe with smooth back-and-forth motion
function animateBlueStripe() {
    let x = -20;
    let direction = 1; // 1 = forward, -1 = backward
    const blueStripe = document.querySelector('.blue-stripe');
    
    if (!blueStripe) {
        console.warn("Blue stripe element not found");
        return;
    }

    setInterval(() => {
        x += direction;

        // Reverse direction at bounds
        if (x >= 50 || x <= -20) {
            direction *= -1;
        }

        setBlueTheme(blueStripe, x);
    }, 10); // 10ms instead of 1ms → smoother + less CPU
}

// Apply the blue theme gradient based on x
function setBlueTheme(element, x) {
    const y = x + 204;
    element.style.background = `
        linear-gradient(
            to right,
            rgb(0, 0, 0) 0%,
            rgb(89, ${195 + x}, ${242 + x}) 25%,
            rgb(0, ${x + 20}, ${y}) 50%,
            rgb(89, ${195 + x}, ${242 + x}) 75%,
            rgb(0, 0, 0) 100%
        )
    `;
}

// Keep the design proportional (2560x1440 base)
function updateScale() {
    const wrapper = document.querySelector(".scale-wrapper");
    const content = document.querySelector(".scale-content");
    if (!wrapper || !content) return;

    const scaleX = wrapper.clientWidth / 2560;
    const scaleY = wrapper.clientHeight / 1440;
    const scale = Math.min(scaleX, scaleY);

    content.style.setProperty("--scale", scale);
}

// Main entry
function main() {
    animateBlueStripe();
    updateScale();
    window.addEventListener("resize", updateScale);
}

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', main);
