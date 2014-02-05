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

var addThree = add.curry(3);
var addThreeAndFour = addThree.curry(4);

console.log(addThree(9));
console.log(addThreeAndFour());

var add = function(a, b) {
  if (typeof b === 'undefined') {
    return function(x) {
      return a + x;
    }
  } else {
    return a + b;
  }
}

console.log(add(3,5));
console.log(add(3)(5));

