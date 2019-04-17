// JavaScript Document


function myFunction() {
  var i = 1;
  var scores = 0;
  var testNum = prompt("Please enter how many grades to average:", "3");
  
  while(i<=testNum){
    var test = prompt("Please enter a test grade " + i + " :", "100");
    scores = parseInt(scores) + parseInt(test);
    i++;
  }
  
  txt = scores / testNum;
  document.getElementById("out").innerHTML = txt;
}