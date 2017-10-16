$(document).ready(function() {
  $("button").on("click", function(){
    var userQ = $("#question").val();
    alert ($("#question").val());
    $("#answer").show().text(userQ);
    $("#question").val("");

    // function generateAnswer() {
      var answers = ["Yup", "Fuhgeddaboudit", "Maybe", "Ask: What would Ruby do?", "Hell no", "Only if your mom would approve", "Only if there's a blue moon or eclipse"]
      var randomNum;
      var question = $("#question").val();
      randomNum = Math.floor(Math.random() * 8);
      $("#outputText").text(answers[randomNum]);
  });
  });
