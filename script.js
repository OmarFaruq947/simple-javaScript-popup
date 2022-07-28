var parent =document.querySelector(".modal-parent"),
btn = document.querySelector("button"),
X = document.querySelector(".X");



btn.addEventListener("click", appear);

function appear(){
    parent.style.display = "block"
}

X.addEventListener("click", disappearX);
function disappearX(){
    parent.style.display="none";
    section.style.filter = "blur(0px)";
}