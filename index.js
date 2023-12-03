// document.querySelectorAll("button")[0].addEventListener("click",function(){
//         var snd = new Audio ("sounds/tom-1.mp3");
//         snd.play()//plays the sound

// });

// document.querySelectorAll("button")[1].addEventListener("click",function(){
//     var snd = new Audio ("sounds/tom-2.mp3");
//     snd.play()//plays the sound

// });
// document.querySelectorAll("button")[2].addEventListener("click",function(){
//     var snd = new Audio ("sounds/tom-3.mp3");
//     snd.play()//plays the sound

// });
// document.querySelectorAll("button")[3].addEventListener("click",function(){
//     var snd = new Audio ("sounds/tom-4.mp3");
//     snd.play()//plays the sound

// });
// document.querySelectorAll("button")[4].addEventListener("click",function(){
//     var snd = new Audio ("sounds/kick-bass.mp3");
//     snd.play()//plays the sound

// });
// document.querySelectorAll("button")[5].addEventListener("click",function(){
//     var snd = new Audio ("sounds/snare.mp3");
//     snd.play()//plays the sound

// });
// document.querySelectorAll("button")[6].addEventListener("click",function(){
//     var snd = new Audio ("sounds/crash.mp3");
//     snd.play()//plays the sound

// });

var NumberofButton = document.querySelectorAll("button").length;

for (var i = 0; i < NumberofButton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var buttonInnerHTmL = this.innerHTML;
    makeSound(buttonInnerHTmL);
    buttonAnimation(buttonInnerHTmL);
  });
}
    document.addEventListener("keypress",function(event) {
        makeSound(event.key);  
        buttonAnimation(event.key);
});
function makeSound(key)
{

    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "j":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      case "k":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        default: console.log(buttonInnerHTmL);
    }
  }

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  document.querySelector("button").classList.add("pressed");
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}