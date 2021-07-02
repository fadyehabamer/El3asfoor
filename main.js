// Get element from Html
const btn = document.getElementById("btn"),
    layerTop = document.getElementById("top"),
    layerBottom = document.getElementById("bottom"),
    cont = document.getElementById("container"),
    audio = new Audio('./file.m4a')

window.onscroll = function () {
    // console.log(2)
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        audio.play()
    }
};
// what to do on click
btn.addEventListener("click", (e) => {
    layerTop.style.display = "none"
    layerBottom.style.display = "block";

})




