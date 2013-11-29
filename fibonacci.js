	var fibs = 0;
	var num = [1];


	for (var i = 0; i < 10;) {
		if (i < 1){
			fibs = num[0];
			num.push(fibs);
		} else if (i === 2) {
			fibs = num[1] + num[0];
			num.push(fibs);
		} else if (i > 2) {
			fibs = num[i - 2] + num[i - 1];
			num.push(fibs);
		}
		console.log(num);
		i++;
	}