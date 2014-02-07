////////////////////////////////////////////////////////
// arrays are objects with array-like characteristics //
////////////////////////////////////////////////////////

var empty = [];

var numbers = ['zero', 'one', 'two', 'three', 'four',
               'five', 'six', 'seven', 'eight', 'nine'];

console.log(empty[1]);
console.log(numbers[1]);

console.log(empty.length);
console.log(numbers.length);

// this object behaves similarly, except for the array methods like length
var numbers_object = {
  '0': 'zero',
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine'
}

console.log(numbers_object[0]);
console.log(numbers_object[3]);
console.log(numbers_object[5]);

// arrays can contain misc elements
var misc = [
  'string', 98.3, true, false, null, undefined,
  ['nested', 'array'], { object: true }, NaN,
  Infinity
]

for (var i = 0, len = misc.length; i < len; i++) {
  console.log(i, misc[i]);
}

// length counts from the last element index
var myAry = [];
console.log(myAry.length);

myAry[1000] = 'THOUSAND';
console.log(myAry.length);

// delete leaves a hole in the array
var deleteMe = [0,1,2,3,4,5];
console.log(deleteMe);

delete(deleteMe[2]);
console.log(deleteMe);

deleteMe.splice(2,1);
console.log(deleteMe);

deleteMe.splice(2, 0, 2);
console.log(deleteMe);

// typeof array is object WAT
console.log(typeof []);

var isArray = function (value) {
  return Object.prototype.toString.apply(value) === '[object Array]';
};

console.log(isArray([]));
console.log(isArray({}));
