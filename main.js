// Get element from Html
const btn = document.getElementById("btn"),
    layerTop = document.getElementById("top"),
    layerBottom = document.getElementById("bottom"),
    cont = document.getElementById("container"),
    audio = new Audio('./file.m4a')



// what to do on click
btn.addEventListener("click", (e) => {
    layerTop.style.display = "none"
    layerBottom.style.display = "block";
    
    // You MUST interact with page to make audio play!!!     

    // check if user scrolled at the bottom if page
    window.onscroll = function () {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
            audio.play()
        }
    };
    
})




