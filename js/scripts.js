//back-end logic
var symbols = ["I","V","X","L","C","D","M"];
var values = [1,5,10,50,100,500,1000];


console.log(values[2],symbols[2]);
function romanNumerals(userInput) {
if ((userInput < 1) || (userInput > 3999)) {
  alert("Please enter whole numbers between 1 and 3,999");
  return false;
} else if (values.includes(userInput)){
  var index = values.indexOf(userInput);
  return symbols[index];
} else {
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
