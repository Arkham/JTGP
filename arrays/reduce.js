Array.prototype.reduce = function (f, value) {
  for (var i = 0, len = this.length; i < len; i++) {
    value = f(this[i], value);
  }

  return value;
};

var superheroes = ['superman', 'iron man', 'spiderman', 'batman'];

var totalLength = superheroes.reduce(function (elem, acc) {
  return elem.length + acc;
}, 0);

console.log(totalLength);

var numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(numbers.reduce(function (elem, acc) {
  return elem + acc;
}, 0));

console.log(numbers.reduce(function (elem, acc) {
  return elem * acc;
}, 1));
