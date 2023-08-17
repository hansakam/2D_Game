var sonic = document.getElementById("boy");
idleImageNumber=1;
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


                        /* run Animation part */

runImageNumber = 1;
runAnimationNumber =0;

function runAnimation(){

    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11){
        runImageNumber = 1;
    }

    sonic.src="assests/img/png/run ("+runImageNumber+").png"

}

function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation,100);
    clearInterval(idleAnimationNumber);
}

                    /*     Jump Animationn Part      */


jumpImageNumber = 1;
jumpAnimationNumber = 0;
sonicMarginTop = 347;

function jumpAnimation(){

    jumpImageNumber = jumpImageNumber + 1;
    if (jumpImageNumber <= 6){
        sonicMarginTop = sonicMarginTop - 35;
        sonic.style.marginTop = sonicMarginTop + "px";
    }
    if (jumpImageNumber >= 7){
        sonicMarginTop = sonicMarginTop + 35;
        sonic.style.marginTop = sonicMarginTop + "px";
    }

    if (jumpImageNumber == 11){

        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }

sonic.src ="assests/img/png/jump ("+jumpImageNumber+").png"

}
function jumpAnimationStart(){

    clearInterval(idleAnimationNumber);
    runImageNumber = 0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation,100);
}




        /* Start the enter button press */

function keyCheck(event) {
  //  alert(event.which);
  /*  enter=13
     space = 32

     */


    var keyCode = event.which;

    if (keyCode == 13) {

        if (runAnimationNumber == 0) {
            runAnimationStart();

        }

           if (moveBackGroundAnimationId == 0){
               moveBackGroundAnimationId = setInterval(moveBackGround,100);

                 }
                /*      jumping Dragon      */

           if (boxAnimationId == 0){

              boxAnimationId = setInterval(boxAnimation,100);
           }

        }
                     /*     Jump Animationn Part      */


        if (keyCode ==32){
            if (jumpAnimationNumber == 0){
                jumpAnimationStart();
            }
            if (moveBackGroundAnimationId == 0){
                moveBackGroundAnimationId = setInterval(moveBackGround,100);

                  }

            /*      jumping Dragon      */

            if (boxAnimationId == 0){

                boxAnimationId = setInterval(boxAnimation,100);
            }

        }

}






                    /*Move background */

var backgroundImagePositionX =0;
var moveBackGroundAnimationId =0;

var score = 0;

function moveBackGround(){

    backgroundImagePositionX = backgroundImagePositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";

                                    /*  Add  to Score parts */

    score = score + 1;
    document.getElementById("score").innerHTML = score;
}




                   /*   createBoxes  */

//1040
boxMarginLeft = 1540;

function createBoxes(){

        for (var i=0 ;i<=10 ;i++){


    var box = document.createElement("div");
    box.className ="box";
    document.getElementById("background").appendChild(box);
    box.style.marginLeft = boxMarginLeft + "px";

    box.id = "box" + i;

    /*  badaka athara paratharaya wenas karanne */

    /*boxMarginLeft = boxMarginLeft + 500;*/

    if (i < 5){

        boxMarginLeft = boxMarginLeft + 2000;
    }
    if (i >= 5){

        boxMarginLeft = boxMarginLeft + 1000;

                 }

        }
}

var boxAnimationId = 0;

function boxAnimation(){

    for (var i=0; i<10 ;i++){
        var box = document.getElementById("box"+ i);

        var currentMarginLeft = getComputedStyle(box).marginLeft;

        var newMarginLeft = parseInt(currentMarginLeft) - 35;

        box.style.marginLeft = newMarginLeft + "px";

              /*  Create dead Animation  part */

        if (newMarginLeft>= -110 & newMarginLeft <= 100){

            if (sonicMarginTop > 300 ){
                clearInterval(boxAnimationId);

                clearInterval(runAnimationNumber);

                runAnimationNumber = -1;

                clearInterval(jumpAnimationNumber);
                jumpAnimationNumber = -1;

                clearInterval(moveBackGroundAnimationId);
                moveBackGroundAnimationId = -1;

                deadAnimatinNumber = setInterval(sonicDeadAnimation,100);



            }
        }
    }
}

                /*  Create dead Animation   */



deadImageNumber = 1;
boyDeadAnimationNumber = 0;
function sonicDeadAnimation(){

    deadImageNumber = deadImageNumber+1;

    if(deadImageNumber == 11){
        deadImageNumber =10;

        document.getElementById("end").style.visibility ="visible";
        document.getElementById("end Score").innerHTML = score;
    }
    boy.src = "assests/img/png/Dead ("+ deadImageNumber +").png"

}
function reload(){
    location.reload();
}















