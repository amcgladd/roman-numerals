$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    console.log(userInput);

    $("#finalOutput").append(userInput);
    $("#results").show();
  });
});
