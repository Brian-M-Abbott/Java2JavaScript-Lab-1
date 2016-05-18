" use strict ";

var display = document.getElementById("display");

  function yourFunctionName (){
    display.innerHTML = "hello";
};

function printOneToTen () {
  var nums = "***Output***<br>"
  for(var i = 0; i <= 10; i++){
    nums = nums + i + "<br>";
  }
  display.innerHTML = nums;
};

function printPositiveOddNumbersLessThan20 () {
  var odds = "***Output***<br>"
  for(var i = 1; i <= 20; i+=2){
    odds = odds + i + "<br>";
  }
  display.innerHTML = odds;
};

function printSquareNumbersUpTo100 () {
  var squared = "***Output***<br>"
  for(var i = 1; i <= 10; i++){
    squared = squared + (i*i) + "<br>";
  }
  display.innerHTML = squared;
};

function printFourRandomNumbersUnder100 () {
  var randoms = "***Output***<br>"
  for(var i = 1; i <= 4; i++){
    randoms = randoms + Math.floor(Math.random()*100+1) + "<br>";
  }
  display.innerHTML = randoms;
};

function printEvenNumbersLessThanArgument () {
  var argument = prompt("What number would you like to go up to?")
  var evens = "***Output***<br>"
  for(var i = 0; i < argument; i+=2){
    evens = evens + i + "<br>";
  }
  display.innerHTML = evens;
};

function printPowersOfTwoLessThanArgument () {
  var argument = prompt("What number would you like to go up to?")
  var powers = "***Output***<br>"
  for(var i = 2; i <= Math.pow(2,argument); i*=2){
    powers = powers + i + "<br>";
  }
  display.innerHTML = powers;
};

function printAreWeThereYetLoop(){
  var argument = "";
  var text = "***Output***<br>";
  while(argument!== "Yes"){
    argument = prompt("Are we there yet?");
    text = text + "Are we there yet?<br>"
    text = text + argument +"<br>";
  }
  text = text + "Good";
  display.innerHTML = text;
}

function printPyramid(){
  var text = "***Output***<br>";
  for(var i = 1; i < 6;i++){
    for(var x = 0; x < i;x++){
      text = text + "*";
    }
    text = text +"<br>";
  }
  display.innerHTML = text;
}

function printTableSquare(){
  var text = "***Output***<br>";
  for(var i = 1; i <= 4;i++){
    for(var x = 1; x <= 4;x++){
      text = text + "   |   " + (x*i);
    }
    text = text +" | <br>";
  }
  display.innerHTML = text;
}

function printTableSquareWithArgument(){
  var argument = prompt("How many rows would you like in your square?");
  var text = "***Output***<br>";
  for(var i = 1; i <= argument;i++){
    for(var x = 1; x <= argument;x++){
      text = text + "   |   " + (x*i);
    }
    text = text +" | <br>";
  }
  display.innerHTML = text;
}
