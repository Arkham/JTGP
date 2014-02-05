/////////////////////////////
// new operator substitute //
/////////////////////////////

Function.prototype.new = function () {
  var that = Object.create(this.prototype);

  var other = this.apply(that, arguments);

  return (typeof other === 'object' && other) || that;
}

var Person = function (name) {
  this.greet = function () {
    return "Hello, my name is " + name;
  };
}

var bob = Person.new("Robert");
console.log(bob.greet());

///////////////
// prototype //
///////////////

var Mammal = function(name) {
  this.name = name;
};

Mammal.prototype.getName = function () {
  return this.name;
};

Mammal.prototype.says = function () {
  return this.saying || '';
};

var herb = new Mammal("Herb the Mammal");
console.log(herb.getName());

/////////////////
// inheritance //
/////////////////

var Cat = function(name) {
  this.name = name;
  this.saying = "meow";
};

Cat.prototype = new Mammal();

Cat.prototype.purrs = function (n) {
  var i, s = '';

  for (i = 0; i < n; i++) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }

  return s;
};

Cat.prototype.getName = function () {
  return this.says() + " " + this.name + " " + this.says();
};

var leo = new Cat("Leo");
console.log(leo.says());
console.log(leo.purrs(5));
console.log(leo.getName());

///////////////////////
// let's do it funky //
///////////////////////

Function.prototype.method = function(name, func) {
  if (!this.prototype.hasOwnProperty(name)) {
    this.prototype[name] = func;
    return this;
  }
};

Function.method('inherits', function(Parent) {
  this.prototype = new Parent();
  return this;
});

var Cat = (function(name) {
  this.name = name;
  this.saying = "Meow";
}).
  inherits(Mammal).
  method('purrs', function(n) {
    var i, s = '';

    for (i = 0; i < n; i++) {
      if (s) { s += '-'; }
      s += 'r';
    }

    return s;
  }).
  method('getName', function() {
    return this.says() + " " + this.name + " " + this.says();
  });

var lena = new Cat("Lenottera");

console.log(lena.says());
console.log(lena.purrs(10));
console.log(lena.getName());

