// javascript has function scope, and it hoists variables and functions
// so it is best to define all the variables at the top of the function.

var foo = function () {
  var a = 3, b = 5;

  var bar = function () {
    var c = 11;

    b = 7;

    console.log("inside bar", a, b, c);

    a += b + c;

    console.log("inside bar", a, b, c);
  }

  console.log("before bar", a, b);

  bar();

  console.log("after bar", a, b);
}

foo();
