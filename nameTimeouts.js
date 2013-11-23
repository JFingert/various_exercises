		var ralph = {
			name: 'Ralph',
			speak: function () {
				console.log('My name is ' + this.name);
			}
		}

		var larry = {
			name: 'Larry',
			speak: function () {
				console.log('My name is ' + this.name);
			}
		}

		var charlie = {
			name: 'Charlie',
			speak: function (secondPerson) {
				console.log('Hello ' + secondPerson + ' My name is ' + this.name);
			}
		}

		setTimeout(function () {
			larry.speak();
		}, 1000);

		ralph.speak(); //ralph speaks first


// larrySpeaks() - invoking the function
// larrySpeaks - referencing the function, its just a variable name

setTimeout(larry.speak.bind(larry), 2000);
setTimeout(charlie.speak.bind(charlie, "Susie"), 1000);

