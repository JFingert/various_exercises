function capMyFirstLetter (str) { 

	var array = str.split('');

	for (var i = 0; i <= array.length;) {

		if (array[i - 1] == " ") {
			array[i] = array[i].toUpperCase();
		} else if (i == 0) {
			array[i] = array[i].toUpperCase();
		}

		i++;
	}
	str = array.join('');
	return str;
}



capMyFirstLetter("hello joshua mr dinner for pickles and bagels");