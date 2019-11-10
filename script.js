alert("This is my test.");
prompt("What do you think of this test?");

// Play audio
function playSong() {
    moveAlong.play();
}

// Stop audio
function pauseSong() {
    moveAlong.pause();
}

// code below another way to play song?
// document.getElementById("moveAlong").play();

/* var javascript = "This is Javascript";
function javascript(i=0; i<=5; i++) {
    document.write(javascript);
}
*/

// This code works to produce text in own paragraph.
function javascript() {
    document.getElementById("javascript").innerHTML = "This is JavaScript";
}

function countdownHover() {
    var countdown = new Audio("countdown.wav");
    countdown.play();
}

function bombSound() {
    var bomb = new Audio("huge-bomb.wav");
    bomb.play();
}

function redButton() {
    alert("Don't you know not to press the red button!");
}


/*
function javascript() {
    var js = "This is javascript";
    
}
*/


// This code checks if input is between 0 and 10. If it is code will run (in this case addition), if not error message occurs. 
function number() {
    var myNumber = document.getElementById('inputNumber').value;
    if (myNumber >= 0 || myNumber <= 10) {
        var result = myNumber + 5;
        document.write(result).innerHTML;
    } else {
        document.write("Please input a number between 0 and 10.");
    }
}
