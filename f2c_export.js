var temperature = 29;




console.log(temperature + " degrees Fahrenheit is " +
            fahrenheitToCelsius(temperature) + " degrees Celsius");

console.log(temperature + " degrees Celsius is " + 
            celsiusToFahrenheit(temperature) + " degrees Fahrenheit");

console.log(fahrenheitToCelsius(95) + " degrees Celsius is a pretty hot day!");

console.log("Water boils at " + celsiusToFahrenheit(100) + " degrees Fahrenheit.");




function celsiusToFahrenheit (tempC) {
	var tempF = (1.8) * tempC + 32;
	return tempF;
}

function fahrenheitToCelsius (tempF) {
	var tempC = (tempF - 32) / 1.8;
	return tempC;
}




module.exports = celsiusToFahrenheit;


                    

