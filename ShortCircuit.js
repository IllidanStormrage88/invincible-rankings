// Calculate the scaling constant using ACTUAL user screen width
const YOUR_SCREEN_WIDTH = 2560; // Your design screen width
const USER_SCREEN_WIDTH = window.innerWidth; // Get the actual user's screen width
const SCALE = USER_SCREEN_WIDTH / YOUR_SCREEN_WIDTH;

// Set CSS custom property
document.documentElement.style.setProperty('--scale', SCALE);

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
            x = x + 0.25; // Changed from 1 to 0.25
            setBlueTheme(blueStripe,x);
        }
        if (x == 50) {
            o = true;
        }
        if (x == -20) {
            o = false;
        }
        if (o == true ) {
            x = x - 0.25; // Changed from 1 to 0.25
            setBlueTheme(blueStripe,x);
        }
    }, 1);
}

// Define color theme functions  
function setBlueTheme(element,x) {
    let y = (x + 204).toString();
    element.style.background = `linear-gradient(to right, rgb(0, 0, 0) 0%, rgb(89, ${195+x}, ${242+x}) 25%, rgb(0, ${x+20}, ${y}) 50%, rgb(89, ${195+x}, ${242+x}) 75%, rgb(0, 0, 0) 100%)`;
}

// Main function
function main() {
    animateBlueStripe();
}

// Call main when DOM is loaded
document.addEventListener('DOMContentLoaded', main);


