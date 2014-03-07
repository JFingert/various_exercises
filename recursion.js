function factorial(n) {
  if (n < 0) {
    console.log("no negative numbers");
    return;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n -1);
}

factorial(-1);
factorial(5);


function guessNumber(number) {
  guess = prompt("Guess a number between 1 and 100");
	
  guess = +guess;

  if (guess === number) {
	return console.log("You got it! The number was " + number);
  }
    guessNumber(number)
}

guessNumber(10);

//recusive Fibonacci:
function recursiveFib(num) {
  if (num <= 2) {
    return 1;
  }	
  return recursiveFib(num - 1) + recursiveFib(num - 2);	
}

var fibonaccied = recursiveFib(32);

console.log(fibonaccied);