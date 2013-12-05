function sumTimes (x, y, z) {
	return (x + y) * z;
}

//these two are the same!!!
console.log(sumTimes(1, 2, 3)); //9
console.log(sumTimes.apply(null, [1, 2, 3])); //9

//Bindage

multiplyBySix = sumTimes.bind(null, 2, 4); //2 is x, 4 is y

console.log(multiplyBySix(12)); //12 goes in as z

