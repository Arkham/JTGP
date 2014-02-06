////////////////////
// functional way //
////////////////////

var mammal = function (spec) {
  var that = {};

  that.getName = function () {
    return spec.name;
  };

  that.says = function () {
    return spec.saying || '';
  };

  return that;
};

var herb = mammal({
  name: "Herb the Mammal"
});

console.log(herb.getName());
console.log(herb.name); // this is undefined

////////////////////////////
// functional inheritance //
////////////////////////////

var cat = function (spec) {
  // initialize custom saying for cat
  spec.saying = spec.saying || 'meow';

  // just delegate the constructor to the mammal function
  var that = mammal(spec);

  // cat specific methods
  that.purrs = function (n) {
    var i, s = '';

    for (i = 0; i < n; i++) {
      if (s) {
        s += '-';
      }
      s += 'r';
    }
    return s;
  };

  that.getName = function () {
    return that.says() + " " + spec.name + " " + that.says();
  };

  return that;
};

var lena = cat({
  name: "Lena the Cat",
  saying: "Meowoeow"
})

console.log(lena.getName());
console.log(lena.purrs(10));
console.log(lena.says());

/////////////////
// using super //
/////////////////

Object.prototype.closure = function (name) {
  var that = this,
    method = that[name];

  return function () {
    return method.apply(that, arguments);
  }
};

var royalCat = function (spec) {
  spec.saying = spec.saying || 'Royeoww';

  var that = cat(spec),
    superGetName = that.closure('getName');

  that.getName = function () {
    return "Highness " + superGetName() + ", bow before me!"
  };

  return that;
};

var george = royalCat({
  name: "George VII"
});
console.log(george.getName());
