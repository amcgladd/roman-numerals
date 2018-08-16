//back-end logic
var symbols = ["I","V","X","L","C","D","M","S"];
var values = [1,5,10,50,100,500,1000,5000];
var numerals = "";


function romanNumerals(userInput) {
if ((userInput < 1) || (userInput > 3999)) {
  alert("Please enter whole numbers between 1 and 3,999");
  return false;
} else if (values.includes(userInput)){
  var index = values.indexOf(userInput);
  return symbols[index];
} else {
  while (userInput > 0) {
   for (var i = 0; i < values.length; i++) {
     if (userInput < values[i]) {
       numerals += symbols[i-1];
       userInput -= values[i-1];
       console.log(i);
       break;
     }
}
   }  return numerals;
}
}





//front-end logic
$(document).ready(function() {
  $("#inputForm").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var result = "";
    result += romanNumerals(userInput);
    $("#finalOutput").append(result);
    $("#results").show();
  });
});
