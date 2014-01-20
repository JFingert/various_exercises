var read = require('read');

// function factorializer(num) { 

// 	product = 1;

// 	for (var i = 2; i <= num; i++){
// 		product *= i;
// 	}
// 	return product;
// }

//var answer = prompt("Enter ye number to find its factorial");
read({ prompt: 'Enter Number.\n(enter \'exit\' to exit): '}, function factorializer (err, result) {

	var product = 1;


	if (result === "exit"){
		process.exit();
	}


	for (var i = 2; i <= result; i++){
		product *= i;
	}
	console.log(product);

	read({ prompt: 'Enter Number.\n(enter \'exit\' to exit): '}, factorializer);
});

//factorializer(answer);