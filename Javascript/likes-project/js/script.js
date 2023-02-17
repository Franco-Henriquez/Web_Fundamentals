// function likeClick(likeButton) {
//     var currentLikeButton = likeButton;
//     var likeBtnElement = document.querySelector(currentLikeButton);
//     var currentVotes = likeBtnElement.innerHTML; 

//         console.log(currentLikeButton);
//         console.log(likeBtnElement);
//         console.log(currentVotes);

//     if (currentLikeButton == '#likes-1') {
//         likeBtnElement.innerHTML = +likeBtnElement.innerHTML +1;
//     } else if (currentLikeButton == '#likes-2') {
//         likeBtnElement.innerHTML = +likeBtnElement.innerHTML +1;
//     } else if (currentLikeButton == '#likes-3') {
//         likeBtnElement.innerHTML = +likeBtnElement.innerHTML +1;
//     }




//     // var currentLikes = parseInt(currentLikes) + 1

//     // var currentLikes = someLikes.split(" ")[0]
    
//     // element.innerText = currentLikes + " likes"
// }

function likeClick(id) {
    var like = document.querySelector(id);
    like.innerText++ /* the ++ both converts the innerText to an integer AND increments!!!!! */
}
