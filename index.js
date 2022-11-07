import { dog } from "./dogs.js"
import { dogs } from "./data.js"

const likeBtn = document.getElementById("like")
const noBtn = document.getElementById("dislike")
const likeImg = document.getElementById("like-img")
const noImg = document.getElementById("no-img")
let count = 0;
let displayDog = new dog(dogs[count])

//event handler for hover (try to make it short!)
document.addEventListener("mouseover", function (e) {
    if (!displayDog.hadBeenSwiped) {
        if (e.target.id === likeBtn.id || e.target.id === likeImg.id) {
            document.getElementById("badge-like").style.display = "block";
        } else {
            document.getElementById("badge-like").style.display = "none";
        }
        if (e.target.id === noBtn.id || e.target.id === noImg.id) {
            document.getElementById("badge-no").style.display = "block"
        }
        else {
            document.getElementById("badge-no").style.display = "none";
        }
    }
})

document.addEventListener("click", function (e) {
    if (!displayDog.hadBeenSwiped) {
        if (e.target.id === likeBtn.id || e.target.id === likeImg.id) {
            displayDog.hasBeenLiked = true;
            displayDog.hadBeenSwiped = true;
            document.getElementById("badge-like").style.display = "block"
            setTimeout(changeDisplay, 500)
        }
        else if (e.target.id === noBtn.id || e.target.id === noImg.id) {
            displayDog.hadBeenSwiped = true;
            document.getElementById("badge-no").style.display = "block"
            setTimeout(changeDisplay, 500)
        }
    }
})

function renderDog() {
    document.getElementById("dog-info").innerHTML = displayDog.setDogHTML()
}

function changeDisplay() {
    document.getElementById("badge-no").style.display = "none"
    document.getElementById("badge-like").style.display = "none"
    count++
    if (count < dogs.length) {
        displayDog = new dog(dogs[count])
        renderDog()
    } else {
        document.getElementById("dog-info").innerHTML =
            `<h1 class ="last-message">
             There are no more 🐶 around your area!
        </h1>
        `
    }
}
renderDog()
