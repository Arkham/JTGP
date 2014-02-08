var parseNumber = /^-?\d+(?:\.\d*)?(?:e[-+]?\d+)?$/i;

var test = function (num) {
  return parseNumber.test(num);
};

var testStrings = [
  '1', 'number', '98.6', '-45.432', '--432.2', '132.21.86.100', '123.45E-67', '123.45D-67'
];

for (var i = 0, len = testStrings.length; i < len; i++) {
  console.log(testStrings[i], test(testStrings[i]));
}

