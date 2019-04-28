// JavaScript Document


function Tests() {
  // Create and gather variables
  var i = 1;
  var scores = 0;
  var testNum = prompt("Please enter, how many grades to average:", "3");
  // Array for given test scores 
  var testScores = [];
  
  // Adds all the tests
  while(i<=testNum){
    var test = prompt("Please enter, test grade " + i + " :", "100");
    testScores.push(parseInt(test));
    scores = parseInt(scores) + parseInt(test);
    i++;
  }
  
  // Average totals 
  avg = scores / testNum;
  
  // Output Info 
  document.getElementById("out").innerHTML = 'The ' + testNum + ' Scores inputed: ' + testScores;
  document.getElementById("out2").innerHTML = 'Grade average: ' + avg;

}

function Cipher() {
	// Create and gather variables.
  var output = '';
  var Cipher = prompt("Enter text, you wish to CaesarShift:", "Hello World");
  var key1 = prompt("Enter key, you wish to Shift by (can do + and - numbers):", "1");
  var key = parseInt(key1);
  
	// Go through the given word
	for (var i = 0; i < Cipher.length; i ++) {

		// Get the character and code of the letter
		var letter = Cipher.charAt(i);
		var lCode = Cipher.charCodeAt(i);

		// Changes Uppercase letters
		if ((lCode >= 65) && (lCode <= 90))
		  letter = String.fromCharCode(((lCode - 65 + key) % 26) + 65);

		// Changes Lowercase letters
		else if ((lCode >= 97) && (lCode <= 122))
		  letter = String.fromCharCode(((lCode - 97 + key) % 26) + 97);

		// Put Together as code changes letters
		output += letter;

	}

  // Outputs Status
  document.getElementById("out").innerHTML = 'Encrypted '+ ' \"' + Cipher + '\" ' + ' By ' + key + ' :';
  document.getElementById("out2").innerHTML = 'Result: ' + output;
	
}