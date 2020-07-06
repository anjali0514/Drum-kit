var NoOfDrumButton=document.querySelectorAll(".drum").length;
for (var i=0;i<NoOfDrumButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick)
    function handleClick(){
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
}}
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    addAnimation(event.key);
})
function makeSound(key){
    switch (key){
        case "w":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom= new Audio("sounds/tom-1.mp3");
            tom.play();
            break;
        case "j":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default: alert("wrong key pressed");

}
}

function addAnimation(key){
    var animateButton=document.querySelector("."+ key);
    animateButton.classList.add("pressed");
    setTimeout(function(){
        animateButton.classList.remove("pressed");
    },100);

}