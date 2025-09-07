// Define the animation function
function animateBlueStripe() {
    let x = -20;
    let o = false;
    const blueStripe = document.querySelector('.blue-stripe');
    
    if (!blueStripe) {
        console.log("Blue stripe element not found");
        return;
    }
setInterval(() => {
    if (o == false ) {
    x = x + 1;
    setBlueTheme(blueStripe,x);
    }
    if (x == 50) {
    o = true;
    }
    if (x == -20) {
    o = false;
    }
    if (o == true ) {
    x = x - 1;
    setBlueTheme(blueStripe,x);
    }
    
}, 1);  // Remove the extra closing brace
}
// Define color theme functions

function setBlueTheme(element,x) {
let y = (x + 204).toString();
element.style.background = `linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(89, ${195+x}, ${242+x}) 25%, rgb(0, ${x+20}, ${y}) 50%, rgb(89, ${195+x}, ${242+x}) 75%, rgb(0, 0, 0) 100%)`;
}
// Main function - equivalent to your main() in Rust
function main() {
    animateBlueStripe();
}

// Call main when DOM is loaded
document.addEventListener('DOMContentLoaded', main);