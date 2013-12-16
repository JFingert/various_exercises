var irc = require('irc');

var client = new irc.Client('irc.freenode.net', 'MarblesBot', {
	channels: ['#~room']
});

client.addListener('message', function(from, to, message) {
	console.log(from + ' said ' + message + ' to ' + to);
	
	var result = (/^ping (.*)$/.exec(message));
		if (result) {
		client.say(to, "bot say " + result[1].toUpperCase()) + " ";
	}

	
	var resultTwo = (/^ping$/.exec(message));
		if (result) {
		client.say(to, "bot say pong " + /^(.*)/.exec(message) + "!!! " + result[1].toUpperCase());
	}