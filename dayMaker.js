
var exportArray = [];


var tomorrowMaker = function () {
	var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var date = new Date();
	for (var i=0; i < week.length; i++){
		if ((date.getDay() + i) <= 6){
			exportArray.push(week[date.getDay() + i]);
		} else if ((date.getDay() + i) == 7) {
			for (var k=0; k < date.getDay();) {
				 exportArray.push(week[k]);
				 k++;
			}
		}
	}
}

tomorrowMaker();
console.log(exportArray);