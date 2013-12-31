var http = require('http');
var url = require('url');
var say = require('say');

console.log("open http://localhost:8124/?text=hellohiyo");
console.log("press CTRL + C to quit.");
http.createServer(function(request, response) {
  var text = url.parse(request.url, true).query.text;
  if (text === undefined){
          text ="";
  }

  say.speak('Princess', text, function() {
    console.log("ok, I said ", text);
    
    response.writeHead(200, {});
    response.end("I said it.");
  });

}).listen(8124);