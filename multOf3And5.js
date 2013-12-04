 var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    var array = ["peanut", "butter", "and", "jelly"];
    var yo = array.slice();
    var mo = array.slice(2, -1);

    console.log(sum);
    console.log(mo);
    console.log(yo[3]);