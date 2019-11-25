alert("This is my test.");
prompt("What do you think of this test?");


//// Corrected audio player
//function initAudioPlayer() {
//        var currentSong = 0;
//        $("#audioPlayer")[0].src = $("#playlist li a")[0];
//        $("#playlist li a").click(function(e){
//            e.preventDefault();
//            $("#audioPlayer")[0].src = this;
//            $("#audioPlayer")[0].play();
//            $("#playlist li").removeClass("current-song");
//            currentSong = $(this).parent().index();
//            $(this).parent.addClass("current-song");
//        });
//
//        $("#audioPlayer")[0].addEventListener("ended", function(){
//            alert("hi");    
//        });
//    }
//
//$(document).ready(function() {
//   initAudioPlayer();
//})

/* Audio player source code for verification of mine
function audioPlayer(){
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e){
        e.preventDefault(); 
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#playlist li").removeClass("current-song");
            currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });
            
    $("#audioPlayer")[0].addEventListener("ended", function(){
        currentSong++;
        if(currentSong == $("#playlist li a").length)
                currentSong = 0;
        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}
*/

//// Audio player
function audioPlayer() {
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e){
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#playlist li").removeClass("current-song");
            currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });
    
    $("#audioPlayer")[0].addEventListener("ended", function(){
        currentSong++;
        if(currentSong == $("#playlist li a").length)
            currentSong = 0;
        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}

$(document).ready(function() {
    audioPlayer();
})


/*
// Play audio
function playSong() {
    moveAlong.play();
}

// Stop audio
function pauseSong() {
    moveAlong.pause();
}
*/

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
    var myNumber = Number(document.getElementById('inputNumber').value);
    if (myNumber >= 0 && myNumber <= 10) {
        var result = myNumber + 5;
        document.getElementById("myResult").textContent = result;
    } else {
        document.getElementById('myResult').textContent = "Please input a number between 0 and 10.";
    }
}
