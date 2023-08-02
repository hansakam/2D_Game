var sonic = document.getElementById("boy");
idleImageNumber=0;
idleAnimationNumber=0;
function idleAnimation(){

    idleImageNumber = idleImageNumber + 1;

    if (idleImageNumber == 11){

        idleImageNumber = 1;
    }

sonic.src="assests/img/png/idle ("+idleImageNumber+").png";
}
function idleAnimationStart(){

    /* Setinterval use krnawa Animation eka start kranna*/
    idleAnimationNumber = setInterval(idleAnimation,200);

}