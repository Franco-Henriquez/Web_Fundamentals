function login(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout"
    }
    else {
        element.innerText = "Login"
    }

}

function removeDefBtn(element) {
    element.remove();
}

function likeClick(element) {
    var someLikes = element.innerText;
    var currentLikes = someLikes.split(" ")[0]
    var currentLikes = parseInt(currentLikes) + 1
    element.innerText = currentLikes + " likes"
}