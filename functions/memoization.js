////////////////////
// no memoization //
////////////////////

var call_count = 0;

var fibonacci = function (n) {
  call_count += 1;
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

for (var i = 0; i <= 10; i++) {
  console.log(fibonacci(i));
}

console.log("not memoized called", call_count, "times");

//////////////////////
// with memoization //
//////////////////////

call_count = 0;

var fibonacci = (function() {
  var memo = [0, 1];

  var fib = function(n) {
    call_count += 1;

    if (typeof memo[n] !== 'number') {
      memo[n] = fib(n - 1) + fib(n - 2);
    }
    return memo[n];
  };

  return fib;
})();

for (var i = 0; i <= 10; i++) {
  console.log(fibonacci(i));
}

console.log("memoized called", call_count, "times");

//////////////
// memoizer //
//////////////

call_count = 0;

var memoizer = function(memo, formula) {
  var recur = function(n) {
    call_count += 1;

    if (typeof memo[n] !== 'number') {
      memo[n] = formula(recur, n);
    }

    return memo[n];
  };

  return recur;
}

var fibonacci = memoizer([0, 1], function(recur, n) {
  return recur(n - 1) + recur(n - 2);
});

for (var i = 0; i <= 10; i++) {
  console.log(fibonacci(i));
}

console.log("using memoizer", call_count, "times");

var factorial = memoizer([1, 1], function(recur, n) {
  return n * recur(n - 1);
});

for (var i = 0; i <= 10; i++) {
  console.log(factorial(i));
}
