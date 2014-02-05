// remember that `arguments` isn't actually a real array

var sum = function() {
  var i, sum = 0;

  for (i = 0, len = arguments.length; i < len; i++) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));
// 55
