function greet(whatToSay) {
  return function(name) {
    console.log(whatToSay + " " + name);
  };
}

var sayYo = greet("Yo");
sayYo("taimur");

function buildFunctions() {
  var arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function() {
      console.log("i:", i);
    });
  }
  return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
