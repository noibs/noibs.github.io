// SVG URLs
const svgURLs = [
    `data:image/svg+xml,<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="163" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="960" height="540" fill="%23FF6F61"></rect><g filter="url(%23blur1)"><circle cx="407" cy="178" fill="%23e09e0d" r="363"></circle><circle cx="557" cy="363" fill="%23FF6F61" r="363"></circle><circle cx="787" cy="112" fill="%23e09e0d" r="363"></circle><circle cx="128" cy="209" fill="%23e09e0d" r="363"></circle><circle cx="235" cy="505" fill="%23FF6F61" r="363"></circle><circle cx="839" cy="366" fill="%23e09e0d" r="363"></circle></g></svg>`, //Orange Gold & Salmon Pink
    `data:image/svg+xml,<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="163" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="960" height="540" fill="%2300CC99"></rect><g filter="url(%23blur1)"><circle cx="407" cy="178" fill="%236600FF" r="363"></circle><circle cx="557" cy="363" fill="%2300CC99" r="363"></circle><circle cx="787" cy="112" fill="%236600FF" r="363"></circle><circle cx="128" cy="209" fill="%236600FF" r="363"></circle><circle cx="235" cy="505" fill="%2300CC99" r="363"></circle><circle cx="839" cy="366" fill="%236600FF" r="363"></circle></g></svg>`, // Caribbean Green &  Electric Indigo
    `data:image/svg+xml,<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="163" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="960" height="540" fill="%23cc00aa"></rect><g filter="url(%23blur1)"><circle cx="407" cy="178" fill="%230066FF" r="363"></circle><circle cx="557" cy="363" fill="%23cc00aa" r="363"></circle><circle cx="787" cy="112" fill="%230066FF" r="363"></circle><circle cx="128" cy="209" fill="%230066FF" r="363"></circle><circle cx="235" cy="505" fill="%23cc00aa" r="363"></circle><circle cx="839" cy="366" fill="%230066FF" r="363"></circle></g></svg>`, // Red Violet & Brandeis Blue
    `data:image/svg+xml,<svg id="visual" viewBox="0 0 960 540" width="960" height="540" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><defs><filter id="blur1" x="-10%" y="-10%" width="120%" height="120%"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="163" result="effect1_foregroundBlur"></feGaussianBlur></filter></defs><rect width="960" height="540" fill="%238d2c82"></rect><g filter="url(%23blur1)"><circle cx="407" cy="178" fill="%23FCAF3C" r="363"></circle><circle cx="557" cy="363" fill="%238d2c82" r="363"></circle><circle cx="787" cy="112" fill="%23FCAF3C" r="363"></circle><circle cx="128" cy="209" fill="%23FCAF3C" r="363"></circle><circle cx="235" cy="505" fill="%238d2c82" r="363"></circle><circle cx="839" cy="366" fill="%23FCAF3C" r="363"></circle></g></svg>` // Light Orange & Warm Purple
];

// Function to pick a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Function to extract hex color from SVG URL
function extractHexColor(svgURL) {
    const hexColorMatch = svgURL.match(/cy="505".fill="%23([0-9A-Fa-f]{6})"/);
    return hexColorMatch ? `#${hexColorMatch[1]}` : '#FFF'; // Default to white if not found
}

// Function to update the background and loading screen color with a random SVG URL
function updateBackground() {
    const randomSvgURL = getRandomElement(svgURLs);
    console.log(randomSvgURL);

    // Extract the hex color from the SVG URL
    const hexColor = extractHexColor(randomSvgURL);

    // Update the loading screen color
    const loadingScreen = document.querySelector('.loading-screen');
    loadingScreen.style.backgroundColor = hexColor;

    // Update the loading screen styles with the extracted hex color
    const loadingScreenStyles = `
        .loading-screen {
            background-color: ${hexColor}; // Set the background color based on the extracted hex color
        }
    `;

    // Create a style element and append it to the head of the document
    const styleElement = document.createElement('style');
    styleElement.innerHTML = loadingScreenStyles;
    document.head.appendChild(styleElement);

    // Update the background
    document.body.style.backgroundImage = `url('${randomSvgURL}')`;
}

// Call the updateBackground function when the page loads
window.onload = updateBackground;
