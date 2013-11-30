function roadSign (text, color, shape) {
        this.text = text;
        this.color = color;
        this.shape = shape;
}

roadSign.prototype.manufacture = function () {
  var sen = " ";
  if (this.text == "Speed Limit"){
    sen = "It's a " + this.text + " sign, which is " + this.color + " and Nerdy.";
  } else{
        sen = "It's a " + this.text + " sign, which is " + this.color + " and " + this.shape;
    }
  return sen;
}

var yield = new roadSign ("Yield", "Yellow", "Triangular");
var stop = new roadSign ("Stop", "Red", "Octogonal");
var speedLimit = new roadSign ("Speed Limit", "White", "Square");
console.log(yield.manufacture());
console.log(stop.manufacture());
console.log(speedLimit.manufacture());
