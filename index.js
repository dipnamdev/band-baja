
var num=document.querySelectorAll(".drum").length;

for(var i=0; i<num; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //  var char = this.innerHTML;
         makesound(this.innerHTML);
    });
}
document.addEventListener("keypress",function(dash){
makesound(dash.key);
})

function makesound(char){
    switch (char) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var budio=new Audio("sounds/tom-2.mp3");
            budio.play();
            break;
        case 's':
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case 'k':
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 'l':
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;

     }
}