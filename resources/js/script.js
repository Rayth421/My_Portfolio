alert("Hello! JavaScript is working!");
function openFullscreen(imgElement) {
    const fullscreenDiv = document.getElementById("fullscreen-view");
    const fullscreenImg = document.getElementById("fullscreen-img");
    
    // Set the image source to the clicked image
    fullscreenImg.src = imgElement.src;
    
    // Show the fullscreen view
    fullscreenDiv.classList.add("fullscreen-active");
    fullscreenDiv.classList.remove("fullscreen-hidden");
}

function closeFullscreen() {
    const fullscreenDiv = document.getElementById("fullscreen-view");
    
    // Hide the fullscreen view
    fullscreenDiv.classList.add("fullscreen-hidden");
    fullscreenDiv.classList.remove("fullscreen-active");
}