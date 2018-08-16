//back-end logic
function romanNumerals(userInput) {
if ((userInput < 1) || (userInput > 3999)) {
  alert("Please enter whole numbers between 1 and 3,999");
  return false;
}
}





//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    console.log(userInput);
    var result = "";
    result += romanNumerals(userInput);
    $("#finalOutput").append(result);
    $("#results").show();
  });
});
