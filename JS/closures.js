function greet(whatToSay) {
  return function(name) {
    console.log(whatToSay + " " + name);
  };
}

var sayYo = greet("Yo");
sayYo("taimur");

function buildFunctions() {
  var array = [];
  //it makes a difference if i use "let" vs. "var" in the loop for i.
  //i wonder why that is? it has to do with block scoping...
  for (var i = 0; i < 3; i++) {
    array.push(function() {
      console.log(i);
    });
  }
  return array;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();
