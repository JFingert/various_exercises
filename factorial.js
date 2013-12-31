function factorializer(num) { 

	product = 1;

	for (var i = 2; i <= num; i++){
		product *= i;
	}
	return product;
}

var answer = prompt("Enter ye number to find its factorial");
	
factorializer(answer);