Function.prototype.curry = function() {
  var slice = Array.prototype.slice,
    args = slice.apply(arguments),
    that = this;

  return function() {
    return that.apply(null, args.concat(slice.apply(arguments)));
  }
}

var add = function(a, b) {
  return a + b;
}

var multiply = function (a, b) {
  return a * b;
}

var addOne = add.curry(1);
console.log(addOne(6));
// 7

var multiplyEight = multiply.curry(8);
console.log(multiplyEight(6));
// 48
