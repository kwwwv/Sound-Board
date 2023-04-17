
var zIndex = 1000

function playSound(sound, image){

    var audio = new Audio("sounds&images/" + sound + ".mp3");
    var img = document.createElement("img")
    img.src = image
    img.id = "pop_up"
    img.style.zIndex++
    document.body.appendChild(img);
    img.classList.add("fade_Out")
    
    setTimeout(function () {
        var fadeOutImg = document.getElementById(img.id);
        document.body.removeChild(fadeOutImg);
    }, 1000);
    console.log(sound + ".mp3")
    
    audio.play()
}


