var secretNum = parseInt(Math.random() * 100);
console.log(secretNum);
var i = 0;

$(document).ready(function() {
  $("button").on("click", function(){
    var userGuess = $("#guess").val();
    alert ($("#guess").val());



    // var guessNum = parseInt($("#guess").val());
    if (userGuess > 100 || userGuess < 0) {
      $("#feedback").text("Please guess a number between 0 and 100");
      return 0;
    }

    if (userGuess < secretNum) {
      $("#feedback").text("Your guess is too low.");
    }
    else if (userGuess > secretNum) {
      $("#feedback").text("Your guess is too high.");
    }
    else {
      $("#feedback").text("You win!");
      return 0;
    }
    if (i >= 6) {
      $("#feedback").text("You lose!");
      return 0;
    }
    if (i <= 2) {
      $("#guess").addClass("color");
    }
    if (i >= 4) {
      $("#feedback").addClass("red");
    }
    // userGuess = $("#guess").val();
    $("#appendages").append(userGuess + "," + " ").text();
    $("#guess").val("");
    return i++;
  });
});




    // $("#answer").show().text(userQ);
